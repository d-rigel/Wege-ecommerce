# Wege ShopingHub - E-Commerce Application

This project is e-commerce application built with Next.js 16, featuring server-side rendering, advanced filtering, and a seamless shopping experience.

## How to Run the Project

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/d-rigel/Wege-ecommerce.git
   cd my-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Tech Stack & Architecture

### **Framework: Next.js 16 (App Router)**

I chose Next.js for several key reasons:

- **Server-Side Rendering (SSR)**: Product pages and listings are rendered on the server, improving SEO and initial page load performance
- **Static Site Generation (SSG)**: Product detail pages are pre-generated at build time for optimal performance
- **File-based Routing**: Intuitive routing structure with the App Router
- **Image Optimization**: Built-in `next/image` component for automatic image optimization
- **TypeScript Support**: First-class TypeScript integration out of the box

## Styling:

I used Tailwind CSS for my styling because it is

- Faster development with no need to write custom CSS
- Smaller CSS bundle sizes compared to traditional CSS frameworks
- Consistent spacing, colors, and typography across the entire application
- Easy maintenance and scalability

## State Management: React Context API

I used React context API for my state management because is simple and light weight since is inbuit and the app is not too big.

## Data Loading Strategy

### **Server-Side Rendering (SSR)**

I implemented SSR on key pages:

**Home Page (`app/page.tsx`):**

- Products are filtered on the server based on URL parameters
- Initial HTML includes fully rendered product listings
- Improves SEO and provides instant content visibility

**Product Detail Page (`app/products/[id]/page.tsx`):**

- Uses `generateStaticParams()` for Static Site Generation
- All product pages are pre-rendered at build time
- Dynamic metadata generation for optimal SEO

### **Bonus Features Implemented**

- **Server-Side Rendering (SSR)**: Product pages and listings are rendered on the server, improving SEO and initial page load performance
- **Debounced Search**: 300ms delay prevents excessive filtering during typing
- **URL Parameter Persistence**: Filters and search queries are stored in the URL
- **Optimistic Updates**: Cart updates happen instantly on the client
