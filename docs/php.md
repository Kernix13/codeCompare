---
language: PHP
slug: php
type: reference
level: beginner–intermediate
last_updated: 2028-02-28
official_docs: https://www.php.net/manual/en/index.php
---

# PHP notes

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

## basics

> https://www.php.net/manual/en/funcref.php

> Hostname template: `{name}.test`

> `php -S localhost:8000`

```json
// This is why I have the older PHP version, settings.json
"php.validate.executablePath": "C:/xampp/php/php.exe",
"php.validate.executablePath": "C:/laragon/bin/php/php-8.1.10-Win32-vs16-x64",
```

- extensions: PHP Intellephense, PHP DocBlocker
- Root: user = `root`, PW = `rootroot`
- `php -S localhost:8000`
- `die();` - kills anything after it - no html shows, no php runs
- `<?php echo 'hello'; ?>` or `<?= 'hello' ?>`
- `php --help`
- `php -S <port>`, e.g. `php -S localhost:8000`
- `var_dump` vs `print_r` | `gettype()`
- try `\! cls` to slear the screen
- `echo` and `print` are called statements - both print to the page
- echo can have multiple args: `<?php echo 'Val1', 'Val2', 'etc'; ?>`
- `//` single line comment
- `/* */` for a multi-line comment
- `/** */` for DocBlock comments
- Naming conventions: Underscore, camelCase, PascalCase, Lower case
- Data Types: String, Integer, Float, Boolean, Array, Object, Null, Resource,
- `var_dump` vs `getType()` (but you have to echo it out)
- String Concatenation: `$fullName = $firstName . ' ' . $lastName;`
- Implicit: String to Integer conversion | Int to String | Boolean to Int |
- Explicit (type conversion): `(string)` | `(int)` | `(bool)` |
- any string is `true` and an empty string is `false` - truthy/falsy
- Arithmetic Operators: `+ - * / %`
- Assignment Operator: `+=` and `-=` and `*=` and `/=`
- Number, Math, and String functions/methods!
  - strlen, str_word_count, strrev, strpos, substr, str_replace, strtolower, strtoupper, ucwords, trim
  - max, min, ceil, floor, deg2rad, intdiv, pi, pow, rad2deg, round, sqrt,
- `date("F j, Y, g:i a");`
- Delete/Remove array element: `unset($nums[3])`
- `print_r` way better than `var_dump`
- 2 ways to create an array: `$arr = array(1, 2, 3)` | `$arr = [4, 5, 6]`
- access an array value using the index: `$nums[1]`
- add array item: `$nums[] = 100;` - ?
- change array item: `$nums[3] = 200;`
- delete array item: `unset($nums[3]);`
- reindex the array after using `unset()`: `$nums = array_values($nums);`
- Associative Arrays: `=>` used b\tw key and value |
  - Access: `$user['email']` |
  - Add: `$user['address'] = '123 Main Street'` |
  - remove: `unset($user['address']);`
- Multi-Dimensional Arrays:
  - Acceess: `$fruits[0][0];` |
  - add: `$users[] = ['key' => 'val']` | can also use pop, push, shift, etc and unset()
- for loop: `for (initialization; condition; update) {...code}`
- while loop: initialization; while (condition) {...code; update;}

```php
<?php
  // good for arrays
  function inspect($value) {
    echo '<pre>'
    var_dump($value)
    echo '</pre>'
  }

?>
```

## Number methods

- `rand()`: generate a random num - `rand(int $min, int $max): int`
- `getrandmax()`: the max that rand() can be
- Rounding: `ceil`, `floor`, `round`
- Geometry: `cos`, `sin`, `tan`
- Degrees: `deg2rad`, `rad2deg`
- Boolean: `is_finite`, `is_infinite`, `is_nan`,
- Others: `abs`, `exp`, `hexdec`, `max`, `min`, `pi`, `sqrt`
- min and max take a comma-separated list or an array of nums
- `number_format`: Format a number with grouped thousands

