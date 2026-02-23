/* 
  I think I need to map out method names to what they do, so Replace for all the variations, Slice for all those variations, etc.
*/

const JavaScript = {
  "number": [
    'Math.min', 
    'Math.max', 
    'Math.floor', 
    'Math.random', 
    'Math.sqrt', 
    'Math.pow',
    'Math.round',
    'toFixed',
    'toPrecision',
    'parseInt', 
    'parseFloat',
    'Number',
    'isInteger',
    'isNaN',
  ],
  'string': [
    'slice', 
    'split', 
    'replace (str)', 
    'replace (regex)', 
    'trim',
    'startsWith', 
    'endsWith', 
    'includes', 
    'indexOf', 
    'for loop'
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
    'every',
    'some',
    'find',
    'findIndex',
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
    'hasOwnProperty', 
    'entries', 
    'keys', 
    'values',
    'for in loop',
    'spread operator'
  ],
  'class': ['constructor', 'method'],
  'api': [
    'Basic Fetch',
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ]
};

const Python = {
  'number': [
    'min', 
    'max', 
    'sum',
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
    'capitalize', 
    'replace', 
    're.sub', 
    'strip',
    'all',
    'any',
    'isdecimal',
    'isnumeric',
    'count',
  ],
  'array': [
    'join', 
    '+ operator', 
    'List comprehension', 
    'in operator', 
    'index', 
    'slice', 
    'list',
    'all',
    'any',
    'count',
    'append', 
    'insert', 
    'pop', 
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
    'values',
    'all',
    'any',
  ],
  'class': ['constructor', 'method'],
  'api': [
    'Basic Fetch',
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ]
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
    'floatval',
    'number_format',
    'count_chars',
  ],
  'string': [
    'str_starts_with', 
    'str_ends_with', 
    'str_contains', 
    'strpos', 
    'substr', 
    'substr_count',
    'explode', 
    'str_replace', 
    'str_split', 
    'strrev', 
    'preg_replace', 
    'trim'
  ],
  'array': [
    'implode', 
    'array_merge', 
    'array_filter', 
    'array_reduce', 
    'array_sum', 
    'in_array', 
    'array_search', 
    'foreach', 
    'array_map', 
    'array_slice', 
    'array_push', 
    'array_unshift', 
    'array_pop', 
    'array_shift', 
    'array_reverse', 
    'sort', 
    'array_splice', 
  ],
  'object': [
    'unset', 
    'array_key_exists', 
    'array_keys', 
    'array_values'
  ],
  'class': ['constructor', 'method'],
  'api': [
    'Basic Fetch',
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ]
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
    'Join', 
    'str.Replace', 
    'Regex.Replace', 'Trim'
  ],
  'array': [
    'Join', 
    'Concat', 
    'ToList', 
    'ToArray', 
    'Where', 
    'Aggregate', 
    'Contains', 
    'IndexOf', 
    'ForEach', 
    'foraach', 
    'Select', 
    'Skip', 
    'Sum', 
    'GetRange', 
    'List',
    'Add', 
    'Take', 
    'Insert', 
    'RemoveAt', 
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
  'class': ['constructor', 'method'],
  'api': [
    'Basic Fetch',
    'GET',
    'POST',
    'PUT',
    'DELETE'
  ]
};

