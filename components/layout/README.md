# Layout Components

This directory contains reusable layout components that help maintain consistency across the website and make future updates easier.

## Components

### MainLayout

The `MainLayout` component wraps your page content with the standard header and footer.

### Header

The `Header` component contains the navigation menu and logo.

### Footer

The `Footer` component contains the site footer with links, social media, and newsletter.

## How to Use

1. Import the `MainLayout` component in your page:

```tsx
import MainLayout from "@/components/layout/MainLayout"
```

2. Wrap your page content with the `MainLayout` component:

```tsx
export default function YourPage() {
  return (
    <MainLayout>
      {/* Your page content goes here */}
      <main>
        <h1>Your Page Title</h1>
        <p>Your content...</p>
      </main>
    </MainLayout>
  )
}
```

## Benefits

- **Consistency**: All pages will have the same header and footer.
- **Maintainability**: When you need to update the header or footer, you only need to update one file.
- **DRY (Don't Repeat Yourself)**: Eliminates duplication of code across pages.

## Example

See `app/example-page/page.tsx` for a complete example of how to use the MainLayout component. 