# Website Deployment Methods: Comprehensive Guide (Free-Tier Focus)

## Table of Contents
1. [Overview](#overview)
2. [Deployment Methods](#deployment-methods)
   - [Vercel (Current Workflow)](#1-vercel-current-workflow)
   - [Netlify](#2-netlify)
   - [Firebase Hosting](#3-firebase-hosting)
   - [GitHub Pages](#4-github-pages)
   - [AWS Free Tier (S3 + CloudFront)](#5-aws-free-tier-s3--cloudfront)
   - [Docker + Free Container Hosting](#6-docker--free-container-hosting)
   - [GitHub Actions CI/CD](#7-github-actions-cicd)
3. [Comparison Matrix](#comparison-matrix)
4. [Recommendation](#recommendation)

---

## Overview

This guide compares modern website deployment strategies for static sites and JAMstack applications, focusing on free-tier options suitable for small to medium projects.

---

## Deployment Methods

### 1. Vercel (Current Workflow)

**What it is:** Zero-config deployment platform optimized for Next.js and modern frameworks.

#### Setup Guide

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

**Step 2: Connect to Vercel**
1. Visit [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Next.js (auto-detected)
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"

**Step 3: Automatic Deployments**
- Every push to `main` triggers production deployment
- Pull requests get preview deployments
- Custom domains supported

#### Free Tier Limits
| Resource | Limit |
|----------|-------|
| Bandwidth | 100 GB/month |
| Build Execution | 6,000 minutes/month |
| Serverless Functions | 100 GB-hours |
| Team Members | 1 (individual) |
| Custom Domains | Unlimited |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Zero configuration | Vendor lock-in with Next.js optimizations |
| Automatic HTTPS | Limited backend resources |
| Global CDN | Build minutes can exhaust quickly |
| Preview deployments | No database included |

---

### 2. Netlify

**What it is:** All-in-one platform for deploying static sites with serverless functions.

#### Setup Guide

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repo.git
git push -u origin main
```

**Step 2: Connect to Netlify**
1. Visit [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select GitHub and authorize
5. Choose your repository
6. Configure:
   - Build command: `npm run build` (or `next build`)
   - Publish directory: `out` or `.next`
7. Click "Deploy site"

**Step 3: Configure Custom Domain (Optional)**
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records

#### Free Tier Limits
| Resource | Limit |
|----------|-------|
| Bandwidth | 100 GB/month |
| Build Minutes | 300 minutes/month |
| Serverless Functions | 125,000 requests/month |
| Forms | 100 submissions/month |
| Identity | 1,000 registered users |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Generous free tier | Build minutes lower than Vercel |
| Built-in form handling | Serverless functions have cold starts |
| Split testing (beta) | Less optimized for Next.js |
| Edge functions available | |

---

### 3. Firebase Hosting

**What it is:** Google's hosting solution with CDN and serverless functions.

#### Setup Guide

**Step 1: Install Firebase CLI**
```bash
npm install -g firebase-tools
firebase login
```

**Step 2: Initialize Project**
```bash
firebase init hosting
```
Select:
- Create a new project or use existing
- Public directory: `out` or `build`
- Configure as single-page app: No (for static export)
- Set up automatic builds: Yes (optional)

**Step 3: Deploy**
```bash
npm run build
firebase deploy
```

**Step 4: GitHub Actions (Optional)**
Create `.github/workflows/firebase-deploy.yml`:
```yaml
name: Deploy to Firebase
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: '${{ secrets.GITHUB_TOKEN }}'
          firebaseServiceAccount: '${{ secrets.FIREBASE_SERVICE_ACCOUNT }}'
          channelId: live
          projectId: your-project-id
```

#### Free Tier Limits (Spark Plan)
| Resource | Limit |
|----------|-------|
| Storage | 10 GB |
| Data Transfer | 360 MB/day (≈10 GB/month) |
| Custom Domains | Unlimited |
| SSL | Automatic |
| Cloud Functions | 2 million invocations/month |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Tight Google Cloud integration | Lower bandwidth limits |
| Real-time database available | Requires Google account |
| Generous Cloud Functions | More complex setup |
| Good for mobile backends | |

---

### 4. GitHub Pages

**What it is:** Free static site hosting directly from GitHub repository.

#### Setup Guide

**Step 1: Configure Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

**Step 2: Enable GitHub Pages**
1. Go to repository Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Click Save

**Step 3: GitHub Actions for Build**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

#### Free Tier Limits
| Resource | Limit |
|----------|-------|
| Storage | 1 GB |
| Bandwidth | 100 GB/month |
| Custom Domains | Yes (with HTTPS) |
| Build Minutes | 2,000 minutes/month (public repos) |
| Private Repos | Available with GitHub Free |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Completely free for public repos | Static sites only |
| No account needed beyond GitHub | No server-side rendering |
| Version controlled deployments | Limited to static content |
| Custom domain support | No backend functions |

---

### 5. AWS Free Tier (S3 + CloudFront)

**What it is:** Scalable object storage with CDN for static website hosting.

#### Setup Guide

**Step 1: Create S3 Bucket**
1. Go to AWS Console → S3
2. Create bucket (name: your-domain)
3. Enable "Static website hosting" in Properties
4. Set index document: `index.html`
5. Set error document: `error.html`

**Step 2: Upload Files**
```bash
aws s3 sync ./out s3://your-bucket-name --acl public-read
```

**Step 3: Configure CloudFront (CDN)**
1. Go to CloudFront → Create Distribution
2. Origin domain: S3 bucket website endpoint
3. Viewer protocol: Redirect HTTP to HTTPS
4. Default root object: `index.html`
5. Create distribution

**Step 4: GitHub Actions for Auto-Deploy**
```yaml
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: jakejarvis/s3-sync-action@master
        with:
          args: --acl public-read --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
```

#### Free Tier Limits (12 Months)
| Resource | Limit |
|----------|-------|
| S3 Storage | 5 GB |
| S3 Requests | 20,000 GET / 2,000 PUT per month |
| CloudFront Data Transfer | 1 TB/month |
| CloudFront Requests | 10 million/month |
| SSL Certificate | Free via ACM |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Highly scalable | Complex initial setup |
| Enterprise-grade infrastructure | Free tier expires after 12 months |
| Fine-grained control | Requires AWS knowledge |
| Pay-as-you-go after free tier | Potential for unexpected charges |

---

### 6. Docker + Free Container Hosting

**What it is:** Containerized deployment using Docker images on free container platforms.

#### Setup Guide

**Step 1: Create Dockerfile**
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/out /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Step 2: Create nginx.conf**
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

**Step 3: Build and Push to Docker Hub**
```bash
docker build -t username/site:latest .
docker push username/site:latest
```

**Step 4: Deploy to Free Container Platform**

**Option A: Render**
1. Visit [render.com](https://render.com)
2. Create New → Web Service
3. Connect Docker Hub image
4. Select Free Instance Type
5. Deploy

**Option B: Fly.io**
```bash
flyctl launch
flyctl deploy
```

**Option C: Railway**
1. Visit [railway.app](https://railway.app)
2. New Project → Deploy Docker image
3. Connect Docker Hub

#### Free Tier Limits
| Platform | RAM | Storage | Sleep? |
|----------|-----|---------|--------|
| Render | 512 MB | 1 GB | Yes (after 15 min) |
| Fly.io | 256 MB | 3 GB | No (always on) |
| Railway | 512 MB | 1 GB | No |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Portable across platforms | More complex setup |
| Consistent environments | Cold starts on free tiers |
| Can add backend services | Limited resources |
| Good for full-stack apps | Requires Docker knowledge |

---

### 7. GitHub Actions CI/CD

**What it is:** Automated workflows for building, testing, and deploying code.

#### Setup Guide

**Step 1: Create Workflow File**
Create `.github/workflows/deploy.yml`:
```yaml
name: CI/CD Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

**Step 2: Add Secrets**
1. Go to repository Settings → Secrets and variables → Actions
2. Add `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

**Step 3: Get Vercel Tokens**
```bash
vercel login
vercel link
# Token found in ~/.vercel/config.json
```

#### Free Tier Limits
| Resource | Limit |
|----------|-------|
| Public Repos | Unlimited minutes |
| Private Repos | 2,000 minutes/month (Free plan) |
| Concurrent Jobs | 20 |
| Storage | 1 GB (artifacts) |

#### Pros & Cons
| Pros | Cons |
|------|------|
| Fully automated | Complex YAML configuration |
| Test before deploy | Minutes can exhaust quickly |
| Reusable workflows | Learning curve |
| Integrates with any platform | |

---

## Comparison Matrix

| Criteria | Vercel | Netlify | Firebase | GitHub Pages | AWS S3+CF | Docker | GitHub Actions |
|----------|--------|---------|----------|--------------|-----------|--------|----------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Scalability** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Free Tier Generosity** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Maintenance Overhead** | Very Low | Very Low | Low | Very Low | Medium | High | Medium |
| **Next.js Support** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Global CDN** | Yes | Yes | Yes | Yes | Yes | Varies | N/A |
| **Custom Domains** | Yes | Yes | Yes | Yes | Yes | Yes | N/A |
| **Preview Deploys** | Yes | Yes | Yes | No | No | No | Yes |
| **Serverless Functions** | Yes | Yes | Yes | No | Via Lambda | Yes | N/A |

---

## Recommendation

### For Static Sites (Like Your Landing Page)

**Best Option: Vercel or Netlify**

| If you need... | Choose |
|----------------|--------|
| Next.js optimization | Vercel |
| More build minutes | Vercel (6,000 vs 300) |
| Built-in forms | Netlify |
| Simplest setup | Either |

### For Full-Stack Applications

**Best Option: Vercel + Serverless Functions**

- Generous free tier for API routes
- Edge functions for low-latency
- Database integrations (Vercel Postgres, Redis)

### For Learning/DevOps Practice

**Best Option: GitHub Actions + Docker**

- Most transferable skills
- Works with any cloud provider
- Good for complex workflows

### For Maximum Control

**Best Option: AWS S3 + CloudFront**

- Enterprise-grade infrastructure
- Fine-grained cost control
- Best for high-traffic sites

---

## Quick Start: Deploy Your Current Project

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option C: GitHub Pages
```bash
npm run build
npx gh-pages -d out
```

---

## Cost Summary (Free Tiers)

| Service | Monthly Free | Best For |
|---------|--------------|----------|
| Vercel | 100 GB bandwidth | Next.js apps |
| Netlify | 100 GB bandwidth | Static sites |
| Firebase | 10 GB storage | Real-time apps |
| GitHub Pages | 100 GB bandwidth | Documentation |
| AWS (12 mo) | 1 TB transfer | High traffic |
| Render | 750 hrs runtime | APIs |
| Railway | 500 hrs runtime | Full-stack |

---

*Last updated: August 2026*
