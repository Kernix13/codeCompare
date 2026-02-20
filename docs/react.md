---
language: React
slug: react
type: reference
level: beginner–intermediate
last_updated: 2026-02-19
official_docs: https://react.dev/reference/react
---

<li><a href="./../index.html">Compare</a></li>
<li><a href="./../details.html">In Depth</a></li>
<li><a href="./../frameworks.html">Frameworks</a></li>

# React setup

## Level 1 – High-Level Flow (Framework Agnostic)

1. Create project
2. Clean starter code
3. Create components folder
4. Add components files in components folder
5. Import components
6. Structure layout
7. Add reactive state
8. Add side effects
9. Style
10. Run app

---

## Level 2 – Base React Setup (Single Page)

1. Create a new React project using modern tooling
2. Remove default starter/demo code
3. Create a components folder inside the src folder
4. Create component files (Header, Footer, and at least one content component)
5. Import components into App file
6. Structure layout inside App component
7. Add basic state using useState
8. Add side effect using useEffect (if needed)
9. Add basic styling
10. Run the development server and view the app

### 1. Create project

- Choose project scaffolding tool
  - Recommended: use Vite for fast setup and minimal boilerplate
- Run project creation command
  - `npm create vite@latest`
- Enter project name when prompted
- Decide project name
  - use lowercase, no spaces, use hyphens if needed
- Select framework
  - Choose: React
- Select variant
  - Choose: JavaScript
  - (Optional) Choose TypeScript if desired
- Install dependencies
  - `npm install`
- Run development server to verify setup
  - `npm run dev`
- Confirm app loads in browser
  - Stop server when finished testing

### 2. Clean starter code

- In `src/` remove unwanted files
  - delete `App.css` (if not using it)
  - delete `index.css` content (or simplify it)
  - delete `assets/` folder if not needed
  - remove any logo files
- Clean `App.jsx`
  - remove unused imports
  - remove default JSX markup
  - replace with minimal starter structure
- Clean main.jsx
  - confirm `App` is imported correctly
  - confirm `ReactDOM.createRoot` is rendering `<App />`
- Start development server to confirm app still runs
  - `npm run dev`

### 3. Create components

**NOTE**: Keep components focused on a single responsibility

- Inside `src/`, create a `components/` folder
- Inside `components/`, create component files
  - `Header.jsx`
  - `Footer.jsx`
  - `MainContent.jsx` (or similar)
- In each component file:
  - define a functional component
  - return basic JSX markup
  - export the component as default

### 4. Import and Structure Components in App.jsx

`App` holds state. `App` passes state to `Header` or `MainContent` via props.

- Import React hooks
  - import `useState`
- Import components
  - `Header`, `MainContent`, `Footer`, etc
- Create state inside `App`
  - define `count`
  - define state update function
- Pass state to child component as a prop
  - `<MainContent count={count} />`
- Return structured layout
  - `<Header />`, `<MainContent />`, `<Footer />`
- Add simple interaction (optional)
  - button that updates state

> The button example is weak but will do for now.

### 5. Structure layout in App.jsx

For a real-world best-practice minimal app, the button should live inside the child component (MainContent) and the updater function is passed down as a prop from App. That way you demonstrate proper data flow and functional patterns, not just a toy example.

- Import `useState` from React
  - `import { useState } from 'react'`
- Import child components
  - `Header`, `MainContent`, `Footer`
- Create state in `App`
  - `const [count, setCount] = useState(0)`
- Define function to update state
  - `const incrementCount = () => setCount(count + 1)`
- Pass state and updater function to child component
  - `<MainContent count={count} onIncrement={incrementCount} />`
- Return JSX layout
  - `<Header />`, `<MainContent />`, `<Footer />`

Props are passed down to child components. Destructure in child:

- `function MainContent({ count, onIncrement })`

### 6. Add reactive state

### 7. Add side effects

### 8. Style

### 9. Run app

---

## Level 3 – Add Routing (Optional Layer)

---

## Level 4 – Add Express Backend (Optional Layer)

---

## Level 5 – Add Database (Optional Layer)
