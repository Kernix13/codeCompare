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

> **Note (as of 2/6/2026)**  
> The layout and core comparison structure are in place. Syntax sections are dynamically generated on `compare.html`.
>
> Full implementation examples (`details.html`) and the `frameworks.html` page are still in progress. The current version focuses on UI structure, styling, and core comparison behavior, with expanded examples planned.

## Getting Started

1. Clone this repo

```sh
git clone https://github.com/Kernix13/codeCompare.git

# Change into project directory
cd codeCompare
```

2. Open `compare.html` in your browser or serve the project locally using your preferred development server (e.g., VS Code Live Server).

## How to Use

1. Select your primary language (the one you know best).
2. Select 1–3 languages you want to compare.
3. Click Compare.
4. View the side-by-side syntax comparison grid to explore differences and similarities.

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
├── compare.html             # Language syntax comparisons
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

## For Developers

The languages and frameworks in the forms on all 3 pages are specific to myself, and even they will change over time. If you want to use this project for yourself, then you will most likely want to customize the language choices.

Right now, this project uses HTML + CSS + JavaScript but that may change in the future. If you develope using different languages, then you may not know what you need to change. Here are code blocks you will need to change.

### compare.html

Form elements - look for the comment with `LANGUAGE SELECTION FORM`

1. Primary language select element: make changes to the `<option>` elements
2. Comparison languages check boxes: make changes to the `<input>` element and its associated `<label>` element

```html
<!-- LANGUAGE SELECTION FORM -->
<form class="language-form" id="languageForm">
  <fieldset class="form-group select">
    <label for="primaryLang" class="primary-lang">Primary language</label>
    <select id="primaryLang" name="primaryLang" required>
      <option value="">--- Select ---</option>
      <option value="language1">Language1</option>
      <option value="language2">Language2</option>
      <!-- Add an option for each language, change the value for each -->
    </select>
  </fieldset>

  <fieldset class="form-group check">
    <legend>Compare with</legend>

    <input type="checkbox" name="secondaryLang" value="lang1" id="lang1" />
    <label for="lang1" class="checkbox">Language1</label>

    <input type="checkbox" name="secondaryLang" value="lang2" id="lang2" />
    <label for="lang2" class="checkbox">Language2</label>

    <!-- Add an input for each language, change value & id -->
    <!-- Add a label for each language, change for to match input id -->
  </fieldset>

  <button type="submit" class="btn-submit">Compare</button>
</form>
```

3. Section elements: make changes to the `<section>` elements if you want to customize the output. The `id` is the same as the variable names in `listEls.js` and `preEls.js`.

```html
<!-- ol > li elements sections -->
<section id="vars"></section>
<section id="numbers"></section>
<section id="strings"></section>
<section id="arrays"></section>
<section id="objects"></section>

<!-- pre elements sections -->
<section id="conditionals"></section>
<section id="loops"></section>
<section id="functions"></section>
<section id="classes"></section>
```

4. Script elements: add or rename JavaScript files (`<script>` tags at bootom of page).

```html
<script src="./js/menu.js"></script>
<script src="./js/listEls.js"></script>
<script src="./js/preEls.js"></script>
<script src="./js/index.js"></script>
<script src="./js/prism.js"></script>
```

5. `js/listEls.js`: You will want to add snippets for each `<li>` element output to the page. For other languages, you need to match them up perfectly.
6. `js/preEls.js`: Make sure the template literal code starts at the edge of the editor.

```js
const vars = {
  "javascript": [
    'let varName = value;',
    'const PHI = 1.618;',
    'null',
    'true, false', // etc.
  "language2": [
    'code item1',
    'code item2',
    'code item3',
    'code item4', // etc
  ],
  // add more list items then languages below here
}

// preEls.js
const conditionals = {
  "javascript": [
    `
/* if, else if, else */
if (condition) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}`, // more code below here
  ],
  "python": [
    `
""" if, elif, else """
if condition:
  # code
elif condition2:
  # code
else:
  # code
`, // more code below here
  ],
} // add your next language here
```

### details.html

1. Edit the `<input>` and `<label>` elements for the fieldset with the class of `primary-radio-group`
2. Edit the `<input>` and `<label>` elements for the fieldset with the class of `secondary-radio-group`
3. Edit the `<option>` element for Data Types and Methods select lists

```html
<form class="language-form" id="details-form">
  <fieldset class="form-group primary-radio-group">
    <legend>Primary Language</legend>

    <input
      type="radio"
      name="primaryLang"
      value="lang1"
      id="primary-lang1"
      checked
    />
    <label for="primary-lang1" class="radio">Language 1</label>
    <!-- Add more input and label elements for each language -->
  </fieldset>

  <fieldset class="form-group secondary-radio-group">
    <legend>Compare with</legend>

    <input type="radio" name="secondaryLang" value="lang1" id="lang1" />
    <label for="lang1" class="radio">Language1</label>
    <!-- Add more input and label elements for the other languages -->
  </fieldset>

  <fieldset class="form-group select">
    <label for="data-type" class="primary-lang">Data Type</label>
    <select id="data-type" name="data-type" required>
      <option value="">--- Select ---</option>
      <option value="number">Number</option>
      <!-- add other data types in option elements below here -->
    </select>
  </fieldset>

  <fieldset class="form-group select">
    <label for="methods" class="primary-lang">Function/Method</label>
    <select id="methods" name="methods" required>
      <option value="">--- Select ---</option>
      <option value="pop">Pop</option>
      <!-- add other methods in option elements below here -->
    </select>
  </fieldset>

  <button type="submit" class="details-submit">Compare</button>
</form>
```

4. The data JavaScript file has not been created as of 2/7/2026.

### frameworks.html

1. For Primary & Secondary frameworks, change the name, value and id attributes in the input element, and the for element in the label element.

```html
<fieldset class="form-group check">
  <legend>Primary framework</legend>

  <input type="radio" name="primaryFW" value="react" id="react">
  <label for="react" class="radio">React</label>

  <!-- add input and label elements for each framework -->
</fieldset>

<fieldset class="form-group check">
  <legend>Compare with</legend>

  <input type="radio" name="secondaryFW" value="react" id="react">
  <label for="react" class="radio">React</label>

  <!-- add input and label elements for each framework -->
</fieldset>

<button type="submit" class="btn-submit" disabled>Compare</button>
</form>
```

5. The data JavaScript file has not been created as of 2/7/2026.

---

## To-Do

1. I need to change the data types to match primary language, e.g. "Array" to "List" for Python.

## Contributing

Contributions are welcome. Please review [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines, workflow, and code style expectations.

---

## License

Licensed under the [MIT License](./LICENSE). Free to use for educational purposes.