## String methods

- String Functions: https://www.php.net/manual/en/ref.strings.php
- `strlen()`: self-explanatory
- `$string[4]` returns the character at the index of 4
- `substr(a, b, c)`: where a = the string, b = index to start, c = the length you want
- `str_replace(a, b, c)`: where a = the substring to look for, b = the string to replace it with, c = the string itself
- `strrev(str)`: reverse a string
- `strtolower()`: self-explanatory
- `strtoupper()`: self-explanatory
- `ucwords()`: just the first char is uppercase
- `trim()`:

## Dates & Times

- Date function: `date(string $format, ?int $timestamp = null): string`
- Time: `time(): int` - Return current Unix timestamp
- `Y` - The year
- `m` - The month
- `d` - The day as a # |
- `D` - short name day of the week | `l` - The full day name
- `h` - The hour | `i` - The minute | `s` - The second
- `a` - AM/PM

## Arrays

- `print_r` way better than `var_dump`
- 2 ways to create an array: `$arr = array(1, 2, 3)` | `$arr = [4, 5, 6]`
- access an array value using the index: `$nums[1]`
- add array item: `$nums[] = 100;` - ?
- change array item: `$nums[3] = 200;`
- delete array item: `unset($nums[3]);`
- reindex the array after using `unset()`: `$nums = array_values($nums);` - ?
- Non-mutating functions:
  - `count(arr)`,
  - `array_slice($arr, i_start, len)` - returns array of sliced items
  - `array_sum(arr)`,
  - `array_search(arr, searchVal)`,
  - `in_array(item, arr)`,
  - `explode(delimiter, str)` - turn a string into an array
  - `implode(separator, arr)` - turn an array into an string
- Mutating functions:
  - `sort(arr)`,
  - `rsort(arr)` or `array_reverse`,
  - `array_push(arr, value_to_add)`,
  - array_merge($colors, ['purple', 'orange'])
  - `array_unshift(arr, value_to_add)`,
  - `array_pop(arr)`, `array_shift(arr)`,
  - `array_splice(arr, offset, len, [replacement])`
- Associative Arrays: `=>` used b\tw key and value |
  - Access: `$user['email']` |
  - Add: `$user['address'] = '123 Main Street'` |
  - remove: `unset($user['address']);`
- Multi-Dimensional Arrays:
  - Acceess: `$fruits[0][0];` |
  - add: `$users[] = ['key' => 'val']` | can also use pop, push, shift, etc and unset()
- for loop: `for (initialization; condition; update) {...code}`
- while loop: initialization; while (condition) {...code; update;}
- endforeach, endfor, endif

## Associative Arrays & Multi-Dimensional Arrays

- they are used to store key-value pairs (Objects)
- the keys are strings or nums, the values of any type
- similar to object literals
- `=>` used b\tw key and value

How to access or update or delete elements:

- Access: `$user['email']`
- Add: `$user['address'] = '123 Main Street'`
- Remove: `unset($user['address']);`
- Acceess: `$fruits[0][0];`
- Add to an array of associative arrays: `$users[] = ['key' => 'val']`

```php
$user = [
  [
  'name'      => 'Jim',
  'email'     => 'jimkernicky@gmail.com',
  'password'  => '123abc',
  'hobbies'   => ['Guitar', 'Camping', 'Photography']
  ],
];

$fruits = [
  ['Apple', 'Red'],
  ['Orange', 'Orange'],
  ['Banana', 'Yellow']
];
```

> Remember for arrays empty `[]` adds to the end including associative arrays - I would prefer `array_push()`

## Loops

- for loop: `for (initialization; condition; increment) {...code}` - 3 params
- while loop: `initialization`, `condition`, `increment`
- do-while loop: he hardly ever uses this
- foreach loop with associative array is very common!
- The SHORTHAND: instead of `{}` you use `:`!!!

