# ⚡ Quick Start Guide - Jardineo Web Portal

Get up and running in 5 minutes!

## 🚀 Fastest Path to Running

### Option 1: Local Development (Recommended for Testing)

```bash
# Navigate to project
cd WEB

# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser → http://localhost:3000
```

### Option 2: Docker Development

```bash
cd WEB

# Start development container with hot reload
docker-compose up dev

# Open browser → http://localhost:3000
```

### Option 3: Docker Production

```bash
cd WEB

# Build and start production container
docker-compose up prod --build

# Open browser → http://localhost:3000
```

---

## 📝 Before Your First Deploy

### 1. Configure TestFlight URL

Update in **2 locations**:

**File: `lib/platform.ts`** (line ~36)
```typescript
case 'ios':
  return 'https://testflight.apple.com/join/YOUR_ACTUAL_CODE';
```

**File: `components/DownloadButton.tsx`** (line ~17)
```typescript
window.open('https://testflight.apple.com/join/YOUR_ACTUAL_CODE', '_blank');
```

### 2. Add Your First APK

```bash
# Copy APK to public/apk/
cp ~/path/to/your.apk public/apk/1.0.0.apk

# Update latest.json
# File: public/apk/latest.json
{
  "version": "1.0.0",
  "file": "1.0.0.apk",
  "releaseDate": "2026-01-22",
  "changelog": [
    "Initial release",
    "Your feature here"
  ]
}
```

---

## 🌐 Deploy in 2 Minutes

### Vercel (Easiest)

```bash
# Install CLI
npm i -g vercel

# Deploy
vercel --prod
```

Done! You'll get a URL like `https://your-project.vercel.app`

### Other Options

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Netlify
- Docker on VPS
- Railway / Render / Fly.io
- Static export (GitHub Pages, etc.)

---

## 🔄 Update APK Version

### ✨ Option 1: Automatique (Recommandé)

**Rien à faire !** Quand vous créez une release stable sur GitHub :

1. GitHub Actions télécharge automatiquement l'APK
2. Met à jour `latest.json` avec le changelog
3. Commit et push les changements
4. Vercel/Netlify redéploie automatiquement

**📚 Documentation:** Voir [AUTO-SYNC.md](./AUTO-SYNC.md) pour tous les détails

### 🔧 Option 2: Manuel (si nécessaire)

```bash
# 1. Add new APK
cp ~/Downloads/new-version.apk public/apk/1.2.0.apk

# 2. Edit public/apk/latest.json
{
  "version": "1.2.0",
  "file": "1.2.0.apk",
  ...
}

# 3. Commit
git add public/apk/
git commit -m "chore: update APK to v1.2.0"
git push
```

If auto-deploy is configured, that's it! Otherwise redeploy manually.

---

## 🐛 Common Issues

### Port 3000 already in use?

```bash
# Kill process on port 3000
npx kill-port 3000

# Or change port
PORT=8080 npm run dev
```

### Docker build fails?

```bash
# Clean and rebuild
docker-compose down
docker-compose build --no-cache prod
docker-compose up prod
```

### APK not downloading?

- Check file exists: `ls public/apk/`
- Verify `latest.json` has correct filename
- Check browser console for errors

---

## 📚 Full Documentation

- [README.md](./README.md) - Complete project documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - All deployment options
- [public/apk/README.md](./public/apk/README.md) - APK management
- [CHANGELOG.md](./CHANGELOG.md) - Version history

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  },
}
```

### Change Logo

Replace the SVG in `components/Hero.tsx` (line ~35)

### Add More Content

Edit `app/page.tsx` or create new pages in `app/`

---

## ✅ Checklist Before Going Live

- [ ] TestFlight URL configured
- [ ] Latest APK uploaded
- [ ] `latest.json` updated
- [ ] Build succeeds: `npm run build`
- [ ] No lint errors: `npm run lint`
- [ ] Tested on mobile devices
- [ ] Domain configured (if using custom domain)
- [ ] SSL enabled (automatic on Vercel/Netlify)

---

## 🆘 Need Help?

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for troubleshooting
2. Review [README.md](./README.md) for detailed docs
3. Contact Jardineo team
4. Create issue in main repository

---

**Happy shipping! 🚀**
