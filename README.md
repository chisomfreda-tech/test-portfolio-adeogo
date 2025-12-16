# Adeogo Olajide Portfolio

Interactive portfolio for Solutions Architect showcasing 27+ projects, career journey, and certifications.

## Quick Deploy to Vercel (Easiest - 2 minutes)

### Option A: Drag & Drop (No GitHub needed)
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Click "Import Third-Party Git Repository" → Skip
4. Or easier: Run `npm run build` locally first, then drag the `dist` folder to Vercel

### Option B: Via GitHub (Recommended)
1. Create a new GitHub repository
2. Upload all these files to the repo
3. Go to [vercel.com](https://vercel.com)
4. Click "Add New Project"
5. Import your GitHub repo
6. Vercel auto-detects Vite - just click "Deploy"
7. Done! You'll get a URL like `adeogo-portfolio.vercel.app`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Contact Info
Edit `src/App.jsx` and search for:
- `xxx@gmail.com` - Replace with real email
- `908-367-1220` - Verify phone number
- LinkedIn URL - Verify it's correct

### Add/Edit Projects
Projects are in the `projectsData` array in `src/App.jsx`

### Change Colors
Main accent color is `#FF9500` (orange) - search and replace to change theme

## File Structure

```
├── index.html          # Entry HTML
├── package.json        # Dependencies
├── vite.config.js      # Build config
├── public/
│   └── favicon.svg     # Browser tab icon
└── src/
    ├── main.jsx        # React entry point
    ├── index.css       # Global styles
    └── App.jsx         # Main portfolio component (all code here)
```

## Custom Domain (Optional)

After deploying to Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `adeogoolajide.com`)
3. Update DNS records as instructed

## Tech Stack

- React 18
- Vite (build tool)
- Pure CSS (no frameworks)
- Google Fonts (Syne + DM Sans)