```php
<?php
// for loop
for ($i = 0; $i < 10; $i++): ?>
  <li><?= $i; ?></li>
<?php endfor ?>

for ($i = 0; $i < count($arr); $i++)

// while loop
while ($i < 10) {
  echo $i . '<br />';
  $i++;
}

<?php $i = 0; while ($i < 10) : ?>
  <li><?= $i; ?></li>
<?php $i++; endwhile ?>

initialization;
while (condition) {
  ...code here
  update;
}

// do while
initialization;
do {
  ...code here
  update;
} while (condition);

// foreach
foreach($items as $item) {
  // code
}

// with index
foreach($items as $index => $item) {
  // code
}

// with associative array
foreach($items as $item) {
  $user['name'] . ': ' . $user['email']
}

  <?php foreach ($names as $name) : ?>
    <li><?= $name ?></li>
  <?php endforeach; ?>

  <?php foreach ($names as $index => $name) : ?>
    <li><?= $index + 1 . '. ' . $name ?></li>
  <?php endforeach; ?>

  // Using a foreach loop with associative array
  <?php foreach ($users as $user) : ?>
    <li><?= $user['name'] . ': ' . $user['email'] ?></li>
  <?php endforeach; ?>

// get key names and values from an associative array
foreach($items as $item) {
  $user['name'] . ': ' . $user['email']
}

number_format(
    float $num,
    int $decimals = 0,
    ?string $decimal_separator = ".",
    ?string $thousands_separator = ","
): string
```

## Control Structures & Conditionals

- if, if-else, nested if, if-elseif |
- shorthand: `<?php if (condition) : ?>` |
- Comparison & Logical Operators |
- use `&&` operator to check if 2 conditions are true
- `&& || !` - ! means "not true"
- == and ===
- `and` and && are the same - or and || are the same - xor?
- `!=` and `<>` = Not equal to
- `break`: to sop a loop before it's finished
- `continue`: to skip an iteration of a loop and keep going
- `if (count($job['tags']) !== 0)` vs `if (!empty($job['tags']))`
- check switch code
- Ternary: `condition ? expression if true : expression2 if false`
- Null Coelescing Operator: `&&` - used to check if a value if `null` -> `$color = $favColor ?? 'blue';`
- isset($var)
- empty function: `if (!empty($job['tags']))`

> `elseif` or `else if`

```php
/* If-Else-If */
if (condition) {
  // code to run if condition is true
} else if (otherCondition) {
  // code to run if otherCondition is true
} else {
  // code to run if neither condition is true
}

// to get an index:
foreach($listing as $index => $job)
```

> `isset()` => use to see if a variable is set, meaning it has a value

Null Coelescing Operator

```php
$favColor = 'red';
$color = $favColor ?? 'blue';
```

## Functions

- `function add($a, $b) { return $a + $b; }`
- Fx names follow the same rules as variable names
- PHP params need the `$` sign becasue they are variables
- you can pass in **default values** for the params: `function add($a = 1, $b = 2)`
- use the `splat operator` which is like the Rest Param Operator `...` for variable params
- Local Scope: a variable defined in a Fx
- you can't access a global scope from w\in a Fx - anything from the outside should come in as a parameter - But you can if in the Fx you add the KW `global`, But you don't really want to do that
- Constants are similar to variables but they can't be changed - all UPPERCASE convention and don't use `$` - they are useful for storing values that you know are not going to change - use `define()` or `const` to create them
- they are usually seen in config files
- Optional Type Declaration: you can either set a value in your main `php.ini` file which is the main config for PHP or you can type it right in your script - `declare()` | `strict_types` | `int` | `string` ... `void` if no return value

```php
<?php
// splat operator
function addAll(...$nums) {
  $total = 0;
  foreach($nums as $num) {
    $total += $num;
  }
  return $total;
}

// First, turn on type declarations
declare(strict_types = 1);

function getSum(int $a, int $b): int {
  return $a + $b;
}

// Constants
// 1. use define("NAME", "value")
define('APP_NAME', 'Writer Assist');

// 2. use const keyword
const DB_NAME = 'kwddb';
const DB_HOST = 'localhost';

// helper function
function formatSalary($salary) {
  return '$' . number_format($salary);
}
```

