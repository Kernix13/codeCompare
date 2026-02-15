/* 
  I think I need to map out method names to what they do, so Replace for all the variations, Slice for all those variations, etc.
*/

const JavaScript = {
  'number': [
    'min', 
    'max', 
    'floor', 
    'random', 
    'sqrt', 
    'pow',
    'round',
    'toFixed',
    'toPrecision',
    'parseInt', 
    'parseFloat',
    'Number',
    'isInteger',
    'isNaN',
    'toString'
  ],
  'string': [
    'slice', 
    'split', 
    'replace (str)', 
    'replace (regex)', 
    'match', 
    'trim',
    'startsWith', 
    'endsWith', 
    'includes', 
    'indexOf', 
    'for loop',
    'spread operator'
  ],
  'array': [
    'join', 
    'concat', 
    'filter', 
    'reduce', 
    'includes', 
    'indexOf', 
    'forEach', 
    'map', 
    'slice', 
    'push', 
    'unshift', 
    'pop', 
    'shift', 
    'sort', 
    'reverse', 
    'splice', 
    'for of loop',
    'spread operator'
  ],
  'object': [
    'delete', 
    'hasOwnProperty', 
    'entries', 
    'keys', 
    'values',
    'for in loop',
    'spread operator'
  ],
  'class': ['constructor', 'method']
};

const Python = {
  'number': [
    'min', 
    'max', 
    'floor', 
    'random', 
    'sqrt', 
    'pow', 
    'int', 
    'float'
  ],
  'string': [
    'startswith', 
    'endswith', 
    'in operator', 
    'find', 
    'slice', 
    'split', 
    'replace', 
    're.sub', 
    'strip'
  ],
  'array': [
    'join', 
    '+ operator', 
    'List comprehension', 
    '', 
    'in operator', 
    'index', 
    '', 
    '', 
    'Slice syntax', 
    'list',
    'append', 
    'insert', 
    'pop', 
    '', 
    'reverse', 
    'sorted', 
    'insert', 
    'extend', 
    'remove'
  ],
  'object': [
    'del', 
    'key in', 
    'items', 
    'keys', 
    'values'
  ],
  'class': ['constructor', 'method']
};

const PHP = {
  'number': [
    'min', 
    'max', 
    'floor', 
    'random', 
    'sqrt', 
    'pow', 
    'intval', 
    'floatval'
  ],
  'string': [
    'str_starts_with', 
    'str_ends_with', 
    'str_contains', 
    'strpos', 
    'substr', 
    'explode', 
    'str_replace', 
    'preg_replace', 
    'trim'
  ],
  'array': [
    'implode', 
    'array_merge', 
    'array_filter', 
    'array_reduce', 
    'in_array', 
    'array_search', 
    'foreach', 
    'array_map', 
    'array_slice', 
    '',
    'array_push', 
    'array_unshift', 
    'array_pop', 
    'array_shift', 
    'array_reverse', 
    'sort', 
    'array_splice', 
    '', 
    ''
  ],
  'object': [
    'unset', 
    'array_key_exists', 
    '', 
    'array_keys', 
    'array_values'
  ],
  'class': ['constructor', 'method']
};

const CSharp = {
  'number': [
    'Min', 
    'Max', 
    'Floor', 
    'Random', 
    'Sqrt', 
    'Pow', 
    'int.Parse', 
    'double.Parse'
  ],
  'string': [
    'StartsWith', 
    'EndsWith', 
    'Contains', 
    'IndexOf', 
    'Substring', 
    'Split', 
    'str.Replace', 
    'Regex.Replace', 'Trim'
  ],
  'array': [
    'Join', 
    'Concat().ToList()', 
    'Where().ToList()', 
    'Aggregate', 
    'Contains', 
    'IndexOf', 
    'ForEach', 
    'Select().ToList()', 
    'GetRange', 
    'List',
    'Add', 
    'Insert', 
    'RemoveAt', 
    '', 
    'Reverse', 
    'Sort', '', 
    'AddRange', 
    'Remove'
  ],
  'object': [
    'Remove', 
    'ContainsKey', 
    'ToList', 
    'Keys', 
    'Values'
  ],
  'class': ['constructor', 'method']
};

/* NEXT: create pre code blocks
  1. by language
  2. by data type
  3. by method? or just use keywords?
  - Not sure how to structure the data
*/

