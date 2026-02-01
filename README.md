# Code Comparison

An interactive learning tool that helps developers understand new languages and frameworks by comparing them side-by-side with technologies they already know.

Built with **HTML, CSS, JavaScript, and Prism.js**, the project focuses on visual pattern recognition — showing how similar concepts are expressed across different ecosystems.

---

## Overview

**Code Comparison** is designed to help learners bridge knowledge between technologies. Instead of learning in isolation, users compare syntax, structure, tooling, and architectural patterns across:

- Programming languages
- Frontend frameworks
- Full-stack frameworks

The project emphasizes **mental model translation** — helping developers recognize how the same concepts appear in different environments.

> **Note (as of 2/1/2026)**  
> The layout and comparison structure are in place. Syntax comparison sections are functional and dynamically generated. Full implementation examples are still a work in progress. The project currently demonstrates UI structure, styling, and partial dynamic behavior, with expanded examples to be added.

---

## Project Structure

```py
/
├── README.md
├── LICENSE
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── .github/                 # GitHub workflows, issue templates
├── .gitignore
├── docs/                    # Developer notes in Markdown
│   └── language-example.md
├── css/                     # Stylesheets
│   ├── style.css
│   └── prism.css
├── js/                      # JavaScript logic and Prism
│   ├── index.js             # Handles form values and comparison logic
│   ├── listEls.js           # Data file for compare.html list items
│   ├── preEls.js            # Data file for compare.html pre items
│   └── prism.js
├── index.html               # Language syntax comparisons
├── frameworks.html          # Framework & tooling comparisons
└── details.html             # Method & Pattern Comparisons (WIP)
```

---

## Developer Notes Section (`/docs`)

The project includes a `/docs` folder that contains personal learning notes in Markdown format.

Example:

- `docs/python.md` — Personal notes, references, and documentation links related to Python

These files are linked within the site navigation and act as a lightweight developer knowledge base alongside the comparison tools.

### Purpose

This section allows:

- Storing personal study notes
- Linking to official documentation
- Keeping framework or language-specific tips
- Building a growing reference library while learning

### Future Direction

The `/docs` section is designed to expand into a customizable notes system where:

- Each language or framework can have its own Markdown file
- Notes can include:
  - Code snippets
  - Links to official docs
  - Key concepts
  - Gotchas and reminders
- The navigation may evolve into a dropdown list of available note files
- Users could add their own `.md` files to personalize the learning experience

This makes the project not just a comparison tool, but also a structured learning workspace.

## Features

### Page 1 – Syntax Highlights (`index.html`)

- Users select:
  - **Primary language** (what they know best)
  - **1–3 comparison languages**
- Side-by-side column layout for syntax comparison.
- Topics include:
  - Numbers
  - Strings
  - Arrays
  - Objects
  - Conditionals
  - Loops
  - Functions
  - Classes
- Uses:
  - Inline `<code>` for short syntax
  - `<pre><code>` blocks for structural examples
- Notes section highlights language-specific behaviors and unique features.

---

### Page 2 – Method & Pattern Comparisons (`details.html`) — WIP

This page will show complete working examples for real development tasks.

Planned functionality:

- Two language selection groups:
  - **Primary language/framework**
  - **Comparison language/framework**
- Two specific selection groups:
  - Data type
  - Method/function to compare
- Displays full code implementations for:
  - Common methods or patterns
  - Real-world tasks
  - Equivalent logic across ecosystems

This section is scaffolded and will expand as more examples are added.

---

### Page 3 – Framework Comparisons (`frameworks.html`) — WIP

Compares development tooling and architectural patterns across frameworks.

#### Supported Framework Categories

**Frontend Frameworks**

- React
- Vue
- Svelte
- Angular

**Full-Stack Frameworks**

- Django
- Laravel
- ASP.NET Core

#### Comparison Topics Include

- Project setup and CLI commands
- Development server and build scripts
- Routing/navigation structure
- Component structure and rendering patterns
- Framework-specific conventions

Users select:

- **Primary framework** (what they know best)
- **Comparison framework** (what they want to learn)

Frameworks are grouped by category to reinforce understanding of frontend vs full-stack roles while still allowing broad exploration.

---

## Technologies Used

- HTML5
- CSS3 (Flexbox & Grid layouts)
- JavaScript (DOM manipulation & dynamic content generation)
- [Prism.js](https://prismjs.com/) for syntax highlighting
- Semantic `<code>` and `<pre>` elements for structured code display
- `localStorage` to retain user selections between pages

---

## Usage

1. Open the project in a browser.
2. On **Syntax Highlights**, select a primary language and comparison languages.
3. On **Framework Comparisons**, choose a primary framework and one to compare.
4. On **Full Examples (WIP)**, explore implementation-level comparisons as features are added.
5. Review side-by-side code to understand structural and conceptual differences.

---

## Implementation Notes

- Multi-line code uses `<pre><code>` for alignment and readability.
- HTML characters such as `<` are escaped when rendering code examples.
- Prism.js classes follow the `language-xxxx` convention.
- List-based comparison sections may omit Prism classes for improved readability.
- Framework options are grouped by category for clarity and future extensibility.

---

## Project Goals

This project aims to:

- Help developers transition between languages and frameworks
- Reinforce conceptual similarities across ecosystems
- Teach tooling and architectural differences, not just syntax
- Serve as both a learning resource and a portfolio project

---

## To-Do

1. Should I create a home page? Right now I do not have an `index.html` file.
2. `compare.html` is 95%+ done - finish it.
3. `details.html`: add a code block for 2 data types - try a good practical example of JavaScript `arr.filter`, and matching blocks for the other languages. Try a string or number method/function as well. I need to visualize how this page will look.
4. `frameworks.html`: I need to split up front-end frameworks vs full-stack somehow in the form.
5. Navigation: add a few more dummy `*.md` files then create a dropdown list for `/docs`. The sub-menu will have to be dynamic since each user will add their own files to that folder. And some users may not use it at all so have a defaault.md file
6. Create an issue for [Markdown Preview Plus](https://github.com/volca/markdown-preview). Anchor links are still not working and frontmatter is not displaying correctly. He said he fixed the same-page anchor link issue but it still is not working.
7. ???

---

## Contributing

Contributions are welcome. Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines, workflow, and code style expectations.

---

## License

Licensed under the [MIT License](./LICENSE). Free to use for educational purposes.
