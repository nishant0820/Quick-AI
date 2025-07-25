# Quick-AI

A modern AI-powered content creation platform built with React and Vite, featuring user authentication through Clerk.

## 🚀 Features

- **User Authentication**: Secure authentication and user management with Clerk
- **AI Content Generation**: Create articles, blog titles, and various content types
- **Image Processing**: Generate images, remove backgrounds, and remove objects
- **Resume Review**: AI-powered resume analysis and feedback
- **Community**: Connect with other users and share content
- **Responsive Design**: Modern UI with Tailwind CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM v7
- **Authentication**: Clerk
- **Styling**: Tailwind CSS (assumed)
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Clerk account for authentication

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/nishant0820/Quick-AI.git
cd Quick-AI
```

2. Navigate to the client directory:
```bash
cd client
```

3. Install dependencies:
```bash
npm install
```

4. Install Clerk for authentication:
```bash
npm install @clerk/clerk-react
```

5. Set up environment variables (see Authentication Setup below)

6. Start the development server:
```bash
npm run dev
```

## 🔐 Authentication Setup

This project uses Clerk for user authentication. See [AUTHENTICATION.md](./docs/AUTHENTICATION.md) for detailed setup instructions.

## 🚀 Quick Development Guide

### **Adding New Components**
1. Create component in `src/components/`
2. Follow the established patterns:
   ```jsx
   import React from 'react'
   import { useUser } from '@clerk/clerk-react' // If auth needed
   
   const NewComponent = () => {
     const { user } = useUser() // Optional
     
     return (
       <div className="section"> {/* Use established spacing */}
         {/* Component content */}
       </div>
     )
   }
   
   export default NewComponent
   ```

### **Adding New AI Tools**
1. Update `assets/assets.js` with new tool data:
   ```jsx
   {
     title: "New Tool",
     description: "Tool description",
     Icon: IconComponent,
     bg: { from: "#color1", to: "#color2" },
     path: "/ai/new-tool"
   }
   ```
2. Create corresponding page component
3. Add route in `App.jsx`

### **Styling Guidelines**
- Use Tailwind CSS utility classes
- Follow responsive design patterns
- Maintain consistent spacing and typography
- Use established color scheme
- Implement hover and focus states

### **Performance Optimizations**
- Components use React functional components
- Clerk handles authentication state efficiently
- Image assets are optimized
- CSS animations use GPU acceleration
- Responsive images with proper sizing

## 🔧 Environment Configuration

### **Required Environment Variables**
```env
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
```

### **Optional Configuration**
```env
VITE_CLERK_DOMAIN=your-domain.clerk.accounts.dev
VITE_CLERK_AFTER_SIGN_IN_URL=/ai
VITE_CLERK_AFTER_SIGN_UP_URL=/ai
```

## 📱 Mobile Responsiveness

All components are fully responsive:

- **Navbar:** Adjusts padding and logo size
- **Hero:** Scales typography and button layout
- **AiTools:** Grid adapts from 1 to 3 columns
- **Testimonials:** Stack vertically on mobile
- **Footer:** Collapses to single column
- **Plan:** Mobile-optimized pricing display

## 🎨 Design System

### **Component Variants**
```jsx
// Button variants
const buttonVariants = {
  primary: "bg-primary text-white",
  secondary: "bg-white border border-gray-300",
  ghost: "bg-transparent hover:bg-gray-100"
}

