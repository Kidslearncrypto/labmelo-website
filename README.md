# Daily Bios Marketing Funnel

A lightweight marketing funnel for the Daily Bios app, featuring a personalized quiz and download flow.

## Features

- **Landing Page** (`/`) - Hero section with app mockup and trust indicators
- **Multi-step Quiz** (`/quiz`) - Personalized onboarding with 4 questions
- **Results Page** (`/get-the-app`) - Download links and email capture
- **Responsive Design** - Optimized for mobile (390-430px width)
- **Dark Navy Aesthetic** - Olive→copper gradients with off-white text
- **Framer Motion** - Smooth transitions and animations
- **Local Storage** - Quiz answers persist across sessions

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **React Context** (state management)

## Brand Colors

- **Primary Background**: `#0E1525` (navy)
- **Accent Gradient**: `#708238` (olive) → `#B87333` (copper)
- **Text**: `#F3EDE4` (off-white)
- **Cards**: `#121926` (dark slate, 90% opacity)
- **Font**: Syne (headlines) / system sans (body)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd join-labmelo
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Optional: Facebook Pixel ID for tracking
NEXT_PUBLIC_FB_PIXEL_ID=your_pixel_id_here

# Optional: Base URL for canonical links
NEXT_PUBLIC_BASE_URL=https://join.labmelo.com
```

## Deployment

### Vercel Deployment

1. **Deploy to Vercel**:
   - Push your code to GitHub
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project" → Import your GitHub repo
   - Deploy

2. **Add Custom Domain**:
   - In Vercel Dashboard → Project → Settings → Domains
   - Add `join.labmelo.com`
   - Add environment variables if needed

3. **DNS Configuration**:
   - Go to your DNS provider (where labmelo.com nameservers are configured)
   - Add a CNAME record:
     - **Name/Host**: `join`
     - **Value/Target**: `cname.vercel-dns.com`
     - **TTL**: Auto (or default)

4. **Wait for Propagation**:
   - DNS changes can take up to 24 hours
   - Vercel will automatically issue SSL certificate

## App Store Links

Replace the placeholder links in `/src/app/get-the-app/page.tsx`:

```typescript
// Replace these with your actual app store URLs
"https://apps.apple.com/app/idYOURID"
"https://play.google.com/store/apps/details?id=YOUR_ID"
```

## Quiz Flow

The quiz consists of 4 steps:

1. **Feel** - How do you like your stories told?
2. **Eras** - Which historical eras interest you most? (multi-select)
3. **Time** - How much time do you have each day?
4. **Goal** - What's your main goal?

Answers are stored in localStorage and used to generate personalized messages on the results page.

## File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with QuizProvider
│   ├── page.tsx             # Landing page (/)
│   ├── quiz/
│   │   └── page.tsx         # Quiz page (/quiz)
│   └── get-the-app/
│       └── page.tsx         # Results page (/get-the-app)
├── context/
│   └── QuizContext.tsx      # Quiz state management
└── utils/
    └── pixel.ts             # Facebook Pixel utilities
```

## Customization

### Colors
Update colors in `tailwind.config.ts` under the `colors` section.

### Fonts
The Syne font is loaded via Google Fonts in `globals.css`. You can change this to any other font.

### Quiz Questions
Modify the `quizSteps` array in `/src/app/quiz/page.tsx` to change questions and options.

### Animations
Framer Motion animations can be customized in each component. The main animations are:
- Fade in/out transitions
- Slide transitions between quiz steps
- Hover effects on buttons and cards

## Analytics

### Facebook Pixel (Optional)
If you have a Facebook Pixel ID:
1. Add it to your environment variables
2. Add the Facebook Pixel script to your layout
3. Use the tracking functions from `utils/pixel.ts`

### Custom Events
The app tracks:
- Quiz completion (Lead event)
- Results page view (ViewContent event)
- Email submission (CompleteRegistration event)

## Performance

- **Images**: Optimized with Next.js Image component
- **Fonts**: Loaded efficiently with Google Fonts
- **Animations**: Hardware-accelerated with Framer Motion
- **Bundle**: Tree-shaken and optimized for production

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is proprietary to Labmelo.

## Support

For questions or issues, contact the development team at Labmelo.


