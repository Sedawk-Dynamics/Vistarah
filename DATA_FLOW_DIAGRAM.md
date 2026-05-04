# Vistarah Global Website - Data Flow Diagram (DFD)

## System Overview
This DFD illustrates how data flows through the Vistarah Global website, from user interactions through various pages and components to backend services and external integrations.

---

## Level 0: System Context Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                          VISTARAH GLOBAL                              │
│                        Website Application                            │
│                                                                       │
│  ┌─────────────┬──────────────┬──────────────┬────────────────────┐  │
│  │ Homepage    │ Buyer Page   │ Supplier     │ Admin/Backend      │  │
│  │ Blog        │ Products     │ Certifications│ Contact Forms      │  │
│  │ About/Why   │ Careers      │ Contact      │ Newsletter         │  │
│  └─────────────┴──────────────┴──────────────┴────────────────────┘  │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
         ↓                                    ↓
    ┌──────────────┐              ┌──────────────────┐
    │   Users      │              │ External Services│
    │  (Browsers)  │              │  (Email, etc.)   │
    └──────────────┘              └──────────────────┘
```

---

## Level 1: Main Data Flows

### User Session Data Flow
```
┌─────────────────────────────────────┐
│         Web Browser (Client)         │
│  - Home Page                         │
│  - Product Pages                     │
│  - Contact Forms                     │
│  - Blog                              │
└─────────────────────────────────────┘
          ↓ HTTP/HTTPS
┌─────────────────────────────────────┐
│      Next.js Application Layer      │
│  - Page Rendering (Server/Client)  │
│  - Route Handling                   │
│  - Component Logic                  │
└─────────────────────────────────────┘
          ↓ Data Request
┌─────────────────────────────────────┐
│      Static Content & Assets        │
│  - CSS/JavaScript                   │
│  - Images (Logo, Products)          │
│  - Fonts                            │
└─────────────────────────────────────┘
```

---

## Level 2: Detailed Component Data Flow

### A. HOMEPAGE FLOW
```
┌──────────────────────┐
│  Homepage (index)    │
└──────────────────────┘
      ↓
┌──────────────────────────────────────────────────┐
│         Homepage Components                      │
├──────────────────────────────────────────────────┤
│ ├─ HeroCarousel                                  │
│ │   ├─ Slide Data (images, text, CTAs)         │
│ │   ├─ Navigation State (current, progress)    │
│ │   └─ Auto-play Timer                         │
│ │                                               │
│ ├─ TrustedBranding                              │
│ │   ├─ Certification Logos (6 badges)          │
│ │   ├─ Scroll Animation State                  │
│ │   └─ Badge Data Structure                    │
│ │                                               │
│ ├─ ProductsShowcase                             │
│ │   ├─ Product Categories (Whole, Powders)    │
│ │   ├─ Product Grid Data                       │
│ │   └─ Filter Selection State                  │
│ │                                               │
│ ├─ SupplierTeaser                               │
│ │   ├─ Farmer Stories (6 stories)              │
│ │   ├─ Onboarding Steps                        │
│ │   └─ Statistics/Benefits                     │
│ │                                               │
│ ├─ MissionVisionValues                          │
│ │   ├─ Mission Statement                       │
│ │   ├─ Vision Statement                        │
│ │   └─ Core Values (3-5 values)               │
│ │                                               │
│ ├─ CertificationCards                           │
│ │   ├─ Card Data (title, logo, description)   │
│ │   └─ Grid Layout State                       │
│ │                                               │
│ └─ CTA Banner                                   │
│     └─ Call-to-Action Buttons (links)          │
└──────────────────────────────────────────────────┘
```

---

## Level 3: PAGE-SPECIFIC DATA FLOWS

### B. CONTACT PAGE FLOW
```
┌─────────────────────┐
│   Contact Page      │
└─────────────────────┘
      ↓
┌─────────────────────────────────────┐
│   Tab Selection State               │
│  (Buyers/Suppliers/Investors/General)
└─────────────────────────────────────┘
      ↓
