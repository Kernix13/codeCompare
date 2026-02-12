// For pre code blocks
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
}

// ternary
compare ? ifTrue : ifFalse

// switch statement
switch (value) {
  case "one":
    // code
  break;
  case "two":
    // code
  break;
  default:
    // code
  break;
}`,
  ],
  "php": [
    `
/* if, else if, else */
if ($condition) {
    // code
  } else if ($condition2) {
    // code
  } else {
    // code
}

// ternary
$compare ? $ifTrue : $ifFalse;

// switch statement
switch ($value) {
  case "one":
    // code
    break;
  case "two":
    // code
    break;
  default:
    // code
    break;
}`,
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


# ternary (reversed)
ifTrue if condition else ifFalse

# match/case
match value:
  case "one":
    # code
  case "two":
    # code
  case _:
    # default code


    

`,
  ],
  "csharp": [
    `
/* if, else if, else */
if (condition)
{
    // code
}
else if (condition2)
{
    // code
}
else
{
    // code
}

// ternary
var res = 
  compare ? ifTrue : ifFalse;

// switch statement
switch (value)
{
    case "one":
        // code
        break;
    case "two":
        // code
        break;
    default:
        // code
        break;
}`,
  ],
  "dart": [
    `
/* if, else if, else */
if (condition) {
  // code
} else if (condition2) {
  // code
} else {
  // code
}

// ternary
var res = 
  compare ? ifTrue : ifFalse;

// switch statement
switch (value) {
  case "one":
    // code
    break;
  case "two":
    // code
    break;
  default:
    // code
    break;
}`,
  ],
}

const loops = {
  "javascript": [
    `
for (let i = 0; i < num; i++) {
  // code
}

for (let item of arr) {
  // code
}

for (let key in obj) {
  // code
}

let num = 0;
while (num < max) {
  // code
  num++
}

arr.foreach((item, i) => {
  // code
})`,
  ],
  "php": [
    `
for ($i = 0; $i < $num; $i++) { 
  // code 
}

foreach ($arr as $item) {
    // code
}

foreach ($obj as $key => $val) {
    // code
}

$num = 0;
while ($num < $max) { 
  // code 
  $num++; 
}

foreach ($arr as $i => $item) {
  // code
}`,
  ],
  "python": [
    `
for i in range(num):
  # code


for item in iterable:
  # code


for key, val in dict1.items():
  val = dict1[key]
  # code

num = 0
while num < max: 
  # code 
  num += 1

  
for i, item in enumerate(arr):
    # code

`,
  ],
  "csharp": [
    `
for (int i = 0; i < num; i++)
{
    // code
}

foreach (var item in arr)
{
    // code
}

foreach (var key in obj.Keys)
{
    // code
}

int num = 0;
while (num < max)
{
    // code
    num++;
}

arr.ForEach((item) =>
{
    // code
});`,
  ],
  "dart": [
    `
for (var i = 0; i < num; i++) {
  // code
}

for (var item in arr) {
  // code
}

for (var key in obj.keys) {
  // code
}

var num = 0;
while (num < max) {
  // code
  num++;
}

arr.asMap().forEach((i, item) {
  // code
});`,
  ],
}

const functions = {
  "javascript": [
    `
function func(param) {
  return param;
}

const func = (param) => param;`,
  ],
  "php": [
    `
function func($param) {
  return $param;
}

$func = fn($param) => $param;`,
  ],
  "python": [
    `
def func(param):
  return param


lambda param: param expr`,
  ],
  "csharp": [
    `
object Func(object param)
{
    return param;
}

// expression-bodied
object Func(object prm) => prm;`,
  ],
  "dart": [
    `
dynamic func(dynamic param) {
  return param;
}

// arrow function
dynamic func(dynamic prm) => prm;`,
  ],
}

const classes = {
  "javascript": [
    `
class CName {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  method1() {
    return this.p1 + this.p2;
  }
}

const c1 = new CName("a", "b");`,
  ],
  "php": [
    `
class CName {
  public $p1;
  public $p2;

  public function __construct($p1, $p2) {
    $this->p1 = $p1;
    $this->p2 = $p2;
  }

  public function method1() {
    return $this->p1 . $this->p2;
  }
}

$c1 = new CName("a", "b");`,
  ],
  "python": [
    `
class CName:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2

    def method1(self):
        return self.p1 + self.p2

c1 = CName("a", "b")`,
  ],
  "csharp": [
    `
class CName
{
    public string P1;
    public string P2;

    public CName(string p1, string p2)
    {
        P1 = p1;
        P2 = p2;
    }

    public string Method1()
    {
        return P1 + P2;
    }
}

var c1 = new CName("a", "b");`,
  ],
  "dart": [
    `
class CName {
  String p1;
  String p2;

  CName(this.p1, this.p2);

  String method1() {
    return p1 + p2;
  }
}

var c1 = CName("a", "b");`,
  ],
}