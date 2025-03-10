# React Basics Guide

## What is React?
React is a JavaScript library for building user interfaces. Think of it like building with LEGO blocks - each piece (component) can be reused and combined to create something bigger.

## Key Concepts

### 1. Components
Components are like custom HTML elements. They're reusable pieces of your interface.

```jsx
// This is a component
function Welcome() {
  return <h1>Hello!</h1>;
}
```

### 2. Props (Properties)
Props are like arguments for your components. They let you pass data from parent to child components.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Using it:
<Welcome name="Sam" />
```

### 3. State
State is like a component's memory. When state changes, the component updates automatically.

```jsx
function Counter() {
  // useState creates a piece of state
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

### 4. Understanding Your Portfolio Code

#### The Main App Structure
```jsx
function App() {
  // State for active section and dark mode
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  // Data arrays (skills, interests, etc.)
  const skills = [...];
  const interests = [...];

  // The component's HTML structure
  return (
    <div>
      {/* Components are nested inside each other */}
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
}
```

#### How Navigation Works
```jsx
// When a nav button is clicked:
<button onClick={() => setActiveSection('about')}>
  About
</button>

// This shows/hides sections based on which is active:
<section className={activeSection === 'about' ? 'block' : 'hidden'}>
  About content here...
</section>
```

### 5. Common React Patterns in Your Portfolio

#### Mapping Over Arrays
```jsx
// This creates multiple similar elements from an array
{skills.map((skill) => (
  <div key={skill.name}>
    {skill.name}
  </div>
))}
```

#### Conditional Rendering
```jsx
// Show different content based on conditions
{darkMode ? <Sun /> : <Moon />}
```

#### Event Handling
```jsx
// Responding to user actions
<button onClick={() => setDarkMode(!darkMode)}>
  Toggle Dark Mode
</button>
```

### 6. React Hooks
Hooks are special functions that add features to components:

- `useState`: Creates state variables
- `useEffect`: Handles side effects (like changing the dark mode)

```jsx
// Example from your code:
useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
}, [darkMode]);
```

## Further Learning
- [React Official Documentation](https://react.dev)
- [React Tutorial](https://react.dev/learn)
- Practice building small components
- Experiment with modifying the portfolio code