# Total Facility Services - Complete Deployment Guide

## 🔄 How the Workflow Works

### The Complete Chain:
1. **Claude (AI)** → Edits files in your local folder
2. **You** → Review changes and push to GitHub
3. **GitHub** → Triggers Vercel deployment automatically
4. **Vercel** → Builds and deploys your website live

---

## 📋 Prerequisites Setup

### 1. Install Required Software
- **Node.js** (v20 or higher): https://nodejs.org/
- **Git**: https://git-scm.com/downloads
- **VS Code** (optional but recommended): https://code.visualstudio.com/

### 2. GitHub Account
- URL: https://github.com
- Your repo: https://github.com/mpgarcia2003/the-total-facility

### 3. Vercel Account
- URL: https://vercel.com
- Sign in with your GitHub account

---

## 🚀 Initial Setup (One-Time)

### Step 1: Local Environment Setup

```bash
# Navigate to your project folder
cd C:\Users\mpgar\OneDrive\Desktop\the-total-facility

# Install dependencies
npm install

# Test the website locally
npm run dev
```

Visit http://localhost:3000 to see your site running locally.

---

### Step 2: Connect GitHub to Vercel

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. Click **"Add New Project"**
3. Click **"Import Git Repository"**
4. Select your repository: `mpgarcia2003/the-total-facility`
5. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - Leave environment variables empty for now
6. Click **"Deploy"**

---

### Step 3: Configure Custom Domain (Optional)

1. In Vercel project settings, go to **"Domains"**
2. Add your domain: `totalfacilityservices.com`
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic, takes ~10 minutes)

---

## 🔧 Daily Workflow: Making Changes

### When Claude Makes Changes:

1. **Claude edits files** in your local folder
2. **Review the changes** (optional but recommended)
3. **Push to GitHub** using these commands:

```bash
# Open terminal in project folder
cd C:\Users\mpgar\OneDrive\Desktop\the-total-facility

# Check what changed
git status

# See detailed changes (optional)
git diff

# Add all changes
git add .

# Commit with a message describing what changed
git commit -m "Updated homepage design and added contact form"

# Push to GitHub
git push origin main
```

4. **Vercel automatically deploys** (takes 1-3 minutes)
5. **Check live site** at your Vercel URL

---

## 🔗 Connecting Third-Party Services

### Email Service (for Contact Forms)

**Option A: Resend (Recommended)**
1. Sign up: https://resend.com
2. Get API key from dashboard
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

**Option B: SendGrid**
1. Sign up: https://sendgrid.com
2. Create API key
3. Add to Vercel:
   ```
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

### Database (for Quote Storage)

**Option A: Vercel Postgres (Recommended)**
1. In Vercel project, go to **Storage** tab
2. Create **Postgres** database
3. Environment variables are added automatically

**Option B: Supabase**
1. Sign up: https://supabase.com
2. Create new project
3. Add to Vercel:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
   ```

### Analytics

**Vercel Analytics (Built-in)**
1. In Vercel dashboard, go to **Analytics** tab
2. Click **"Enable Analytics"** (free tier available)
3. No code changes needed

**Google Analytics**
1. Create GA4 property: https://analytics.google.com
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. Install package: `npm install @next/third-parties`

---

## 🔐 Environment Variables in Vercel

### How to Add Environment Variables:

1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** tab
3. Click **"Environment Variables"** in sidebar
4. Add each variable:
   - **Key**: Variable name (e.g., `RESEND_API_KEY`)
   - **Value**: Your secret key
   - **Environments**: Select Production, Preview, Development
5. Click **"Save"**
6. **Redeploy** your project for changes to take effect

### Common Environment Variables:

```bash
# Email Service
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Database
DATABASE_URL=postgresql://user:pass@host:5432/db

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Email
CONTACT_EMAIL=info@totalfacilityservices.com

# Phone
CONTACT_PHONE=8444543101
```

---

## 🛠️ Troubleshooting

### Build Fails on Vercel

**Check the build logs:**
1. Go to Vercel → Deployments
2. Click on failed deployment
3. Read error messages in **"Building"** section

**Common fixes:**
```bash
# Fix TypeScript errors locally
npm run build

# Fix linting errors
npm run lint

# Update dependencies
npm install
```

### Changes Not Showing on Live Site

1. **Clear browser cache**: Ctrl + Shift + R (Windows) or Cmd + Shift + R (Mac)
2. **Check deployment status**: Vercel dashboard
3. **Verify git push**: `git log` to see if commit was pushed
4. **Check Vercel logs**: Look for errors in deployment logs

### Local Development Not Working

```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install

# Clear Next.js cache
rm -rf .next
npm run dev
```

---

## 📝 Quick Command Reference

### Git Commands
```bash
git status                  # See what changed
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push origin main        # Push to GitHub
git pull origin main        # Get latest from GitHub
git log                     # See commit history
```

### NPM Commands
```bash
npm install                 # Install dependencies
npm run dev                 # Start development server
npm run build               # Build for production
npm start                   # Run production build locally
npm run lint                # Check for errors
```

### Vercel CLI (Optional)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from terminal
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls
```

---

## 📞 Emergency Contacts & Links

### Your Repository
- **GitHub**: https://github.com/mpgarcia2003/the-total-facility
- **Vercel Dashboard**: https://vercel.com/dashboard

### Important Services
- **Vercel Support**: https://vercel.com/support
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Docs**: https://docs.github.com

### Your Project Info
- **Local Path**: `C:\Users\mpgar\OneDrive\Desktop\the-total-facility`
- **Git Remote**: https://github.com/mpgarcia2003/the-total-facility.git
- **Branch**: main

---

## ✅ Pre-Launch Checklist

Before going live, ensure:

- [ ] All pages load without errors
- [ ] Contact form works and sends emails
- [ ] Phone numbers are correct (844) 454-3101
- [ ] Service areas are accurate (42 cities)
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] Links work (internal and external)
- [ ] SSL certificate is active (https://)
- [ ] Google Analytics is tracking
- [ ] Meta tags for SEO are set
- [ ] Favicon is loading
- [ ] 404 page exists
- [ ] Loading speed is optimized

---

## 🎯 Next Steps After Claude Makes Changes

1. ✅ Review changes Claude made (optional)
2. ✅ Test locally: `npm run dev`
3. ✅ Commit: `git add . && git commit -m "Description"`
4. ✅ Push: `git push origin main`
5. ✅ Wait for Vercel to deploy (1-3 min)
6. ✅ Check live site
7. ✅ Test functionality

---

**Last Updated**: October 8, 2025
**Project**: Total Facility Services Website
**Owner**: mpgarcia2003
