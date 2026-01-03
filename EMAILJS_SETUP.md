# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails to the owner.

## Step 1: Install Dependencies

First, install the EmailJS package:

```bash
npm install
```

This will install `@emailjs/browser` which is already added to `package.json`.

## Step 2: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 3: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 4: Create Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use the following template structure:

**Template Name:** Contact Form Template

**Subject:** New Contact Form Submission from {{from_name}}

**Content:**
```
Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested In: {{service}}

Message:
{{message}}

---
This email was sent from the Ridhaan Investments contact form.
```

4. Set the **To Email** field to: `aniket8601206984@gmail.com`
5. Set **From Name** to: `Ridhaan Investments Contact Form`
6. **Save the template** and **copy the Template ID**

## Step 5: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** and copy it

## Step 6: Configure Environment Variables

Create a `.env` file in the root directory of your project with the following:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual IDs from steps 3, 4, and 5.

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=AbCdEfGhIjKlMnOpQrStUvWxYz
```

## Step 7: Test the Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Navigate to the contact page
3. Fill out the form and submit
4. Check your email (aniket8601206984@gmail.com) for the message

## Troubleshooting

### EmailJS is not configured error
- Make sure you've created the `.env` file in the root directory
- Verify that all three environment variables are set correctly
- Restart your development server after creating/updating the `.env` file

### Emails not being sent
- Check the browser console for error messages
- Verify your EmailJS service is connected and active
- Make sure your email service (Gmail/Outlook) is properly configured in EmailJS
- Check the EmailJS dashboard for any error logs

### Template variables not working
- Ensure the template variable names match exactly: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{service}}`, `{{message}}`
- Variable names are case-sensitive

## Security Notes

- The `.env` file should be added to `.gitignore` to keep your keys private
- Never commit your actual EmailJS credentials to version control
- The free tier of EmailJS is sufficient for most small businesses (200 emails/month)
- For production, consider upgrading to a paid plan for higher limits

## Support

For more help, visit:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

