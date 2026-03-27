# 🌗 Theme Switcher — Learning React Context API

A hands-on learning project that explores **React's Context API** through two progressive mini-projects: a simple user-login context demo and a full dark/light theme switcher.

---

## 📁 Project Structure

```
themeSwitcher-React-/
├── 08miniContext/       # Mini project: Context API basics with user login
└── 09themeSwitcher/     # Main project: Dark/Light theme switcher
```

---

## 🧪 Project 1 — `08miniContext` (Context API Basics)

A minimal demo that teaches how to create, provide, and consume a React context.

### What it does
- A **Login** form lets you enter a username and password.
- On submit, the user data is stored in a shared context.
- A **Profile** component reads from that context and displays a welcome message.

### Concepts covered
| Concept | File |
|---|---|
| Creating a context with `React.createContext()` | `src/context/UserContext.js` |
| Wrapping the app with a Provider component | `src/context/UserContextProvider.jsx` |
| Consuming context with `useContext` | `src/components/Login.jsx`, `src/components/Profile.jsx` |

### Key code snippet
```js
// UserContext.js
const UserContext = React.createContext();

// UserContextProvider.jsx — holds state and exposes it via Provider
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Login.jsx — writes to context
const { setUser } = useContext(UserContext);

// Profile.jsx — reads from context
const { user } = useContext(UserContext);
```

### Running the project
```bash
cd 08miniContext
npm install
npm run dev
```

---

## 🎨 Project 2 — `09themeSwitcher` (Dark / Light Theme Switcher)

The main project — a polished theme switcher that applies dark/light mode globally using the Context API and Tailwind CSS.

### What it does
- A **toggle button** switches between dark and light mode.
- The selected theme is stored in context and applied to the entire page by adding a class (`dark` or `light`) to the `<html>` element.
- A **product Card** component re-styles itself automatically based on the active theme using Tailwind's `dark:` variant classes.

### Concepts covered
| Concept | File |
|---|---|
| Creating a context with a default value | `src/context/theme.js` |
| Exporting `Context.Provider` directly for cleaner usage | `src/context/theme.js` |
| Building a **custom hook** (`useTheme`) to consume context | `src/context/theme.js` |
| Managing theme state & applying it to the DOM with `useEffect` | `src/App.jsx` |
| Consuming context via a custom hook | `src/components/ThemeBtn.jsx` |
| Tailwind CSS `dark:` variant for theme-aware styling | `src/components/Card.jsx` |

### Key code snippet
```js
// theme.js — context + custom hook in one file
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}

// App.jsx — apply theme class to <html> on change
useEffect(() => {
  document.querySelector("html").classList.remove("light", "dark");
  document.querySelector("html").classList.add(themeMode);
}, [themeMode]);

// ThemeBtn.jsx — consume context via custom hook
const { themeMode, lightTheme, darkTheme } = useTheme();
```

### Running the project
```bash
cd 09themeSwitcher
npm install
npm run dev
```

---

## 🛠️ Tech Stack

- **React 19** — UI library
- **Vite** — fast dev server and bundler
- **Tailwind CSS 4** — utility-first styling with `dark:` variant support
- **React Context API** — global state without any third-party library

---

## 💡 Key Takeaways

1. **`createContext(defaultValue)`** — creates a context object; the default value is only used when a component has no matching Provider above it.
2. **Provider** — wraps your component tree and passes down the current context value.
3. **`useContext(MyContext)`** — subscribes a component to context changes; the component re-renders whenever the context value changes.
4. **Custom hooks** — wrapping `useContext` in a custom hook (e.g. `useTheme`) makes consumption cleaner and hides implementation details from consumers.
5. **`useEffect` + DOM class toggle** — a practical pattern for applying theme classes globally without a CSS-in-JS library.

---

## 🚀 Getting Started

Clone the repository and run either project:

```bash
git clone https://github.com/aurjaybhai/themeSwitcher-React-.git
cd themeSwitcher-React-

# Run the theme switcher
cd 09themeSwitcher && npm install && npm run dev
```
