# 🚀 Deployment Guide - Jardineo Web Portal

This guide covers all deployment scenarios for the Jardineo Web Portal.

## 📋 Pre-Deployment Checklist

Before deploying:

- [ ] Update TestFlight URL in `lib/platform.ts` and `components/DownloadButton.tsx`
- [ ] Ensure `latest.json` points to correct APK version
- [ ] Test locally: `npm run dev`
- [ ] Build succeeds: `npm run build`
- [ ] No lint errors: `npm run lint`
- [ ] Docker build works: `docker-compose up prod --build`

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Static Sites)

**Pros**: Automatic deployments, CDN, zero config, free tier
**Best for**: Quick deployment, no Docker needed

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel

   # Production deployment
   vercel --prod
   ```

4. **Configure Environment Variables** (if needed)
   - Go to Vercel Dashboard → Project → Settings → Environment Variables
   - Add `NEXT_PUBLIC_TESTFLIGHT_URL`

#### Auto-Deploy with Git:

1. Connect repository to Vercel
2. Set `WEB` as root directory
3. Auto-deploy on push to `main`

---

### Option 2: Netlify

**Pros**: Simple, generous free tier, good for static sites
**Best for**: Static export or Netlify Functions

#### Steps:

1. **Build Command**
   ```
   npm run build
   ```

2. **Publish Directory**
   ```
   .next
   ```

3. **Deploy via CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify deploy --prod
   ```

Or connect Git repository in Netlify Dashboard.

---

### Option 3: Docker on VPS (DigitalOcean, Linode, AWS EC2)

**Pros**: Full control, can run other services
**Best for**: Complete infrastructure control

#### Steps:

1. **SSH into server**
   ```bash
   ssh user@your-server-ip
   ```

2. **Install Docker & Docker Compose**
   ```bash
   # Install Docker
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh

   # Install Docker Compose
   sudo apt-get update
   sudo apt-get install docker-compose-plugin
   ```

3. **Clone repository**
   ```bash
   git clone <your-repo-url>
   cd JARDINEO_/WEB
   ```

4. **Start production container**
   ```bash
   docker-compose up prod -d
   ```

5. **Configure reverse proxy** (Nginx or Caddy)

   **Nginx example** (`/etc/nginx/sites-available/jardineo`):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Enable site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/jardineo /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