// Card variants
const cardVariants = {
  default: "bg-[#FDFDFE] shadow-lg border border-gray-100",
  elevated: "bg-white shadow-xl border-0",
  outlined: "bg-transparent border-2 border-gray-200"
}
```

### **Icon Integration**
- Uses Lucide React for consistent iconography
- Custom gradients for tool icons
- Proper sizing and accessibility

## 📁 Project Structure

```
Quick-AI/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx          # Navigation with authentication
│   │   │   ├── Hero.jsx            # Landing page hero section
│   │   │   ├── AiTools.jsx         # AI tools showcase
│   │   │   ├── Testimonial.jsx     # User testimonials
│   │   │   ├── Plan.jsx            # Pricing plans with Clerk
│   │   │   └── Footer.jsx          # Site footer
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Layout.jsx          # Protected layout
│   │   │   ├── Dashboard.jsx       # Main dashboard
│   │   │   ├── WriteArticle.jsx    # Article writing tool
│   │   │   ├── BlogTitles.jsx      # Blog title generator
│   │   │   ├── GenerateImages.jsx  # Image generation
│   │   │   ├── RemoveBackground.jsx # Background removal
│   │   │   ├── RemoveObject.jsx    # Object removal
│   │   │   ├── ReviewResume.jsx    # Resume review
│   │   │   └── Community.jsx       # Community features
│   │   ├── assets/
│   │   │   └── assets.js           # Asset imports and data
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # Entry point with Clerk
│   ├── package.json
│   └── vite.config.js
├── docs/
│   ├── AUTHENTICATION.md           # Clerk auth documentation
│   └── SETUP.md                    # Developer setup guide
└── README.md
```

## 🧩 Component Architecture

### 🚀 Landing Page Components

#### **Navbar** (`components/Navbar.jsx`)
The main navigation component with authentication integration:

- **Features:**
  - Fixed position with backdrop blur effect
  - Logo click navigation to home
  - Conditional rendering based on authentication state
  - Clerk UserButton for authenticated users
  - "Get Started" button for unauthenticated users

- **Authentication Integration:**
  ```jsx
  const { user } = useUser()
  const { openSignIn } = useClerk()
  
  // Conditional rendering
  {user ? <UserButton /> : <GetStartedButton />}
  ```

- **Responsive Design:** Adapts from mobile (`px-4`) to desktop (`xl:px-32`)

#### **Hero** (`components/Hero.jsx`)
Eye-catching landing section with call-to-action:

- **Features:**
  - Gradient background with custom image
  - Large, responsive typography
  - Primary and secondary action buttons
  - Trust indicator with user count
  - Responsive text sizing (3xl to 7xl)

- **Key Actions:**
  - "Start Creating Now" → Navigates to `/ai` dashboard
  - "Watch Demo" → Placeholder for demo functionality

#### **AiTools** (`components/AiTools.jsx`)
Showcase of available AI tools with navigation:

- **Features:**
  - Grid layout of tool cards
  - Hover animations and transitions
  - Click navigation to specific tools
  - Authentication-aware routing
  - Dynamic icon rendering with gradients

- **Data Structure:**
  ```jsx
  // Each tool contains:
  {
    title: "Tool Name",
    description: "Tool description",
    Icon: LucideIcon,
    bg: { from: "#color1", to: "#color2" },
    path: "/ai/tool-path"
  }
  ```

#### **Testimonial** (`components/Testimonial.jsx`)
Social proof section with user reviews:

- **Features:**
  - Star rating system (1-5 stars)
  - User profile integration
  - Responsive card layout
  - Hover effects and animations
  - Placeholder user data

- **Content Structure:**
  - User image, name, and title
  - Review content with quotes
  - Visual star ratings
  - Card-based responsive design

#### **Plan** (`components/Plan.jsx`)
Pricing integration with Clerk's pricing table:

- **Features:**
  - Clerk PricingTable component integration
  - Responsive design with mobile optimization
  - Centered layout with descriptive text
  - Seamless subscription management

- **Clerk Integration:**
  ```jsx
  import { PricingTable } from '@clerk/clerk-react'
  <PricingTable />
  ```

#### **Footer** (`components/Footer.jsx`)
Comprehensive site footer with newsletter signup:

- **Features:**
  - Company information and branding
  - Navigation links
  - Newsletter subscription form
  - Responsive multi-column layout
  - Copyright information

- **Sections:**
  - Company links (Home, About, Contact, Privacy)
  - Newsletter subscription with email input
  - Brand description and logo

## 🔗 Routes

- `/` - Home page
- `/ai` - Main application layout with nested routes:
  - `/ai` - Dashboard (default)
  - `/ai/write-article` - Article writing tool
  - `/ai/blog-title` - Blog title generator
  - `/ai/generate-images` - Image generation
  - `/ai/remove-background` - Background removal tool
  - `/ai/remove-object` - Object removal tool
  - `/ai/review-resume` - Resume review service
  - `/ai/community` - Community page

## 🎨 UI/UX Design Patterns

### **Responsive Design System**
- **Mobile First:** All components start with mobile styles
- **Breakpoints:** `sm:`, `md:`, `lg:`, `xl:`, `2xl:` for progressive enhancement
- **Spacing:** Consistent padding with `px-4 sm:px-20 xl:px-32` pattern
- **Typography:** Responsive text scaling from `text-3xl` to `text-7xl`

### **Color Scheme**
- **Primary:** Custom primary color for CTAs and branding
- **Background:** Light neutral tones (`#FDFDFE`, gradients)
- **Text:** Semantic colors (`text-slate-700`, `text-gray-500`, `text-gray-600`)
- **Borders:** Subtle gray borders (`border-gray-100`, `border-gray-300`)

