# Pseudocode

Create pseudocode for remaining pages

Good pseudocode:

- Describes transformation
- Describes constraints
- Describes steps without language bias

1. What Is the Transformation?
   - What is the input?
   - What is the output?
   - Is this transforming data or validating data?
   - Is it returning a new value or modifying something conceptually?
   - Is it reducing many things into one thing?
2. What Are the Constraints?
   - Can the input be empty?
   - Can it be negative?
   - Can it contain duplicates?
   - Is order important?
   - Are values guaranteed to be valid?
   - What is the expected data type?
3. What Are the Edge Cases?

OR TRY THIS:

1. Input
   - What is the input type?
   - What does one example look like?
2. Output
   - What is the output type?
   - What should it look like for a simple example?
3. What is happening to the data?
   - Transforming it?
   - Filtering it?
   - Counting something?
   - Finding something?
   - Comparing things?
4. Do I need to loop?
5. Are there edge cases? Empty, zero, 1 item?

SIMPLIFIED:

1. Input?
2. Output?
3. Main action?
4. Loop needed?
5. Edge case(s)?

- What is the input?
- What is the output?
- Validating, mutating, or returning a new value?
  - Mutate, filter, count, find, compare?
  - Loop?
  - Conditional(s)?
- What are the constraints and edge cases?

## details.html

1. DOMContentLoaded

- check local storage for state keys
- if state keys do not exist -> set to empty strings (`state` variable)
- if state keys exist
  - add `checked` to the radio buttons for primary and secondary
  - add `selected` to the select list options for data types and methods
  - render DOM elements for primary and secondary

2. Primary radio buttons

3. Secondary radio buttons

4. Data type selection

5. Methods selection

6. Form submit

## frameworks.html

1. DOMContentLoaded

-

2. Primary radio buttons

3. Secondary radio buttons

4. Form submit

Details page pre HTML code block

```html
<!-- pre section 'X' -->
<div class="grid-2">
  <!-- PRIMARY LANGUAGE -->
  <div class="primary">
    <h2>JavaScript</h2>
    <h3><code class="language-js heading">???</code></h3>
    <pre>
      <code class="language-js"></code>
    </pre>
  </div>

  <!-- SECONDARY LANGUAGE -->
  <div class="secondary">
    <h2>Python</h2>
    <h3><code class="language-python heading">???</code></h3>
    <pre>
      <code class="language-python"></code>
    </pre>
  </div>
</div>
```

Details page possible data file structure: I need to figure out what to do to "normalize" the keywords

```js
const codeBlocks = {
  JavaScript: {
    string: [
      {
        keywords: ['slice', 'reverse'],
        code: `const str = "hello";
const reversed = str.split('').reverse().join('');`,
      },
      {
        keywords: ['capitalize'],
        code: `const word = "hello";
const capitalized = word[0].toUpperCase() + word.slice(1);`,
      },
    ],
    array: [
      {
        keywords: ['merge', 'concat'],
        code: `const arr1 = [1,2];
const arr2 = [3,4];
const merged = [...arr1, ...arr2];`,
      },
    ],
  },
  Python: {
    string: [
      {
        keywords: ['slice', 'reverse'],
        code: `def reverse_string(s):
    return s[::-1]`,
      },
      {
        keywords: ['capitalize'],
        code: `def capitalize(word):
    return word[0].upper() + word[1:]`,
      },
    ],
    array: [
      {
        keywords: ['merge', 'concat'],
        code: `def merge_lists(list1, list2):
    return list1 + list2`,
      },
    ],
  },
};
```
