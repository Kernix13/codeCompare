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
    'String',
    'toFixed',
    'toPrecision',
    'toString',
    'isInteger',
    'isNaN'
  ],
  'string': [
    'startsWith', 
    'endsWith', 
    'includes', 
    'indexOf', 
    'slice', 
    'split', 
    'replace str', 
    'replace Regex', 
    'trim',
    'parseInt', 
    'parseFloat',
    'Number',
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
    'reverse', 
    'sort', 
    'splice', 
    'for of loop',
    'spread operator',
  ],
  'object': [
    'delete', 
    'hasOwnProperty', 
    'entries', 
    'keys', 
    'values',
    'for in loop',
    'spread operator',
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
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],  
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],  
    "array": [
      {
        "keywords": ["concat", "spread operator"],
        "code": `
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
        `
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],  
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],  
  },
  "Python": {
    "number": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `False`
      },
    ],
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `False`
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
        "keywords": ["test"],
        "code": `False`
      },
    ],
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `False`
      },
    ],
  },
  "PHP": {
    "number": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
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
        "keywords": ["test"],
        "code": `false`
      },
    ],
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],
  },
  "CSharp": {
    "number": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],
    "string": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
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
        "keywords": ["test"],
        "code": `false`
      },
    ],
    "object": [
      {
        "keywords": [],
        "code": ``
      },
      {
        "keywords": ["test"],
        "code": `false`
      },
    ],
  }
}