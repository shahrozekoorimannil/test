# Production Deployment Guide

Follow this comprehensive guide to deploy **Techno Designer Fans & Lights** to Vercel and Neon.

## 1. Environment Preparation
Before deploying, ensure you have active accounts for:
- **Vercel** (Hosting & CI/CD)
- **Neon** (PostgreSQL Serverless Database)
- **Cloudinary** (Media CDN)
- **Resend** (Transactional Emails)
- **Razorpay** (Payment Gateway)

> [!IMPORTANT]
> Keep your `.env.local` variables handy. You will need to paste them into Vercel's Environment Variables panel.

## 2. Database Migration (Neon)
1. In your Neon dashboard, create a new Postgres database.
2. Copy the **Pooled Connection String** (this usually contains `-pooler` in the URL).
3. Locally, run the following command to push the schema architecture to your production database:
   ```bash
   DATABASE_URL="your-neon-url-here" npx drizzle-kit push
   ```

## 3. Vercel Deployment
1. Push your repository to GitHub.
2. In Vercel, click **Add New -> Project** and import the GitHub repository.
3. In the **Environment Variables** section, paste ALL variables exactly as formatted in `.env.example`.
4. Click **Deploy**. Vercel will run `npm run build` and launch the application globally.

## 4. Production Checklist
- [ ] Next.js Build succeeds with 0 errors.
- [ ] Database is fully synchronized with `drizzle-kit push`.
- [ ] Webhook for Razorpay is configured in the Razorpay Dashboard to hit `https://your-domain.com/api/webhooks/razorpay`.
- [ ] Google OAuth Authorized Redirect URI is updated to `https://your-domain.com/api/auth/callback/google`.
- [ ] Resend Domain is verified via DNS records so emails don't go to spam.

## 5. Backup Strategy
- **Database**: Neon offers automated continuous backups and Point-In-Time Restore (PITR) up to 7-30 days depending on your plan. Ensure this is enabled in the Neon Dashboard.
- **Media**: Cloudinary automatically replicates media across their CDN. We recommend enabling the "Backup" add-on in Cloudinary Settings.

## 6. Rollback Strategy
If a critical production error occurs:
1. Navigate to the **Vercel Dashboard** -> Deployments.
2. Locate the last known stable deployment.
3. Click the vertical dots and select **Promote to Production** or **Instant Rollback**.
4. The site will instantly revert without downtime.