/* NEXT: create pre code blocks
  1. by language
  2. by data type
  "language": {
    "data-type": [
      {
        "keywords": [],
        "code": ``
      }
    ]
  }
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
        "keywords": ["Math.floor", "Math.random"],
        "code": `
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}
        `
      },
      {
        "keywords": ["Math.PI", "Math.sqrt", "Math.round"],
        "code": `
function calculateRadius(area) {
  const radius = Math.sqrt(area / Math.PI);
  return Math.round(radius);
}
        `
      },
      {
        "keywords": ["toFixed", "toPrecision"],
        "code": `
function formatPrice(price) {
  return price.toFixed(2)
}

function formatPrice(price) {
  return price.toPrecision(3)
}
        `
      },
      {
        "keywords": ["Number", "isNaN", "isInteger", "parseFloat"],
        "code": `
let input = '19.99';

let value = Number(input);

if (!Number.isNaN(value) && Number.isInteger(value)) {
  console.log('Valid whole number:', value);
} else if (!Number.isNaN(value)) {
  value = parseFloat(input);
  console.log('Valid decimal number:', value);
}
        `
      },
      {
        "keywords": ["Math.max", "Math.min", "spread operator"],
        "code": `
const scores = [72, 88, 94, 63];

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
        `
      },
      {
        "keywords": ["Math.sqrt", "Math.pow"],
        "code": `
function calculateDiagonal(len, width) {
  return Math.sqrt(Math.pow(len, 2) + Math.pow(width, 2))
}
        `
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
        "keywords": ["trim", "includes"],
        "code": `
let query = "   learn javascript basics   "

query = query.trim()

if (query.includes("javascript")) {
  const isRelevant = true
}
        `
      },
      {
        "keywords": ["indexOf"],
        "code": `
let sentence = "Learn JavaScript fundamentals"

const position = sentence.indexOf("JavaScript")
        `
      },
      {
        "keywords": ["startsWith", "endsWith"],
        "code": `
const url = "https://example.com/image.jpg";

if (url.startsWith("https") && url.endsWith(".jpg")) {
  const valid = true;
}
        `
      },
      {
        "keywords": ["trim", "replace", "regex"],
        "code": `
const input = "  hello___world  "

const cleaned = input.trim().replace(/_+/g, " ")
        `
      },
      {
        "keywords": ["for loop", "includes"],
        "code": `
const text = "Hello World"

let vowelCount = 0
for (const char of text.toLowerCase()) {
  if ("aeiou".includes(char)) {
    vowelCount++
  }
}
        `
      },
      {
        "keywords": ['slice'],
        "code": `
const text = 'HelloWorld';
const result = text.slice(5); // "World"

const text = 'HelloWorld';
const result = text.slice(0, 5); // "Hello"
        `
      },
      {
        "keywords": ["split", "map", "toUpperCase", "slice", "join"],
        "code": `
function capitalize(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ")
}
        `
      }
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
        "keywords": ["includes", "indexOf"],
        "code": `
const status = ["pending", "approved", "denied"];

const hasApproved = status.includes("approved");
const deniedIndex = status.indexOf("denied");
        `
      },
      {
        "keywords": ["forEach"],
        "code": `
let total = 0;
items.forEach((item) => {
  total += item;
})
        `
      },
      {
        "keywords": ["slice"],
        "code": `
const numbers = [10, 20, 30, 40, 50];

const middleNumbers = numbers.slice(1, 4);
        `
      },
      {
        "keywords": ["push", "pop"],
        "code": `
const scores = [85, 90, 75]

scores.push(95)
const lastScore = scores.pop()
        `
      },
      {
        "keywords": ["sort"],
        "code": `
const temperatures = [72, 65, 88, 90, 75];

temperatures.sort((a, b) => a - b);  // ascending
temperatures.sort((a, b) => b - a);  // descending
        `
      },
      {
        "keywords": ['slice'],
        "code": `
// Assume array of temperatures
const result = temps.slice(2);

const result = temps.slice(0, 5);
        `
      },
      {
        "keywords": ['map', 'filter'],
        "code": `
// Celsius to Fahrenheit conversion for temps variable
const result = temps.map(c => (c * 9/5) + 32);

const result = temps.filter(t => t <= 32);
        `
      }
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
        "keywords": ["for in", "hasOwnProperty", "Object.keys", "Object.values", "Object.entries"],
        "code": `
const order = { apples: 3, oranges: 5, bananas: 2 };
let total = 0;

for (const key in order) {
  if (order.hasOwnProperty(key)) {
    total += order[key];
  }
}

const keys = Object.keys(order);
const values = Object.values(order);
const entries = Object.entries(order);
        `
      },
    ],  
    "class": [
      {
        "keywords": ["constructor", "this"],
        "code": `
class User {
  constructor(name) {
    this.name = name;
  }
}

const user = new User("Luna");
        `
      },
      {
        "keywords": ["constructor", "this", "'methods'"],
        "code": `
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.profileImage = null;
  }

  uploadProfileImage(imagePath) {
    this.profileImage = imagePath;
  }

  displayInfo() {
    return \`Username: \${this.username}, Email: \${this.email}\`;
  }
}

const user = new User("Luna", "luna@email.com", "abc123");
        `
      },
    ],
    "api": [
      {
        "keywords": ["Basic Fetch"],
        "code": `
const DOMAIN = 'https://example.com';

async function fetchData(endpoint) {
	try {
		const response = await fetch(DOMAIN + endpoint);
		if (!response.ok) {
			throw new Error(\`Response status: \${response.status}\`);
		}

		const data = await response.json();
		console.log(data);
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}

fetchData('/some_endpoint_here');
        `
      }
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
        "keywords": ["random", "randint"],
        "code": `
import random
def generate_random_number(max):
    return random.randint(1, max)
        `
      },
      {
        "keywords": ["math.sqrt", "round", "math.pi"],
        "code": `
import math

def calculate_radius(area):
  radius = math.sqrt(area / math.pi)
  return round(radius)
        `
      },
      {
        "keywords": ["round", "format"],
        "code": `
def format_price(price):
  return f"{price:.2f}"

def format_price(price):
  return f"{price:.3g}"
        `
      },
      {
        "keywords": ["float", "int", "is_integer"],
        "code": `
input_value = '19.99'

try:
  value = float(input_value)
  if value.is_integer():
    print('Valid whole number:', int(value))
  else:
    print('Valid decimal number:', value)
except ValueError:
  print('Invalid number')
        `
      },
      {
        "keywords": ["max", "min"],
        "code": `
scores = [72, 88, 94, 63]

highest = max(scores)
lowest = min(scores)
        `
      },
      {
        "keywords": ["**"],
        "code": `
def calculate_diagonal(len, width):
  return (len ** 2 + width ** 2) ** 0.5
        `
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
def capitalize(string):
    return " ".join(word.capitalize() for word in string.split(" "))
        `
      },
      {
        "keywords": ["slice", "reverse"],
        "code": `
# Option 1
def reverse_string(string):
  return string[::-1]

# Option 2 (.reverse() is another option)
def reverse_string(string):
  return string.sort(reverse=True)
        `
      },
      {
        "keywords": ["strip", "in"],
        "code": `
query = "   learn python basics   "

query = query.strip()

if "python" in query:
  is_relevant = True
        `
      },
      {
        "keywords": ["find"],
        "code": `
sentence = "Learn Python fundamentals"

position = sentence.find("Python")
        `
      },
      {
        "keywords": ["startswith", "endswith"],
        "code": `
url = "https://example.com/image.jpg"

if url.startswith("https") and url.endswith(".jpg"):
  valid = True
        `
      },
      {
        "keywords": ["strip", "replace"],
        "code": `
input_value = "  hello___world  "

cleaned = input_value.strip().replace("_", " ")
        `
      },
      {
        "keywords": ["for loop", "in"],
        "code": `
text = "Hello World"

vowel_count = 0
for char in text.lower():
  if char in "aeiou":
    vowel_count += 1
        `
      },
      {
        "keywords": ['slice'],
        "code": `
text = "HelloWorld"
result = text[5:] # "World"

text = "HelloWorld"
result = text[:5] # "Hello"
        `
      },
      {
        "keywords": ["join", "split", "capitalize"],
        "code": `
def capitalize(string):
    return " ".join((string.split(" "))).capitalize()
        `
      }
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
# This one is problematic:
# sum() is a number function in Python
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
        "keywords": ["in", "index"],
        "code": `
status = ["pending", "approved", "denied"]

has_approved = "approved" in status
denied_index = status.index("denied")
        `
      },
      {
        "keywords": ["for"],
        "code": `
total = 0
for item in items:
  total += item
        `
      },
      {
        "keywords": ["slice"],
        "code": `
numbers = [10, 20, 30, 40, 50]

middle_numbers = numbers[1:4]
        `
      },
      {
        "keywords": ["append", "pop"],
        "code": `
scores = [85, 90, 75]

scores.append(95)
last_score = scores.pop()
        `
      },
      {
        "keywords": ["sort"],
        "code": `
temperatures = [72, 65, 88, 90, 75]

temperatures.sort()              # ascending
temperatures.sort(reverse=True)  # descending
        `
      },
      {
        "keywords": ['slice'],
        "code": `
# Assume list of temperatures
result = temps[2:]

result = temps[:5]
        `
      },
      {
        "keywords": ['List comprehension'],
        "code": `
# Celsius to Fahrenheit conversion for temps variable
result = [(c * 9/5) + 32 for c in temps]

result = [t for t in temps if t <= 32]
        `
      }
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
        "keywords": ["for", "keys", "values", "items"],
        "code": `
order = {"apples": 3, "oranges": 5, "bananas": 2}
total = 0

for key in order:
  total += order[key]

keys = order.keys()
values = order.values()
entries = order.items()
        `
      },
    ],
    "class": [
      {
        "keywords": ["__init__", "self"],
        "code": `
class User:
    def __init__(self, name):
        self.name = name

user = User("Luna")
        `
      },
      {
        "keywords": ["def", "__init__", "self"],
        "code": `
class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        self.profile_image = None

    def upload_profile_image(self, image_path):
        self.profile_image = image_path

    def display_info(self):
        return f"Username: {self.username}, Email: {self.email}"

user = User("Luna", "luna@email.com", "abc123")
        `
      },
    ],
    "api": [
      {
        "keywords": ["Basic Fetch"],
        "code": `
import requests

def fetch_data(endpoint):
  try:
    response = requests.get(f'https://example.com{endpoint}')
    response.raise_for_status()  # raises HTTPError for bad responses
    data = response.json()
    print(data)
    return data
  except requests.RequestException as err:
    print(err)
    return None

fetch_data('/some_endpoint_here')
        `
      }
    ]
  },
  "PHP": {
    "number": [
      {
        "keywords": ["is_string", "(int)"],
        "code": `
$value = '123';

if (is_string($value)) {
    $value = (int)$value;
}
        `
      },
      {
        "keywords": ["rand"],
        "code": `
function generateRandomNumber($max) {
    return rand(1, $max);
}
        `
      },
      {
        "keywords": ["sqrt", "pi", "round"],
        "code": `
function calculateRadius($area) {
  $radius = sqrt($area / pi());
  return round($radius);
}
        `
      },
      {
        "keywords": ["number_format", "sprintf", "G"],
        "code": `
function formatPrice($price) {
  return number_format($price, 2, '.', '')
}

function formatPrice($price) {
  return sprintf('%.3G', $price)
}
        `
      },
      {
        "keywords": ["floatval", "intval", "is_nan"],
        "code": `
$input = '19.99';

$value = floatval($input);

if (!is_nan($value) && intval($value) == $value) {
  echo 'Valid whole number: ' . intval($value);
} elseif (!is_nan($value)) {
  echo 'Valid decimal number: ' . $value;
}
        `
      },
      {
        "keywords": ["max", "min"],
        "code": `
$scores = [72, 88, 94, 63];

$highest = max($scores);
$lowest = min($scores);
        `
      },
      {
        "keywords": ["sqrt", "pow"],
        "code": `
function calculateDiagonal($len, $width) {
  return sqrt(pow($len, 2) + pow($width, 2));
}
        `
      },
    ],
    "string": [
      {
        "keywords": ["implode", "explode", "strtolower"],
        "code": `
$title = 'This is a Blog Post Title';
function slugify($str) {
    return implode('-', explode(' ', strtolower($str)));
}
// 'this-is-a-blog-post-title'
        `
      },
      {
        "keywords": ["strtoupper", "substr"],
        "code": `
function capitalize($word) {
    return strtoupper($word[0]) . substr($word, 1);
}
        `
      },
      {
        "keywords": ["implode", "array_reverse", "str_split"],
        "code": `
function reverseString($str) {
    return implode('', array_reverse(str_split($str)));
}
    
function reverseString($str) {
    return strrev($str);
}
        `
      },
      {
        "keywords": ["trim", "str_contains"],
        "code": `
$query = "   learn php basics   ";

$query = trim($query);

if (str_contains($query, "php")) {
  $isRelevant = true;
}
        `
      },
      {
        "keywords": ["strpos"],
        "code": `
$sentence = "Learn PHP fundamentals";

$position = strpos($sentence, "PHP");
        `
      },
      {
        "keywords": ["str_starts_with", "str_ends_with"],
        "code": `
$url = "https://example.com/image.jpg";

if (str_starts_with($url, "https") && str_ends_with($url, ".jpg")) {
  $valid = true;
}
        `
      },
      {
        "keywords": ["trim", "str_replace"],
        "code": `
$input = "  hello___world  ";

$cleaned = trim($input);
$cleaned = str_replace("_", " ", $cleaned);
        `
      },
      {
        "keywords": ["for loop", "strpos"],
        "code": `
$text = "Hello World";

$vowelCount = 0;
for ($i = 0; $i < strlen($text); $i++) {
  $char = strtolower($text[$i]);
  if (strpos("aeiou", $char) !== false) {
    $vowelCount++;
  }
}
        `
      },
      {
        "keywords": ['substr'],
        "code": `
$text = "HelloWorld";
$result = substr($text, 5); // "World"

$text = "HelloWorld";
$result = substr($text, 0, 5); // "Hello"
        `
      },
      {
        "keywords": ["explode", "array_map", "ucfirst", "implode"],
        "code": `
function capitalize($str) {
    $words = explode(" ", $str);
    $capitalizedWords = array_map(function($word) {
        return ucfirst($word);
    }, $words);
    return implode(" ", $capitalizedWords);
}
        `
      }
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
        "keywords": ["foreach", "[] append"],
        "code": `
$numbers = [1, 2, 3, 4, 5, 6, 7, 8];
$even_squares = [];

foreach ($numbers as $num) {
    if ($num % 2 == 0) {
        $even_squares[] = $num ** 2;
    }
}
        `
      },
      {
        "keywords": ["array_reduce", "ternary"],
        "code": `
function countOccurrences($array, $value) {
    return array_reduce($array, function($count, $val) use ($value) {
        return $val === $value ? $count + 1 : $count;
    }, 0);
}
countOccurrences([1, 2, 3, 4, 1, 2, 1], 1); // 3
        `
      },
      {
        "keywords": ["str_split"],
        "code": `
function stringToArray($str) {
    return str_split($str);
}
        `
      },
      {
        "keywords": ["array_values", "array_unique"],
        "code": `
function uniqueValues($array) {
    return array_values(array_unique($array));
}
        `
      },
      {
        "keywords": ["in_array", "array_search"],
        "code": `
$status = ["pending", "approved", "denied"];

$hasApproved = in_array("approved", $status);
$deniedIndex = array_search("denied", $status);
        `
      },
      {
        "keywords": ["foreach"],
        "code": `
$total = 0;
foreach ($items as $item) {
  $total += $item;
}
        `
      },
      {
        "keywords": ["array_slice"],
        "code": `
$numbers = [10, 20, 30, 40, 50];

$middle_numbers = array_slice($numbers, 1, 3);
        `
      },
      {
        "keywords": ["array_push", "array_pop"],
        "code": `
$scores = [85, 90, 75];

array_push($scores, 95);
$lastScore = array_pop($scores);
        `
      },
      {
        "keywords": ["sort", "rsort"],
        "code": `
$temperatures = [72, 65, 88, 90, 75];

sort($temperatures);       // ascending
rsort($temperatures);      // descending
        `
      },
      {
        "keywords": ['array_slice'],
        "code": `
// Assume array of temperatures
$result = array_slice($temps, 2);

$result = array_slice($temps, 0, 5);
        `
      },
      {
        "keywords": ['array_map', 'fn', 'array_values', 'array_filter'],
        "code": `
// Celsius to Fahrenheit conversion for temps variable
$result = array_map(fn($c) => ($c * 9/5) + 32, $temps);

$result = array_values(
    array_filter($temps, fn($t) => $t <= 32)
);
        `
      }
    ],
    "object": [
      {
        "keywords": ["(object)", "array_merge", "(array)"],
        "code": `
function combineObjects($obj1, $obj2) {
    return (object) array_merge((array)$obj1, (array)$obj2);
}
        `
      },
      {
        "keywords": ["foreach", "array_keys", "array_values"],
        "code": `
$order = ["apples" => 3, "oranges" => 5, "bananas" => 2];
$total = 0;

foreach ($order as $key => $value) {
  $total += $value;
}

$keys = array_keys($order);
$values = array_values($order);
$entries = [];
foreach ($order as $key => $value) {
  $entries[] = [$key, $value];
}
        `
      },
    ],
    "class": [
      {
        "keywords": ["__construct", "public", "$this"],
        "code": `
class User {
    public $name;

    public function __construct($name) {
        $this->name = $name;
    }
}

$user = new User("Luna");
        `
      },
      {
        "keywords": ["public", "__construct", "$this", "'methods'"],
        "code": `
class User {
    public $username;
    public $email;
    public $password;
    public $profileImage;

    public function __construct($username, $email, $password) {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
        $this->profileImage = null;
    }

    public function uploadProfileImage($imagePath) {
        $this->profileImage = $imagePath;
    }

    public function displayInfo() {
        return "Username: " . $this->username . ", Email: " . $this->email;
    }
}

$user = new User("Luna", "luna@email.com", "abc123");
        `
      },
    ],
    "api": [
      {
        "keywords": ["Basic Fetch"],
        "code": `
function fetchData($endpoint) {
  $url = 'https://example.com' . $endpoint;

  $options = [
    "http" => [
      "method" => "GET",
      "header" => "Accept: application/json\r\n"
    ]
  ];

  $context = stream_context_create($options);

  try {
    $response = file_get_contents($url, false, $context);
    if ($response === false) {
      throw new Exception("Error fetching data");
    }

    $data = json_decode($response, true);
    print_r($data);
    return $data;
  } catch (Exception $e) {
    echo $e->getMessage();
    return null;
  }
}

fetchData('/some_endpoint_here');
        `
      }
    ]
  },
  "CSharp": {
    "number": [
      {
        "keywords": ["is", "int.Parse"],
        "code": `
string value = "123";

if (value is string)
{
    value = int.Parse(value);
}
        `
      },
      {
        "keywords": ["Random.Next"],
        "code": `
using System;
public static class Utils
{
    private static Random _random = new Random();

    public static int GenerateRandomNumber(int max)
    {
        return _random.Next(1, max + 1);
    }
}
        `
      },
      {
        "keywords": ["Math.Sqrt", "Math.Round", "Math.PI"],
        "code": `
using System;

public static class CircleUtils
{
  public static int CalculateRadius(double area)
  {
    double radius = Math.Sqrt(area / Math.PI);
    return (int)Math.Round(radius);
  }
}
        `
      },
      {
        "keywords": ["ToString", "F2", "G3"],
        "code": `
public static string FormatPrice(double price) {
  return price.ToString("F2")
}

public static string FormatPrice(double price) {
  return price.ToString("G3")
}
        `
      },
      {
        "keywords": ["double.TryParse", "int", "double"],
        "code": `
string input = "19.99";

if (double.TryParse(input, out double value)) {
  if (value % 1 == 0) {
    Console.WriteLine("Valid whole number: " + (int)value);
  } else {
    Console.WriteLine("Valid decimal number: " + value);
  }
}
        `
      },
      {
        "keywords": ["Max", "Min", "System.Linq"],
        "code": `
using System.Linq;

int[] scores = { 72, 88, 94, 63 };

int highest = scores.Max();
int lowest = scores.Min();
        `
      },
      {
        "keywords": ["Math.Sqrt", "Math.Pow"],
        "code": `
public static double CalcDiag(double len, double width) {
  return Math.Sqrt(Math.Pow(len, 2) + Math.Pow(width, 2));
}
        `
      },
    ],
    "string": [
      {
        "keywords": ["string.Join", "str.ToLower", "Split"],
        "code": `
string title = "This is a Blog Post Title";
public static string Slugify(string str)
{
    return string.Join("-", str.ToLower().Split(' '));
}
// "this-is-a-blog-post-title"
        `
      },
      {
        "keywords": ["char.ToUpper", "Substring"],
        "code": `
public static string Capitalize(string word)
{
    return char.ToUpper(word[0]) + word.Substring(1);
}
        `
      },
      {
        "keywords": ["new string()", "Reverse", "ToArray"],
        "code": `
public static string ReverseString(string str)
{
    return new string(str.Reverse().ToArray());
}

public static string ReverseString(string str)
{
    char[] chars = str.ToCharArray();
    Array.Reverse(chars);
    return new string(chars);
}
        `
      },
      {
        "keywords": ["Trim", "Contains"],
        "code": `
string query = "   learn csharp basics   ";

query = query.Trim();

if (query.Contains("csharp")) {
  bool isRelevant = true;
}
        `
      },
      {
        "keywords": ["IndexOf"],
        "code": `
string sentence = "Learn CSharp fundamentals";

int position = sentence.IndexOf("CSharp");
        `
      },
      {
        "keywords": ["StartsWith", "EndsWith"],
        "code": `
string url = "https://example.com/image.jpg";

if (url.StartsWith("https") && url.EndsWith(".jpg")) {
  bool valid = true;
}
        `
      },
      {
        "keywords": ["Trim", "Replace"],
        "code": `
string input = "  hello___world  ";

string cleaned = input.Trim().Replace("_", " ");
        `
      },
      {
        "keywords": ["foreach", "Contains"],
        "code": `
string text = "Hello World";

int vowelCount = 0;
foreach (char c in text.ToLower()) {
  if ("aeiou".Contains(c)) {
    vowelCount++;
  }
}
        `
      },
      {
        "keywords": ['Substring'],
        "code": `
string text = "HelloWorld";
string result = text.Substring(5); // "World"

string text = "HelloWorld";
string result = text.Substring(0, 5); // "Hello"
        `
      },
      {
        "keywords": ["Join", "Split", "Select", "ToUpper", "Substring"],
        "code": `
static string Capitalize(string str)
{
  return string.Join(" ", str
    .Split(' ')
    .Select(word => char.ToUpper(word[0]) + word.Substring(1)));
}
        `
      }
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
        "keywords": ["new List", "foreach", "Add"],
        "code": `
int[] numbers = {1,2,3,4,5,6,7,8};
List<int> evenSquares = new List<int>();

foreach (int num in numbers) 
{
    if (num % 2 == 0) 
    {
        evenSquares.Add(num * num);
    }
}
        `
      },
      {
        "keywords": ["Aggregate", "ternary"],
        "code": `
using System.Linq;

public static int CountOccurrences(int[] array, int value)
{
    return array.Aggregate(0, (count, val) => val == value ? count + 1 : count);
}
CountOccurrences(new int[] {1, 2, 3, 4, 1, 2, 1}, 1); // 3
        `
      },
      {
        "keywords": ["ToCharArray"],
        "code": `
public static char[] StringToArray(string str)
{
    return str.ToCharArray();
}
        `
      },
      {
        "keywords": ["Distinct", "ToArray"],
        "code": `
using System.Linq;

public static int[] UniqueValues(int[] array)
{
    return array.Distinct().ToArray();
}
        `
      },
      {
        "keywords": ["Contains", "IndexOf"],
        "code": `
List<string> status = new List<string> { "pending", "approved", "denied" };

bool hasApproved = status.Contains("approved");
int deniedIndex = status.IndexOf("denied");
        `
      },
      {
        "keywords": ["ForEach"],
        "code": `
int total = 0;
items.ForEach(item => {
  total += item;
});
        `
      },
      {
        "keywords": ["Slice"],
        "code": `
int[] numbers = {10, 20, 30, 40, 50};

int[] middleNumbers = numbers[1..4];
        `
      },
      {
        "keywords": ["Add", "RemoveAt"],
        "code": `
List<int> scores = new List<int> {85, 90, 75};

scores.Add(95);
int lastScore = scores[scores.Count - 1];
scores.RemoveAt(scores.Count - 1);
        `
      },
      {
        "keywords": ["Sort", "CompareTo"],
        "code": `
List<int> temperatures = new List<int> {72, 65, 88, 90, 75};

temperatures.Sort();                        // ascending
temperatures.Sort((a, b) => b.CompareTo(a)); // descending
        `
      },
      {
        "keywords": ['Skip', 'ToList', 'Take'],
        "code": `
// Assume list of temperatures
var result = temps.Skip(2).ToList();

var result = temps.Take(5).ToList();
        `
      },
      {
        "keywords": ['Select', 'ToList', 'Where'],
        "code": `
// Celsius to Fahrenheit conversion for temps variable
var result = temps.Select(c => (c * 9/5) + 32).ToList();

var result = temps.Where(t => t <= 32).ToList();
        `
      }
    ],
    "object": [
      {
        "keywords": ["Concat", "ToDictionary"],
        "code": `
using System.Collections.Generic;
using System.Linq;

public static Dictionary<string, object> CombineObjects(
    Dictionary<string, object> obj1,
    Dictionary<string, object> obj2)
{
    return obj1.Concat(obj2)
               .ToDictionary(pair => pair.Key, pair => pair.Value);
}
        `
      },
      {
        "keywords": ["foreach", "Keys", "Values", "ToList"],
        "code": `
var order = new Dictionary<string, int> {{"apples", 3}, {"oranges", 5}, {"bananas", 2}};
int total = 0;

foreach (var kvp in order) {
  total += kvp.Value;
}

var keys = order.Keys;
var values = order.Values;
var entries = order.ToList();
        `
      },
    ],
    "class": [
      {
        "keywords": ["public", "constructor", "new"],
        "code": `
public class User
{
    public string Name;

    public User(string name) // <-- Constructor
    {
        Name = name;
    }
}

User user = new User("Luna");
        `
      },
      {
        "keywords": ["public", "constructor", "new", "'methods'"],
        "code": `
public class User
{
    public string Username;
    public string Email;
    public string Password;
    public string ProfileImage;

    public User(string username, string email, string password)
    {
        Username = username;
        Email = email;
        Password = password;
        ProfileImage = null;
    }

    public void UploadProfileImage(string imagePath)
    {
        ProfileImage = imagePath;
    }

    public string DisplayInfo()
    {
        return $"Username: {Username}, Email: {Email}";
    }
}

User user = new User("Luna", "luna@email.com", "abc123");
        `
      },
    ],
    "api": [
      {
        "keywords": ["Basic Fetch", "json"],
        "code": `
using System;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;

class Program
{
  private static readonly HttpClient client = new HttpClient();

  static async Task<JsonElement?> FetchData(string endpoint)
  {
    try
    {
      var response = await client.GetAsync("https://example.com" + endpoint);
      response.EnsureSuccessStatusCode();
      
      var jsonString = await response.Content.ReadAsStringAsync();
      var data = JsonSerializer.Deserialize<JsonElement>(jsonString);

      Console.WriteLine(data);
      return data;
    }
    catch (Exception ex)
    {
      Console.WriteLine(ex.Message);
      return null;
    }
  }

  static async Task Main(string[] args)
  {
    await FetchData("/some_endpoint_here");
  }
}
        `
      }
    ]
  }
}