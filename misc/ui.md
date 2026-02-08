profile page
<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zaytoonah - Allergy Profile Setup</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#6B8E23", // Olive Green based on the logo
                        "background-light": "#F3F4F6", // Gray-100
                        "background-dark": "#111827", // Gray-900
                        "surface-light": "#FFFFFF",
                        "surface-dark": "#1F2937",
                        "muted-light": "#9CA3AF",
                        "muted-dark": "#6B7280",
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                        body: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                    },
                },
            },
        };
    </script>
<style>.scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }* {
            -webkit-tap-highlight-color: transparent;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark font-body min-h-screen flex justify-center text-gray-900 dark:text-white transition-colors duration-200">
<div class="w-full max-w-md bg-background-light dark:bg-background-dark min-h-screen flex flex-col relative">
<header class="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 pt-12 pb-4 flex items-center justify-between">
<button aria-label="Go back" class="p-2 -ml-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
<span class="material-icons text-gray-600 dark:text-gray-300">arrow_back</span>
</button>
<div class="flex flex-col items-center">
<div class="flex items-center gap-2 mb-1">
<img alt="Zaytoonah Logo" class="w-6 h-6 object-contain rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhS_KL_yIvGMjop20dpyERRxU4iUDfr5-3RIRT2SEPYf-J0iaGS2pioNAqNALzoIc2L8OdLvdyRXafOgTnWK33OFvrA4CWgJsQ4vRCjzkNUeB3W-GihoC1ORMY3p-3Hz2LEbF2LL5OnhvGutveoM24iM_lkkduztcmkALb-4FUhrYS2EPoLQ67P5Wosj0r216CtjhgENNftEzhuRTOzv576kFlVpb7BWlEeI1o1ZI8nHarlyHFoJuM3pUDck2HEx8w2ULWfnDPnIE"/>
<span class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Zaytoonah</span>
</div>
<h1 class="text-lg font-bold text-gray-900 dark:text-white">Allergy Profile</h1>
</div>
<button aria-label="Help" class="p-2 -mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
<span class="material-icons text-gray-600 dark:text-gray-300">help_outline</span>
</button>
</header>
<main class="flex-1 px-4 py-6 pb-32">
<p class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                Select allergens to flag when scanning products. Assign a severity level to customize your alerts.
            </p>
<div class="relative mb-6">
<span class="absolute inset-y-0 left-0 flex items-center pl-3">
<span class="material-icons text-gray-400">search</span>
</span>
<input class="w-full py-3 pl-10 pr-4 bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="Search allergens..." type="text"/>
</div>
<div class="space-y-4">
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border-2 border-primary overflow-hidden transition-all duration-200">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-600 bg-primary flex items-center justify-center text-white">
<span class="material-icons text-sm font-bold">check</span>
</div>
<span class="font-semibold text-gray-900 dark:text-white">Peanuts</span>
</div>
<span class="text-xs font-medium text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded">High Severity</span>
</div>
<div class="px-4 pb-4 pt-0 border-t border-gray-100 dark:border-gray-700">
<p class="text-xs text-gray-500 dark:text-gray-400 mt-3 mb-2 uppercase tracking-wider font-semibold">Severity Level</p>
<div class="grid grid-cols-3 gap-2">
<button class="py-2 px-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Low</button>
<button class="py-2 px-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Moderate</button>
<button class="py-2 px-1 rounded-lg text-sm font-medium border-2 border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 transition-colors">High</button>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-500 flex items-center justify-center">
</div>
<span class="font-medium text-gray-700 dark:text-gray-300">Dairy / Lactose</span>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-primary dark:border-primary overflow-hidden transition-all duration-200">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-600 bg-primary flex items-center justify-center text-white">
<span class="material-icons text-sm font-bold">check</span>
</div>
<span class="font-semibold text-gray-900 dark:text-white">Gluten (Wheat, Rye)</span>
</div>
<span class="text-xs font-medium text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded">Moderate</span>
</div>
<div class="hidden px-4 pb-4 pt-0 border-t border-gray-100 dark:border-gray-700">
<p class="text-xs text-gray-500 dark:text-gray-400 mt-3 mb-2 uppercase tracking-wider font-semibold">Severity Level</p>
<div class="grid grid-cols-3 gap-2">
<button class="py-2 px-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400">Low</button>
<button class="py-2 px-1 rounded-lg text-sm font-medium border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">Moderate</button>
<button class="py-2 px-1 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600 text-gray-500 dark:text-gray-400">High</button>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-500 flex items-center justify-center">
</div>
<span class="font-medium text-gray-700 dark:text-gray-300">Tree Nuts</span>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-500 flex items-center justify-center">
</div>
<span class="font-medium text-gray-700 dark:text-gray-300">Shellfish</span>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
<div class="p-4 flex items-center justify-between cursor-pointer">
<div class="flex items-center gap-3">
<div class="w-5 h-5 rounded border border-gray-300 dark:border-gray-500 flex items-center justify-center">
</div>
<span class="font-medium text-gray-700 dark:text-gray-300">Soy</span>
</div>
</div>
</div>
</div>
</main>
<div class="fixed bottom-0 w-full max-w-md bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 p-4 pb-8 z-20">
<button class="w-full bg-primary hover:bg-opacity-90 active:scale-[0.98] transition-all text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 text-lg">
<span class="material-icons">save</span>
                Save Profile
            </button>
</div>
</div>
<div class="fixed top-4 right-4 z-50 hidden md:block">
<button class="bg-gray-800 text-white p-2 rounded-full shadow-lg" onclick="document.documentElement.classList.toggle('dark')">
<span class="material-icons">dark_mode</span>
</button>
</div>

</body></html>

scan history page

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zaytoonah - Scan History</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&amp;family=Quicksand:wght@500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#7C9A4B", // Olive green derived from the logo
                        "primary-dark": "#5A7235",
                        "background-light": "#F9FAFB",
                        "background-dark": "#121212",
                        "surface-light": "#FFFFFF",
                        "surface-dark": "#1E1E1E",
                        "safe-light": "#ECFDF5",
                        "safe-dark": "#064E3B",
                        "safe-text-light": "#047857",
                        "safe-text-dark": "#34D399",
                        "unsafe-light": "#FEF2F2",
                        "unsafe-dark": "#7F1D1D",
                        "unsafe-text-light": "#B91C1C",
                        "unsafe-text-dark": "#F87171",
                        "uncertain-light": "#FFFBEB",
                        "uncertain-dark": "#78350F",
                        "uncertain-text-light": "#B45309",
                        "uncertain-text-dark": "#FCD34D",
                    },
                    fontFamily: {
                        display: ["Quicksand", "sans-serif"],
                        body: ["DM Sans", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "12px",
                    },
                },
            },
        };
    </script>
