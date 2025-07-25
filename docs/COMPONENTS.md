# Component Documentation

This document provides detailed information about each component in the Quick-AI application.

## 🧩 Component Overview

The Quick-AI application is built with a modular component architecture, featuring both layout and functional components that work together to create a seamless user experience.

## 📱 Layout Components

### **Navbar** (`components/Navbar.jsx`)

The main navigation component that provides site-wide navigation and authentication controls.

#### **Props & Dependencies**
- No props required
- Uses React Router for navigation
- Integrates with Clerk for authentication

#### **Features**
- **Fixed Positioning**: Stays at top of viewport with backdrop blur
- **Authentication Integration**: Shows UserButton or Sign In button
- **Logo Navigation**: Click to return to home page
- **Responsive Design**: Adapts padding and sizing across breakpoints

#### **Code Structure**
```jsx
const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
    
    return (
        <div className='fixed z-5 w-full backdrop-blur-2xl...'>
            <img onClick={() => navigate('/')} />
            {user ? <UserButton /> : <SignInButton />}
        </div>
    )
}
```

#### **Styling Details**
- **Background**: `backdrop-blur-2xl` for glassmorphism effect
- **Z-Index**: `z-5` to stay above other content
- **Spacing**: `py-3 px-4 sm:px-20 xl:px-32` for responsive padding
- **Layout**: Flexbox with space-between for logo and auth controls

#### **Usage Example**
```jsx
import Navbar from '../components/Navbar'

const Layout = () => (
  <>
    <Navbar />
    <main>{/* Page content */}</main>
  </>
)
```

---

### **Footer** (`components/Footer.jsx`)

Comprehensive site footer with company information and newsletter signup.

#### **Features**
- **Multi-Section Layout**: Company info, links, newsletter
- **Newsletter Subscription**: Email input with subscribe button
- **Responsive Design**: Stacks vertically on mobile
- **Brand Integration**: Logo and company description

#### **Sections**
1. **Brand Section**: Logo and company description
2. **Company Links**: Navigation links (Home, About, Contact, Privacy)
3. **Newsletter**: Email subscription form
4. **Copyright**: Legal information

#### **Styling Patterns**
```css
/* Main container */
.footer-container {
  @apply px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full text-gray-500 mt-20;
}

/* Newsletter input */
.newsletter-input {
  @apply border border-gray-500/30 placeholder-gray-500 focus:ring-2 ring-indigo-600 outline-none w-full max-w-64 h-9 rounded px-2;
}
```

---

## 🎯 Landing Page Components

### **Hero** (`components/Hero.jsx`)

The main hero section that captures user attention and drives conversions.

#### **Features**
- **Background Image**: Custom gradient background
- **Responsive Typography**: Scales from mobile to desktop
- **Call-to-Action Buttons**: Primary and secondary actions
- **Trust Indicators**: User count and social proof
- **Full Viewport Height**: `min-h-screen` for impact

#### **Typography Scale**
```jsx
// Responsive heading sizes
className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl"

// Responsive body text
className="max-w-xs sm:max-w-lg 2xl:max-w-xl max-sm:text-xs"
```

#### **Button Actions**
- **Primary**: "Start Creating Now" → `/ai` dashboard
- **Secondary**: "Watch Demo" → Demo functionality
- **Interactive States**: Hover scale and active feedback

#### **Background Integration**
```jsx
// Custom background with Tailwind
className='bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat'
```

---

### **AiTools** (`components/AiTools.jsx`)

Showcase section displaying available AI tools with interactive navigation.

#### **Data Structure**
Tools are defined in `assets/assets.js`:
```javascript
export const AiToolsData = [
  {
    title: "Write Article",
    description: "Generate high-quality articles with AI assistance",
    Icon: PenIcon, // Lucide React icon
    bg: { from: "#667eea", to: "#764ba2" }, // Gradient colors
    path: "/ai/write-article" // Navigation path
  }
  // ... more tools
]
```

#### **Features**
- **Dynamic Icon Rendering**: Each tool has custom gradient background
- **Authentication Gating**: Only authenticated users can navigate
- **Hover Animations**: Cards lift on hover with smooth transitions
- **Grid Layout**: Responsive grid that adapts to screen size

#### **Icon Styling**
```jsx
<tool.Icon 
  className='w-12 h-12 p-3 text-white rounded-xl' 
  style={{
    background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`
  }} 
