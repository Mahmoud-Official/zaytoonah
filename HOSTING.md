# Zaytoonah Hosting Guide

Deploy your allergen scanner app online in under 5 minutes.

---

## Option 1: Netlify Drop (Fastest - No Account Needed)

1. Go to **[netlify.com/drop](https://app.netlify.com/drop)**
2. Drag your `WebDemo` folder onto the page
3. Done! Get your live URL instantly

> [!TIP]
> Create a free Netlify account to get a custom subdomain like `zaytoonah.netlify.app`

---

## Option 2: GitHub Pages (Free + Custom Domain)

### Step 1: Create GitHub Repository
```bash
cd c:\Users\Mahmoud\Documents\Productivity\Zaytoonah\WebDemo
git init
git add .
git commit -m "Initial commit"
```

### Step 2: Push to GitHub
1. Create new repo at **[github.com/new](https://github.com/new)**
2. Name it `zaytoonah` (or any name)
3. Run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/zaytoonah.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repo **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/(root)`
4. Click **Save**
5. Your site: `https://YOUR_USERNAME.github.io/zaytoonah/`

---

## Option 3: Vercel (Best for Future Updates)

```bash
npm i -g vercel
cd c:\Users\Mahmoud\Documents\Productivity\Zaytoonah\WebDemo
vercel
```

Follow prompts → Get live URL.

---

## After Deployment

Test with a real barcode:
1. Open your live URL on phone
2. Select an allergy
3. Scan barcode `3017624010701` (Nutella)
4. Verify it shows SAFE/UNSAFE correctly