<style>
        .safe-indicator {
            @apply bg-safe-light text-safe-text-light dark:bg-safe-dark dark:text-safe-text-dark;
        }
        .unsafe-indicator {
            @apply bg-unsafe-light text-unsafe-text-light dark:bg-unsafe-dark dark:text-unsafe-text-dark;
        }
        .uncertain-indicator {
            @apply bg-uncertain-light text-uncertain-text-light dark:bg-uncertain-dark dark:text-uncertain-text-dark;
        }::-webkit-scrollbar {
            width: 6px;
        }
        ::-webkit-scrollbar-track {
            background: transparent;
        }
        ::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 20px;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-body antialiased min-h-screen pb-20">
<header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
<div class="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
<div class="flex items-center space-x-2">
<div class="h-10 w-10 relative rounded-full overflow-hidden bg-white dark:bg-gray-800 p-1 ring-1 ring-gray-200 dark:ring-gray-700">
<img alt="Zaytoonah Logo - Cute olive character with glasses" class="h-full w-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwNGxVnO5ydWt85pgIdlQ1NUXQRpTsAN8_beBbi2Nlk_9kTSiAmEIYKH60dhtaKqEgH7DALRpnE0FRLozTb7X1Z4NOv8QY6nxbGqpB315l8hhp2Qs7xVFDxiuICAqm-H5Cr9fac6w1ZRIzvKO9lW6HxNk5IkGyk1ZW9SeuOPXwUZ7oZgDHq1EwnriAGF2p9_kuYkTOYl7l9A9lxr09DP8DldZaJIc0gNyhYUUx97-bOdkRm-hmLI7tiduZD0v8gB1V5sD5h3acZFU"/>
</div>
<h1 class="font-display font-bold text-xl text-primary tracking-tight">Zaytoonah</h1>
</div>
<button class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 transition-colors">
<span class="material-icons-round">settings</span>
</button>
</div>
</header>
<main class="max-w-md mx-auto px-4 pt-6">
<div class="mb-8">
<div class="bg-surface-light dark:bg-surface-dark p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden group">
<div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/10 dark:bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
<h2 class="text-lg font-display font-bold mb-2">Ready to shop?</h2>
<p class="text-sm text-gray-500 dark:text-gray-400 mb-6">Scan a barcode to instantly check for your allergens.</p>
<button class="w-full bg-primary hover:bg-primary-dark text-white font-medium py-4 px-6 rounded-xl shadow-lg shadow-primary/30 flex items-center justify-center space-x-2 transform active:scale-95 transition-all duration-200">
<span class="material-icons-round">qr_code_scanner</span>
<span class="text-lg">Start Scan</span>
</button>
</div>
</div>
<div class="flex items-center justify-between mb-4 overflow-x-auto pb-2 no-scrollbar">
<h3 class="font-display font-bold text-lg">History</h3>
<div class="flex space-x-1">
<button class="px-3 py-1.5 text-xs font-medium bg-primary text-white rounded-lg shadow-sm">All</button>
<button class="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Safe</button>
<button class="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Unsafe</button>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden divide-y divide-gray-100 dark:divide-gray-800">
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">lunch_dining</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Whole Wheat Bread</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Organic Sliced Loaf</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">Just now</p>
</div>
</div>
<span class="safe-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">check_circle</span> Safe
                    </span>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">cookie</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Sweet Treats</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Hazelnut Cookies</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">12 mins ago</p>
