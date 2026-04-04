---
language: React
slug: react
type: reference
level: beginner–intermediate
last_updated: 2026-02-19
official_docs: https://react.dev/reference/react
---

# React setup

<br>

<p> Page Links: <br>
<a href="./../index.html">Compare</a>  • 
<a href="./../details.html">In Depth</a>  • 
<a href="./../frameworks.html">Frameworks</a>
</p>

<p> Markdown File Links: <br>
<a href="./csharp.md">csharp.md</a>  • 
<a href="./javascript.md">javascript.md</a>  • 
<a href="./jupyter.md">jupyter.md</a>  • 
<a href="./jupyter2.md">jupyter2.md</a>  • 
<a href="./php.md">php.md</a>  • 
<a href="./python.md">python.md</a>  • 
<a href="./react.md">react.md</a>  • 
<a href="./typescript.md">typescript.md</a>
</p>

## Level 1 – High-Level Flow (Framework Agnostic)

1. Create project
2. Clean starter code
3. Create components folder and add components files in components folder
4. Import components
5. Structure layout and add state
6. Add side effects
7. Style
8. Run app

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

```sh
# Create React project using Vite
npm create vite@latest
# Install dependencies
npm install
# Run development server
npm run dev

# Stop development server
# CTRL + C
```

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

```jsx
const Header = () => {
  return (
    <header>
      <h1>Page title</h1>
    </header>
  );
};

export default Header;
```

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

### 5. Structure layout and add state

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

```jsx
import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <>
      <Header />
      <MainContent count={count} onIncrement={incrementCount} />
      <Footer />
    </>
  );
};
```

Props are passed down to child components. Destructure in child:

```jsx
const MainContent = ({ count, onIncrement }) => {
  return (
    <main>
      <h2>Counter Example</h2>
      <p>Current Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </main>
  );
};

export default MainContent;
```

**NOTE**:

- State updates trigger re-render
- State should live in the closest common parent
- Avoid duplicating state in multiple components

Add reactive state

- Use `useState` to create reactive data
- Never modify state directly
- Pass state to child components via props
- Pass updater functions when children need to change parent state

### 6. Add side effects (optional)

Only include this if your app requires:

- Data fetching
- Subscriptions
- Timers
- DOM manipulation

Steps:

- Import `useEffect` from react
- Add `useEffect` inside component
- Provide dependency array
  - `[]` → runs once on mount
  - `[count]` → runs when count changes

**NOTE**:

- Do not use `useEffect` unless necessary
- Avoid using it for simple derived values
- Keep effects focused and predictable

### 7. Style

Use `index.css` for global styles. Create component-specific CSS files or use CSS modules.

- Import CSS file where needed
  - import `'./App.css'`
- Apply `className` to JSX elements

**NOTE**:

- Prefer modular styles for larger apps
- Avoid inline styles except for dynamic values

### 8. Run app

- Start development server
  - `npm run dev`
- Open browser at provided local URL

---

## Level 3 – Add Routing (Optional Layer)

### 1. Install React Router

```sh
npm install react-router-dom
```

### 2. Wrap App with BrowserRouter

Open main.jsx.

- Import `BrowserRouter`
- Wrap `<App />` with it

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

### 3. Create Page Components

- Create a new `pages/` folder inside `src/`
- Inside `pages/` create:
  - `Home.jsx`
  - `About.jsx`

Step 1 — Delete MainContent.jsx

- Remove MainContent.jsx
- Remove its import from App.jsx

Step 2 — Move Counter Logic Into Home.jsx

- Home.jsx now becomes:

```jsx
import { useState } from 'react';

const Home = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <main>
      <h2>Home Page</h2>
      <p>Current Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </main>
  );
};

export default Home;
```

### 4. Define Routes in App.jsx

- Import routing components
  - Routes
  - Route
- Import page components

```jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
```

NOTE: When routing is introduced, page components replace a single MainContent component. State can now live inside individual pages instead of the top-level App component.

### 5. Add Navigation Links

Update Header.jsx.

- Import Link from router
- Replace anchor tags with Link

```jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
```

---

## Level 4 – Add Express Backend (Optional Layer)

ADD LATER...

---

## Level 5 – Add Database (Optional Layer)

ADD LATER...