6. **Setup SSL** (Let's Encrypt)
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

### Option 4: Railway / Render / Fly.io

**Pros**: Simple PaaS, automatic HTTPS, good free tiers
**Best for**: Quick Docker deployment without VPS management

#### Railway:

1. Install CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Init: `railway init`
4. Deploy: `railway up`
5. Set root directory to `WEB` in dashboard

#### Render:

1. Connect GitHub repository
2. Set:
   - **Root Directory**: `WEB`
   - **Build Command**: `docker build -f Dockerfile -t web .`
   - **Start Command**: `docker run -p 3000:3000 web`

#### Fly.io:

1. Install flyctl: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Launch: `fly launch` (in WEB directory)
4. Deploy: `fly deploy`

---

### Option 5: Static Export (GitHub Pages, CloudFlare Pages, etc.)

**Pros**: Cheapest (often free), fast CDN
**Cons**: No server-side rendering, no API routes

#### Steps:

1. **Update `next.config.ts`**
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build**
   ```bash
   npm run build
   ```

3. **Deploy `out/` folder**
   - **GitHub Pages**: Push to `gh-pages` branch
   - **CloudFlare Pages**: Connect repo or drag-drop `out/`
   - **S3/CloudFront**: Upload `out/` to S3, serve via CloudFront

---

## 🔄 Updating APK Version

### Manual Update:

1. **Upload new APK**
   ```bash
   cp ~/Downloads/jardineo-v1.2.3.apk WEB/public/apk/1.2.3.apk
   ```

2. **Update manifest**
   Edit `WEB/public/apk/latest.json`:
   ```json
   {
     "version": "1.2.3",
     "file": "1.2.3.apk",
     "releaseDate": "2026-01-22",
     "changelog": [
       "New features...",
       "Bug fixes..."
     ]
   }
   ```

3. **Commit and push**
   ```bash
   git add public/apk/
   git commit -m "chore: update APK to v1.2.3"
   git push origin main
   ```

4. **Redeploy** (if not auto-deploying)

### Automated CI/CD (Future):

Create `.github/workflows/deploy-apk.yml`:
```yaml
name: Deploy APK Update
on:
  workflow_dispatch:
    inputs:
      version:
        description: 'APK version (e.g., 1.2.3)'
        required: true

jobs:
  update-apk:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Update latest.json
        run: |
          # Script to update latest.json
      - name: Commit changes
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add public/apk/latest.json
          git commit -m "chore: update APK to v${{ github.event.inputs.version }}"
          git push
```

---

## 🐳 Docker Production Best Practices

### Multi-Stage Build Optimization:

The provided `Dockerfile` uses multi-stage builds:
1. **deps**: Install dependencies
2. **builder**: Build application
3. **runner**: Run production server (minimal image)

### Security:

- Runs as non-root user (`nextjs`)
- Only copies necessary files
- Uses Alpine Linux (smaller attack surface)

### Health Checks:

```yaml
healthcheck:
  test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000"]
  interval: 30s
  timeout: 10s
  retries: 3
```

### Logs:

```bash
# View logs
docker-compose logs -f prod

# Last 100 lines
docker-compose logs --tail=100 prod
```

### Resource Limits:

Add to `docker-compose.yml`:
```yaml
deploy:
  resources:
    limits:
      cpus: '0.5'
      memory: 512M
```

---

## 🔒 Environment Variables

### Production Variables:

```env
NODE_ENV=production
NEXT_PUBLIC_TESTFLIGHT_URL=https://testflight.apple.com/join/XXXXX
```

### Setting in Different Platforms:

- **Vercel**: Dashboard → Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **Docker**: `.env` file or `docker-compose.yml`
- **Railway/Render**: Dashboard → Environment tab

---

## 📊 Monitoring & Analytics (Optional)

### Add Google Analytics:

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Update `app/layout.tsx`:
   ```typescript
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### Add Sentry (Error Tracking):

```bash
npx @sentry/wizard@latest -i nextjs
```

---

## 🧪 Testing Deployment

### Local Production Test:

```bash
# Build production
npm run build

# Start production server
npm run start
```

### Docker Production Test:

```bash
docker-compose up prod --build
curl http://localhost:3000
```

### Verify APK Download:

1. Open `http://localhost:3000`
2. Click "Download for Android"
3. Verify APK downloads correctly

---

## 🐛 Troubleshooting

### Build Fails:

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Docker Issues:

```bash
# Rebuild without cache
docker-compose build --no-cache prod

# Check logs
docker-compose logs prod
```

### APK Not Downloading:

- Check file exists: `ls -lh public/apk/`
- Verify `latest.json` format
- Check browser console for errors

### Port Already in Use:

```bash
# Find process on port 3000
lsof -ti:3000

# Kill process
kill -9 $(lsof -ti:3000)

# Or change port in docker-compose.yml
ports:
  - "8080:3000"
```

---

## 📈 Performance Optimization

### Image Optimization:

If adding images later:
```typescript
import Image from 'next/image';

<Image src="/logo.png" width={200} height={200} alt="Logo" />
```

### Caching:

APK files are static and should be cached:

**Vercel/Netlify**: Automatic CDN caching

**Nginx**:
```nginx
location /apk/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

---

## 🔄 Rollback Strategy

### Git Rollback:

```bash
git log --oneline
git revert <commit-hash>
git push origin main
```

### Docker Rollback:

```bash
# Tag images before deploy
docker tag jardineo-web:latest jardineo-web:backup

# Rollback
docker-compose down
docker tag jardineo-web:backup jardineo-web:latest
docker-compose up prod -d
```

---

## 📞 Support

For deployment issues, contact the Jardineo team or create an issue in the main repository.

---

**Happy Deploying! 🚀**
