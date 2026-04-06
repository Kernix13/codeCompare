---
language: C#
slug: csharp
type: reference
level: beginner–intermediate
last_updated: 2026-01-05
official_docs: https://learn.microsoft.com/en-us/dotnet/csharp/
---

# C# — Reference Notes

<br>

<p> Page Links: <br>
<a href="./../index.html">Compare</a>  • 
<a href="./../details.html">In Depth</a>  • 
<a href="./../frameworks.html">Frameworks</a>
</p>

<p> Markdown File Links: <br>
<a href="./javascript.md">javascript.md</a>  • 
<a href="./jupyter.md">jupyter.md</a>  • 
<a href="./jupyter2.md">jupyter2.md</a>  • 
<a href="./php.md">php.md</a>  • 
<a href="./python.md">python.md</a>  • 
<a href="./react.md">react.md</a>  • 
<a href="./typescript.md">typescript.md</a>
</p>

## Terms to define

- .NET compiler | .NET runtime | app models | .NET SDK | base class library | NuGet | ASP.NET Core | ASP.NET Core Razor Pages | Blazor | .NET MAUI | workload | .NET CLI |

## Shell commands

<!--

1. 📌 https://www.linkedin.com/pulse/dotnet-new-command-create-projects-sumanraj-kandel/
2. 📌 https://auth0.com/blog/create-dotnet-project-template/
3. 📌 https://www.tutorialsteacher.com/core
4. 📌 https://learn.microsoft.com/en-us/dotnet/core/tools/dotnet-new
-->

Beginner commands

```sh
# Check .NET installation
dotnet --version
# Show installed .NET SDKs (version numbers and install locations)
dotnet --list-sdks
# Display detailed information about your .NET environment
dotnet --info

# Create a new, empty solution
dotnet new sln

# Get the list of templates available on your machine
dotnet new --list

# Create a console application (do I need ./?) -o or --output
# -o Creates a new folder and puts project inside
dotnet new console -o ./ProjectName
# you do not need ./
dotnet new console -o ProjectName
# How is this different? -n or --name
# -n Names the project but stays in current folder
dotnet new console -n ProjectName
# Combo?
console -n ProjectName -o ProjectName
# If you are already inside your project folder
dotnet new console # or
dotnet new console -n ProjectName
# Create an ASP.NET Core web application that uses React
dotnet new react -o MyReactApp
# Create a web application using ASP.NET Core
dotnet new web -o MyWebApp
# Create a new solution file named MySolution.sln
dotnet new sln -n MySolution

# Add your code to Program.cs
# Compile a build of your application
dotnet build

# Run your application - will build AND execute your application
dotnet run

# Create .gitignore file (482 lines!)
dotnet new gitignore
```

Commands to know later

```sh
# Add a NuGet Package
dotnet add package PackageName
dotnet add package Newtonsoft.Json

# Restore Dependencies after cloning or to update existing packages
dotnet restore

# List Installed Packages
dotnet list package

# Clean Build Artifacts, to delete the output of a previous build
dotnet clean

# Remove a C# project
dotnet sln remove <path-to-csproj>

# Add a C# project
dotnet sln add <path-to-csproj>

# Create a Solution
dotnet new sln
dotnet sln add ProjectName.csproj

# Create web app
dotnet new webapp -o MyWebApp

# Creates an ASP.NET Razor Pages app
dotnet new mvc -o MyMvcApp

# Create web API
dotnet new webapi -o MyApi

# Create mobile app using .NET MAUI
dotnet new maui -o MyMobileApp
```

## Methods breakdown

Add freeCodeCamp methods

| Dtype  | Method          | Return | Mutate |
| :----- | :-------------- | :----- | :----: |
| String | Convert.ToInt32 | int    |   N    |
| -      | int.Parse       | int    |   N    |
| -      | int.TryParse    | bool   |   N    |
| -      | Substring       | str    |   N    |
| -      | TrimStart       | str    |   N    |
| -      | Trim            | str    |   N    |
| -      | IndexOf         | int    |   N    |
| -      | Remove          | str    |   N    |
| -      | ToCharArray     | array  |   N    |
| -      | Split           | array  |   N    |
| -      |                 |        |        |
| Number | Math.Max        | num    |        |
| -      |                 |        |        |
| -      |                 |        |        |
| -      |                 |        |        |
| Array  | foreach         | n/a    |        |
| -      | Array.sort      | ?      |        |
| -      | Array.Reverse   | ?      |        |
| -      | Array.Clear     | ?      |        |
| -      | Array.Resize    | ?      |        |
| -      | Join            | string |        |
| -      |                 |        |        |

Remove()