- to get an array out of an object use `array_column(arr, key)`
- Anonymous Functions & Closures: anonymous functions, also known as Lambda Functions
- there are a feew different types of anonymous Fxs s\a Closures and Callbacks
- you have to add a semi-colon after the final curly bracket with anonymous functions
- to call it you can put it into a variable or you can pass it into another function as a callback

```php
/* Anonymous Function example */
$square = function ($num) {
  return $num * $num;
};
echo $square(4);

/* Closure example */
function createCounter() {
  $count = 0;

  $counter = function () use (&$count) {
    return ++$count;
  };

  return $counter;
}

$counter = createCounter();
```

- Closures - global vs local scope -> you can define functions within functions
- and they each have their own scope and you may need to access variables from the outer scope - that's where closures come in
- you can do that with anonymous Fx along with the `use` KW
- Another reason to use an anon Fx is for a callback - when you pass a Fx in as an argument to another Fx
- Callback Functions: a Fx passed as an argument to another Fx - it gets called later on in the Fx it was passed into
- Arrow Functions: special form of an anonymous / Lambda Fx - change `function` to `fn`, add `=>` and lose `{}` and `return`

```php
// Named function
function add($x, $y) {
  return $x + $y;
}

// As arrow function
$add = fn ($x, $y) => $x + $y;

// As a callback
$nums = [3, 4, 5, 6];
$squaredNums = array_map(fn ($num) => $num * $num, $nums);
```

## OOP - Object Oriented Programming

- keywords/syntax: `class`, `public`, `private`, `protected`, `function`, `__construct`, `this`, `$obj->property`, `new`, `extends`, `parent::__construct`, `static`, `abstract`,
- you can set default values for the properties
- pass data into `__construct`
- `$this`: means 'that particular object'
- `public`: the property or method can be accessed from anywhere - this is the default if you leave off the modifier
- `protected`: the property or method can be accessed from within the class OR any class that inherits from it
- `private`: the property can only be accessed from within the class
- Getters & Setters: special methods to access or modify private properties
- `polymorphism` - same method in parent and sub class
- Static props and methods: use the KW `static` and use the _Scope Resolution Operator_ which is `::` to call/instantiate
- Abstract Classes are not instantiated but instead used by sub-classes - prefix it with `abstract`
- subclasses inherit an abstract class - you can have `abstract methods` w\in an abstract class
- Interfaces: is a collection of abstract methods and constants (huh?)
- use the `interface` KW
- create a public Fx but don't put anything in it just like the abstract Fx
- Then implement the interface in some classes, use the KW `implements`

```php
class MathUtility {
  public $pi = 3.141592;
}

$mathUtil1 = new MathUtility();
echo $mathUtil1->pi;

// With static keyword
class MathUtility {
  public static $pi = 3.141592;

  public static function add(...$nums)
  {
    return array_sum($nums);
  }
}

echo MathUtility::$pi;
echo MathUtility::add(1, 2, 3, 4);
```

```php
class Article
{
  public $title;
  public $content;
  private $published = false;

  public function __construct($title, $content)
  {
    $this->title = $title;
    $this->content = $content;
  }

  // Setter
  public function publish()
  {
    $this->published = true;
  }

  // Getter
  public function isPublished()
  {
    return $this->published;
  }
}

$article1 = new Article('Article One', 'This is article one.');
$article2 = new Article('Article Two', 'This is article two.');

$article1->publish();

echo var_dump($article1->isPublished(), true) . '<br>';
echo var_dump($article2->isPublished(), true) . '<br>';

// #2
class StringUtility
{
  public static function shout($string)
  {
    return strtoupper($string)  . '! <br>';
  }

  public static function whisper($string)
  {
    return strtolower($string) . '! <br>';
  }

  public static function repeat($string, $num = 2)
  {
    return str_repeat($string, $num) . '! <br>';
  }
}

echo StringUtility::shout('Hello');
echo StringUtility::whisper('GOODBYE');
echo StringUtility::repeat('Hello');
```