</div>
</div>
<span class="unsafe-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">warning</span> Unsafe
                    </span>
</div>
<div class="mt-2 ml-[3.75rem]">
<p class="text-xs text-unsafe-text-light dark:text-unsafe-text-dark font-medium">Contains: Tree Nuts, Milk</p>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">soup_kitchen</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Canned Goods</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Tomato Basil Soup</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">1 hour ago</p>
</div>
</div>
<span class="uncertain-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">help</span> Check
                    </span>
</div>
<div class="mt-2 ml-[3.75rem]">
<p class="text-xs text-uncertain-text-light dark:text-uncertain-text-dark font-medium">Missing full ingredient list</p>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">local_drink</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Beverages</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Oat Milk Barista</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">Yesterday</p>
</div>
</div>
<span class="safe-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">check_circle</span> Safe
                    </span>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">set_meal</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Frozen Food</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Vegetable Gyoza</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">Yesterday</p>
</div>
</div>
<span class="safe-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">check_circle</span> Safe
                    </span>
</div>
</div>
<div class="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors cursor-pointer group">
<div class="flex justify-between items-start">
<div class="flex space-x-3">
<div class="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl overflow-hidden">
<span class="material-icons-round text-gray-400 dark:text-gray-500">icecream</span>
</div>
<div>
<p class="text-sm text-gray-500 dark:text-gray-400 font-medium">Dairy</p>
<h4 class="font-display font-bold text-gray-900 dark:text-white leading-tight mb-1">Greek Yogurt Berry</h4>
<p class="text-xs text-gray-400 dark:text-gray-500">2 days ago</p>
</div>
</div>
<span class="unsafe-indicator px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide flex items-center gap-1">
<span class="material-icons-round text-sm">warning</span> Unsafe
                    </span>