┌────────────────────────────────────────────────┐
│  Form Data Structure                           │
├────────────────────────────────────────────────┤
│  {                                             │
│    companyName: string                         │
│    contactName: string                         │
│    email: string                               │
│    phone: string                               │
│    country: string                             │
│    productsOfInterest: string                  │
│    message: string                             │
│  }                                             │
└────────────────────────────────────────────────┘
      ↓ Form Submission
┌────────────────────────────────────────────────┐
│  Validation & Processing                       │
│  - Input Validation                            │
│  - Error State Management                      │
│  - Loading State                               │
└────────────────────────────────────────────────┘
      ↓
┌────────────────────────────────────────────────┐
│  Backend/External Service                      │
│  - Email Service (Node mailer / SendGrid)     │
│  - Email Storage/Logging                       │
│  - Notification (success/error)                │
└────────────────────────────────────────────────┘
```

---

### C. BLOG PAGE FLOW
```
┌─────────────────────┐
│   Blog Page         │
└─────────────────────┘
      ↓
┌────────────────────────────────────────────┐
│  Blog State Management                     │
├────────────────────────────────────────────┤
│  - Search Input (query state)              │
│  - Category Filter (All/News/Updates)      │
│  - Pagination (current page)               │
│  - Newsletter Subscription                 │
└────────────────────────────────────────────┘
      ↓
┌────────────────────────────────────────────┐
│  Blog Data Structure                       │
├────────────────────────────────────────────┤
│  Posts: [                                  │
│    {                                       │
│      id: string                            │
│      slug: string                          │
│      title: string                         │
│      excerpt: string                       │
│      author: string                        │
│      category: string                      │
│      date: string                          │
│      readTime: string                      │
│      featured: boolean                     │
│      image: string                         │
│    }                                       │
│  ]                                         │
└────────────────────────────────────────────┘
      ↓
┌────────────────────────────────────────────┐
│  Filtered/Searched Results                 │
│  - Featured Post Display (if applicable)   │
│  - Grid Display (3 columns)                │
│  - Newsletter CTA                          │
└────────────────────────────────────────────┘
```

---

### D. PRODUCT PAGE FLOW
```
┌─────────────────────┐
│  Products Page      │
└─────────────────────┘
      ↓
┌────────────────────────────────────────┐
│  Product Category Tabs                 │
│  - Whole Spices                        │
│  - Powders                             │
│  - Spice Blends                        │
└────────────────────────────────────────┘
      ↓
┌────────────────────────────────────────┐
│  Product List Data                     │
├────────────────────────────────────────┤
│  [                                     │
│    {                                   │
│      name: string                      │
│      description: string               │
│      category: string                  │
│      image: string                     │
│      certifications: string[]          │
│      benefits: string[]                │
│    }                                   │
│  ]                                     │
└────────────────────────────────────────┘
      ↓
┌────────────────────────────────────────┐
│  Rendered Product Cards                │
│  - Product Image & Info                │
│  - CTA Buttons (View/Inquire)         │
└────────────────────────────────────────┘
```

---

## Level 4: EXTERNAL INTEGRATIONS

```
┌──────────────────────────────────────────────────────────────┐
│          External Services & Integrations                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────┐        ┌──────────────────┐           │
│  │  Email Service  │        │  Analytics       │           │
│  │  (Newsletter    │        │  (Vercel         │           │
│  │   Subscription) │        │   Analytics)     │           │
│  └────────┬────────┘        └────────┬─────────┘           │
│           │                          │                      │
│  ┌────────▼────────┐        ┌────────▼─────────┐           │
│  │  Subscriber     │        │ User Behavior    │           │
│  │  Database       │        │ Tracking         │           │
│  └─────────────────┘        └──────────────────┘           │
│                                                              │
│  ┌─────────────────┐        ┌──────────────────┐           │
│  │  Form Handling  │        │  Image CDN       │           │
│  │  (Contact Form) │        │  (Vercel Blob)   │           │
│  └────────┬────────┘        └────────┬─────────┘           │
│           │                          │                      │
│  ┌────────▼────────┐        ┌────────▼─────────┐           │
│  │  Email Queue    │        │ Static Assets    │           │
│  │  / API Call     │        │ (Logo, Images)   │           │
│  └─────────────────┘        └──────────────────┘           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Level 5: DATA PERSISTENCE & STATE MANAGEMENT

