# Developer Setup Guide

This guide will help you set up the Quick-AI project locally with Clerk authentication.

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/nishant0820/Quick-AI.git
cd Quick-AI/client

# Install dependencies
npm install

# Install Clerk (if not already in package.json)
npm install @clerk/clerk-react
```

### 2. Set Up Clerk Authentication

#### Step 1: Create Clerk Account
1. Go to [clerk.com](https://clerk.com/) and sign up
2. Create a new application
3. Choose your preferred authentication methods:
   - Email/Password
   - Google
   - GitHub
   - Discord
   - And many more...

#### Step 2: Configure Environment Variables
1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Get your Clerk Publishable Key:
   - In Clerk Dashboard, go to "API Keys"
   - Copy the Publishable Key (starts with `pk_`)
   
3. Update `.env.local`:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
   ```

#### Step 3: Configure Clerk Settings (Optional)
In your Clerk Dashboard:

1. **Allowed Origins**: Add `http://localhost:5173` (or your dev server URL)
2. **Social Providers**: Enable desired OAuth providers
3. **User Profile**: Customize required/optional fields
4. **Appearance**: Customize the look of auth components

### 3. Start Development Server

```bash
npm run dev
```

Your app should now be running at `http://localhost:5173`

## 🧪 Testing Authentication

### Test User Flow
1. Visit the home page
2. Click "Get Started" button
3. Try signing up with a new account
4. Test sign out functionality
5. Test sign in with existing account

### Development User
For testing, you can create a test user in Clerk Dashboard:
1. Go to "Users" section
2. Click "Create User"
3. Fill in test user details

## 🔧 Development Tips

### 1. Debug Authentication State
Add this to any component to debug auth state:

```jsx
import { useUser, useAuth } from '@clerk/clerk-react'

const DebugAuth = () => {
  const { user, isLoaded, isSignedIn } = useUser()
  const { userId, sessionId } = useAuth()
  
  return (
    <div style={{ position: 'fixed', top: 10, right: 10, background: 'black', color: 'white', padding: '10px', fontSize: '12px' }}>
      <div>Loaded: {isLoaded ? 'Yes' : 'No'}</div>
      <div>Signed In: {isSignedIn ? 'Yes' : 'No'}</div>
      <div>User ID: {userId || 'None'}</div>
      <div>Session ID: {sessionId || 'None'}</div>
    </div>
  )
}
```

### 2. Common Development Issues

**Issue**: "Missing Publishable Key" error
**Solution**: 
- Check `.env.local` file exists
- Ensure variable name is exactly `VITE_CLERK_PUBLISHABLE_KEY`
- Restart dev server after adding env vars

**Issue**: Auth components not rendering
**Solution**: 
- Verify ClerkProvider wraps your app in `main.jsx`
- Check browser console for errors
- Ensure Clerk is properly installed

**Issue**: Redirect loops
**Solution**: 
- Check `afterSignOutUrl` in ClerkProvider
- Verify route structure matches expected paths

### 3. Hot Reload with Environment Changes
When changing environment variables:
```bash
# Stop the dev server (Ctrl+C)
# Restart it
npm run dev
```

## 🏗️ Project Structure

```
client/
├── src/
│   ├── components/
│   │   └── Navbar.jsx          # Authentication UI
│   ├── pages/
│   │   ├── Home.jsx            # Public page
│   │   ├── Layout.jsx          # Protected layout
│   │   └── Dashboard.jsx       # Protected page
│   ├── App.jsx                 # Route configuration
│   └── main.jsx                # Clerk provider setup
├── .env.example                # Environment template
├── .env.local                  # Your local environment (create this)
└── package.json
```

## 🔒 Security Checklist

- [ ] `.env.local` is in `.gitignore`
- [ ] Using publishable key (not secret key) in frontend
- [ ] HTTPS enabled in production
- [ ] Proper CORS settings in Clerk dashboard
- [ ] Test authentication flows thoroughly

## 🚀 Deployment

### Environment Variables for Production
Set these in your hosting platform:
- `VITE_CLERK_PUBLISHABLE_KEY`: Your production publishable key

### Clerk Production Configuration
1. Add production domain to allowed origins
2. Configure production OAuth redirect URLs
3. Set up webhooks if needed
4. Review security settings

## 📞 Support

- **Clerk Documentation**: [docs.clerk.com](https://docs.clerk.com)
- **Clerk Discord**: [clerk.com/discord](https://clerk.com/discord)
- **Project Issues**: Create an issue in this repository

---

Happy coding! 🎉