</div>
<div class="mt-2 ml-[3.75rem]">
<p class="text-xs text-unsafe-text-light dark:text-unsafe-text-dark font-medium">Contains: Milk</p>
</div>
</div>
</div>
<div class="mt-6 text-center pb-8">
<button class="text-primary hover:text-primary-dark font-medium text-sm flex items-center justify-center w-full space-x-1">
<span>View Full History</span>
<span class="material-icons-round text-sm">arrow_forward</span>
</button>
</div>
</main>
<nav class="fixed bottom-0 w-full bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 pb-safe">
<div class="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
<button class="flex flex-col items-center justify-center w-12 space-y-1 text-primary">
<span class="material-icons-round text-2xl">history</span>
<span class="text-[10px] font-medium">History</span>
</button>
<button class="flex flex-col items-center justify-center w-12 space-y-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
<span class="material-icons-round text-2xl">person</span>
<span class="text-[10px] font-medium">Profile</span>
</button>
<button class="flex flex-col items-center justify-center w-12 space-y-1 text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors">
<span class="material-icons-round text-2xl">medical_services</span>
<span class="text-[10px] font-medium">Allergies</span>
</button>
</div>
</nav>
<script>
        // Simple dark mode toggle logic for demonstration
        // In a real app this would respect system preferences
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    </script>

</body></html>

scanning page

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zaytoonah Product Scanner</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#6B8E23", // Olive Green based on the Zaytoonah logo
                        "background-light": "#F9FAFB",
                        "background-dark": "#111827",
                        "overlay-dark": "rgba(0, 0, 0, 0.6)",
                    },
                    fontFamily: {
                        display: ["Inter", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.75rem",
                    },
                },
            },
        };
    </script>
