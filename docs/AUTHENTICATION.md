# Authentication with Clerk

This document provides a comprehensive guide to the Clerk authentication integration in the Quick-AI project.

## 📖 Overview

Quick-AI uses [Clerk](https://clerk.com/) for user authentication and management. Clerk provides a complete authentication solution with features like:

- User registration and sign-in
- Social authentication (Google, GitHub, etc.)
- Session management
- User profile management
- Multi-factor authentication
- Security and compliance

## 🔧 Setup Instructions

### 1. Create a Clerk Account

1. Visit [clerk.com](https://clerk.com/) and create an account
2. Create a new application in your Clerk Dashboard
3. Choose your authentication methods (email/password, social providers, etc.)

### 2. Get Your Clerk Keys

From your Clerk Dashboard:
1. Navigate to "API Keys" section
2. Copy your **Publishable Key** (starts with `pk_`)
3. Copy your **Secret Key** (starts with `sk_`) - for backend use

### 3. Environment Variables

Create a `.env.local` file in the `client` directory:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=pk_your_publishable_key_here
```

**Important**: Never commit your secret keys to version control. Add `.env.local` to your `.gitignore` file.

### 4. Install Clerk Dependencies

```bash
npm install @clerk/clerk-react
```

## 🏗️ Implementation Details

### 1. Provider Setup (`main.jsx`)

The application is wrapped with the `ClerkProvider` to enable authentication throughout the app:

```jsx
import { ClerkProvider } from '@clerk/clerk-react'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
)
```

**Key Features:**
- `publishableKey`: Your Clerk publishable key from environment variables
- `afterSignOutUrl`: Redirects users to home page after sign out

### 2. Navbar Authentication (`components/Navbar.jsx`)

The navbar implements conditional rendering based on authentication state:

```jsx
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
    
    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32'>
            <img src={assets.logo} alt="logo" className="w-32 sm:w-44 cursor-pointer" onClick={() => navigate('/')} />
            
            {user ? (
                <UserButton />
            ) : (
                <button onClick={openSignIn} className='flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>
                    Get Started <ArrowRight className='w-4 h-4' />
                </button>
            )}
        </div>
    )
}
```

**Components Used:**
- `useUser()`: Hook to get current user information
- `useClerk()`: Hook to access Clerk methods like `openSignIn`
- `UserButton`: Pre-built component for user profile management
- `openSignIn`: Method to open the sign-in modal

## 🎯 Authentication Flow

### 1. Unauthenticated Users
- See "Get Started" button in navbar
- Clicking opens Clerk's sign-in modal
- Can register or sign in with configured methods

### 2. Authenticated Users
- See `UserButton` in navbar with user avatar
- Can access profile settings, sign out, etc.
- Have access to protected routes

### 3. Session Management
- Clerk automatically handles session persistence
- Users remain logged in across browser sessions
- Automatic token refresh

## 🔒 Security Features

### 1. Environment Variable Protection
```jsx
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
```
Ensures the app won't run without proper configuration.

### 2. Secure Token Handling
- Clerk handles all token management
- Automatic CSRF protection
- Secure session storage

### 3. Route Protection (Recommended Implementation)

To protect routes, you can use Clerk's authentication guards:

```jsx
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  )
}

// Usage in App.jsx
<Route path='/ai' element={
  <ProtectedRoute>
    <Layout />
  </ProtectedRoute>
}>
```

## 🛠️ Available Hooks and Components

### Hooks
- `useUser()`: Access user data and loading states
- `useAuth()`: Access authentication state and methods
- `useClerk()`: Access Clerk instance and methods
- `useSession()`: Access session information

### Components
- `<UserButton />`: Pre-built user management component
- `<SignIn />`: Customizable sign-in component
- `<SignUp />`: Customizable sign-up component
- `<SignedIn>`: Render content only for authenticated users
- `<SignedOut>`: Render content only for unauthenticated users

## 🎨 Customization

### 1. Styling UserButton
```jsx
<UserButton 
  appearance={{
    elements: {
      avatarBox: "w-10 h-10",
      userButtonPopoverCard: "bg-white shadow-lg"
    }
  }}
/>
```

### 2. Custom Sign-in Page
```jsx
import { SignIn } from '@clerk/clerk-react'

const CustomSignInPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        appearance={{
          elements: {
            formButtonPrimary: "bg-blue-600 hover:bg-blue-700"
          }
        }}
      />
    </div>
  )
}
```

## 🐛 Troubleshooting

### Common Issues

1. **Missing Publishable Key Error**
   - Ensure `.env.local` file exists in client directory
   - Verify the environment variable name: `VITE_CLERK_PUBLISHABLE_KEY`
   - Restart the development server after adding environment variables

2. **Clerk Provider Not Found**
   - Ensure `ClerkProvider` wraps your entire app in `main.jsx`
   - Check that `@clerk/clerk-react` is properly installed

3. **UserButton Not Appearing**
   - Verify user is authenticated using React DevTools
   - Check console for any Clerk-related errors

### Development Tips

1. **Testing Authentication**
   - Use Clerk's development instance for testing
   - Test both sign-in and sign-up flows
   - Verify session persistence across page refreshes

2. **User Data Access**
   ```jsx
   const { user, isLoaded, isSignedIn } = useUser()
   
   if (!isLoaded) return <div>Loading...</div>
   if (!isSignedIn) return <div>Please sign in</div>
   
   return <div>Welcome, {user.firstName}!</div>
   ```

## 📚 Additional Resources

- [Clerk Documentation](https://clerk.com/docs)
- [React Integration Guide](https://clerk.com/docs/quickstarts/react)
- [Clerk Dashboard](https://dashboard.clerk.com/)
- [Authentication Patterns](https://clerk.com/docs/authentication/overview)

## 🔄 Migration and Updates

When updating Clerk:
1. Check the [changelog](https://clerk.com/changelog) for breaking changes
2. Update dependencies: `npm update @clerk/clerk-react`
3. Test authentication flows thoroughly
4. Update environment variables if needed

## 🚀 Production Deployment

1. **Environment Variables**: Set `VITE_CLERK_PUBLISHABLE_KEY` in production
2. **Domain Configuration**: Add your production domain to Clerk Dashboard
3. **HTTPS**: Ensure your production site uses HTTPS
4. **Testing**: Test all authentication flows in production environment

---

For more specific implementation questions, refer to the [Clerk documentation](https://clerk.com/docs) or create an issue in this repository.
