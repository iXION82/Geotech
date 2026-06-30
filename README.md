# Geotechnical Engineering Website | IIT ISM Dhanbad

This is the official website for the **Geotechnical Engineering** section and the **Indian Geotechnical Society (IGS) Student Chapter** at **IIT ISM Dhanbad**.

Built with modern web technologies, this project provides comprehensive information about the department, its laboratories, ongoing research work, entry facilities, events, and the student chapter.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [next/font/google](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter & Playfair Display)

## 📂 Project Structure

```text
my-app/
├── app/                  # Next.js App Router (Pages & Layout)
│   ├── contact/          # Contact Page
│   ├── events/           # Events Page
│   ├── igs/              # Indian Geotechnical Society Info
│   ├── members/          # Members and Faculty
│   ├── student-chapter/  # Student Chapter Details
│   ├── layout.tsx        # Global Layout (Fonts & Animated Topography)
│   └── page.tsx          # Landing Page (Hero, About, Labs, Research, etc.)
├── components/           # Reusable React Components
│   ├── sections/         # Page Sections (Hero, About, Labs, Navbar, Footer, etc.)
│   └── ui/               # Interactive UI Elements (AnimatedTopography, ParallaxImage)
├── public/               # Static Assets
└── package.json          # Project Dependencies & Scripts
```

## ✨ Features

- **Animated Topography Background**: Dynamic, theme-appropriate background effects spanning the website.
- **Parallax & Scroll Animations**: Smooth visual effects on images and sections using Framer Motion.
- **Responsive Design**: Fully responsive layout tailored for mobile, tablet, and desktop devices.
- **Modern Typography**: Elegant combination of Inter (sans-serif) and Playfair Display (serif).

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Navigate to the project directory:
   ```bash
   cd my-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the website locally.

## 📝 Scripts

- `npm run dev`: Starts the development server with Hot Module Replacement.
- `npm run build`: Compiles the application for production deployment.
- `npm run start`: Serves the built production app.
- `npm run lint`: Runs ESLint to analyze the code for potential errors.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.