<style>.camera-feed {
    background-image: url(https://lh3.googleusercontent.com/aida-public/AB6AXuApW7RCCiIz8bQP-wxpYqCum0gzufE2-TlXzPnChjZoxnZyjbxTDOOrPW4vVR-8xfOv_5LuMFyhY2J8LpPsxYquGoaMXloPNBQzkTng7kKOm0d0DYpeAHMWQOoiusny2TeNmVkcERlffTBZGvNxLb7xx2RrVQP267bm3aH0Bp2zWnfURrFxdxiW0wz-nSgZOW4YFkn14U7ni1fOJgosVUTYoHL7CqkqY-AVZzFygtCdS3uCIBHIGLjqaZ5xBUht3rZyhQod3YFCS8s);
    background-size: cover;
    background-position: center
    }.scan-corner {
    position: absolute;
    width: 40px;
    height: 40px;
    border-color: #6B8E23;border-style: solid;
    border-width: 0;
    z-index: 20
    }
.scan-tl {
    top: -2px;
    left: -2px;
    border-top-width: 4px;
    border-left-width: 4px;
    border-radius: 12px 0 0 0
    }
.scan-tr {
    top: -2px;
    right: -2px;
    border-top-width: 4px;
    border-right-width: 4px;
    border-radius: 0 12px 0 0
    }
.scan-bl {
    bottom: -2px;
    left: -2px;
    border-bottom-width: 4px;
    border-left-width: 4px;
    border-radius: 0 0 0 12px
    }
.scan-br {
    bottom: -2px;
    right: -2px;
    border-bottom-width: 4px;
    border-right-width: 4px;
    border-radius: 0 0 12px 0
    }@keyframes scan {
    0% {
        top: 10%;
        opacity: 0;
        } 10% {
        opacity: 1;
        } 90% {
        opacity: 1;
        } 100% {
        top: 90%;
        opacity: 0;
        }
    }
.scan-line {
    position: absolute;
    left: 5%;
    right: 5%;
    height: 2px;
    background-color: #ef4444;
    box-shadow: 0 0 4px #ef4444;
    animation: scan 2s infinite linear;
    z-index: 10
    }</style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="font-display antialiased h-screen w-full overflow-hidden bg-black text-white selection:bg-primary selection:text-white">
<div class="relative h-full w-full camera-feed">
<div class="absolute inset-0 bg-black/50 z-0"></div>
<div class="relative z-10 flex flex-col h-full justify-between pt-12 pb-8 px-6">
<div class="flex justify-between items-center w-full">
<button aria-label="Flashlight" class="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors">
<span class="material-icons-round text-white text-2xl">flash_off</span>
</button>
<div class="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full">
<img alt="Zaytoonah Logo" class="h-6 w-auto object-contain brightness-0 invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9tHpsc7VZdg_HDzHWEnpTmSGSYKy5pPA2VAIdBLZUXO1-3rujVF7PFl2DuG8UtwNY1auJy6zr1mjs4Dc7vwhL0UHpntuw5DSY6VvkWOFBPWmuxERDRtjdAsV47RLS8ent_lA6-gdj6BDE_crBar_lSYoeMYJkVFKqkQn_yfdRFv5wjbeXJhlrjH2pLxyrtdmrPP0_EMipTkvGbjoutbwAMLUnIDx_7eMimtOKgYxlGqT6yBvOMC4MA9-ozsjR48aU6CKxyX6QCF0"/>
<span class="text-sm font-semibold tracking-wide">Zaytoonah</span>
</div>
<button aria-label="Close Scanner" class="p-3 bg-black/40 backdrop-blur-md rounded-full hover:bg-black/60 transition-colors">
<span class="material-icons-round text-white text-2xl">close</span>
</button>
</div>
<div class="text-center space-y-2 mt-8">
<h2 class="text-xl font-bold text-white drop-shadow-md">Scan product barcode</h2>
<p class="text-white/90 text-base font-medium drop-shadow-sm bg-black/30 inline-block px-4 py-1 rounded-lg backdrop-blur-sm">
                    Position barcode within frame
                </p>
</div>
<div class="flex-grow flex items-center justify-center py-6">
<div class="relative w-72 h-48 bg-transparent rounded-2xl shadow-2xl">
<div class="scan-corner scan-tl border-primary"></div>
<div class="scan-corner scan-tr border-primary"></div>
<div class="scan-corner scan-bl border-primary"></div>
<div class="scan-corner scan-br border-primary"></div>
<div class="scan-line"></div>
<div class="absolute inset-0 rounded-xl border border-white/20 shadow-[0_0_0_9999px_rgba(0,0,0,0.3)] pointer-events-none"></div>
</div>
</div>
<div class="w-full space-y-6">
<div class="flex justify-center">
<div class="bg-black/60 backdrop-blur-md px-6 py-2 rounded-full flex items-center space-x-2 shadow-lg">
<span class="material-icons-round text-yellow-400 text-sm">search</span>
<span class="text-xs font-medium text-white tracking-wide uppercase">Searching...</span>
</div>
</div>
<div class="flex flex-col items-center gap-4">
<button class="w-full max-w-sm bg-white text-black hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 active:scale-95 transition-all duration-200 font-semibold py-4 px-6 rounded-2xl shadow-lg flex items-center justify-center space-x-3 group">
<span class="material-icons-round text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">keyboard</span>
<span>Enter barcode manually</span>
</button>
<p class="text-xs text-white/60 text-center px-8">
                        Having trouble scanning? Ensure good lighting or try manual entry.
                    </p>
</div>
<div class="flex justify-around items-center pt-2 pb-1 text-white/60">
<button class="flex flex-col items-center gap-1 p-2 hover:text-white transition-colors">
<span class="material-icons-round text-2xl">history</span>
<span class="text-[10px]">History</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 text-primary">
<div class="bg-primary/20 p-2 rounded-full -mt-4 mb-1">
<span class="material-icons-round text-3xl text-primary drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">qr_code_scanner</span>
</div>
<span class="text-[10px] font-bold text-white">Scan</span>
</button>
<button class="flex flex-col items-center gap-1 p-2 hover:text-white transition-colors">
<span class="material-icons-round text-2xl">person</span>
<span class="text-[10px]">Profile</span>
</button>
</div>
</div>
</div>
</div>

</body></html>

results page

<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Zaytoonah - Scan Result</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#7da34d", // Olive green derived from logo
                        secondary: "#4a5d35", // Darker olive
                        "background-light": "#f8f9fa",
                        "background-dark": "#121212",
                        "surface-light": "#ffffff",
                        "surface-dark": "#1e1e1e",
                        "status-danger": "#e57373", // Muted red
                        "status-danger-bg": "#ffebee", // Muted red bg
                        "status-success": "#81c784", // Muted green
                        "status-success-bg": "#e8f5e9", // Muted green bg
                        "status-neutral": "#90a4ae", // Muted grey/blue
                        "status-neutral-bg": "#eceff1", // Muted grey bg
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Inter', 'sans-serif'],
                    },
                    borderRadius: {
                        DEFAULT: "0.75rem",
                        'xl': '1rem',
                        '2xl': '1.5rem',
                    },
                },
            },
        };
    </script>
