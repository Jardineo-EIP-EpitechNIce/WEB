# 📦 Jardineo Web Portal

A clean, modern distribution portal for the Jardineo mobile application. Built with Next.js, TypeScript, and Tailwind CSS, following Jardineo's nature-inspired design system.

## 🎯 Purpose

This portal provides:
- **Android APK downloads** from local storage
- **iOS TestFlight** redirect for beta testing
- **Platform detection** for optimal user experience
- **Version management** with changelog display

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Jardineo color palette
- **Deployment**: Docker (dev/prod), Vercel, Netlify compatible
- **No backend required**: Fully static-compatible

## 📁 Project Structure

```
WEB/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Landing page
│   └── globals.css        # Global styles + Tailwind
├── components/            # React components
│   ├── Hero.tsx          # Main hero section
│   └── DownloadButton.tsx # Platform-specific buttons
├── lib/                   # Utilities
│   ├── platform.ts       # Platform detection logic
│   └── types.ts          # TypeScript definitions
├── public/
│   └── apk/              # APK storage
│       ├── latest.json   # Version manifest
│       ├── 1.0.0.apk    # APK files (versioned)
│       └── README.md     # APK management guide
├── docker-compose.yml    # Docker orchestration
├── Dockerfile            # Production image
└── Dockerfile.dev        # Development image
```

## 🚀 Quick Start

### Local Development (Node.js)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# http://localhost:3000
```

### Docker Development

```bash
# Start development container with hot reload
docker-compose up dev

# Access at http://localhost:3000
```

### Docker Production

```bash
# Build and start production container
docker-compose up prod --build

# Access at http://localhost:3000
```

## 📦 APK Management

### Adding a New Version

1. **Place APK in `/public/apk/`**
   ```
   /public/apk/1.2.3.apk
   ```

2. **Update `latest.json`**
   ```json
   {
     "version": "1.2.3",
     "file": "1.2.3.apk",
     "releaseDate": "2026-01-22",
     "changelog": [
       "New AR visualization features",
       "Performance improvements",
       "Bug fixes"
     ]
   }
   ```

3. **Commit and deploy**
   ```bash
   git add public/apk/
   git commit -m "chore: update APK to v1.2.3"
   git push
   ```

The website automatically reads `latest.json` to display the current version.

### Versioning Rules

- Follow **semantic versioning**: `MAJOR.MINOR.PATCH`
- APK filename must match version: `1.2.3.apk`
- Keep only 2-3 recent versions to save space

## 🎨 Design System

The portal follows Jardineo's design direction:

### Colors

```typescript
Primary (Green):   #22c55e → #14532d
Secondary (Yellow): #facc15 → #713f12
Neutral (Stone):   #fafaf9 → #1c1917
```

### Typography

- Clean, modern sans-serif
- Headings: Bold, large, friendly
- Body: Medium weight, readable

### Components

- Rounded corners (`rounded-xl`)
- Soft shadows (`shadow-md`, `shadow-lg`)
- Smooth transitions (`transition-all duration-300`)
- Nature-inspired iconography

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Netlify

```bash
# Build static site
npm run build

# Deploy to Netlify
# Upload .next folder or use Netlify CLI
```

### Option 3: Docker on VPS

```bash
# On server
git clone <repo-url>
cd WEB
docker-compose up prod -d

# Configure reverse proxy (Nginx/Caddy)
```

### Option 4: Static Export

```bash
# Update next.config.ts
output: 'export'

# Build
npm run build

# Deploy 'out' folder to any static host
```

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NODE_ENV=development
TESTFLIGHT_CODE=YOUR_CODE
```

### Build Modes

- **Development**: Hot reload, source maps, verbose logs
- **Production**: Optimized, minified, standalone server

### Docker Ports

Default: `3000`

To change:
```yaml
# docker-compose.yml
ports:
  - "8080:3000"  # Host:Container
```

## 📱 Platform Detection

The portal automatically detects user platform:

- **Android**: Shows Android download first
- **iOS**: Shows TestFlight first
- **Desktop**: Shows both equally

Detection uses `navigator.userAgent` client-side.

## 🧪 Testing

```bash
# Lint
npm run lint

# Type check
npx tsc --noEmit

# Build test
npm run build
```

## 📊 Future Enhancements

Potential additions (out of current scope):

- Analytics integration
- Download statistics
- Multi-language support
- Release notes page
- Email subscription for updates
- Automated CI/CD for APK uploads

## 🤝 Contributing

This project is part of the Jardineo EIP monorepo.

### Branch Strategy

- `main`: Production-ready code
- `dev`: Integration branch
- `feat/*`: Feature branches

### Commit Convention

```
[FEAT] Add feature
[FIX] Fix bug
[VERSIONNING] Version update
```

## 📄 License

Part of Jardineo - Epitech Innovative Project (EIP)

## 🐛 Issues

Report issues in the main Jardineo repository or contact the team.

---

Built with ❤️ for gardeners everywhere


