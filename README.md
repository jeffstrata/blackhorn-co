# Blackhorn Co. — Website

Premium skull art e-commerce site built with Next.js, Tailwind CSS, and Netlify.

---

## Updating Your Inventory

**You don't need to touch any code except one file:**

```
data/products.ts
```

Open that file — there are detailed instructions at the top explaining exactly how to:
- Add a new product
- Mark a product as sold
- Remove a product

---

## Adding Product Photos

1. Take or receive the photo
2. Save it to `public/images/` — e.g., `public/images/longhorn-7.jpg`
3. Open `data/products.ts` and set the `image` field for that product:
   ```
   image: '/images/longhorn-7.jpg',
   ```
4. Rebuild and redeploy (see below)

Photo tips:
- Square crops (1:1 ratio) work best
- Aim for 800×800px minimum, 1200×1200px ideal
- JPG or WebP format for best performance

---

## Deploying to Netlify

### First time setup
1. Push this project to a GitHub repository
2. Go to [netlify.com](https://netlify.com) and connect your GitHub repo
3. Netlify will automatically use the settings in `netlify.toml`
4. Your site will be live at a Netlify URL — you can then add your custom domain

### After updating inventory
Any time you push changes to GitHub, Netlify will automatically rebuild and redeploy your site. No manual steps needed.

### Manual deploy (without GitHub)
1. Run `npm run build` in this folder
2. Drag the `out/` folder into the Netlify dashboard

---

## Contact Form (Netlify Forms)

The contact form is set up to use Netlify Forms automatically. Once deployed to Netlify:
- Form submissions appear in your Netlify dashboard under **Forms**
- You can set up email notifications from the Netlify UI

---

## Running Locally (for developers)

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

---

## Updating Contact Info / Email

Search for `hello@blackhornco.ca` across all files and replace with your real email.

---

## Tech Stack

- **Next.js 14** — React framework with static export
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons
- **Netlify** — hosting + forms
- **Google Fonts** — Cormorant Garamond (display) + DM Sans (body)