<style>
        body {
            -webkit-font-smoothing: antialiased;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 font-sans min-h-screen flex flex-col relative">
<div class="h-12 w-full flex items-center justify-between px-6 pt-2 pb-2 bg-surface-light dark:bg-surface-dark sticky top-0 z-10 border-b border-gray-100 dark:border-gray-800">
<span class="text-xs font-semibold dark:text-gray-300">9:41</span>
<div class="flex gap-1.5">
<span class="material-icons-round text-sm dark:text-gray-300">signal_cellular_alt</span>
<span class="material-icons-round text-sm dark:text-gray-300">wifi</span>
<span class="material-icons-round text-sm dark:text-gray-300">battery_full</span>
</div>
</div>
<div class="px-4 py-3 bg-surface-light dark:bg-surface-dark flex items-center justify-between sticky top-12 z-10">
<button class="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
<span class="material-icons-round">arrow_back</span>
</button>
<h1 class="font-semibold text-lg text-gray-800 dark:text-white">Scan Result</h1>
<button class="p-2 -mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-300">
<span class="material-icons-round">share</span>
</button>
</div>
<main class="flex-1 p-4 pb-24 max-w-lg mx-auto w-full space-y-4">
<div class="bg-surface-light dark:bg-surface-dark rounded-2xl p-4 shadow-sm border border-gray-100 dark:border-gray-800 flex gap-4 items-start">
<div class="w-20 h-20 bg-gray-50 dark:bg-gray-800 rounded-xl flex-shrink-0 flex items-center justify-center border border-gray-100 dark:border-gray-700">
<span class="material-icons-round text-gray-300 dark:text-gray-600 text-4xl">local_pizza</span>
</div>
<div class="flex-1">
<span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">Brand Name</span>
<h2 class="text-lg font-bold text-gray-900 dark:text-white leading-tight mt-1">Chocolate Hazelnut Spread</h2>
<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">350g Jar</p>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
<div class="bg-red-50 dark:bg-red-900/20 p-6 flex flex-col items-center justify-center text-center border-b border-red-100 dark:border-red-900/30">
<div class="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mb-3 shadow-sm">
<img alt="Zaytoonah character wearing glasses" class="w-10 h-10 object-contain mix-blend-multiply dark:mix-blend-normal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9IxxHskVjQmYVKrH8v5uTkrgZvnVKxM0U8JQvepObDGiHvqGrZioIcjbROWGoWhplr-bjGkq9IP1d0ySl8dXRb5iQbu0nk60t5lWtvw8VJW3VB8KhgsVb7J0aIemR9tXGO82pl-CDV7NabSZOrLaWLRtU3MdLzan6DSF14klLPrncbDD2hp_MXjy054rz-yiqAQrmAHt98p7ViQw_Aa2xj-yLSRNDqt94aaLBAqgtjhZl9IWVa6DdOi4zHIJFOXJeQUMa2yLI_5U"/>
</div>
<h3 class="text-xl font-bold text-red-700 dark:text-red-300">CONTAINS ALLERGENS</h3>
<p class="text-sm text-red-600 dark:text-red-400 mt-1 font-medium">Risk Detected: Tree Nuts</p>
</div>
<div class="p-5">
<div class="flex items-start gap-3">
<span class="material-icons-round text-red-500 mt-0.5">warning_amber</span>
<div>
<p class="text-gray-800 dark:text-gray-200 text-sm leading-relaxed">
                            This product contains <span class="font-bold text-red-600 dark:text-red-400">Hazelnuts</span> which matches your allergen profile for <span class="font-semibold">Tree Nuts</span>.
                        </p>
</div>
</div>
<div class="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
<p class="text-xs text-gray-500 dark:text-gray-400 mb-2 uppercase font-semibold tracking-wider">Also May Contain</p>
<div class="flex flex-wrap gap-2">
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300 border border-orange-100 dark:border-orange-900/30">
                            Milk
                        </span>
<span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-orange-50 text-orange-700 dark:bg-orange-900/20 dark:text-orange-300 border border-orange-100 dark:border-orange-900/30">
                            Soy
                        </span>
</div>
</div>
</div>
</div>
<div class="bg-surface-light dark:bg-surface-dark rounded-2xl p-5 shadow-sm border border-gray-100 dark:border-gray-800">
<h3 class="text-sm font-bold text-gray-900 dark:text-white mb-3">Ingredient List</h3>
<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Sugar, Palm Oil, <span class="font-bold text-gray-900 dark:text-white bg-red-100 dark:bg-red-900/40 px-1 rounded">Hazelnuts (13%)</span>, Skimmed Milk Powder (8.7%), Fat-Reduced Cocoa (7.4%), Emulsifier: Lecithins (Soy), Vanillin.
            </p>
<div class="mt-4 flex justify-end">
<button class="text-xs font-medium text-primary hover:text-secondary dark:text-primary dark:hover:text-white transition-colors flex items-center">
                    Report Issue <span class="material-icons-round text-sm ml-1">flag</span>
</button>
</div>
</div>
<div class="opacity-50 pointer-events-none mt-8">
<p class="text-center text-xs text-gray-400 mb-2 uppercase">Design Variant: Safe State</p>
<div class="bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800">
<div class="bg-green-50 dark:bg-green-900/20 p-4 flex items-center gap-4 border-b border-green-100 dark:border-green-900/30">
<div class="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
<span class="material-icons-round text-green-600 dark:text-green-400">check_circle</span>
</div>
<div>
<h3 class="text-lg font-bold text-green-700 dark:text-green-300">SAFE TO CONSUME</h3>
<p class="text-xs text-green-600 dark:text-green-400 font-medium">No matches found for your allergens.</p>
</div>
</div>
</div>
</div>
</main>
<div class="fixed bottom-0 left-0 right-0 bg-surface-light dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-6 py-4 pb-8 z-20">
<div class="flex gap-3 max-w-lg mx-auto">
<button class="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95">
<span class="material-icons-round text-xl">history</span>
                History
            </button>
<button class="flex-[2] bg-primary text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-green-200 dark:shadow-none flex items-center justify-center gap-2 transition-transform active:scale-95">
<span class="material-icons-round text-xl">qr_code_scanner</span>
                Scan Another
            </button>
</div>
</div>

</body></html>