## To-do - add these

- code blocks of loops and conditionals
- Add Console.Read(), Console.ReadLine(), Console.ReadKey()
- string[] names = new string[3] + the syntax using {}
- .Length
- .Conains()
- &&
- string?

```cs
// Option 1: nullable reference type / nullable annotation
string? name = Console.ReadLine();
if (name is null) // Input stream ends (EOF = End Of File)

// Option 2: null-coalescing operator
string name = Console.ReadLine() ?? "";

const float pi = 3.14f;
```

## Intro to C# and .NET

### Core Concepts

- The .NET compiler converts C# source code into **Intermediate Language (IL)**.
- The compiled IL is stored in a **.NET assembly** (e.g., `.dll` or `.exe`).
- The **.NET runtime (CLR)** executes and manages the application on the host operating system.
- The runtime handles memory management, execution, and other system-level services.

### Libraries and Frameworks

- A **class library** encapsulates reusable functionality into assemblies.
- .NET provides a large set of built-in libraries known as the **Base Class Library (BCL)**.
- Developers can reference these libraries and call their methods in applications.
- External libraries can be installed via package managers like **NuGet**.

- An **application framework** (app model) includes:
  - Libraries
  - Project templates
  - Code generators
  - Tooling for building specific types of applications

### .NET SDK

- The **.NET SDK** includes:
  - The compiler
  - The runtime
  - The Base Class Library (BCL)
  - Project templates and CLI tools
- It can be installed standalone or as part of **Visual Studio**.

---

## Major App Models

### Web

- **ASP.NET Core**: Framework for building web apps and APIs.
- **ASP.NET Core MVC**: Pattern-based framework for structured web apps.
- **ASP.NET Core Razor Pages**: Simplified model for server-rendered web pages.
- **Blazor**:
  - Runs C# in the browser via **WebAssembly**, or
  - Uses server-side execution with real-time communication (SignalR)

### Desktop

- **WinForms**: Simple Windows desktop apps (legacy but still used).
- **WPF (Windows Presentation Foundation)**: Rich, modern desktop UI framework.

### Mobile & Cross-Platform

- **.NET MAUI**:
  - Build apps for iOS, Android, macOS, and Windows
  - Single shared codebase with native UI access

- (.NET for iOS/Android are now generally used via MAUI rather than separately)

---

## Basic Code Structure

- `public static void Main()` defines the program entry point.
- A **method** is a block of code that performs a specific task.
- Methods are defined inside **classes**.
- A class can contain multiple methods.

---

## How .NET Code Runs

1. You run a build command (e.g., `dotnet build`).
2. The C# compiler checks for syntax errors and compiles the code into IL.
3. The compiled assembly is executed by the .NET runtime.
4. Execution begins in the `Main()` method (by convention in the `Program` class).
5. The runtime executes instructions sequentially.
6. When finished, the application exits and resources are released.

---

## When to Use .NET

- **Enterprise applications** (scalable, maintainable systems)
- **Web applications and APIs** (via ASP.NET Core)
- **Cloud applications**:
  - Integrates with Azure services
  - Supports serverless (Azure Functions)
- **Machine learning**:
  - **ML.NET** for model-based predictions
- **Cross-platform apps**:
  - Web, desktop, and mobile via MAUI
- **IoT applications**:
  - Works with hardware via GPIO, serial ports, etc.

---

## Basics

Writing C# code requires precision—small mistakes (even a single character) will cause compile-time errors.

### `Console.WriteLine` vs `Console.Write`

- `Console.WriteLine()`:
  - Prints output followed by a **new line**
  - Each call starts on a new line
- `Console.Write()`:
  - Prints output **without** adding a new line
  - Subsequent output continues on the same line

```cs
Console.WriteLine("Hello World!");
Console.Write("Congratulations!");
Console.Write(" ");
Console.Write("You wrote your first line of code.");
```

Basic Syntax Concepts

- Console is a class
- WriteLine() and Write() are methods inside the Console class
- The . is the member access operator (used to access methods on a class)
- ; is the statement terminator (marks the end of an instruction)
- A compiler converts your source code into a format the computer can execute

### String Literals (string)

- A `literal` value is a constant value that never changes
- Used for text (words, phrases, display data)
- Defined with double quotes

### Character Literals (char)

- If you only wanted a single alphanumeric character printed to screen, you could create a _char literal_ by surrounding one alphanumeric character in `single quotes`.
- Represents a single character
- Defined with single quotes

### Integer Literals (int)

- Whole numbers (no decimals)
- No special syntax required

### Floating-Point Literals

Used for decimal numbers. C# supports three types:

