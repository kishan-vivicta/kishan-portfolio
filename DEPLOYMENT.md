# Deployment Guide for GitHub Pages

This guide will help you deploy your multi-page portfolio to GitHub Pages.

## Prerequisites

✅ Node.js and npm installed
✅ Git installed and configured
✅ GitHub repository set up

## Step-by-Step Deployment

### 1. Install Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- React Router DOM (for multi-page navigation)
- Vite (build tool)
- gh-pages (deployment package)

### 2. Test Locally

Before deploying, test your site locally:

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`) and verify:
- All pages load correctly
- Navigation works between pages
- Animations and styling look good
- Mobile responsiveness is working

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### 4. Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your application
- Create/update the `gh-pages` branch
- Push the built files to GitHub

### 5. Configure GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings**
3. Navigate to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

### 6. Access Your Site

Your portfolio will be live at:
```
https://kishan-vivicta.github.io/kishan-portfolio/
```

Note: It may take 1-2 minutes for the site to become available after the first deployment.

## Updating Your Portfolio

Whenever you make changes:

```bash
# 1. Test locally
npm run dev

# 2. Commit your changes to main branch
git add .
git commit -m "Your commit message"
git push origin main

# 3. Deploy to GitHub Pages
npm run deploy
```

## Troubleshooting

### Issue: 404 Error on Page Refresh

**Solution**: Already configured! The `public/404.html` file handles this automatically.

### Issue: Blank Page After Deployment

**Possible causes**:
1. Check that the `base` in `vite.config.js` matches your repo name
2. Verify the `basename` in `App.jsx` matches your repo name
3. Ensure `homepage` in `package.json` is correct

### Issue: CSS/Assets Not Loading

**Solution**: Verify the base path in `vite.config.js`:
```javascript
base: '/kishan-portfolio/'  // Must match your repo name
```

### Issue: Routing Not Working

**Solution**: The SPA routing script is already included in:
- `index.html` (main redirect handler)
- `public/404.html` (handles direct navigation to routes)

## Important Configuration Files

### vite.config.js
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/kishan-portfolio/'  // Your repo name
})
```

### package.json
```json
{
  "homepage": "https://kishan-vivicta.github.io/kishan-portfolio"
}
```

### App.jsx
```javascript
<Router basename="/kishan-portfolio">
```

## Features Implemented

✅ Multi-page navigation with React Router
✅ Smooth page transitions and animations
✅ Responsive design for all devices
✅ Professional UI/UX with hover effects
✅ SEO-optimized with meta tags
✅ Custom 404 page
✅ Scroll-to-top button
✅ Professional footer with social links
✅ GitHub Pages SPA routing configured

## Performance Tips

1. **Image Optimization**: Compress images before adding them to the project
2. **Lazy Loading**: Consider lazy loading for heavy components
3. **Cache Busting**: Vite handles this automatically
4. **CDN**: GitHub Pages serves content from a CDN

## Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify all paths are correct
3. Ensure all dependencies are installed
4. Test the production build locally: `npm run preview`

## Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

---

**Happy Deploying! 🚀**