const detailsPre = {
  "JavaScript": {
    "number": [
      {
        "keywords": ["typeof", "parseInt"],
        "code": `
let value = '123';

if (typeof value === 'string') {
  value = parseInt(value);
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],  
    "string": [
      {
        "keywords": ["toLowerCase", "split", "join"],
        "code": `
const title = 'This is a Blog Post Title';
function slugify(str) {
  return str.toLowerCase().split(' ').join('-');
}
// 'this-is-a-blog-post-title'
        `
      },
      {
        "keywords": ["toUpperCase", "slice"],
        "code": `
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}
        `
      },
      {
        "keywords": ["split", "reverse", "join"],
        "code": `
function reverseString(str) {
  return str.split('').reverse().join('');
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],  
    "array": [
      {
        "keywords": ["'concat'", "spread operator"],
        "code": `
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
        `
      },
      {
        "keywords": ["for of", "push", "filter", "map"],
        "code": `
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenSquares = [];

// Option 1
for (const num of numbers) {
  if (num % 2 === 0) {
    evenSquares.push(num ** 2);
  }
}

// Option 2:
const evenSquares = numbers
  .filter(num => num % 2 === 0)
  .map(num => num ** 2);
        `
      },
      {
        "keywords": ["reduce", "ternary"],
        "code": `
function countOccurrences(array, value) {
  return array.reduce((count, val) => {
    return val === value ? count + 1 : count;
  }, 0);
}
countOccurrences([1, 2, 3, 4, 1, 2, 1], 1); // 3
        `
      },
      {
        "keywords": ["spread operator"],
        "code": `
function stringToArray(str) {
  return [...str];
}
        `
      },
      {
        "keywords": ["spread operator", "Set"],
        "code": `
function uniqueValues(array) {
  return [...new Set(array)];
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],  
    "object": [
      {
        "keywords": ["spread operator"],
        "code": `
function combineObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],  
    "class": [
      {
        "keywords": [],
        "code": ``
      },
    ]
  },
  "Python": {
    "number": [
      {
        "keywords": ["isinstance", "int"],
        "code": `
value = '123'

if isinstance(value, str):
  value = int(value)
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "string": [
      {
        "keywords": ["join", "lower", "split"],
        "code": `
title = "This is a Blog Post Title"
def slugify(text):
  return '-'.join(text.lower().split(' '))
# 'this-is-a-blog-post-title'
        `
      },
      {
        "keywords": ["upper", "slice"],
        "code": `
def capitalize(word):
  return word[0].upper() + word[1:]
        `
      },
      {
        "keywords": ["slice", "reverse"],
        "code": `
def reverse_string(s):
  return s[::-1]
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "array": [
      {
        "keywords": ["'concat' (+)"],
        "code": `
def merge_lists(list1, list2):
    return list1 + list2
        `
      },
      {
        "keywords": ["for in", "append"],
        "code": `
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
even_squares = []

# Option 1
for num in numbers:
  if num % 2 == 0:
    even_squares.append(num ** 2)

# Option 2
        `
      },
      {
        "keywords": ["sum", "generator expression"],
        "code": `
def count_occurrences(array, value):
  return sum(1 if val == value else 0 for val in array)

count_occurrences([1, 2, 3, 4, 1, 2, 1], 1) # 3
# This one is problematic - sum is a number function in Python
        `
      },
      {
        "keywords": ["list"],
        "code": `
def string_to_list(s):
  return list(s)
        `
      },
      {
        "keywords": ["list", "set"],
        "code": `
def unique_values(lst):
  return list(set(lst))
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "object": [
      {
        "keywords": ["dictionary unpacking"],
        "code": `
def combine_dicts(dict1, dict2):
  return {**dict1, **dict2}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "class": [
      {
        "keywords": [],
        "code": ``
      },
    ]
  },
  "PHP": {
    "number": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "array": [
      {
        "keywords": ["array_merge"],
        "code": `
function merge_arrays($arr1, $arr2) {
    return array_merge($arr1, $arr2);
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "class": [
      {
        "keywords": [],
        "code": ``
      },
    ]
  },
  "CSharp": {
    "number": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "array": [
      {
        "keywords": ["Concat", "ToArray"],
        "code": `
public class ArrayUtils {
    public static int[] MergeArrays(int[] arr1, int[] arr2) {
        return arr1.Concat(arr2).ToArray();
    }
}
        `
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": [],
        "code": ``
      },
    ],
    "class": [
      {
        "keywords": [],
        "code": ``
      },
    ]
  }
}