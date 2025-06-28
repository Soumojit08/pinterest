# Clerk Authentication Setup Guide

This project has been configured with Clerk for single user authentication. Follow these steps to complete the setup:

## 1. Create a Clerk Account

1. Go to [clerk.com](https://clerk.com) and sign up for a free account
2. Create a new application in your Clerk dashboard

## 2. Get Your Publishable Key

1. In your Clerk dashboard, go to the "API Keys" section
2. Copy your **Publishable Key** (starts with `pk_test_` or `pk_live_`)

## 3. Configure the Application

1. Open `src/main.jsx`
2. Replace `"pk_test_YOUR_PUBLISHABLE_KEY"` with your actual publishable key:

```javascript
const CLERK_PUBLISHABLE_KEY = "pk_test_your_actual_key_here";
```

## 4. Configure Authentication Settings (Optional)

In your Clerk dashboard, you can customize:

- **Sign-in methods**: Email, Google, GitHub, etc.
- **User profile fields**: Name, avatar, etc.
- **Appearance**: Colors, branding, etc.
- **Redirect URLs**: Where users go after sign-in/sign-up

## 5. Run the Application

```bash
npm run dev
```

## 6. Test the Authentication

1. Visit `http://localhost:5173`
2. You'll see the landing page with options to sign in or create an account
3. Create a new account or sign in
4. You'll be redirected to the dashboard with your user information

## Features Included

- ✅ Sign In page (`/sign-in`)
- ✅ Sign Up page (`/sign-up`)
- ✅ Protected Dashboard (`/dashboard`)
- ✅ Landing page with navigation
- ✅ User profile information display
- ✅ Sign out functionality
- ✅ Automatic redirects based on authentication state
- ✅ Loading states during authentication checks

## Routes

- `/` - Landing page (redirects to dashboard if signed in)
- `/sign-in` - Sign in page
- `/sign-up` - Sign up page
- `/dashboard` - Protected dashboard (requires authentication)

## Components

- `LandingPage` - Welcome page with navigation
- `SignIn` - Clerk sign-in component
- `SignUp` - Clerk sign-up component
- `Dashboard` - Protected dashboard with user info
- `ProtectedRoute` - Route wrapper for authentication

## Security Features

- Automatic session management
- Protected routes that redirect unauthenticated users
- Secure token handling
- User session persistence

## Next Steps

You can now:

1. Customize the UI and styling
2. Add more protected routes
3. Integrate with your backend API
4. Add user-specific features to the dashboard
5. Configure additional authentication providers in Clerk dashboard
