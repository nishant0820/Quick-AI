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

## 📁 Project Structure

```
Quick-AI/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── WriteArticle.jsx
│   │   │   ├── BlogTitles.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── RemoveBackground.jsx
│   │   │   ├── RemoveObject.jsx
│   │   │   ├── ReviewResume.jsx
│   │   │   └── Community.jsx
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
└── README.md
```

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

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.