- `float` (lower precision) → requires `f` or `F` suffix
- `double` (default) → no suffix needed
- `decimal` (high precision, commonly used for money) → requires `m` or `M` suffix
- Prefer `decimal` for financial calculations (higher precision)

### Boolean Literals (bool)

- Represents `true` or `false`
- Used in conditions and decision-making

```cs
// string literal:
Console.WriteLine("Hello");

// char literal:
Console.WriteLine('b');

// int literal:
Console.WriteLine(123);

// floating-point f or F:
Console.WriteLine(0.25F);

// double literal:
Console.WriteLine(2.625);

// decimal literal m or M - USE THIS ONE
Console.WriteLine(12.39816m);

// bool literal:
Console.WriteLine(true);
```

## Variables

- To create a new variable, you must first declare the data type of the variable, and then give it a name

```cs
// this variable can only hold string values:
string firstName;
// You can also use var but you must declare a value
var firstName = 'value';

char userOption;
int gameScore;
float particlesPerMillion;
bool processedCustomer;

int x; // declaration only
x = 3; // initialization only
int y = 4; // declaration + initialization
double phi = 1.618;

bool isDeveloper = true;
bool hasJob = false;

char flat = '♭';
String name = "Luna";
```

### Reassign the value of a variable

- **You can reuse and reassign the variable as many times as you want**

```cs
string firstName;
firstName = "Buddy";
Console.WriteLine(firstName);
firstName = "Luna";
Console.WriteLine(firstName);
firstName = "Charlie";
Console.WriteLine(firstName);
firstName = "Rascal";
Console.WriteLine(firstName);
```

## Declare implicitly typed local variables

The C# compiler works behind the scenes to assist you as you write your code. It can infer your variable's data type by its initialized value

What are implicitly typed local variables?

- An implicitly typed local variable is created by using the `var` keyword followed by a variable initialization
- The `var` keyword tells the C# compiler that the data type is implied by the assigned value. After the type is implied, the variable acts the same as if the actual data type had been used to declare it.

Variables using the `var` keyword must be initialized

- If you try to use the var keyword without initializing the variable, you'll receive an error when you attempt to compile your code

Why use the var keyword?

- `var` declares an **implicitly typed local variable**
- The compiler determines the type at compile time from the assigned value
- After that, the variable behaves exactly like a strongly typed variable
- var does not make C# dynamically typed
- The type is still determined at compile time and cannot change

Rules:

- Variables declared with var must be initialized
- The type is fixed after assignment (it cannot change later)
- Use it when the type is obvious from the assignment
- Use it when the type is long or complex
- Do not use it when it makes the code harder to read

## Basic String Formatting in C#

Character escape sequences:

- `escape character sequence`: insert a special character that will affect the output of your string
- the escape character sequence begins with a backslash `\` followed by the character you're escaping

```cs
// new line: \n
Console.WriteLine("Hello\nWorld!");
// TAB: \t
Console.WriteLine("Hello\tWorld!");
// also: \\ or \" or \' etc
Console.WriteLine("Hello \"World\"!");
Console.WriteLine("c:\\source\\repos");
```

Verbatim string literal

- will keep all whitespace and characters without the need to escape the `backslash`
- To create a verbatim string, use the `@` directive before the literal string

```cs
Console.WriteLine(@"    c:\source\repos
        (this is where your code goes)");
```

Unicode escape characters

```cs
Console.WriteLine("\u3053\u3093\u306B\u3061\u306F World!");
```

- Use character escape sequences when you need to insert a special character into a literal string
- Use the `@` directive to create a verbatim string literal that keeps all whitespace formatting and backslash characters in a string
- Use the `\u` plus a four-character code to represent Unicode characters

## Combine strings using string concatenation

- Often, you'll need to combine data from many different sources, including literal strings and variables containing both text and numeric data
- String concatenation is "programmer speak" for simply combining two or more `string` values into a new `string` value
- To concatenate two strings together, you use the string concatenation operator, which is the plus symbol `+`
- You can perform several concatenation operations in the same line of code
- String concatenation allows you to combine smaller literal and variable strings into a single string.
- Avoid creating intermediate variables if adding them doesn't increase readability.

```cs
string firstName = "Bob";
string message = "Hello " + firstName;
Console.WriteLine(message);

string greeting = "Hello";
string message = greeting + " " + firstName + "!";
Console.WriteLine(message);
```

## Combine strings using string interpolation

While string concatenation is simple and convenient, string interpolation is growing in popularity in situations where you need to combine many literal strings and variables into a single formatted message

- String interpolation combines multiple values into a single literal string by using a "template" and one or more interpolation expressions.
- An interpolation expression is a variable surrounded by an opening and closing curly brace symbol `{ }`.
- The literal string becomes a template when it's prefixed by the `$` character

```cs
string firstName = "Bob";
string message = $"Hello {firstName}!";
Console.WriteLine(message);

int version = 11;
string updateText = "Update to Windows";
string message = $"{updateText} {version}";
Console.WriteLine(message);
```

- You can use both the verbatim literal prefix symbol `@` and the string interpolation `$` symbol together:`$@"`

```cs
string projectName = "First-Project";
Console.WriteLine($@"C:\Output\{projectName}\Data");
// the $ symbol allows you to reference the projectName variable inside the brackets, while the @ symbol allows you to use the unescaped \ character
```

## Perform Basic Operations on Numbers in C#

Attempt a more advanced case of adding numbers and concatenating strings. the opening and closing parentheses form the _order of operations operator_.

- NOTE: You should probably avoid performing both a calculation and concatenation in a single line of code

```cs
Console.WriteLine(firstName + " sold " + (widgetsSold + 7) + " widgets.");
```

- In C#, a number with a decimal point is not a decimal by default.
- m or M tells the compiler: “This number is a decimal literal, not a double.”
- **`M` is better than `m` and both are better than `(decimal)`**

```cs
// 7	          int
// 7.0	          double
// 7.0f	          float
// 7.0m / 7.0M	  decimal
decimal amount = 1.23;   // ❌ compile error
```

- quotient: The values after the decimal are truncated from the quotient since it is defined as an `int`, and `int` cannot contain values after the decimal
- to show decimals, the quotient (left of the assignment operator) must be of type `decimal` _and at least one of numbers being divided_ must also be of type `decimal`

Casting:

- what if you need to divide two variables of type int but do not want the result truncated?
- In that case, you must perform a data `type cast` from `int` to `decimal`.
- Casting is one type of data conversion that instructs the compiler to temporarily treat a value as if it were a different data type
- To cast `int` to `decimal`, you add the _cast operator_ `( )` before the value.
- You use the name of the data type surrounded by parentheses in front of the value to cast it
- NOTE: three uses for the parenthesis operator: method invocation, order of operations and casting

```cs
// Perform division with explicit cast - 2 versions
// NOTE: Most common / idiomatic syntax is no space
decimal someValue1 = (decimal)numerator / denominator;
decimal someValue2 = numerator / (decimal)denominator;
```

Increment/decrement:

- you'll need to increment and/or decrement values, especially when you're writing looping logic or code that interacts with a data structure
- The `+=` operator adds and assigns the value on the right of the operator to the value on the left of the operator
- The `++` operator increments the value of the variable by 1
- Both the increment and decrement operators have an interesting quality — depending on their position, they perform their operation before or after they retrieve their value.
- In other words, if you use the operator before the value as in `++value`, then the increment will happen before the value is retrieved. Likewise, `value++` will increment the value after the value has been retrieved

## Create and Run Simple C# Console Applications

`SDK` - software development kit

Check to see if .NET is already installed:

```sh
# Windows Command Prompt or PowerShell
dotnet --version
# 7.0.400
```

- NOTE: markdown language code block for PowerShell: powershell, ps, ps1, ps1 is best IMO

1. Go to https://dotnet.microsoft.com/en-us/download
2. On the Download .NET page, select the recommended version of the .NET SDK
3. Run the .NET SDK installer file
4. On the .NET SDK Installer window, select Install

<!-- 🚫 STOP HERE -->

## Create, Build, and Run a .NET Application

The **.NET SDK** includes the **.NET CLI**, which lets you create, build, and run applications from the terminal.

### Create a New Project

```sh
dotnet new console -o ./ProjectName
```

**Command structure:**

- **Driver**: `dotnet`
- **Command**: `new console`
- **Arguments**: `-o ./ProjectName`

**Notes:**

- `-o` = output directory (`--output`)
- If omitted, files are created in the current directory
- Creates a folder, project file (`.csproj`), and starter code

### Build the Application

```sh
dotnet build
```

- Compiles source code into **Intermediate Language (IL)**
- Outputs a `.dll` assembly and related files

### Run the Application

```sh
dotnet run
```

- Builds and runs the application in one step
- Useful for fast iteration during development

---

## .NET Class Library

- The **.NET Class Library** is a large collection of prebuilt classes and methods
- Provides functionality for:
  - Console I/O (`Console`)
  - Web apps
  - Desktop apps
  - Databases
  - And more

- A **class** is a container for methods
- Even data types (like `int`, `string`) are implemented as classes behind the scenes

### Finding What You Need

- Use search engines for examples and solutions
- Use official Microsoft documentation for accurate reference

### Calling Methods

- Methods can:
  - Accept input (parameters)
  - Return values

---

## Stateful vs Stateless Methods

### Stateless Methods (Static)

- Do **not** depend on stored data (state)
- Can be called directly from the class

```cs
Console.WriteLine("Hello");
```

### Stateful Methods (Instance)

- Depend on data stored in memory (state)
- Require an **object instance**

### Creating an Instance

- An instance of a class is called an **object**
- Created using the `new` operator

```cs
Random dice = new Random();
int roll = dice.Next();
```

**What `new` does:**

- Allocates memory for the object
- Creates the object
- Returns a reference to it

### Why `Random.Next()` is Stateful

- Uses an internal **seed value**
- Each call updates the state to produce different results

### How to Know if a Method is Static or Instance

- Check documentation
- Try calling it from the class:
  - Works → static
  - Error → instance (requires `new`)

<!--  -->

## Return Values and Input Parameters

When working with methods, three key concepts are:

- Return values
- Input parameters
- Method overloading

### Return Values

- Some methods return a value; others do not
- **Void methods**:
  - Do not return a value

```cs
Console.WriteLine("Hello");
```

- **Non-void methods**:
  - Return a value of a specific type

```cs
int roll = new Random().Next();
```

- A method can return any data type (`int`, `string`, `bool`, objects, etc.)
- You can:
  - Store the return value in a variable
  - Use it directly
  - Ignore it (even if it returns something)

### Input Parameters

- **Parameters** are values passed into a method
- They allow you to control how a method behaves

```cs
Console.WriteLine("Hello"); // "Hello" is a parameter
```

- A method can have:
  - No parameters
  - One parameter
  - Multiple parameters
- Parameters are defined by the method’s **signature**:
  - Number of parameters
  - Data types of parameters
- You must pass the correct data type when calling a method

```cs
Console.WriteLine(123);   // OK
Console.WriteLine("123"); // OK (different overload)
```

- Some methods require no parameters:

```cs
Console.Clear();
```

### Method Overloading

- **Overloading** means a method has multiple versions (signatures)
- Methods can differ by:
  - Number of parameters
  - Type of parameters
- This allows flexibility in how methods are called

```cs
Console.WriteLine("text");
Console.WriteLine(123);
Console.WriteLine(true);
```

- Example:
  - `Console.WriteLine()` has many overloads for different data types
  - `Random.Next()` has overloads for different ranges
- Method signatures determine how a method must be called
- C# enforces type safety at compile time (helps prevent runtime errors)

```cs
Next(); // no upper or lower boundary, 0 - 2,147,483,647
Next(int maxValue); // non-inclusive
Next(int minValue, int maxValue);
```

Use IntelliSense:

- the C# language service provides intelligent code completions based on language semantics and an analysis of your source code
- you can learn a lot about a method without leaving the coding environment
- IntelliSense provides hints and reference information in a popup window
- Autocomplete features of the code editor can be used to finish typing the word that is the top match in the IntelliSense popup
- Press the `Tab` key on the keyboard - You can use the up and down arrow keys to change the selection before pressing the Tab key (_no you can't_)

If the IntelliSense window disappears, it can be selected by using the backspace key on the keyboard, then re-enter the last symbol to re-open IntelliSense

- enter a `.` character - Notice that the IntelliSense popup reappears when you enter `.` and shows an unfiltered list of all the methods (and other members of the class) that are available

Use `docs.microsoft.com` for information about overloaded methods:

- https://learn.microsoft.com/en-us/docs/

## Create decision logic with if statements

- An if statement executes code only when a condition evaluates to true
- A Boolean expression is any expression that returns true or false

if, else if, and else:

- if: runs when its condition is true
- else if: allows you to check additional conditions
- else: runs when all previous conditions are false
- else is optional
- You can nest if statements to create more specific conditions
- Prefer `else if` when conditions are related (improves readability)
- Avoid deep nesting when else if can be used instead

Logical Operators

- && (AND): both conditions must be true
- || (OR): at least one condition must be true

```cs
// simple conditional code block
bool flag = true;
if (flag)
    Console.WriteLine(flag);
// or:
if (flag) Console.WriteLine(flag);

// larger conditional
string permission = "Admin|Manager";
int level = 53;

if (permission.Contains("Admin")) {
    if (level > 55) {
        Console.WriteLine("Welcome, Super Admin user.");
    } else  {
        Console.WriteLine("Welcome, Admin user.");
    }
} else if (permission.Contains("Manager")) {
    if (level >= 20) {
        Console.WriteLine("Contact an Admin for access.");
    } else {
        Console.WriteLine("You do not have sufficient privileges.");
    }
} else {
    Console.WriteLine("You do not have sufficient privileges.");
}

// Ternary (conditional operator)
int saleAmount = 1001;
Console.WriteLine($"Discount: {(saleAmount > 1000 ? 100 : 50)}");

Random coin = new Random();
Console.WriteLine((coin.Next(0, 2) == 0) ? "heads" : "tails");

// switch
// SKU = Stock Keeping Unit
string sku = "01-MN-L";

string[] product = sku.Split('-');

string type = "";
string color = "";
string size = "";

switch (product[0])
{
    case "01":
        type = "Sweat shirt";
        break;
    case "02":
        type = "T-Shirt";
        break;
    case "03":
        type = "Sweat pants";
        break;
    default:
        type = "Other";
        break;
}

switch (product[1])
{
    case "BL":
        color = "Black";
        break;
    case "MN":
        color = "Maroon";
        break;
    default:
        color = "White";
        break;
}

switch (product[2])
{
    case "S":
        size = "Small";
        break;
    case "M":
        size = "Medium";
        break;
    case "L":
        size = "Large";
        break;
    default:
        size = "One Size Fits All";
        break;
}

Console.WriteLine($"Product: {size} {color} {type}");
```

## Get started with array basics

- https://learn.microsoft.com/en-us/training/modules/csharp-arrays/2-exercise-array-basics
- Arrays can be used to store multiple values of the same type in a single variable
- You want your code to review past customer orders and identify markers associated with fraudulent orders
- you use arrays to store and analyze a sequence of Order IDs
- arrays allow you to collect together similar data that shares a common purpose or characteristics in a single data structure

Declaring arrays and accessing array elements

- The declaration syntax is slightly different because you have to specify both the data type and the size of the array

Declare a new array:

```cs
string[] fraudulentOrderIDs = new string[3];
```

- The `new` operator creates a new instance of an array in the computer's memory that can hold three string values
- the first set of square brackets `[]` merely tells the compiler that the variable is an array
- `string[]` indicates the array is of the string data type
- the second set of square brackets `[3]` indicates the number of elements that the array can hold

Assign values to elements of an array:

- To access an element of an array, you use a numeric zero-based index inside of square brackets

Retrieve values from elements of an array:

- Accessing the value of an array element works the same way as assigning a value to an array element.
- You just specify the index of the element whose value you want to retrieve

Reassign the value of an array:

- The elements of an array are just like any other variable value. You can assign, retrieve, and reassign a value to each element of the array

Initialize an array:

- You can initialize an array during declaration just like you would a regular variable.
- **However, to initialize the elements of the array, you use a special syntax featuring curly braces**

```cs
string[] fraudulentOrderIDs = { "A123", "B456", "C789" };
```

Use the Length property of an array:

- Depending on how the array is created, you may not know in advance how many elements an array contains.
- To determine the size of an array, you can use the Length property

## Implement the foreach statement (STOPPED EDITS HERE)

Looping through an array using foreach:

- `foreach` uses a temporary variable to hold the value of the array element associated with the current iteration

```cs
foreach (string name in names) {
  Console.WriteLine(name);
}
```

Create and initialize an array of int & add a foreach statement & add a variable to sum the value of each element in the array

- Use the foreach statement to create a sum of all the items on hand in each bin of your warehouse
- Use the `foreach` statement to iterate through each element in an array, executing the associated code block once for each element in the array.
- The `foreach` statement sets the value of the current element in the array to a temporary variable, which you can use in the body of the code block.
- Use the `++` increment operator to add 1 to the current value of a variable (?)

```cs
int[] inventory = { 200, 450, 700, 175, 250 };
int sum = 0;
foreach (int items in inventory)
{
    sum += items;
}
```

```cs
// examples for: for, while, and do while here
for (int i = 1; i < 101; i++)
{
    if ((i % 3 == 0) && (i % 5 == 0))
        Console.WriteLine($"{i} - FizzBuzz");
    else if (i % 3 == 0)
        Console.WriteLine($"{i} - Fizz");
    else if (i % 5 == 0)
        Console.WriteLine($"{i} - Buzz");
    else
        Console.WriteLine($"{i}");
}
```

## Variable names

- A local variable is a variable that is scoped within the body of a method, or a variable in a console application that uses top-level statements
- Classes support fields, which are members of a class that act like variables -> they store values, or rather, state.
- Classes also support accessibility modifiers, which allow some values to be `private` or `public`
- A `private` member can only be referenced by other members in the same class.
- A `public` member can be referenced outside of the class.
- So, you can create `private fields` or `public fields`

## Code example

- update the code using style guidelines for variable names, code comments, and whitespace to improve code readability

```cs
/*
   This code reverses a message, counts the number of times
   a particular character appears, then prints the results
   to the console window.
*/
string str = "The quick brown fox jumps over the lazy dog.";

// convert the message into a char array
char[] charMessage = str.ToCharArray();

// Reverse the chars
Array.Reverse(charMessage);

int x = 0;

foreach (char i in charMessage)
{
  // count the o's
    if (i == 'o') { x++; }
}

// convert it back to a string
string new_message = new String(charMessage);

Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {x} times.");
```

## Iterate through a code block using for statement

```cs
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
}

for (int i = 10; i >= 0; i--)
{
    Console.WriteLine(i);
}

// Use the break keyword to break the iteration statement
for (int i = 0; i < 10; i++)
{
    Console.WriteLine(i);
    if (i == 7) break;
}

// Fizz Buzz
for (int i = 1; i < 101; i++)
{
    if (i % 15 == 0)
      Console.WriteLine($"{i} - FizzBuzz");
    else if (i % 3 == 0)
      Console.WriteLine($"{i} - Fizz");
    else if (i % 5 == 0)
      Console.WriteLine($"{i} - Buzz");
    else
      Console.WriteLine(i);
}
```

## Inequality operator versus logical negation

- The term "Logical Negation" refers to the unary negation operator `!`. Some people call this operator the "not operator".
- The inequality operator `!=` includes a `!` character, but should not be confused with logical negation

## Implement the conditional operator

The conditional operator `?:` evaluates a Boolean expression and returns one of two results depending on whether the Boolean expression evaluates to true or false. The conditional operator is commonly referred to as the ternary conditional operator.

```cs
// Conditional operator
comparison ? codeIfTrue : codeIfFalse;

array.Aggregate(0, (count, val) => val == value ? count + 1 : count);
```

## Explore data type casting and conversion (STOPPED EDITS HERE)

There are multiple techniques to perform a data type conversion. The technique you choose depends on your answer to two important questions:

- Is it possible, depending on the value, that attempting to change the value's data type would throw an exception at run time?
- Is it possible, depending on the value, that attempting to change the value's data type would result in a loss of information?

The C# compiler attempts to accommodate your code, but doesn't compile operations that could result in an exception.

> When you understand the C# compiler's primary concern, understanding why it functions a certain way is easier.

Write code that attempts to add an int and a string and save the result in an int

- the C# compiler doesn't implicitly perform the conversion from `string` to `int` for you

To perform data conversion, you can use one of several techniques:

- Use a helper method on the data type
- Use a helper method on the variable
- Use the Convert class' methods

### Determine if your conversion is a "widening conversion" or a "narrowing conversion"

The term narrowing conversion means that you're attempting to convert a value from a data type that can hold more information to a data type that can hold less information. In this case, you may lose information such as precision (that is, the number of values after the decimal point).

**When you know you're performing a narrowing conversion, you need to perform a cast**. Casting is an instruction to the C# compiler that you know precision may be lost, but you're willing to accept it.

If you're unsure whether you lose data in the conversion, write code to perform a conversion in two different ways and observe the changes. Developers frequently write small tests to better understand the behaviors

```cs
decimal myDecimal = 1.23456789m;
float myFloat = (float)myDecimal;

Console.WriteLine($"Decimal: {myDecimal}");
Console.WriteLine($"Float  : {myFloat}");
// Decimal: 1.23456789
// Float  : 1.2345679
```

### Use ToString() to convert a number to a string

Every data type variable has a ToString() method. What the ToString() method does depends on how it's implemented on a given type. However, on most primitives, it performs a widening conversion. While this isn't strictly necessary (since you can rely on implicit conversion in most cases) it can communicate to other developers that you understand what you're doing and it's intentional.

### Convert a string to an int using the Parse() helper method

Most of the numeric data types have a `Parse()` method, which converts a string into the given data type.

### Convert a string to a int using the Convert class

The Convert class has many helper methods to convert a value from one type into another.

```cs
string value1 = "5";
string value2 = "7";
int result = Convert.ToInt32(value1) * Convert.ToInt32(value2);
Console.WriteLine(result); // 35

double a = 3.14
int b = Convert.ToInt32(a); // System.Int32
String c = Convert.ToString(a) // System.String
Console.WriteLine(a.GetType())

Console.WriteLine("Enter your age:");
ing name = Convert.ToInt32(Console.ReadLine());
```

- `System.Int32` is the name of the underlying data type in the .NET Class Library that the C# programming language maps to the keyword `int`

So, when should you use the Convert class? **The Convert class is best for converting fractional numbers into whole numbers (int)** because it rounds up the way you would expect.

### Casting truncates and converting rounds

When you're casting int value = (int)1.5m;, the value of the float is truncated so the result is 1, meaning the value after the decimal is ignored completely. You could change the literal float to 1.999m and the result of casting would be the same.

When you're converting using `Convert.ToInt32()`, the literal float value is properly rounded up to 2. If you changed the literal value to 1.499m, it would be rounded down to 1.

### Math class

```cs
double x = 3;
double y = 5;

double a = Math.Pow(x, 2); // 9
double b = Math.Sqrt(x);
double c = Math.Abs(-3);
double d = Math.Round(3.14); // 3
double e = Math.Ceiling(3.14); // 4
double f = Math.Floor(3.99); // 3
double g = Math.Max(x, y); // 5
double h = Math.Min(x, y); // 3.99
```

## Examine the TryParse() method

The `TryParse()` method does several things simultaneously:

- It attempts to parse a string into the given numeric data type.
- If successful, it stores the converted value in an _out parameter_, explained in following section.
- It returns a `bool` to indicate whether the action succeeded or failed.

## Out parameters

Methods can return a value or return "void" - meaning they return no value. Methods can also return values through **out parameters**, which are defined just like an input parameter, but include the `out` keyword.

When calling a method with an out parameter, you must use the keyword `out` before the variable, which holds the value.

The `out` keyword instructs the compiler that the `TryParse()` method doesn't return a value the traditional way only (as a return value), but also communicates an output through this two-way parameter (?)

- decimal to int is a narrowing conversion so to round, Convert is the best answer

..................................................................

> https://learn.microsoft.com/en-us/training/browse/?products=dotnet
> **CODE EDITOR**: https://microsoftlearning.github.io/c-sharp-minor/

<br>

```sh
dotnet -?

sdk-options:
  -d|--diagnostics  Enable diagnostic output.
  -h|--help         Show command line help.
  --info            Display .NET information.
  --list-runtimes   Display the installed runtimes.
  --list-sdks       Display the installed SDKs.
  --version         Display .NET SDK version in use.

SDK commands:
  build             Build a .NET project.
  build-server      Interact with servers started by a build.
  clean             Clean build outputs of a .NET project.
  format            Apply style preferences to a project or solution.
  help              Opens the reference page in a browser for the specified command.
  msbuild           Run Microsoft Build Engine (MSBuild) commands.
  new               Create a new .NET project or file.
  nuget             Provides additional NuGet commands.
  pack              Create a NuGet package.
  package           Search for, add, remove, or list PackageReferences for a .NET project.
  publish           Publish a .NET project for deployment.
  reference         Add, remove, or list ProjectReferences for a .NET project.
  restore           Restore dependencies specified in a .NET project.
  run               Build and run a .NET project output.
  sdk               Manage .NET SDK installation.
  solution          Modify Visual Studio solution files.
  store             Store the specified assemblies in the runtime package store.
  test              Run unit tests using the test runner specified in a .NET project.
  tool              Install or manage tools that extend the .NET experience.
  vstest            Run Microsoft Test Engine (VSTest) commands.
  workload          Manage optional workloads.
  tool              Install or manage tools that extend the .NET experience.
  vstest            Run Microsoft Test Engine (VSTest) commands.
  workload          Manage optional workloads.
  vstest            Run Microsoft Test Engine (VSTest) commands.
  workload          Manage optional workloads.
  workload          Manage optional workloads.

Additional commands from bundled tools:
  dev-certs         Create and manage development certificates.
  dev-certs         Create and manage development certificates.
  fsi               Start F# Interactive / execute F# scripts.
  user-jwts         Manage JSON Web Tokens in development.
  user-secrets      Manage development user secrets.
  watch             Start a file watcher that runs a command when files change.
```

```sh
dotnet new --help

Options:
  -o, --output <output>    Location to place the generated output.
  -n, --name <name>        The name for the output being created. If no name is specified, the
                           name of the output directory is used.
  --dry-run                Displays a summary of what would happen if the given command line
                           were run if it would result in a template creation. [default: False]
  --force                  Forces content to be generated even if it would change existing
                           files. [default: False]
  --no-update-check        Disables checking for the template package updates when instantiating
                           a template. [default: False]
  --project <project>      The project that should be used for context evaluation.
  -v, --verbosity <LEVEL>  Sets the verbosity level. Allowed values are q[uiet], m[inimal],
                           n[ormal], and diag[nostic]. [default: normal]
  -d, --diagnostics        Enables diagnostic output. [default: False]
  -?, -h, --help           Show command line help.
```