### **Interactive Elements**
- **Hover Effects:** Scale transforms (`hover:scale-102`, `hover:-translate-y-1`)
- **Active States:** Scale feedback (`active:scale-95`)
- **Transitions:** Smooth animations (`transition-all duration-300`)
- **Focus States:** Ring styles for accessibility (`focus:ring-2 ring-indigo-600`)

## 🛠️ Component Usage Examples

### **Using Navbar in Pages**
```jsx
import Navbar from '../components/Navbar'

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Page content */}
    </>
  )
}
```

### **Integrating Hero Section**
```jsx
import Hero from '../components/Hero'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      {/* Additional sections */}
    </div>
  )
}
```

### **AI Tools Navigation**
```jsx
// Tools automatically navigate based on user authentication
// Define tools in assets/assets.js:
export const AiToolsData = [
  {
    title: "Write Article",
    description: "Generate high-quality articles with AI",
    Icon: PenIcon,
    bg: { from: "#667eea", to: "#764ba2" },
    path: "/ai/write-article"
  }
  // ... more tools
]
```

### **Customizing Testimonials**
```jsx
// Update testimonial data in Testimonial.jsx:
const dummyTestimonialData = [
  {
    image: "user-image-url",
    name: "User Name",
    title: "User Title",
    content: "User review content",
    rating: 5 // 1-5 stars
  }
]
```

## 🔧 Styling and Customization

### **Tailwind CSS Classes Used**
- **Layout:** `flex`, `grid`, `max-w-*`, `mx-auto`, `justify-center`
- **Spacing:** `p-8`, `m-4`, `mt-10`, `gap-4`, `space-y-2`
- **Typography:** `font-semibold`, `text-lg`, `leading-[1.2]`
- **Effects:** `shadow-lg`, `backdrop-blur-2xl`, `bg-gradient-*`
- **Responsive:** `max-sm:`, `sm:`, `md:`, `lg:`, `xl:`, `2xl:`

### **Custom Styling Patterns**
```css
/* Card styling pattern */
.card {
  @apply p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer;
}

/* Button styling pattern */
.primary-button {
  @apply bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer;
}

/* Section spacing pattern */
.section {
  @apply px-4 sm:px-20 xl:px-32 my-24;
}
```

## 🎯 Authentication Flow Integration

### **Component-Level Auth Checks**
```jsx
// In AiTools.jsx - Tool navigation
onClick={() => user && navigate(tool.path)}

// In Hero.jsx - Dashboard access
onClick={() => navigate('/ai')} // Protected route

// In Navbar.jsx - Conditional rendering
{user ? <UserButton /> : <SignInButton />}
```

### **Protected Navigation**
- Unauthenticated users see "Get Started" prompts
- Authenticated users get direct access to tools
- Smooth transition between auth states

## 📚 Additional Documentation

- **[Authentication Setup](./docs/AUTHENTICATION.md)** - Comprehensive Clerk integration guide
- **[Developer Setup](./docs/SETUP.md)** - Quick start guide for developers  
- **[Component Documentation](./docs/COMPONENTS.md)** - Detailed component reference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Development Guidelines**
- Follow the established component patterns
- Maintain responsive design principles
- Use Tailwind CSS utility classes
- Implement proper authentication checks
- Test across different screen sizes

### **Code Style**
- Use functional components with hooks
- Follow naming conventions
- Add proper TypeScript types (if applicable)
- Include JSDoc comments for complex functions
- Maintain consistent file structure

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.