## Abstract Classes

- Abstract Classes can't be instantiated like a regular class - but they can be sub-classed - sub classeses can inherit the props and methods
- you can create a subclass that inherits an abstract class
- prefix it with `abstract`
- you can have `abstract methods` w\in an abstract class

> If you have 1 or more abstract methods then your class HAS to be declared as an abstract class

- `concrete methods`: regular methods in an abstract class
- you can also have a constructor
- new functions: `pi()` and `pow()`

So:

1. create an abstract class with whatver methods and props
2. create a subclass of above also with pops, methods, constructor
3. to use instantiate the sub-class

- When you have an abstract class you tend to have multiple classes that extends it
- create another class named `Rectangle` - 6:37

```php
// Abstract class
abstract class Shape {
  protected $name;

  // Abstract method
  abstract public function calculateArea();

  public function __construct($name) {
    $this->name = $name;
  }

  // Concrete method
  public function getName() {
    return $this->name;
  }
}

class Rectangle extends Shape {
  private $height;
  private $width;

  public function __construct($name, $height, $width) {
    parent::__construct($name);
    $this->height = $height;
    $this->width = $width;
  }

  public function calculateArea() {
    return $this->height * $this->width;
  }
}
```

## Interfaces

- similar to abstract classes but they are not classes
- they are ways to define a contract for a class w\o having to define the implementation
- an interface is a collection of abstract methods and constants
- a class that implements the interface must implement all of the methods and constants defined in that interface
- an interface can not be instantiated

Examples of when you would use them:

- Building a CMS with diff content: articles, videos, images, etc
- Each type of content should have the ability to be displayed and edited
- You want to ensure that all content types adhere to a common set of methods for displaying and editing content
- You can use an interface to define that "contract"

To create one:

- Use the `interface` KW
- Create a public Fx but don't put anything in it just like the abstract Fx
- Create 2 of them: `display()` and `edit()`
- Then implement the interface in some classes, use the KW `implements`
- Create an `Article` class > - _see code_
- Repeat for `Video` class - almost the same except the vifeo goes in an `iframe` tag (another example of polymorphism)
- Then instantiate an `Article` and `Video`

```php
interface ContentInterface {
  public function display();
  public function edit();
}

class Article implements ContentInterface {
  private $title;
  private $content;

  public function __construct($title, $content)   {
    $this->title = $title;
    $this->content = $content;
  }

  public function display() {
    echo "<h2>{$this->title}</h2>";
    echo "<p>{$this->content}</p>";
  }

  public function edit() {
    echo "editing the article '{$this->title}'";
  }
}
```

## Superglobals

10 lessons

Best Of:

- `$_GLOBALS`: References variables in the global scope - think its `$GLOBALS`
- `$_SERVER`: contains info about the server such as hostname, file paths, etc
- `$_GET`: variables passed into the script via query params and GET forms
- `$_POST`: variables passed into the script via POST forms
- `$_FILES`: items uploaded to current script
- `$_COOKIE`: variables passed to script via HTTP cookies
- `$_SESSION`: session variables available to the script
- `$_REQUEST`: contains the contents of `$_GET`, `$_POST`, and `$_COOKIE`
- `$_ENV`: variables passed to the current script via the environment method
- ALWAYS CHECK FOR THESE BEFORE YOU USE THEM: add ` ?? ''`
- `requestMethod`: contains the HTTP request method (GET, POST, PUT, DELETE)

