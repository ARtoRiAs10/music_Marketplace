# 🎵 Music Marketplace

A full-stack music marketplace platform built with **Next.js** and **TypeScript**, where artists can showcase their tracks and fans can discover and purchase music. Features a clean storefront, audio previews, and a polished browsing experience.

🌐 **Live Demo:** [music-marketplace-k6o0.onrender.com](https://music-marketplace-k6o0.onrender.com)

---

## ✨ Features

- 🎧 **Audio Previews** — Listen to track snippets before purchasing
- 🛒 **Marketplace Storefront** — Browse and discover music from various artists
- 👤 **Artist Profiles** — Dedicated pages for artists to showcase their catalog
- 🔍 **Search & Filter** — Find music by genre, artist, or title
- 💳 **Purchase Flow** — Seamless checkout experience for buyers
- 🎨 **Modern UI** — Built with Tailwind CSS for a sleek, responsive design
- 📱 **Mobile Friendly** — Fully optimized for all devices

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Render |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ARtoRiAs10/music_Marketplace.git
cd music_Marketplace

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# Add required environment variables
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Payment Integration (if applicable)
STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key

# Database
DATABASE_URL=your_database_url
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the marketplace.

---

## 📁 Project Structure

```
music_Marketplace/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── (home)/       # Landing & browsing pages
│   │   ├── artist/       # Artist profile pages
│   │   ├── track/        # Individual track pages
│   │   └── api/          # API routes
│   ├── components/       # Reusable components
│   │   ├── player/       # Audio player component
│   │   ├── cards/        # Track & artist cards
│   │   └── ui/           # Base UI components
│   └── lib/              # Utilities & helpers
└── public/               # Static assets
```

---

## 🎯 Roadmap

- [ ] User authentication & profiles
- [ ] Payment processing with Stripe
- [ ] Artist dashboard for upload management
- [ ] Playlist creation & sharing
- [ ] Recommendations engine

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'feat: add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [Apache-2.0 License](./LICENSE).
