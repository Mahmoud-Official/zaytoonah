/**
 * Zaytoonah - Allergen Scanning App
 * Shared JavaScript utilities
 */

// ===== Dark Mode Management =====
const DarkMode = {
    storageKey: 'zaytoonah_darkMode',

    init() {
        // Check for saved preference or system preference
        const saved = localStorage.getItem(this.storageKey);

        if (saved !== null) {
            this.set(saved === 'true');
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            this.set(true);
        }

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (localStorage.getItem(this.storageKey) === null) {
                this.set(e.matches);
            }
        });

        // Set up toggle button if it exists
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
            this.updateIcon();
        }
    },

    set(isDark) {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem(this.storageKey, isDark);
        this.updateIcon();
    },

    toggle() {
        const isDark = document.documentElement.classList.contains('dark');
        this.set(!isDark);
    },

    updateIcon() {
        const toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('.material-icons-round');
            if (icon) {
                const isDark = document.documentElement.classList.contains('dark');
                icon.textContent = isDark ? 'light_mode' : 'dark_mode';
            }
        }
    }
};

// ===== Allergen Profile Management =====
const AllergenProfile = {
    storageKey: 'zaytoonah_profile',

    get() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : {};
    },

    set(profile) {
        localStorage.setItem(this.storageKey, JSON.stringify(profile));
    },

    hasAllergen(allergenId) {
        const profile = this.get();
        return profile.hasOwnProperty(allergenId);
    },

    getSeverity(allergenId) {
        const profile = this.get();
        return profile[allergenId] || null;
    },

    addAllergen(allergenId, severity = 'moderate') {
        const profile = this.get();
        profile[allergenId] = severity;
        this.set(profile);
    },

    removeAllergen(allergenId) {
        const profile = this.get();
        delete profile[allergenId];
        this.set(profile);
    },

    getAllergens() {
        return Object.keys(this.get());
    }
};

// ===== Scan History Management =====
const ScanHistory = {
    storageKey: 'zaytoonah_history',
    maxItems: 50,

    get() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    },

    add(entry) {
        const history = this.get();

        // Add timestamp if not present
        if (!entry.timestamp) {
            entry.timestamp = new Date().toISOString();
        }

        // Add unique ID if not present
        if (!entry.id) {
            entry.id = Date.now();
        }

        // Add to beginning
        history.unshift(entry);

        // Limit size
        if (history.length > this.maxItems) {
            history.pop();
        }

        localStorage.setItem(this.storageKey, JSON.stringify(history));
        return entry;
    },

    getById(id) {
        const history = this.get();
        return history.find(item => item.id === id);
    },

    clear() {
        localStorage.removeItem(this.storageKey);
    },

    getRelativeTime(timestamp) {
        const now = new Date();
        const date = new Date(timestamp);
        const diffMs = now - date;
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHour = Math.floor(diffMin / 60);
        const diffDay = Math.floor(diffHour / 24);

        if (diffSec < 60) return 'Just now';
        if (diffMin < 60) return `${diffMin} min${diffMin > 1 ? 's' : ''} ago`;
        if (diffHour < 24) return `${diffHour} hour${diffHour > 1 ? 's' : ''} ago`;
        if (diffDay === 1) return 'Yesterday';
        if (diffDay < 7) return `${diffDay} days ago`;

        return date.toLocaleDateString();
    }
};

// ===== Navigation Utilities =====
const Navigation = {
    currentPage: null,

    init() {
        // Determine current page from URL
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        this.currentPage = filename.replace('.html', '');

        // Highlight active nav item
        this.updateActiveNav();
    },

    updateActiveNav() {
        document.querySelectorAll('.nav-item').forEach(item => {
            const href = item.getAttribute('href') || '';
            const page = href.replace('.html', '').replace('./', '');

            if (page === this.currentPage || (page === 'index' && this.currentPage === '')) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    },

    goTo(page) {
        window.location.href = page;
    },

    goBack() {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            this.goTo('index.html');
        }
    }
};

// ===== Toast Notifications =====
const Toast = {
    container: null,

    init() {
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.style.cssText = `
                position: fixed;
                bottom: 6rem;
                left: 50%;
                transform: translateX(-50%);
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(this.container);
        }
    },

    show(message, type = 'info', duration = 3000) {
        this.init();

        const toast = document.createElement('div');
        toast.style.cssText = `
            padding: 0.75rem 1.5rem;
            background: ${type === 'success' ? 'var(--severity-low)' : type === 'error' ? 'var(--severity-high)' : 'var(--surface)'};
            color: ${type === 'info' ? 'var(--text-primary)' : 'white'};
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-lg);
            margin-top: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
            opacity: 0;
            transform: translateY(1rem);
            transition: all 0.3s ease;
            pointer-events: auto;
        `;
        toast.textContent = message;

        this.container.appendChild(toast);

        // Trigger animation
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateY(0)';
        });

        // Remove after duration
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(1rem)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
};

// ===== Utility Functions =====
const Utils = {
    // Debounce function for search inputs
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Format date
    formatDate(date) {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    },

    // Check if element is in viewport
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Copy text to clipboard
    async copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            Toast.show('Copied to clipboard!', 'success');
            return true;
        } catch (err) {
            console.error('Failed to copy:', err);
            return false;
        }
    }
};

// ===== Allergen Data =====
const AllergenData = {
    allergens: [
        { id: 'peanuts', name: 'Peanuts', keywords: ['peanut', 'peanuts', 'groundnut', 'groundnuts', 'arachis'] },
        { id: 'dairy', name: 'Dairy / Lactose', keywords: ['milk', 'dairy', 'lactose', 'cream', 'cheese', 'butter', 'whey', 'casein'] },
        { id: 'gluten', name: 'Gluten (Wheat, Rye)', keywords: ['gluten', 'wheat', 'rye', 'barley', 'oats', 'spelt'] },
        { id: 'tree-nuts', name: 'Tree Nuts', keywords: ['almond', 'hazelnut', 'walnut', 'cashew', 'pecan', 'pistachio', 'macadamia', 'brazil nut'] },
        { id: 'shellfish', name: 'Shellfish', keywords: ['shrimp', 'crab', 'lobster', 'prawns', 'crayfish', 'shellfish'] },
        { id: 'soy', name: 'Soy', keywords: ['soy', 'soya', 'soybean', 'edamame', 'tofu', 'tempeh'] },
        { id: 'eggs', name: 'Eggs', keywords: ['egg', 'eggs', 'albumin', 'globulin', 'lysozyme', 'mayonnaise'] },
        { id: 'fish', name: 'Fish', keywords: ['fish', 'cod', 'salmon', 'tuna', 'anchovies', 'sardines'] },
        { id: 'sesame', name: 'Sesame', keywords: ['sesame', 'tahini', 'halvah'] }
    ],

    getById(id) {
        return this.allergens.find(a => a.id === id);
    },

    checkIngredients(ingredients, userAllergens) {
        const matches = [];
        const ingredientsLower = ingredients.toLowerCase();

        userAllergens.forEach(allergenId => {
            const allergen = this.getById(allergenId);
            if (allergen) {
                const found = allergen.keywords.some(keyword =>
                    ingredientsLower.includes(keyword.toLowerCase())
                );
                if (found) {
                    matches.push(allergen);
                }
            }
        });

        return matches;
    }
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    DarkMode.init();
    Navigation.init();
});

// Export for use in other scripts
window.Zaytoonah = {
    DarkMode,
    AllergenProfile,
    ScanHistory,
    Navigation,
    Toast,
    Utils,
    AllergenData
};