```php
// Common server variables: $_SERVER['SERVER_'] ?? '';
$requestMethod = $_SERVER['REQUEST_METHOD'] ?? ''; // GET
$serverProtocol = $_SERVER['SERVER_PROTOCOL'] ?? ''; // HTTP/1.1
$serverName = $_SERVER['SERVER_NAME'] ?? ''; // localhost
$serverPort = $_SERVER['SERVER_PORT'] ?? ''; // 8000
$serverSoftware = $_SERVER['SERVER_SOFTWARE'] ?? ''; // PHP 8.0.28 Development Server
$serverAdmin = $_SERVER['SERVER_ADMIN'] ?? ''; // email address of server admin
$documentRoot = $_SERVER['DOCUMENT_ROOT'] ?? ''; // Folder
$scriptFilename = $_SERVER['SCRIPT_FILENAME'] ?? ''; // php file name and
$scriptName = $_SERVER['SCRIPT_NAME'] ?? ''; // the php file name
$phpSelf = $_SERVER['PHP_SELF'] ?? ''; // same as above: /index.php
$remoteAddr = $_SERVER['REMOTE_ADDR'] ?? ''; // ::1
$httpConnection = $_SERVER['HTTP_CONNECTION'] ?? ''; // keep-alive
$httpHost = $_SERVER['HTTP_HOST'] ?? ''; // localhost:8000
$referer = $_SERVER['HTTP_REFERER'] ?? ''; // url of referring page is avail
$httpUserAgent = $_SERVER['HTTP_USER_AGENT'] ?? ''; // (see below)
$queryString = $_SERVER['QUERY_STRING'] ?? ''; // name=luna
$requestUri = $_SERVER['REQUEST_URI'] ?? ''; // /?name=luna

// HTTP_USER_AGENT: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36
```

- `$GLOBALS` has references to all the global scope vars, the names of the vars are the keys in the associative array - not used that much
- `putenv(str)`: set an env var: `putenv('DB_HOST=localhost');`
- to see all your systen ENV vars, use `getenv()` and don't pass anything into it
- `$_GET`: used to get vars sent to your script from a GET request via query params or the data that is sent in the URL
- query params start with a question mark `?` and every additional one has an ampersand `&`: `?name=luna&species=cat&bestfriend=jim`
- very rarely would you ever take data from query params and put it on the page
- but if you do there are methods you should use like `htmlspecialchars()`
- `$_POST`: holds data that is submitted from a form that has a method of `POST` - much more secure if submitting data from a form that is to go into a database
- use `isset` to check for the values
- use `htmlspecialchars` for the XSS attack

```php
// like this:
$title = isset($_POST['title']) ? htmlspecialchars($_POST['title']) : '';
// or null coelescing operator
$title = htmlspecialchars($_POST['title']) ?? '';
```

- `$_REQUEST`: You can use this the same was as using GET, POST and COOKIE - He recommends not using this - it can lead to problems
- `$_FILES`:
- Look into `UPLOAD_ERR_OK`, `is_dir()`, `mkdir()`, `uniqid()`, `move_uploaded_file()`, `pathinfo()`, `empty()`
- remember `[]` after the array var name to add to it
- `$_SESSION`: is used to store session data - Sessions allow devs to store and manage user-specific data on the server that persists thru HTTP requests
- in order to use sessions, the Fx `session_start()` must be called, typically at the very top of the page
- Cookies are on the client side, sessions are more secure b\c they are stored on the server
- open DevTools to Application tab > Cookies > look for `PHPSESSID`
- look into `unset()` and `session_destroy()` (usually do that with an auth system)
- `$_COOKIE`: Cookies allow devs to store data on the user's client/browser, making it available thru multiple pages, similar to sessions
- the `$_COOKIE` super global holds the values of cookies sent by the client's browser to the server
- these cookies are sent with HTTP requests, allowing the server to remember info about the user
- Never put sensitive info in a cookie: PW, Credit card #, etc
- check sessions and cookies comparison
- use the Fx `setcookie(1, 2, 3, 4, 5, 6)`
- you want to use `setcookie()` and set `$expires_or_options` to a time before the present

## Database & PDO

Later

## Other topics (LATER)

- Fetching data
- Namespaces
- Composer
- Controller Classes
- Full CRUD
- Authentication and Authorization