### Client-Side State
```
┌─────────────────────────────────────────┐
│  React Component State (useState)       │
├─────────────────────────────────────────┤
│  ├─ Current page/route                  │
│  ├─ User form inputs                    │
│  ├─ UI toggle states (search, filters)  │
│  ├─ Carousel position                   │
│  ├─ Tab selection                       │
│  └─ Loading/error states                │
└─────────────────────────────────────────┘
```

### Session Data
```
┌─────────────────────────────────────────┐
│  Browser Storage (if applicable)        │
├─────────────────────────────────────────┤
│  ├─ Theme preference (light/dark)       │
│  ├─ User preferences                    │
│  └─ Session tracking                    │
└─────────────────────────────────────────┘
```

---

## Level 6: REQUEST/RESPONSE FLOW DIAGRAM

```
                    HTTP REQUEST
┌──────────────┐                        ┌──────────────┐
│   Browser    │  ─────────────────────→│  Next.js     │
│   (Client)   │   (URL, Headers,       │  (Server)    │
│              │    Body)               │              │
└──────────────┘                        └──────────────┘
       ▲                                        │
       │                                        │ Processing:
       │                                        │ - Route matching
       │                                        │ - Component rendering
       │                                        │ - API calls (if needed)
       │                                        ▼
       │ HTTP RESPONSE                 ┌──────────────┐
       └────────────────────────────────│ HTML/JSON    │
                                        │ CSS/JS       │
                                        │ Assets       │
                                        └──────────────┘
```

---

## Key Data Entities

### 1. User/Visitor
- Session ID
- Page visits
- Form submissions
- Interaction data

### 2. Content
- Blog posts (title, slug, content, author, date, category)
- Products (name, category, description, image, certifications)
- Static pages (about, why-us, certifications, careers)

### 3. Forms
- Contact form submissions (name, email, phone, message)
- Newsletter subscriptions (email)
- Inquiry forms (buyer/supplier/investor/general)

### 4. Media Assets
- Hero carousel images
- Product images
- Logo/certification badges
- Background images

---

## Data Flow Summary Table

| Source | Process | Destination | Data Type |
|--------|---------|-------------|-----------|
| User | Browse | Page Component | HTTP GET |
| Component | Render | Browser | HTML/CSS/JS |
| User | Fill Form | Validation | Form Data |
| Form Data | Submit | API/Email Service | JSON/Email |
| Blog Data | Filter/Search | Display | Filtered Posts |
| Contact Form | Process | Email Queue | Submission Record |
| Analytics | Track | Vercel Analytics | Event Data |
| Navigation | Route | Page Component | Route Params |

---

## Technical Stack for Data Flow

- **Frontend Framework**: Next.js 16 (React 19)
- **Styling**: Tailwind CSS v4
- **State Management**: React useState/useCallback
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Images**: Next.js Image component + Vercel Blob
- **Analytics**: Vercel Analytics
- **UI Components**: shadcn/ui (Radix UI + Tailwind)
- **Hosting**: Vercel
- **Static Generation**: Next.js App Router

---

## Key Data Flows Identified

1. **Hero Carousel**: Auto-rotation with image and text data flowing from state to display
2. **Form Submission**: User input → Validation → Email Service → Success/Error Response
3. **Blog Search/Filter**: User query → Filter logic → Filtered results display
4. **Product Categories**: User tab click → Filter products → Grid display update
5. **Navigation**: User click → Route change → New page data load
6. **Analytics**: User action → Event tracking → Vercel Analytics service

---

## Potential Data Flow Improvements

1. Add backend API routes for form submissions (currently needs email service integration)
2. Implement database for blog posts (currently static)
3. Add user authentication for subscriber management
4. Create admin dashboard for content management
5. Implement real-time notifications for form submissions
6. Add API for product catalog management
7. Create feedback/review system for products

