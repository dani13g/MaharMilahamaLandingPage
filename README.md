# מחר מלחמה - Landing Page

A modern, high-conversion landing page for **מחר מלחמה** (Tomorrow War) - a pre-army fitness, combat preparation, and mental toughness training program in Israel.

## 🚀 Features

- **Modern React + TypeScript** - Built with React 19 and TypeScript for type safety
- **Vite** - Lightning-fast build tool and dev server
- **Responsive Design** - Mobile-first approach with RTL support for Hebrew
- **Dark Theme** - Professional dark theme optimized for military/preparation content
- **Contact Forms** - Integrated form submission with FormSubmit.co
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Performance Optimized** - Fast loading times and smooth animations

## 📋 Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm))
- **npm** or **yarn** or **pnpm**

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/dani13g/MaharMilahamaLandingPage.git
cd MaharMilhamaLandingPage
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## 🏗️ Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
MaharMilhamaLandingPage/
├── components/          # React components
│   ├── BlogSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Testimonials.tsx
│   ├── UnitLogos.tsx
│   └── WhatsAppButton.tsx
├── images/              # Image assets
├── App.tsx              # Main app component
├── index.html           # HTML entry point
├── index.tsx            # React entry point
├── metadata.json        # Project metadata
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Lucide React** - Icon library
- **FormSubmit.co** - Form submission service

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and configure the build
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import your repository in [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

### GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Run: `npm run deploy`

## 📝 Environment Variables

This project doesn't require any environment variables. All configuration is handled through the codebase.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary. All rights reserved.

## 📧 Contact

For questions or support, contact: maharmilhama212@gmail.com
