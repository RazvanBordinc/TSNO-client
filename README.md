# TSNO Frontend

## Overview
The frontend of **"Transfer Short Notes Online" (TSNO)** is built with **Next.js**, **React**, and **Tailwind CSS**. Its purpose is to provide a user-friendly interface that allows users to quickly create and retrieve notes. Users can generate unique links to access notes on any device, share them easily, and even use QR codes for seamless transfers. The frontend leverages Server-Side Rendering (SSR) to improve performance and integrates smoothly with the backend API for note management and expiration logic.

![image](https://github.com/user-attachments/assets/784e5e0e-747c-4069-aaa0-ed35ade67b82)

## Key Technologies
- **Next.js (App Router)**  
  - Offers SSR for improved performance and SEO.
  - Simplifies routing, code splitting, and API integration.

- **React**  
  - Enables a component-based architecture for maintainable, scalable frontends.

- **Tailwind CSS**  
  - Provides utility-first styling, ensuring rapid UI development.
  - Delivers responsive, mobile-first designs out of the box.

- **NPM Packages for QR Codes**  
  - Allows for quick QR code generation to share note links effortlessly.

## Features of the Frontend
- **Simple Note Creation UI:** Users can input or paste notes directly.  
- **Configurable Expiration:** Notes can expire after a single viewing or after 5 minutes if not opened.  
- **Instant Link Generation:** On creation, a unique link is generated for sharing.  
- **QR Code Generation:** Users can produce a QR code for convenient access on another device.  
- **SSR Advantages:** Pages load quickly and are immediately visible, enhancing user experience.  
- **Responsive Design:** Tailwind CSS ensures the UI adapts to all screen sizes.

## Running the Frontend
**Install Dependencies:**
```bash
npm install
```
Run Development Server:

```bash
npm run dev
```
Visit http://localhost:3000 to access the frontend.

Build for Production:

```bash
npm run build
npm start
```

The production server also runs on http://localhost:3000.

## Environment Variables

- NEXT_PUBLIC_BACKEND_URL: URL of the backend API (e.g., http://localhost:8080 for local development). Update accordingly for production.
