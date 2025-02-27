# Modern Next.js Design System Components

A collection of type-safe, accessible React components built for Next.js 15, implementing a comprehensive design system with performance and accessibility in mind.

## Tech Stack

- Next.js 15.1.2
- React 19.0.0
- TypeScript 5
- Tailwind CSS 3.4.1
- clsx 2.1.1
- tailwind-merge 2.6.0

## Features

- Type-safe component implementations
- Mobile-first responsive design
- Optimized image handling via Next.js Image component
- Consistent typography system
- Accessible by default
- Modern React patterns and best practices

## Project Structure

```bash
src/
  components/    # Reusable UI components
  styles/        # Typography and Tailwind configurations
  types/         # TypeScript definitions
  utils/         # Utility functions
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

## Design System

The project implements a comprehensive design system with:

- Responsive breakpoints:

  - Mobile (default): 0-480px
  - Tablet (sm): 481px-768px
  - Desktop (md): 769px-1440px
  - Ultrawide (lg): ≥1440px

- Typography scale:

  - Label text (Geist Mono)
  - Body text (Hauora, Inter, HanziPen)
  - Heading variations (small, medium, large)

- Custom color palette
- Consistent spacing system
- Component-specific design tokens

## Development Guidelines

- Use TypeScript for all components and utilities
- Follow mobile-first approach for styles
- Implement WCAG accessibility standards
- Use default exports with function declarations
- Maintain consistent prop interfaces
- Document components with JSDoc comments

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License
