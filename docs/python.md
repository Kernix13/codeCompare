---
language: Python
slug: python
type: reference
level: beginner–intermediate
last_updated: 2026-01-05
official_docs: https://docs.python.org/3/
---

# Python — Reference Notes

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
<a href="./react.md">react.md</a>  • 
<a href="./typescript.md">typescript.md</a>
</p>

The majority of these notes are from Colt's Steels's The Modern Python3 Bootcamp: 36 sections, 378 lectures, 30 hours

## Table of Contents

1. [Basics and miscellaneous](#basics-and-miscellaneous)
1. [Section 10 Looping in Python](#section-10-looping-in-python)
1. [Section 12 Lists](#section-12-lists)
   1. [List Methods](#list-methods)
   1. [List Slicing](#list-slicing)
1. [](#)
1. [](#)
1. [](#)
   1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)
1. [](#)

## Basics and miscellaneous

```sh
python
quit()
exit()
python filename.py
```

- Home directory: `~` (your Users folder)
- Root directory: `\` or `C:\` drive
- Use backslash `\` on Windows, forward slash `/` on Mac/Linux
- Run code with `python filename.py`; quit with `quit()` or `exit()`
- Integer (floor) division: `//` → `10 // 3 = 3`
- Print on the same line: `print("text", end=" ")`
- Combine text and numbers in one output using a comma: `print("Age:", age)`
- Variable naming: **snake_case** & lowercase
- Constants: `CAPITAL_SNAKE_CASE`
- Classes: `UpperCamelCase` / `PascalCase`
- Indentation: 4 spaces
- Multiple assignment: `x, y, z = "Orange", "Banana", "Cherry"`
- Basic types: `bool`, `int`, `float`, `str`, `None` (`True`, `False`)
- Escape characters: `\n`, `\\`, `\'`, `\"`
- Strings: concatenation with `+` or `+=`; indexing `"str"[2]` or `"str"[-1]`
- Input: `input()`
- Conditional statements: `if`, `elif`, `else`; logical operators: `and`, `or`, `not`
- `pass`: null operation, placeholder for code Python expects
- `is`: checks if two variables reference the same object in memory
- Random integer: `from random import randint`

```py
if age < 18:
    pass # TO-DO: Add underage logic later

def calculate_discount(price):
    pass # TO-DO: Implement discount logic

for x in [0, 1, 2]:
    pass # TO-DO

match day:
    case 1 | 2 | 3 | 4 | 5:
        print("Today is a weekday")
    case 6 | 7:
        print("I love weekends!")

fruits = ["apple", "banana", "cherry"]
x, y, z = fruits
print(x, y, z)       # apple banana cherry
print(x + y + z)     # applebananacherry

# Data types
type(object)
x = range(6)                               # range
x = frozenset({"apple", "banana", "cherry"})  # frozenset

import random
random.randrange(1, 10)

txt = "The best things in life are free!"
print("free" in txt)
print("expensive" not in txt)
print(txt[:5])  # Slice from start
print(txt[2:])  # Slice to end
```

- Text type: `str` → `str()`
- Numeric types: `int`, `float`, `complex` → `int()`, `float()`
- Sequence types: `list`, `tuple`, `range` → `list()`, `tuple()`, `range()`
- Mapping type: `dict` → `dict()`
- Set types: `set`, `frozenset` → `set()`
- Boolean type: `bool` → `bool()`
- Binary types: `bytes`, `bytearray`, `memoryview`
- None type: `NoneType`

## Section 10 Looping in Python

- `for` loop: `for item in iterable:`
- `break`: exit loop immediately
- `continue`: skip current iteration and continue with next
- `else` block: executes when `while` loop condition becomes `False`
- Iterable objects: `list`, `string`, `range`, `tuple`, `dict`
- `range()` usage:
  - `range(end)`
  - `range(start, end)`
  - `range(start, end, step)`

```py
for num in range(1, 7):
    print(num * num)

x = 0
for num in range(11, 20, 2):
    x += num

# Example loops:
# for x in string:
# for x in list1:
# for x in tuple1:
# for x in set1:
# for x in dict1:
# for x in dict1.values():
# for x in dict1.keys():
# for x, y in dict1.items():
```

- Tools: autopep8 → `autopep8 --in-place file_name.py`
- Get length of list: `len(list_name)`
- Membership test: `"name" in list_name` → returns `True`/`False`

## Section 12 Lists

```py
# Create and inspect lists
len(list_name)                   # Get length
tasks = list(range(1, 4))        # Alternative way to create a list

# Iterating over lists
for item in list_name:
    print(item)

# Membership test
"name" in list_name
```

### List Methods

```py
# Add elements
data.append(5)                   # Add to end
data.insert(4, 'some str')       # Insert at index
data.extend([4, 5, 6])           # Add multiple elements

# Remove elements
list1.clear()                     # Empty list
list1.pop()                       # Remove last element
list1.pop(index)                  # Remove element by index
list1.remove(item)                # Remove first occurrence (ValueError if not found)

# Query list
list1.index(item)                 # Index of first occurrence
list1.index(item, start)
list1.index(item, start, end)
list1.count(item)                 # Number of occurrences

# Order & mutation
list1.reverse()                   # Reverse in place
list1.sort()                      # Sort in place

# Join list into string
'sep'.join(list1)                 # e.g., ' '.join(list1), '-'.join(list1), ', '.join(list1)
```

### List Slicing

```py
# Basic slicing
list1[start:]                     # From start to end
list1[start:end]                   # From start to end (not inclusive)
list1[start:end:step]              # With step interval
list1[-1:]                          # Last element as list
list2 = list1[:]                    # Copy entire list (preferred)
list2 = list1[0:]                   # Copy entire list
list1[1::2]                         # Every other element starting at index 1

# Reverse a string or list
string[::-1]

# Modify slice
nums = [1, 2, 3, 4, 5]
nums[1::3] = ['a', 'b', 'c']       # [1, 'a', 'b', 'c', 4, 5]

# Get every other item
list1[::2]

# Swap elements (similar to destructuring)
names = ['Jim', 'Luna']
names[0], names[1] = names[1], names[0]  # ['Luna', 'Jim']
```

............. MY COMPARE NOTES ...................

js versions

```js
arr.map(x => x)
arr.filter(x => cond)
arr.filter(cond).map(x => x)
[...new Set(arr)]

// Dictionary comprehension - closest pattern
Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v])
)
Object.fromEntries(
  Object.entries(obj).map(([k, v]) => [k, v])
)
```

php version

```php
array_combine($keys, $values)
array_map(fn($v) => $v, $array)
```

C# - C# is actually the closest to Python comprehensions conceptually

```c#
list.Select(x => x).ToList();
list.Where(x => condition).ToList();
list.ToDictionary(x => key, x => value);
```

| Python    | JavaScript         | PHP           | C#             |
| :-------- | :----------------- | :------------ | :------------- |
| List comp | map / filter       | array_map     | Select / Where |
| Set comp  | new Set()          | array_unique  | Distinct()     |
| Dict comp | Object.fromEntries | array_combine | ToDictionary   |

- Python: “I describe the collection I want.”
- JS / PHP / C#: “I transform a collection step by step.”

## Section 13 Lists Comprehensions

- List comprehension: shorthand syntax to generate new lists, optionally transforming or filtering items
- Can turn strings or other iterables into lists
- One of Python's most powerful features

```py
# Basic syntax
[item_expr for item in iterable]
[item_expr for item in iterable if condition]
[x if x != expr else expr2 for x in iterable]

# Examples
nums = [1, 2, 3, 4, 5, 6]
evens = [num for num in nums if num % 2 == 0]         # [2, 4, 6]
[num*2 if num % 2 == 0 else num/2 for num in nums]
[num*10 for num in range(1, 6)]                      # [10, 20, 30, 40, 50]
[bool(val) for val in [0, [], '', ' ']]             # [False, False, False, True]

friends = ['ashley', 'matt', 'michael']
[friend[0].upper() + friend[1:] for friend in friends]  # ['Ashley', 'Matt', 'Michael']

# Convert items to another type
string_list = [str(num) for num in nums]            # ['1', '2', '3']

# Nested list comprehension
nested_list = [[1,2,3], [4,5,6], [7,8,9]]
[val for sub_list in nested_list for val in sub_list]
```

## Section 14 Dictionaries

- Access keys and values: `dict1.keys()`, `dict1.values()`, `dict1.items()`
- Dictionary comprehension: iterates over keys by default; use `.items()` for keys and values
- Membership test: `"key" in dict1` (checks keys only)
- Methods:
  - `clear()` → empties dictionary
  - `copy()` → returns shallow copy
  - `fromkeys(iterable, value)` → creates new dict with keys set to a default value
  - `get(key)` → returns value or `None`
  - `pop(key)` → removes and returns value
  - `popitem()` → removes a random key-value pair
  - `update(other_dict)` → merges or updates keys

```py
# Accessing and updating
dict1['key'] = 'value'
x = dict1.get('key')
dict1.pop('key')
target.update(source)

# Looping
for key, val in dict1.items():
    print(key, val)

# Dictionary comprehension
{x: x**2 for x in [1,2,3]}                     # {1:1, 2:4, 3:9}
str1, str2 = "ABC", "123"
combo = {str1[i]: str2[i] for i in range(len(str1))}  # {'A': '1', 'B': '2', 'C': '3'}
```

## Comprehension Summary

- Creates a new collection from an iterable
- Can be used with lists, dictionaries, or sets

```py
# List comprehension
[x for x in iterable]
[x_expr for x in iterable if condition]

# Dictionary comprehension
{k: v for k, v in iterable}
{k_expr: v_expr for k, v in iterable if condition}

# Set comprehension
{x for x in iterable}
{x_expr for x in iterable if condition}

# Compact examples
[x for x in it]
{k: v for k, v in it}
{x for x in it}
```

## Section 16 Tuples and Sets

### Tuples

- Ordered, immutable collection (`()`)
- Can contain duplicates, nested tuples, and be sliced (`names[0:]` or `names[::-1]`)
- Methods: `count(item)`, `index(value)`
- Use as dictionary keys or fixed collections (e.g., coordinates, months)

```py
alpha = ('a', 'b', 'c', 'd')
single = (13,)                # Tuple with 1 element
alpha[0], alpha[-1]           # 'a', 'd'
static_nums = tuple([1,2,3])  # Convert list to tuple

# count and index
tuple1 = (10, 20, 10, 30, 10, 40, 50, 20)
tuple1.count(10)
letters = ('a', 'e', 'i', 'o', 'g', 'l', 'i', 'u')
letters.index('i', 4, 7)      # index of first 'i' in slice
```

### Sets

- Unordered collection with no duplicates (`{}`)
- Cannot access by index
- Use to strip duplicates, track unique elements, test membership

```py
# Create sets
set1 = {3, 4, 5}
set1 = set([3, 4, 5, 5])       # strip duplicates
list(set1)                      # convert back to list

# Modify sets
set1.add(item)
set1.update(list1)              # add multiple items
set1.remove(item)               # KeyError if not present
set1.discard(item)              # safe remove
set1.copy()                     # shallow copy
set1.clear()                    # empty set

# Set operations
names1 = {'Jim', 'Bob', 'Jill', 'Susan', 'Mary', 'Joe'}
names2 = {'Bill', 'Bob', 'Janet', 'Susan', 'Jack', 'Joe'}

names1 | names2                  # Union
names1 & names2                  # Intersection
names1 - names2                  # Difference
names1 ^ names2                  # Symmetric difference
```

### Comprehension Examples in Tuples/Sets

```py
# List comprehension
[x**2 for x in range(4)]          # [0, 1, 4, 9]

# Dictionary comprehension
{x: x**2 for x in range(10)}      # {0:0, 1:1, 2:4, 3:9, ...}

# Set comprehension
{char.upper() for char in 'hello'} # {'H', 'E', 'L', 'O'}
```

## Section 17 Functions

- Default parameters: specify a default value in the function definition
- Keyword arguments: pass arguments by name when calling the function
- `global` keyword: allows modification of a variable defined in the global scope
- `nonlocal` keyword: allows modification of a parent function's variable inside a nested function
- Docstrings: document functions using triple double-quotes `""" doc """`
  - Should be the first line of a function
  - Access via `function.__doc__`

## Section 19 Functions Part II

- Positional-only arguments: add `, /` after the positional parameters in the definition
- Keyword-only arguments: add `*,` before keyword-only parameters
- `*args`: collects extra positional arguments as a **tuple**
  - Can be named anything, but conventionally `args`
  - Use inside the function without the `*`
- `**kwargs`: collects extra keyword arguments as a **dictionary**
  - Use inside the function without the `**`

```py
# *args example
def contains_purple(*args):
    return "purple" in args

# **kwargs example
def fav_colors(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}'s fav color: {v}")
fav_colors(jim="green", luna="white", buddy="black")
```

### Parameter Ordering

1. Positional parameters
2. `*args`
3. Default parameters
4. `**kwargs`

### Unpacking Arguments

- `*` unpacks lists or tuples into positional arguments
- `**` unpacks dictionaries into keyword arguments

```py
def sum_all_nums(*args):
    total = 0
    for num in args:
        total += num
    return total
print(sum_all_nums(*[1, 2, 3, 4]))

def display_names(first, second):
    print(f"{first} says hello to {second}")
names = {"first": "Jim", "second": "Luna"}
display_names(**names)

# Tuple unpacking with starred variable
fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
green, yellow, *red = fruits  # red -> ['cherry', 'strawberry', 'raspberry']
```

## Section 20 Lamdas and built-in functions (SKIP)

## Section 20 sub-section: generator expressions (SKIP zip)

- Generators allow you to iterate over data without storing the entire dataset in memory - Instead of using `return`, generators use the `yield` keyword
  - The `yield` keyword is what makes a function a generator
  - https://www.w3schools.com/python/python_generators.asp
- Generator Expression: `(char for char in 'eio' if char in 'aeiou')`
- use this is you don't want a list at the end
- list comprehension generates a list which you won't be using
- if you are passing it to `all` or `any`, use a genexpr
- `sys.getsizeof()`: returns the memory consumption of a single object in bytes

```py
# just remove []
all(char for char in 'eio' if char in 'aeiou') # True

# sys.getsizeof()
import sys
list_comp = sys.getsizeof([x * 10 for x in range(1000)])
gen_exp = sys.getsizeof(x * 10 for x in range(1000))

print(f"List Comprehension: {list_comp} bytes") # 9024 bytes
print(f"Generator Expression: {gen_exp} bytes") # 88 bytes
```

- sorted(): it works on any iterable - returns a new sorted list
- .sort() mutates and can only be used on lists
- for a list of dictionaries, you need to specify what key to sort on
- `sorted(iterable) `- does not mutate - returns a copy
- `sorted(iterable, reverse=True)`
- max and min: pass it 2 or more args or an iterable, work on tuples
- reversed: reverse any iterable and then iterate in reverse
- len(): string, list, tuple, range, or dictionary or set
- sum(): sums an iterable, takes an optional `start` from left to right
- round: rounds to `ndigits` precision - if ndigits is omitted, or is None, returns the nearest integer

```py
max('awesome') # 'w'
min(len(name) for name in names) # to find shortest string as an integer

nums = [1,2,3,4]
for num in reversed(nums):
  print(num)

abs(-4.2) # 4.2
sum(iterable, start)
```

## Section 21 Debugging and Error Handling

- Built-in exceptions: https://docs.python.org/3/library/exceptions.html

### Common Error Types

1. `SyntaxError` – bad syntax
2. `NameError` – variable not defined
3. `TypeError` – operation or function applied to wrong type
4. `IndexError` – invalid index access
5. `ValueError` – right type but inappropriate value
6. `KeyError` – dictionary key not found
7. `AttributeError` – object has no such attribute
8. `Exception` – generic error

```py
# SyntaxError
def first:
    None = 1
    return

# NameError - using undeclared variable

# TypeError
len(123)
'some string' + []

# IndexError
list1 = ['a']
list1[2]

# ValueError
int('hi')
int('7.2')

# AttributeError
'hello'.goodbye
```

### Raising Exceptions

- Use `raise` to give custom error messages

```py
raise ErrorType()
raise ErrorType('optional argument')
raise ValueError('invalid value')

def colorize(text, color):
    colors = ('red', 'green', 'blue', 'orange', 'purple')
    if type(text) is not str:
        raise TypeError('text must be an instance of str')
    if type(color) is not str:
        raise TypeError('color must be an instance of str')
    if color not in colors:
        raise ValueError('color is invalid')
    print(f"Printed {text} in {color}")
```

### Try / Except Blocks

- `try` → block of code to attempt
- `except` → handle exceptions
- `else` → runs if no exception occurs
- `finally` → runs regardless, optional

```py
# Loop until valid input
while True:
    try:
        num = int(input("Enter a number: "))
    except ValueError:
        print("That's not a number")
    else:
        print('else block')
        break
    finally:
        print("runs no matter what")

# Example with multiple excepts
def divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        print("don't divide by zero")
    except TypeError as err:
        print('a and b must be ints or floats')
        print(err)
```

### Debugging with PDB

- `pdb` module – Python debugger, step through code line by line
- `pdb.set_trace()` – pause execution and enter interactive mode
- Remove `pdb` after debugging
- Avoid single-letter variable names that conflict with commands

```py
import pdb
pdb.set_trace()

# One-line version:
# import pdb; pdb.set_trace()

# Common pdb commands:
# l    -> list lines of code
# n    -> next line
# p    -> print
# c    -> continue execution
# p var_name -> print variable
```

## Section 22 Modules

- Import code from other files (custom modules) or external modules via `pip`

```sh
pip --version
pip install module_name
pip uninstall module_name
pip list           # list installed packages
```

### Working with Built-in Modules

```py
import random

# Random numbers and selections
random.randint(1, 100)   # random integer from 1-100
random.choice(list1)     # random element from a list
random.shuffle(list1)    # shuffle list in-place

# Alias a module (useful for long names)
import module_name as alias
import random as rand
alias.randint(1, 6)
rand.randint(1, 6)

# Import everything (not recommended)
from random import *

# Import specific functions
from random import choice, randint, shuffle
randint(1, 100)
choice(list1)
shuffle(list1)

# Summary of import styles
import module_name
import module_name as alias
from module_name import *          # generally avoid
from module_name import method1, method2
from module_name import method1 as m1
```

### Math Module

```py
import math

x = math.sqrt(64)
x = math.ceil(1.4)   # 2
y = math.floor(1.4)  # 1
x = math.pi
```

### Custom Modules

- Any Python file (`.py`) can be imported as a module into another file in the same directory
- Use `import filename` without the `.py` extension
- Functions, classes, and variables in the module become accessible via `filename.`

```py
# my_module.py
def greet(name):
    print(f"Hello, {name}!")

PI = 3.14159

# main.py
import my_module

my_module.greet("Alice")  # Hello, Alice!
print(my_module.PI)       # 3.14159

# Optional: import specific items
from my_module import greet, PI
greet("Bob")
print(PI)
```

- For modules in different directories, you can use a package structure with `__init__.py` or adjust `sys.path`

```py
import sys
sys.path.append('/path/to/module_directory')
import my_module
```

## Section 23 Making HTTP Requests with Python

- Use the `requests` module – popular for HTTP requests
- Common methods: `get()`, `post()`
- Prefer APIs over web pages for structured data
- Useful for web scraping, crawling, or fetching API data

```sh
python -m pip install requests
```

```py
import requests

# Basic GET request
response = requests.get("https://news.ycombinator.com/")
response.ok             # True if status_code is 200-299
response.status_code    # e.g., 200, 404
response.headers        # meta info: date, content-type, encoding, etc.
response.text           # full response body (HTML in this case)
```

### API Requests with Headers and Parameters

- APIs often require headers (e.g., for JSON)
- Headers are passed as keyword arguments (`headers`)
- Query parameters can be passed with `params`

```py
import requests

url = "https://icanhazdadjoke.com/"
response = requests.get(
    url,
    headers={"Accept": "application/json"},
    params={"term": "cat", "limit": 1}  # GET query string: ?term=cat&limit=1
)

# Access response
print(response.text)      # raw JSON string
print(response.json())    # Python dictionary

data = response.json()
print(data)
print(data["joke"])       # extract specific value
```

- Query string: part of URL after `?` to pass data to the server (`?key1=value1&key2=value2`)

## Section 24 Object Oriented Programming

Private vs public

- python does not support true private or public variables or attributes or methods - use prefix of `__` to note that it is private
- encapsulation: the grouping of public & private attributes and methods into a class (making abstraction possible)
- abstraction: when you make a class you only want to expose the bare minimum
  - exposing only "relevant" data in a class interface, hiding private attributes and methods from users

`__init__` method:

- any time you make a new instance of a class, python will look for the `__init__` method
- `self`: keyword that refers to the specific instance - it does not have to be called "self", but that is the common convention

```py
class User:
  def __init__(self, first, last):
    self.first = first
    self.last_name = last
user1 = User("Luna", "Kernix")
```

### Underscores: Dunder methods, name mangling, and more

- underscores: `_name`, `__name`, and `__name__`
- `__name__`: dunder methods - special methods python looks for - do not define your own
- `_name`: just a convention to notate a private variable, not to be used outside of the class
- `__name`: name mangling - Python mangles the name - makes it parrticular to the class it is in

```py
class Person:
  def __init__(self):
    self._secret = "hi"
    self.__msg = "Hello"
const p1 = Person()
print(dir(p1)) # _Person__msg
```

### adding instance methods

- convention is to write all the methods after `init`
- you must pass `self` as the 1st param for all instance methods

```py
class Comment:
    def __init__(self, username, text, likes = 0):
        self.username = username
        self.text = text
        self.likes = likes

    def full_name(self):
        return f"{self.first} {self.last}"

    def initials(self):
        return f"{self.first[0]}.{self.last[0].}"

    # arguments do not require self.
    def likes(self, thing):
        return f"{self.first} {thing}"

# user2.full_name()
# user2.full_name("Ice")
```

### class attributes

- class attributes & methods are used far less often than instance methods and attributes
- instance attributes is defined for each instance of the class
- a class attribute is defined once and are shared by all instances
- don't use `self` when declaring it
- one use for a class attr is to keep track of things: counts, averages, etc
- another use is to create validations

### class methods

- class methods are rare
- they are not concerned with specific instances but with the class itself
- they have the `@classmethod` decorator
- there is no convention on where to place then - but be consistent
- use `cls` instead of `self`

```py
class User:
    active_users = 0

    @classmethod
    def display_active_users(cls):
        return f"There are {cls.active_users} active users"

    def __init__(self, username, text, likes = 0):
        self.username = username
        self.text = text
        self.likes = likes
        User.active_users += 1

    def logout(self):
        User.active_users -= 1
        return f"{self.first} has logged out"

    def full_name(self):
        return f"{self.first} {self.last}"

    def initials(self):
        return f"{self.first[0]}.{self.last[0].}"

    # arguments do not require self.
    def likes(self, thing):
        return f"{self.first} {thing}"

print(User.display_active_users())
```

- commonly, class methods will be used when you are creating a new instance of the class
- if you have data coming in with a certain format and you need to convert it... - example -> `dict.fromkeys()`

`__repr__` method

- for nicer printing of an instance
- custom represenations - readable format

```py
def __repr__(self):
  return f"{self.first} is {self.age}"
```

## Section 25 Deck of Cards Exercise (SKIP)

## Section 26 OOP part 2

### inheritance and objectives

- inheritance: User class -> regular users -> then moderators -> then admins - things that are shared betweeen them
- write the things in common in a "base" or "parent" class
- define a class which inherits from another class
- in Python, you pass the parent class as an argument to the definition of a child class
- `isinstance(obj, ClassName)`
- property: `@property` - this is a decorator - you do not have to call it with parens, just use .
- he change `self.age` to `self._age` to signify it is private to the class

```py
@property
  def age(self):
    return self._age

@age.setter
def age(self, value):
  if value > 0:
    self._age = value
  else:
    # self._age = 0
    raise ValueError("Age can not be negative")

@property
def full_name(self):
  return f"{self.first} {self.last}"
```

- super() passes the params, passing in the parent class gets the methods
- whenever you create a class, python sets a method resolution order for that class, which is the order in which python will look for methods on instances of that class
  - sub-class > then parent > then base object class
  - it is a complex algorithm
- if you call super, it will refer to whatever is next in line
- there are 3 ways to see and access the MRO for a given class

1. `__mro__` attribute on the class - returns a tuple
2. use the `mro()` method on the class - returns a list
3. use the built-in `help(cls)` method - best for human readability, gives a detailed chain

```py
class Cat(Animal):
  def __init__(self, name, breed, toy):
    super().__init__(name, species = "Cat")
    self.breed = breed
    self.toy = toy
```

## Section 27 Iterators & Generators

### iterators vs iterables?

- **iterator**: an object that can be iterated upon - an object that returns data, one element at a time when `next()` is called on it
- **iterable**: an object which will return an iterator when `iter()` is called on it
- `next()`: when next() is called on an iterator, the iterator returns the next item until it raises a `StopIteration` error

### generators

- generators are iterators - they can be created in 2 ways:
  - with generator functions which use the `yield` KW
  - using generator expressions

functions vs generator functions

- generator functions use `yield` instead of `return`
- and instead of returning once, they can yield multiple times
- FXs returns the return value, Generator FXs when invoked returns a generator

## Section 28 Decorators

- decorators are FXs that wrap other FXs and enhance their behavior
- they are examples of higher order functions
- decorators most often use the syntax `@`

using wraps to preserve metadata

- wraps - preserves the name and docstring of the Fx being decorated

## Section 29: Testing with Python

- why test
  - to monitor your code
  - to reduce bugs
  - ensure new features don't break old features
  - ensure refactoring does not introduce bugs
- TTD - test driven development
  - development starts by writing tests
  - then write code to make tests pass
  - a feature is complete when the tests pass
- Red, Green, Refactor - the mantra of TTD - a workflow
  - First - write tests that fail
  - Next - write the minimal amount of code to make the test pass

### assertions

- `assert` statement: throws an `AssertionError` if it is `False`
- it accepts an expression
- returns `None` if truthy
- there is an optional 2nd arg - an error msg
- there are some situations where you would use it, but there are better options - you can override all assert statements if you run your code in optimized mode
- if Python is run with the `-O` flag, assertions will not be evaluated

```py
def add_positive_numbers(x, y):
  assert x > 0 and y > 0, "Both numbers must be positive"
  return x + y
add_positive_numbers(1, -1) # AssertionError: Both numbers must be positive
```

SKIP Doctest: `""" """`

### intro to unittest

- unittest is the most popular and easiest to use
- Unit Testing: testing small individual components (units) - a class, a module, a function - rather than testing an entire application
- `unittest` is a testing framework
- Python comes with a built-in module called unittest
- you write unit tests encapsulated as classes that inherit from `unittest.TestCase`
- you can then run tests by calling `unittest.main()`
- Great docs: https://docs.python.org/3/library/unittest.html

### types of assertions

| Method                    | Checks that          |
| :------------------------ | :------------------- |
| assertEqual(a, b)         | a == b               |
| assertNotEqual(a, b)      | a != b               |
| assertTrue(x)             | bool(x) is True      |
| assertFalse(x)            | bool(x) is False     |
| assertIs(a, b)            | a is b               |
| assertIsNot(a, b)         | a is not b           |
| assertIsNone(x)           | x is None            |
| assertIsNotNone(x)        | x is not None        |
| assertIn(a, b)            | a in b               |
| assertNotIn(a, b)         | a not in b           |
| assertIsInstance(a, b)    | isinstance(a, b)     |
| assertNotIsInstance(a, b) | not isinstance(a, b) |
| assertIsSubclass(a, b)    | issubclass(a, b)     |
| assertNotIsSubclass(a, b) | not issubclass(a, b) |

Commonly used ones:

- self.assertEqual(a, b)
- self.assertNotEqual(a, b) - to make sure a value is NOT returned
- self.assertTrue(x)
- self.assertFalse(x)
- self.assertIsNone(x)
- self.assertIsNotNone(x)
- self.assertIn(a, b)
- self.assertNotIn(a, b)
- self.assertRaises(TypeOfError) - to make sure you get an error

### before and after hooks

- sometimes you have code to run before or after your tests - setUp, tearDown
- maybe involving your database, creating fake data for your tests
- for large apps, you may want some code to run befre every test - you put that code in t he method `setUp` which runs before each test method
- use `tearDown` for code you want to run after all your tests, only useful if you have a DB - tearDown will remove your test data from the DB when the tests are done
  - or it could be used for instances of a class

```py
class SomeTests(unittest.TestCase):
  def setUp(self):
    # setup here
    pass

  def test_first(self):
    # setUp runs before, tearDown runs after
    pass

  def test_second(self):
    # setUp runs before, tearDown runs after
    pass

  def tearDown(self):
    # teardown here
    pass
```

## File I/O

- File I/O is crucial for things like data science or web dev
- read/write ext files
- `with` blocks
- ways to open a file
- read/write csv files
- also json and pickling

### reading text files: open and read

> https://docs.python.org/3/tutorial/inputoutput.html

- to read in use the `open` function
- it returns a file object - more thn just the data, meta data
- you then red in from that object using the `read` method

```py
# open(filename, mode, encoding=None)
# story.txt
file = open("story.txt")
file.read()
```

Cursor movement

- python reads files by using a cursor - when it reads the file, the "cursor" is at the end of the file

### reading files: seek and cursors

- learn how to move the cursor around
- methodd `seek`: manipulate the position of the cursor, to move it
- `readline()` method: stops when it hits the new line character `\n` - cursor starts at the next line
- `readlines()` method: returns a list of lines - cursor is at the end
- if you add anything to th file, you will get them - the connection is open
- it's important that you manually close the files so you don't use up system resources
- `close()` method:
- you can check if a file is closed with the `closed` attribute

```py
# story.txt
file = open("story.txt")
file.read()
file.seek(0) # bring it back to the beginning
file.closed # False
file.close()
file.closed # True
```

### the with statement

```py
# option 1
file = open("story.txt")
file.read()
file.close()
file.closed # True

# option 2 - file is closed automatically
with open("story.txt") as file:
  file.read()

file.closed # True
```

### writing to text files

- when writing to files, you still have to `open` the file
  - open -> then read - or
  - open -> then write
- you need to add the `w` flag as the 2nd argument - that specifies that you are "Writing"
- if the file already has data, `w` will overwrite it
- if the file does not exist yet, it will be created

```py
with open("new.txt", "w") as file:
  file.write("Writing to files is great!\n")
  file.write("One more line")
```

### file modes

modes for opening files

- `r`: default - just reading
- `w` overwrites a file with the new text
- `a`: open for writing, appends to the end of the file if it exists - it ALWAYS appends to the end - use `\n`
- `r+`: read and write to a file - writing based on cursor - this is commonly used
  - IT ADDS TO THE BEGINNING OF THE FILE BY DEFAULT
  - it overwrites what is at the beginning of the file
  - that sucks!
  - the must must exist first or you get an error

```py
with open("new.txt", "r+") as file:
  file.write("Added")
```

## Section 31 Working with CSV and Pickling

### reading csv files

- comma separated values - tabular data
- the first row in a csv file contains the headers
- the first thing you have to do is import the csv file
- Python has a built-in CSV module to read/write CSVs more easily
- there are 2 different ways of reading in CSV: `reader` and `DictReader`
- `reader` gives you each row as a list - it allows you to iterate over rows of the CSV as a list
- `DictReader`: iterate over rows of the CSV as OrderedDicts - it remembers what order things are in
- both create iterators --> you can only go over it once
- readers accept a delimter kwarg in case your data isn't separated by commas

```py
from csv import reader
with open('fighters.csv') as file:
  csv_reader = reader(file)
  # csv_reader is an iterator - it does not give you a list
  for row in csv_reader:
    # each row is a list
    print(row)

with open('fighters.csv') as file:
  csv_reader = reader(file)
  # this gives you a list:
  data = list(csv_reader)

#### DictReader example
from csv import DictReader
with open('fighters.csv') as file:
  csv_reader = DictReader(file)
  for row in csv_reader:
    # each row is an OrderedDict, the keys are the header fields
    print(row)

# delimiter
csv_reader = reader(file, delimiter="|")
```

### writing to csv files: Writer

- writing to csv files - 2 ways: Writer (lists) and DictWriter (dictionaries)
- `writer`: creates a writer object
- `writerow` method

```py
from csv import reader, writer
with open('cats.csv'. 'w') as file:
  csv_writer = writer(file)
  csv_writer.writerow(["Name", "Color"])
  csv_writer.writerow(["Luna", "White"])
```

### writing to csv files: DictWriter

- DictWriter is more complicated
- you have to specify the `fieldnames` and set that to whatever you want the headers to be - kwarg for for the DictWriter specifying headers, need fieldnames + writeheader & writerow
- DictReader, DictWriter

```py
from csv import writer, DictWriter
# Version using writer
# with open("cats.csv", "w") as file:
#     csv_writer = writer(file)
#     csv_writer.writerow(["Name", "Age"])
#     csv_writer.writerow(["Blue", 3])
#     csv_writer.writerow(["Kitty", 1])

# Version using DictWriter
with open("cats.csv", "w") as file:
	headers = ["Name", "Breed", "Age"]
	csv_writer = DictWriter(file, fieldnames=headers)
	csv_writer.writeheader()
	csv_writer.writerow({
		"Name": "Garfield",
		"Breed": "Orange Tabby",
		"Age": 10
	})
```

```py
# convert.py example
from csv import DictReader, DictWriter

def cm_to_in(cm):
	return float(cm) * 0.393701

with open("fighters.csv") as file:
	csv_reader = DictReader(file)
	fighters = list(csv_reader)

with open("inches_fighters.csv", "w") as file:
	headers = ("Name","Country","Height")
	csv_writer = DictWriter(file, fieldnames=headers)
	csv_writer.writeheader()
	for f in fighters:
		csv_writer.writerow({
			"Name": f["Name"],
			"Country": f["Country"],
			"Height": cm_to_in(f["Height (in cm)"])
		})
```

### pickling

- saving the state of your program -
- `pickle` - is a module - put something in a pickle file (.pyc)
- python will serialize it into a byte stream
- you can un-pickle it when you need it
- not good if you need to be used by another language while pickled
- you can use a tuple in .dump for more than 1 thing

```py
import pickle
# code here
# wb for writing binary
with open("pets.pickle", "wb") as file:
  pickle.dump(var_name, file)

# to get it back
with open("pets.pickle", "rb") as file:
  new_name = pickle.load(file)
```

### JSON pickling

- the json module is used to convert python to json
- `json.dumps` is like `JSON.stringify()`

```py
import json
j = json.dumps(['foo', {'bar': ('baz'. None, 1.0, 2)}])

class Cat:
  def __init__(self, name, breed):
    self.name - name
    self.breed - breed
c = Cat("Charlie", "Tabby")
j = json.dumps(c.__dict__)
# {"name": "Charlie", "breed": "Tabby"}
```

jsonpickle

- jsonpickle is a library - pickle that works with json
- `pip install -U jsonpickle`

```py
import jsonpickle

class Cat:
  def __init__(self, name, breed):
    self.name - name
    self.breed - breed

c = Cat("Charlie", "Tabby")

with open("cat.json", "w") as file:
  frozen = jsonpickle.encode(c)
  file.write(frozen)
# that has __main__.Cat

with open("cat.json", "r") as file:
  contents = file.read()
  unfrozen = jsonpickle.decode(contents)
```

## Web Scraping with BeautifulSoup

### web scraping

- involves grabbibg data from a web page - usually in html,
- sometimes the data is in the form of an API with JSON so you don't have to scrape

there are 3 main steps:

- download - the html
- extract data - parse thru it
- do something with the data
- best practice: consult the robots.txt file
- if you are too aggressive your ip can be blocked - slow it down
- once a cease and desist letter has been sent, then you can get in trouble

### selecting with BeautifulSoup.find()

- BeautifulSoup is a package you need to d\l
- use it to extract data from HTML but it does not d\l the HTML - y ou have to manually make the request to get the data
- so first you make a request to get the html
- then you use beautiful soup to get the data you want like all the link tags
- the html comes back as a giant string
- it also supports parsing XML
- once parse, you can navigate by:
  - tag name
  - using the `find` method to return one matching tag
  - using the `find_all` method to returns all matching tags
  - using CSS selectors using the `select` method

```sh
python3 -m pip install bs4
# or this
pip install bs4
```

### selecting with BeautifulSoup.find()

- BeautifulSoup is a package you need to d\l
- use it to extract data from HTML but it does not d\l the HTML - y ou have to manually make the request to get the data
- so first you make a request to get the html
- then you use beautiful soup to get the data you want like all the link tags
- the html comes back as a giant string
- it also supports parsing XML
- once parse, you can navigate by:
  - tag name
  - using the `find` method to return one matching tag
  - using the `find_all` method to returns all matching tags
  - using CSS selectors using the `select` method

```sh
python3 -m pip install bs4
# or this
pip install bs4
```

```py
from bs4 import BeautifulSoup
# he added a """ string of html """
# parse the html
soup = BeautifulSoup(html_string, "html.parser")
print(soup.body.div) # you only get the first div
print(soup.find("div")) # same result
print(soup.find_all("div")) # all divs in a list

# Selecting using attributes: id, class, etc
print(soup.find(id="first"))
print(soup.find("div")["id"]) # returns the id value
# use class_ because class is a kw
print(soup.find_all(class_="special"))

# other attributes
print(soup.find_all(attrs={"data-example": "yes"}))
```

### selecting with BeautifulSoup: css style selectors

- use # or . or > etc - any selector
- `.select()` always returns a list
- `.select()` is better than `.find_all()`

```py
soup.select("#first")
soup.select(".special")
soup.select("ol > li")
soup.select("[data-example]")
```

### accessing data with BeautifulSoup

- get_text - access the inner text in an element
- name - get the tag name
- attrs - a dictionary of attributes
- access attrbutes using brackets

```py
soup.select(".special")[0].get_text()

for el in soup.select(".special")
  print(el.get_text())
  print(el.name)
  print(el.attrs)
  print(el.attrs["id"])
```

### navigating with BeautifulSoup

- FIND PARENT ELEMENTS - or siblings and descendents

attributes

- parent / parents
- contents - includes `\n` characters
- next_sibling / next_siblings

methods

- find_parent() / find_parents()
- find_next_sibling() / find_next_siblings()
- find_previous_sibling() / find_previous_siblings()

```py
soup.body.contents # returns a list
```

## Section 33 Web Scraping Project

### creating a web crawler with scrapy

> https://www.scrapy.org/

- it's a framework for extracting data - does everything
- lots of examples
- ideal if you need crawling
- you can create "Spiders" - `scrapy.Spider`
- "crawl" - following links on a page and going to each page
- you need to define a class which has to inherit from scrapy.Spider
  - you need to define a list called `start_urls`
  - you have to define the parse method

```sh
pip install Scrapy
```

```py
# https://books.toscrape.com/
import scrapy

class BookSpider(scrapy.Spider):
   name = 'bookspider'
   start_urls = ['https://books.toscrape.com/']

   def parse(self, response):
      for article in response.css('article.product_pod'):
         yield {
            'price': article.css('.price_color::text').extract_first(),
            'title': article.css('h3 > a::attr(title)').extract_first()
         }
         next = response.css('.next > a::attr(href)')extract_first()
         if next:
            yield response.follow(next, self.parse) # recursive
```

- to run:

```sh
scrapy runspider -o savefilename.csv filename.py
```

## Section 34 Regular Expressions (SKIP, mostly)

### the RE module

> https://docs.python.org/3/library/re.html

- see Module Contents section

```py
# COMMON PATTERN
import re
# define the pattern, r -> raw string
pattern = re.complie(r'\d{3} \d{3}-\d{4}')
# search a string
res = pattern.search('text here or a variable holding the text')
res.group() # shows the match, 1st match only
res = pattern.findall('text here or a variable holding the text')
```

## Section 35 Python + SQL

```sh
sqlite3
sqlite
# CTRL + d
# .quit
```

```sql
-- to run a .sql file
.read filename.sql
```

- cursor: a temp workspace for sql commands
- you need double quotes around the sql statements or triple single quotes to break into other lines
- `(?)`
- .connect()
- .cursor()
- .execute()
- .commit()
- .close()
- .executemany()
- .fetchone()
- .fetchall()

```sh
.tables
.schema tableName
```

```py
import sqlite3

# open the connection to the DB and create the DB - conn is common var name
connection = sqlite3.connect("my_friends.db")

# 1. create cursor object - c is common var name
cursor = connection.cursor()

# 2. execute some sql - create a table
cursor.execute("CREATE TABLE friends (first_name TEXT, last_name TEXT, closeness INTEGER);")

data = ("Steve", "Perry", 9)
query = "INSERT INTO friends VALUES (?,?,?)"
cursor.execute(query, data)

# 3. commit changes
connection.commit()

# 4. Close the connection when done
connection.close()
```
