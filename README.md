# ESG Dashboard

A modern ESG (Environmental, Social, and Governance) data dashboard built with Next.js, React, and Chakra UI.

## Features

- Real-time ESG data visualization
- Interactive charts using ECharts
- Responsive design based on Chakra UI
- State management with Redux Toolkit
- Type-safe development with TypeScript

## Environment Requirements

- Node.js 18.0.0 or higher
- npm or yarn package manager

## Quick Start

1. Clone the repository:
```bash
git clone [your-repository-url]
cd esg-dashboard
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create `.env.local` file in the root directory and add environment variables:
```env
# Add your environment variables here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Architecture

### Directory Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Dashboard route group
│   │   └── api/                # API routes
│   ├── components/             # Business components
│   │   ├── company-risk-overview/  # Company risk overview component
│   │   ├── counter/            # Counter component
│   │   ├── critical-incidents/ # Critical incidents component
│   │   ├── esg-categories/     # ESG categories component
│   │   ├── incidents/          # Incidents component
│   │   ├── risk-score-history/ # Risk score history component
│   │   └── severity-levels/    # Severity levels component
│   ├── lib/                    # Utility functions
│   ├── repositories/           # Data access layer
│   ├── services/               # Business logic layer
│   ├── store/                  # Redux state management
│   └── types/                  # TypeScript type definitions
├── public/                     # Static resources
├── .env.local                  # Environment variables
└── package.json                # Project dependencies
```

### Core Technology Stack

- **Frontend Framework**: Next.js 15.3.0
- **UI Component Library**: Chakra UI
- **State Management**: Redux Toolkit
- **Chart Library**: ECharts
- **Styling Solution**: Tailwind CSS
- **Type System**: TypeScript

### Key Design Decisions

#### 1. Modern Routing Architecture
- Adopt Next.js App Router architecture, leveraging its file system routing features
- Use Route Groups to organize related pages, such as the `(dashboard)` route group
- Implement page layout reuse through `layout.tsx`, reducing code duplication

#### 2. Modularity and Scalability
- Organize code by functional modules, with each module independently encapsulated (e.g., `esg-categories`, `risk-score-history`)
- Clear directory layering: view layer (components), business layer (services), data layer (repositories)
- Unified type definitions (types) and utility functions (lib) to improve code reusability

#### 3. Performance Optimization Strategy
- Use Server-Side Rendering (SSR) for critical first-screen components to enhance loading performance
- Implement state management with Redux Toolkit for seamless integration between server-side data and client-side components
- Implement data caching mechanism to reduce duplicate requests
- Use client-side rendering for chart components (ECharts) to ensure interactive performance

#### 4. Component Design Principles
- Determine component type (server/client) based on functionality and performance requirements
- Prioritize server components for static content
- Use client components for interaction-intensive components (e.g., charts, counters)
- Clearly identify component type and purpose through file naming

#### 5. Error Handling and Fault Tolerance
- Implement unified error handling mechanism to ensure user experience
- Provide graceful degradation solutions for critical data loading failures
- Implement data loading state management with user-friendly loading indicators
- Ensure data reliability through server and client-side data validation

#### 6. State Management Strategy
- Use Redux Toolkit for global state management
- Store server-fetched data uniformly in Redux store
- Implement state persistence to enhance user experience
- Handle asynchronous operations and side effects through Redux middleware

#### 7. Development Experience Optimization
- Ensure type safety with TypeScript
- Implement unified code standards (ESLint) and formatting rules
- Use modular project structure for team collaboration
- Provide comprehensive development toolchain support (Turbopack, Hot Reload)

### State Management Methods

#### 1. Frontend State Management (Redux Toolkit)
- **Global State Management**
  - Use Redux Toolkit to manage application global state
  - Create state slices using `createSlice` for modular state logic
  - Configure Redux store with `configureStore`, integrating middleware and development tools

- **Data Flow Mechanism**
  - Update store through Redux actions after server components fetch data
  - Subscribe to required state through `useSelector` in client components
  - Maintain unidirectional data flow using `useDispatch` for state updates

- **Asynchronous State Handling**
  - Handle asynchronous operations using Redux Toolkit's `createAsyncThunk`
  - Implement standard loading, success, and failure state management
  - Process side effects of asynchronous operations through middleware

#### 2. Server-Side State Management
- **Data Fetching Strategy**
  - Use Next.js Server Components to fetch initial data
  - Handle server-side data requests through API routes

- **Caching Strategy**
  - Implement server-side data caching to reduce duplicate requests
  - Use appropriate cache expiration strategies to ensure data freshness
  - Support on-demand cache data refresh

#### 3. State Synchronization Mechanism
- **Frontend-Backend State Synchronization**
  - Server components fetch initial data through Server Components and inject directly into pages
  - Handle client-side data update requests using Redux Toolkit's `createAsyncThunk`
  - Process server-side data updates through Next.js API routes to ensure data consistency

### Performance Considerations

#### 1. Component Rendering Strategy
- **Server-Side Rendering (SSR)**
  - Use SSR for critical first-screen data (e.g., company risk overview, ESG categories)
  - Reduce client-side data requests using Server Components for initial data
  - Optimize first-screen loading performance through `layout.tsx` server-side layout

- **Client-Side Rendering (CSR)**
  - Use CSR for interaction-intensive components (e.g., charts, counters)

- **Hybrid Rendering**
  - Use SSR for static content and CSR for dynamic content

#### 2. Data Management Optimization
- **Server-Side Data Caching**
  - Implement server-side data caching to reduce database queries

- **Client-Side State Management**
  - Use Redux Toolkit for global state management to reduce duplicate requests

### Data Processing Methods

#### 1. Data Flow Architecture
```
[Data Source] → [Server] → [Client] → [View Layer]
   │            │          │          │
   │            │          │          │
   ▼            ▼          ▼          ▼
[External API] → [Server Components] → [Redux Store] → [React Components]
   │            │          │          │
   │            │          │          │
   ▼            ▼          ▼          ▼
[Database] → [API Routes] → [Client Components] → [UI Rendering]
```

#### 2. Server-Side Data Processing
- **Data Fetching Layer**
  - Use Server Components to directly fetch initial data
  - Handle data query and update requests through API Routes
  - Implement data validation and transformation logic

- **Data Caching Layer**
  - Use in-memory caching for frequently accessed data

#### 3. Client-Side Data Processing
- **State Management Layer**
  - Use Redux Toolkit for global state management
  - Implement state slices to organize different types of data
  - Handle asynchronous data operations through middleware

- **Data Flow Layer**
  - Inject server data into Redux Store
  - Subscribe to data through Selectors in client components
  - Implement data update and synchronization mechanisms

- **Data Presentation Layer**
  - Component-level data transformation and formatting
  - Implement data filtering and sorting functionality
  - Process and visualize chart data

#### 4. Data Flow Examples
```
1. Initial Loading
[External API] → [Server Component] → [Redux Store] → [Page Rendering]
   │              │                  │
   │              │                  │
   ▼              ▼                  ▼
[Fetch Data] → [Process Data] → [Update State] → [Update UI]

2. Data Update
[User Interaction] → [Client Component] → [Redux Action] → [API Route] → [External API]
   │                  │                  │              │
   │                  │                  │              │
   ▼                  ▼                  ▼              ▼
[Trigger Update] → [Prepare Data] → [Send Request] → [Process Request] → [Update Data]
```

## Development Guide

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint code check

### Code Standards

This project uses ESLint for code checking, following Next.js recommended configuration. Run `npm run lint` to check code standards.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.