/>
```

#### **Authentication Logic**
```jsx
onClick={() => user && navigate(tool.path)}
// Only navigates if user is authenticated
```

---

### **Testimonial** (`components/Testimonial.jsx`)

Social proof section featuring user reviews and ratings.

#### **Data Structure**
```javascript
const testimonialData = [
  {
    image: "https://...", // User profile image
    name: "John Doe",
    title: "Marketing Director, TechCorp",
    content: "Review content...",
    rating: 4 // 1-5 star rating
  }
]
```

#### **Features**
- **Star Rating System**: Visual 1-5 star display
- **User Profiles**: Image, name, and professional title
- **Card Layout**: Hover effects and shadow styling
- **Responsive Grid**: Adapts from single to multi-column

#### **Star Rating Implementation**
```jsx
<div className="flex items-center gap-1">
  {Array(5).fill(0).map((_, index) => (
    <img 
      key={index} 
      src={index < testimonial.rating ? assets.star_icon : assets.star_dull_icon} 
      className="w-4 h-4"
    />
  ))}
</div>
```

#### **Card Styling**
```css
.testimonial-card {
  @apply p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition duration-300 cursor-pointer;
}
```

---

### **Plan** (`components/Plan.jsx`)

Pricing section integrated with Clerk's subscription management.

#### **Features**
- **Clerk Integration**: Uses `PricingTable` component
- **Responsive Design**: Mobile-optimized layout
- **Centered Layout**: Focused presentation
- **Subscription Management**: Handled by Clerk

#### **Implementation**
```jsx
import { PricingTable } from '@clerk/clerk-react'

const Plan = () => (
  <div className='max-w-2xl mx-auto z-20 my-30'>
    <div className="text-center">
      <h2>Choose Your Plan</h2>
      <p>Pricing description...</p>
    </div>
    <div className="mt-14 max-sm:mx-8">
      <PricingTable />
    </div>
  </div>
)
```

#### **Clerk Configuration**
- Pricing plans configured in Clerk Dashboard
- Automatic subscription handling
- Payment processing included
- User billing management

---

## 🎨 Styling Conventions

### **Spacing System**
- **Container Padding**: `px-4 sm:px-20 xl:px-32`
- **Section Spacing**: `my-24` for vertical rhythm
- **Card Padding**: `p-8` for internal spacing
- **Element Gaps**: `gap-4`, `gap-2` for consistent spacing

### **Color Palette**
```css
/* Primary Colors */
.text-primary { color: var(--primary-color); }
.bg-primary { background-color: var(--primary-color); }

/* Semantic Colors */
.text-slate-700 { color: #334155; } /* Headings */
.text-gray-500 { color: #6b7280; }  /* Body text */
.text-gray-600 { color: #4b5563; }  /* Secondary text */

/* Background Colors */
.bg-[#FDFDFE] { background-color: #FDFDFE; } /* Card backgrounds */
```

### **Typography Scale**
```css
/* Responsive headings */
.heading-xl {
  @apply text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold;
}

.heading-lg {
  @apply text-[42px] font-semibold text-slate-700;
}

.heading-md {
  @apply text-lg font-semibold;
}
```

### **Interactive States**
```css
/* Hover effects */
.hover-lift {
  @apply hover:-translate-y-1 transition-all duration-300;
}

.hover-scale {
  @apply hover:scale-102 active:scale-95 transition;
}

/* Focus states */
.focus-ring {
  @apply focus:ring-2 ring-indigo-600 outline-none;
}
```

## 🔧 Component Development Guidelines

### **Creating New Components**

1. **File Structure**
   ```
   components/
   ├── ComponentName.jsx
   └── index.js (optional barrel export)
   ```

2. **Component Template**
   ```jsx
   import React from 'react'
   import { useUser } from '@clerk/clerk-react' // If auth needed
   
   const ComponentName = ({ prop1, prop2 }) => {
     const { user } = useUser() // Optional
     
     return (
       <div className="px-4 sm:px-20 xl:px-32 my-24">
         {/* Component content */}
       </div>
     )
   }
   
   export default ComponentName
   ```

3. **Styling Guidelines**
   - Use Tailwind utility classes
   - Follow established spacing patterns
   - Implement responsive design
   - Add hover and focus states
   - Use consistent color scheme

### **Testing Components**

1. **Visual Testing**
   - Test on multiple screen sizes
   - Verify hover and focus states
   - Check color contrast
   - Validate responsive behavior

2. **Functional Testing**
   - Test authentication states
   - Verify navigation works
   - Check form submissions
   - Test error states

### **Performance Considerations**

1. **Image Optimization**
   - Use appropriate image formats
   - Implement lazy loading
   - Optimize file sizes

2. **Animation Performance**
   - Use CSS transforms
   - Leverage GPU acceleration
   - Minimize layout thrashing

3. **Bundle Size**
   - Import only needed dependencies
   - Use tree shaking
   - Lazy load components when possible

---

## 📚 Additional Resources

- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)
- **Clerk Components**: [clerk.com/docs/components](https://clerk.com/docs/components)
- **React Router**: [reactrouter.com](https://reactrouter.com)

For specific implementation questions or component modifications, refer to the individual component files and follow the established patterns.
