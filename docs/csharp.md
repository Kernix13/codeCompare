---
language: C#
slug: csharp
type: reference
level: beginner–intermediate
last_updated: 2026-01-05
official_docs: https://learn.microsoft.com/en-us/dotnet/csharp/
---

<li><a href="./../index.html">Compare</a></li>
<li><a href="./../details.html">In Depth</a></li>
<li><a href="./../frameworks.html">Frameworks</a></li>

# C# — Reference Notes

## Terms

- .NET compiler | .NET runtime | app models | .NET SDK | base class library | NuGet | ASP.NET Core | ASP.NET Core Razor Pages | Blazor | .NET MAUI | workload | .NET CLI |

## Intro

- The .NET compiler is a program that converts the source code into a portable language called intermediate language
- The .NET compiler saves the IL code into a file called a .NET assembly
- The .NET runtime is an execution environment for your compiled .NET assembly
- the .NET runtime is what executes and manages your application as it runs on a host operating system
- application frameworks and libraries of functionality allow you to quickly build rich applications with less effort than older development methods
- A code library encapsulates functionality for a specific purpose into a single assembly
- The libraries provide a vast array of functionality you can use in your applications. You merely reference those assemblies and call the methods.
- An application framework combines several related libraries, along with starter projects, file templates, code generators, and other tools
- These application frameworks are known as app models
- You can install the .NET SDK directly or by installing Visual Studio 2022.
- The .NET SDK preinstalls a comprehensive set of libraries and application frameworks called the base class library
- developers use package managers like NuGet to find and integrate code libraries from package repositories like the NuGet Gallery

### Major app models

- Web, _ASP.NET Core_: The framework for building server-side logic.
- Web, _ASP.NET Core MVC_: The framework for building server-side logic for web pages or web APIs.
- Web, _ASP.NET Core Razor Pages_: The framework for building server-generated HTML.
- Web client, _Blazor_: Blazor is a part of ASP.NET Core. Its two modes allow for either Document Object Model (DOM) manipulation via sockets as a communication vehicle for running server-side code, or a WebAssembly implementation for running compiled C# on a browser.
- Desktop, _.NET for Mac_: Allows .NET developers to build apps for Mac devices with native UI and API access.
- Desktop, _WinForms_: A framework for building "battleship gray" Windows-style applications.
- Desktop, _Windows Presentation Foundation (WPF)_: A framework for building dynamic desktop applications that conform to different form factors. WPF allows form elements to perform movement, fades, glides, and other effects with the help of a rich library of animations.
- Mobile, _.NET for Android_: Allows .NET developers to build apps for Android devices with native UI and API access.
- Mobile, _.NET for iOS_: Allows .NET developers to build apps for iOS and iPadOS with native UI and API access.
- Multi-Platform App UI, _.NET MAUI_: The premier way to build apps for iOS, Android, Mac, and Windows from a single shared code base with native UI and access to native APIs.

## Basics

- Writing C# code is an exercise in precision. If you type just one character incorrectly, you'll get an error message in the output area when you run the code

```cs
Console.WriteLine("Hello World!");
Console.Write("Congratulations!");
Console.Write(" ");
Console.Write("You wrote your first line of code.");
```

The difference between Console.Write and Console.WriteLine

- To print an entire message to the output console, you used the first technique, `Console.WriteLine()`. At the end of the line, it added a line feed similar to how to create a new line of text by pressing Enter or Return. `block`
- To print to the output console, but without adding a line feed at the end, you used the second technique, `Console.Write()`. So, the next call to Console.Write() prints another message to the same line. `inline`
- `Console.WriteLine()` = block | `Console.Write()` = inline - `Console.WriteLine` prints the output on the existing line and appends a new line after it.
- A special program called a compiler converts your source code into a different format that the computer's central processing unit (CPU) can execute
- When the phrase is surrounded by `double-quotation` marks in your C# code, it's called a _literal string_
- The `Console` part is called a **class** - Classes "own" methods, methods live inside of a class
- To visit the method, you must know which class it's in
- a `.` dot (or period) that separates the class name `Console` and the method name `WriteLine()` - The period is the _member access operator_
- the semicolon `;` is the `end of statement operator`. A statement is a complete instruction in C#. The semicolon tells the compiler that you've finished entering the command

Use string literals (1)

- A `literal` value is a constant value that never changes
- Use the `string` data type whenever you have alphanumeric words, phrases, or data for presentation, not calculation

Use character literals (2)

- If you only wanted a single alphanumeric character printed to screen, you could create a _char literal_ by surrounding one alphanumeric character in `single quotes`.
- The term `char` is short for character. In C#, this data type is officially named "char", but frequently referred to as a "character".
- Single quotes create a `character` literal. When you use single quotation marks, the C# compiler expects a single character - use `char` whenever you have a single alphanumeric character
- Recall that using double quotation marks creates a `string` data type

Use integer literals (3)

- If you want to display a numeric whole number (no fractions) value in the output console, you can use an `int literal`
- An int literal requires no other operators like the string or char

Use floating-point literals (4)

- A floating-point number is a number that contains a decimal
- C# supports three data types to represent decimal numbers: `float`, `double`, and `decimal`. Each type supports varying degrees of precision.
- To create a `float` literal, append the letter `F` after the number
- the F is called a literal suffix
- You can use either a lower-case `f` or upper-case `F` as the literal suffix for a float
- To create a `double` literal, just enter a decimal number. The compiler defaults to a double literal when a decimal number is entered without a literal suffix
- To create a `decimal` literal, append the letter `m` after the number. In this context, the m is called a literal suffix. The literal suffix tells the compiler you wish to work with a value of decimal type. You can use either a lower-case `m` or upper-case `M` as the literal suffix for a decimal

Use Boolean literals (5)

- If you wanted to print a value representing either `true` or `false`, you could use a `bool` literal
- You'll use bool values extensively when you start to add decision logic to your applications. You'll evaluate expressions to see whether the expression is true or false

```cs
// String datatype
Console.WriteLine("Hello");
// char literal
Console.WriteLine('b');
// int literal
Console.WriteLine(123);
// floating-point f or F
Console.WriteLine(0.25F);
// double literal
Console.WriteLine(2.625);
// decimal literal m or M - USE THIS ONE
Console.WriteLine(12.39816m);
// bool literal
Console.WriteLine(true);
```

## variables

- To create a new variable, you must first declare the data type of the variable, and then give it a name

```cs
string firstName;
```

- this variable can now only hold string values
- You can choose any name as long as it adheres to a few C# syntax rules for naming variables.

Variable name rules and conventions

- Variable names can contain alphanumeric characters and the underscore character. Special characters like the hash symbol # (also known as the number symbol or pound symbol) or dollar symbol $ are not allowed.
- Variable names must begin with an alphabetical letter or an underscore, not a number.
- Variable names are case-sensitive, meaning that `string Value;` and `string value;` are two different variables.
- Variable names must not be a C# keyword. For example, you cannot use the following variable declarations: decimal decimal; or string string;.
- Variable names should use `camel case`, which is a style of writing that uses a lower-case letter at the beginning of the first word and an upper-case letter at the beginning of each subsequent word. For example, string thisIsCamelCase;.
- Variable names should `begin with an alphabetical letter`. Developers use the `underscore` for a special purpose, so try to not use that for now.
- Variable names should be descriptive and meaningful in your app. Choose a name for your variable that represents the kind of data it will hold.
- Variable names should be one or more entire words appended together. _Don't use contractions or abbreviations_ because the name of the variable (and therefore, its purpose) may be unclear to others who are reading your code.
- Variable names shouldn't include the data type of the variable. You might see some advice to use a style like string strValue;. That advice is no longer current.

Reassign the value of a variable

- You can reuse and reassign the variable as many times as you want

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
- The `var` keyword is used to save on keystrokes when types are lengthy or when the type is obvious from the context

Variables using the `var` keyword must be initialized

- If you try to use the var keyword without initializing the variable, you'll receive an error when you attempt to compile your code

Why use the var keyword?

- The var keyword has an important use in C#. Many times, the type of a variable is obvious from its initialization. In those cases, it's simpler to use the var keyword. The var keyword can also be useful when planning the code for an application. When you begin developing code for a task, you may not immediately know what data type to use. Using var can help you develop your solution more dynamically

## Basic String Formatting in C#

Character escape sequences:

- `escape character sequence`: insert a special character that will affect the output of your string
- the escape character sequence begins with a backslash `\` followed by the character you're escaping

```cs
Console.WriteLine("Hello\nWorld!");
Console.WriteLine("Hello\tWorld!");
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
Console.WriteLine(firstName + " sold " + widgetsSold + 7 + " widgets.");
```

- In C#, a number with a decimal point is not a decimal by default.
- m or M tells the compiler: “This number is a decimal literal, not a double.”
- `M` is better than `m` and both are better than `(decimal)`

```cs
// 7	          int
// 7.0	        double
// 7.0f	      float
// 7.0m / 7.0M	decimal
decimal amount = 1.23;   // ❌ compile error
```

- quotient: The values after the decimal are truncated from the quotient since it is defined as an `int`, and `int` cannot contain values after the decimal
- to show decimals, the quotient (left of the assignment operator) must be of type `decimal` and at least one of numbers being divided must also be of type `decimal`
- what if you need to divide two variables of type int but do not want the result truncated?
- In that case, you must perform a data `type cast` from `int` to `decimal`.
- Casting is one type of data conversion that instructs the compiler to temporarily treat a value as if it were a different data type
- To cast `int` to `decimal`, you add the _cast operator_ before the value.
- You use the name of the data type surrounded by parentheses in front of the value to cast it
- NOTE: three uses for the parenthesis operator: method invocation, order of operations and casting
- you'll need to increment and/or decrement values, especially when you're writing looping logic or code that interacts with a data structure
- The `+=` operator adds and assigns the value on the right of the operator to the value on the left of the operator
- The `++` operator increments the value of the variable by 1
- Both the increment and decrement operators have an interesting quality — depending on their position, they perform their operation before or after they retrieve their value. In other words, if you use the operator before the value as in `++value`, then the increment will happen before the value is retrieved. Likewise, `value++` will increment the value after the value has been retrieved

## Create and Run Simple C# Console Applications

`SDK` - software development kit

Check to see if .NET is already installed:

```ps1
# Windows Command Prompt or PowerShell
dotnet --version
# 7.0.400
```

- NOTE: markdown language code block for PowerShell: powershell, ps, ps1, ps1 is best IMO

1. Go to https://dotnet.microsoft.com/en-us/download
2. On the Download .NET page, select the recommended version of the .NET SDK
3. Run the .NET SDK installer file
4. On the .NET SDK Installer window, select Install

## Create, build, and run your application

The .NET software development kit (SDK) includes a command-line interface (CLI) that can be accessed from Visual Studio Code's integrated Terminal. During this training, you use .NET CLI commands to create new console applications, build your project code, and run your applications

- the following .NET CLI command will create a new console application in the specified folder location

```sh
dotnet new console -o ./CsharpProjects/TestProject
```

The structure of a CLI command consists of the following three parts:

- The driver: `dotnet` in this example.
- The command: `new console` in this example.
- The command arguments: `-o ./CsharpProjects/TestProject` in this example.
- This .NET CLI command uses a .NET program template to create a new C# console application project in the specified folder location. The command creates the CsharpProjects and TestProject folders for you, and uses TestProject as the name of your `.csproj` file

Update, build, and run your application:

- In the Visual Studio Code EXPLORER view, `right-click` the TestProject folder, and then select `Open in integrated Terminal`

> The first time you edit a .cs file, Visual Studio Code may prompt you to add the missing assets to build and debug your app. If you see the prompt, you can select `Yes`

- To compile a build of your application, enter the following command at the Terminal command prompt:

```sh
dotnet build
```

- The dotnet build command builds the project and its dependencies into a set of binaries.
- The binaries include the project's code in Intermediate Language (IL) files with a `.dll` extension.
- Depending on the project type and settings, other files may also be included. If you're curious, you can find the TestProject.dll file in the EXPLORER panel
- To run your application, enter the following command at the Terminal command prompt

```sh
dotnet run
```

- The `dotnet run` command runs source code without any explicit compile or launch commands. It provides a convenient option to run your application from the source code with one command. It's useful for fast iterative development from the command line. The command depends on the dotnet build command to build the code

## Call Methods From the .NET Class Library Using C#

- The C# programming language is supplemented by a large library of functionality
- learn about class libraries, and write code that calls methods in the .NET Class Library.
- You learn the characteristics of methods, and why methods of the .NET Class Library are designed and implemented differently across the .NET Class Library
- You'll need the .NET Runtime, which hosts and manages your code as it executes on the end user's computer
- You'll also rely on the .NET Class Library, a prewritten collection of coding resources that you can use in your applications

What is the .NET Class Library?:

- `.NET Class Library`: an organized collection of programming resources - is a collection of thousands of classes containing tens of thousands of methods
- the `Console` class for developers working on console applications
- You can think of a class as a container for methods
- any methods that can send or receive information from a console window are collected into the `System.Console` class in the .NET Class Library
- ...to create dynamic web applications
- ...to build native desktop applications
- ...to access a database
- There are other classes with methods that spans a wide range of device platforms, application frameworks, and technology areas

Even data types are part of the .NET Class Library:

- behind the scenes, the data types are implemented just like every other class in the .NET Class Library

How to find what you need in the .NET Class Library

- When you have trouble figuring out a programming task, you can use your favorite search engine to find blog posts, articles, or forums where other developers have worked through similar issues.
- Third-party sources can give you clues about which .NET classes and methods you might want to use, and you may even find sample code that you can try
- Microsoft provides an online language reference and programming guide for C#

## Call the methods of a .NET Class

- how to pass input values to a method, and how a method can be used to return a value to the calling routine
- `dotnet new console -o ./CsharpProjects/TestProject` - already done
- open Program.cs - delete everything
- `.Next(min, max)` - >= min, < max
- Open in Integrated Terminal
- to run your code, type `dotnet run`
- some methods are _stateful_ and others are _stateless_

Stateful versus stateless methods:

- the term _state_ is used to describe the condition of the execution environment at a specific moment in time
- As your code executes line by line, values are stored in variables. At any moment during execution, the current state of the application is the collection of all values stored in memory
- Some methods don't rely on the current state of the application to work properly. In other words, _stateless methods_ are implemented so that they can work without referencing or changing any values already stored in memory. Stateless methods are also known as _static methods_
- `Console.WriteLine` doesn't rely on any values stored in memory - It performs its function and finishes without impacting the state of the application in any way
- Other methods, however, must have access to the state of the application to work properly
- `stateful methods` - rely on values stored in memory by previous lines of code that have already been executed.
- they modify the state of the application by updating values or storing new values in memory. They're also known as _instance methods_

Stateful (instance) methods keep track of their state in fields, which are variables defined on the class. Each new instance of the class gets its own copy of those fields in which to store state

A single class can support both stateful and stateless methods. However, _when you need to call stateful methods, you must first create an instance of the class_ so that the method can access state

Creating an instance of a class

- An instance of a class is called an `object`.
- To create a new instance of a class, you use the `new` operator

```cs
Random dice = new Random();
Random dice = new();
int roll = dice.Next();
```

The `new` operator does several important things:

- It first requests an address in the computer's memory large enough to store a new object based on the Random class.
- It creates the new object, and stores it at the memory address.
- It returns the memory address so that it can be saved in the dice variable.

Why is the `Next()` method stateful?

- The state that is captured and maintained through the lifetime of the `dice` object is the seed value
- Each subsequent call to the `Next()` method is rerunning the algorithm, but ensures that the seed changes so that the same value isn't (necessarily) returned

How can you determine whether you need to create an instance of a class before calling its methods?

- consult the documentation
- The documentation includes examples that show whether the method must be called from the object instance or directly from the class
- or you can attempt to access the method directly from the class itself - If it works, you know that it's a stateless method - The worst that can happen is that you'll get a compilation error
- `Next()` is a stateful method
- If the method that you're interested in using is stateless, no red squiggly line will appear

## Return values and input parameters of methods

other important concepts about calling methods:

- handling the return value of a method.
- passing input parameters to a method.
- choosing an overloaded version of a method.

Return values:

- Some methods don't return a value when they finish.
- They are referred to as `void methods`
- Other methods are designed to return a value upon completion
- the `Random.Next()` method returns an `int` type
- a method can be designed to return any data type, even another class
  - the `String` class has some methods that return a string, some that return an integer, and some that return a Boolean
- When calling a method that returns a value, you'll often assign the return value to a variable
- you may want to use the return value directly, without assigning it to a variable
- Even though a method returns a value, it's possible to call the method without using the return value

Input parameters

- The information consumed by a method is called a `parameter`.
- A method can use one or more parameters to accomplish its task, or none at all.
- Most methods are designed to accept one or more input parameters.
- The input parameters can be used to configure how the method performs its work, or they might be operated on directly
- Methods use a _method signature_ to define the number of input parameters required and the data type of each parameter
- `Methods define input parameters using a data type`. You can't pass args of a different data type as input parameters to the method and expect the method to work

## Return values and input parameters of methods

other important concepts about calling methods:

- handling the return value of a method.
- passing input parameters to a method.
- choosing an overloaded version of a method.

Return values:

- Some methods don't return a value when they finish.
- They are referred to as `void methods`
- Other methods are designed to return a value upon completion
- the `Random.Next()` method returns an `int` type
- a method can be designed to return any data type, even another class
  - the `String` class has some methods that return a string, some that return an integer, and some that return a Boolean
- When calling a method that returns a value, you'll often assign the return value to a variable
- you may want to use the return value directly, without assigning it to a variable
- Even though a method returns a value, it's possible to call the method without using the return value

Input parameters

- The information consumed by a method is called a `parameter`.
- A method can use one or more parameters to accomplish its task, or none at all.
- Most methods are designed to accept one or more input parameters.
- The input parameters can be used to configure how the method performs its work, or they might be operated on directly
- Methods use a _method signature_ to define the number of input parameters required and the data type of each parameter
- `Methods define input parameters using a data type`. You can't pass args of a different data type as input parameters to the method and expect the method to work

> Type checking is one way that `C#` and `.NET` uses to prevent end-users from experiencing errors at runtime

- Although input parameters are often used, not all methods require input parameters to complete their task, e.g. `Console.Clear()`

Overloaded methods:

- Many methods in the .NET Class Library have `overloaded method signatures`.
- this enables you to call the method with or without parameters.
- An `overloaded method` is defined with multiple method signatures.
- Overloaded methods provide different ways to call the method or provide different types of data.
- In some cases, overloaded versions of a method are used to accept an input parameter using different data types. For example, the `Console.WriteLine()` method has 19 different overloaded versions. Most of those overloads allow the method to accept different types and then write the specified information to the console
- In other cases, overloaded versions of a method accept a different number of input parameters. The alternative input parameters can be used to provide more control over desired result. For example, the `Random.Next()` method has three different overloaded versions. The three versions enable you to set various levels of constraint on the randomly generated number.

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
- Press the `Tab` key on the keyboard - You can use the up and down arrow keys to change the selection before pressing the Tab key (no you can't)

If the IntelliSense window disappears, it can be selected by using the backspace key on the keyboard, then re-enter the last symbol to re-open IntelliSense

- enter a `.` character - Notice that the IntelliSense popup reappears when you enter `.` and shows an unfiltered list of all the methods (and other members of the class) that are available

Use `docs.microsoft.com` for information about overloaded methods:

- https://learn.microsoft.com/en-us/docs/

## Create decision logic with if statements

- Use an `if` statement to branch your code logic. The `if` decision statement will execute code in its code block if its Boolean expression equates to `true`. Otherwise, the runtime will skip over the code block and continue to the next line of code after the code block.
- A Boolean expression is any expression that returns a Boolean value.
- Boolean operators will compare the two values on its left and right for equality, comparison, and more.
- A code block is defined by curly braces `{ }`. It collects lines of code that should be treated as a single unit.
- The logical AND operator `&&` aggregates two expressions so that both subexpressions must be `true` in order for the entire expression to be `true`.
- The logical OR operator `||` aggregates two expressions so that if either subexpression is `true`, the entire expression is `true`.
- The combination of `if` and `else` statements allows you to test for one condition, and then perform one of two outcomes. The code block for the `if` will be run when the Boolean expression is `true`, and the code block for the `else` will be run when the Boolean expression is `false`.
- You can nest `if` statements to narrow down a possible condition. However, you should consider using the `if`, `else if`, and `else` statements instead.
- Use `else if` statements to create multiple exclusive conditions.
- An `else` is optional, but it must always come last when included.

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
- However, to initialize the elements of the array, you use a special syntax featuring curly braces

```cs
string[] fraudulentOrderIDs = { "A123", "B456", "C789" };
```

Use the Length property of an array:

- Depending on how the array is created, you may not know in advance how many elements an array contains.
- To determine the size of an array, you can use the Length property

## Implement the foreach statement

Looping through an array using foreach:

- `foreach` uses a temporary variable to hold the value of the array element associated with the current iteration

```cs
foreach (string name in names) {...}
```

Create and initialize an array of int & Add a foreach statement to iterate through the array & Add a variable to sum the value of each element in the array

- Use the foreach statement to create a sum of all the items on hand in each bin of your warehouse
- Use the `foreach` statement to iterate through each element in an array, executing the associated code block once for each element in the array.
- The `foreach` statement sets the value of the current element in the array to a temporary variable, which you can use in the body of the code block.
- Use the `++` increment operator to add 1 to the current value of a variable.

## Choose variable names that follow rules and conventions

Variable name rules:

There are some variable naming rules that are enforced by the C# compiler.

- Variable names can contain alphanumeric characters and the underscore character. Special characters like the pound `#`, the dash `-`, and the dollar sign `$` are not allowed.
- Variable names must begin with an alphabetical letter or an underscore, not a number. Developers use the underscore for a special purpose, so try to not use that for now.
- Variable names must NOT be a C# keyword. For example, these variable name declarations won't be allowed: float float; or string string;.
- Variable names are case-sensitive, meaning that string MyValue; and string myValue; are two different variables.

Variable name conventions:

- Variable names should use camel case
- Variable names should be descriptive and meaningful - You should choose a name for your variable that represents the kind of data it will hold (not the data type)
- Variable names should be one or more entire words appended together
- Variable names shouldn't include the data type of the variable

```cs
// examples:
char userOption;
int gameScore;
float particlesPerMillion;
bool processedCustomer;
```

Other naming conventions:

- The rules and conventions described above are for `local variables`. A local variable is a variable that is scoped within the body of a method, or a variable in a console application that uses top-level statements
- Classes support fields, which are members of a class that act like variables inasmuch that they store values, or rather, state.
- Classes also support accessibility modifiers, which allow some values to be `private` or `public`
- A `private` member can only be referenced by other members in the same class.
- A `public` member can be referenced outside of the class.
- So, you can create `private fields` or `public fields`

## Code example

- update the code using style guidelines for variable names, code comments, and whitespace to improve code readability

```cs
string str = "The quick brown fox jumps over the lazy dog.";
// convert the message into a char array
char[] charMessage = str.ToCharArray();
// Reverse the chars
Array.Reverse(charMessage);
int x = 0;
// count the o's
foreach (char i in charMessage) { if (i == 'o') { x++; } }
// convert it back to a string
string new_message = new String(charMessage);
// print it out
Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {x} times.");

/*
   This code reverses a message, counts the number of times
   a particular character appears, then prints the results
   to the console window.
*/
string str = "The quick brown fox jumps over the lazy dog.";

char[] charMessage = str.ToCharArray();
Array.Reverse(charMessage);

int x = 0;

foreach (char i in charMessage)
{
    if (i == 'o') { x++; }
}

string new_message = new String(charMessage);

Console.WriteLine(new_message);
Console.WriteLine($"'o' appears {x} times.");
```

## Build your first app by using .NET

- The code `public static void Main()` including the set of curly braces, define a type of code block called a method
- Methods are organized inside other code blocks called classes
- A class can contain one or more methods

The following process happens on a server on your behalf:

1. A command to compile your new code invokes the C# compiler.
2. The C# compiler ensures your code can be compiled and is free from syntax errors. If it can't compile your code, the compiler stops and sends an error message back to the Output pane.
3. If the C# compiler succeeds, the .NET runtime opens the newly compiled .NET assembly. By default, it looks in a class named Program to find a method named Main() to begin running the instructions.
4. Instruction by instruction, the .NET runtime evaluates each line of code. It runs the instruction and moves to the next line of code.
5. When done, the .NET runtime removes the program from its memory

## When to use .NET

- .NET for enterprise-scale applications
- .NET for prototypes, start-ups, and small-scale applications
- .NET for cloud and AI applications:
  - The Azure SDK for .NET allows developers to provision and manage Azure resources
  - Azure App Service and Azure Functions can host applications built using .NET languages
  - ML.NET is a free machine learning library for .NET languages. It enables model-based capabilities for machine learning analysis and prediction
- .NET for IoT applications: interact with sensors, displays, and input devices that require the use of general-purpose I/O (GPIO) pins, serial ports, or similar hardware

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

## Explore data type casting and conversion

There are multiple techniques to perform a data type conversion. The technique you choose depends on your answer to two important questions:

- Is it possible, depending on the value, that attempting to change the value's data type would throw an exception at run time?
- Is it possible, depending on the value, that attempting to change the value's data type would result in a loss of information?

The C# compiler attempts to accommodate your code, but doesn't compile operations that could result in an exception. When you understand the C# compiler's primary concern, understanding why it functions a certain way is easier.

Write code that attempts to add an int and a string and save the result in an int

- the C# compiler doesn't implicitly perform the conversion from `string` to `int` for you

To perform data conversion, you can use one of several techniques:

- Use a helper method on the data type
- Use a helper method on the variable
- Use the Convert class' methods

### Determine if your conversion is a "widening conversion" or a "narrowing conversion"

The term narrowing conversion means that you're attempting to convert a value from a data type that can hold more information to a data type that can hold less information. In this case, you may lose information such as precision (that is, the number of values after the decimal point).

When you know you're performing a narrowing conversion, you need to perform a cast. Casting is an instruction to the C# compiler that you know precision may be lost, but you're willing to accept it.

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

Most of the numeric data types have a Parse() method, which converts a string into the given data type.

### Convert a string to a int using the Convert class

The Convert class has many helper methods to convert a value from one type into another.

```cs
string value1 = "5";
string value2 = "7";
int result = Convert.ToInt32(value1) * Convert.ToInt32(value2);
Console.WriteLine(result);
```

- `System.Int32` is the name of the underlying data type in the .NET Class Library that the C# programming language maps to the keyword `int`

So, when should you use the Convert class? The Convert class is best for converting fractional numbers into whole numbers (int) because it rounds up the way you would expect.

### Casting truncates and converting rounds

When you're casting int value = (int)1.5m;, the value of the float is truncated so the result is 1, meaning the value after the decimal is ignored completely. You could change the literal float to 1.999m and the result of casting would be the same.

When you're converting using `Convert.ToInt32()`, the literal float value is properly rounded up to 2. If you changed the literal value to 1.499m, it would be rounded down to 1.

## Examine the TryParse() method

The TryParse() method does several things simultaneously:

- It attempts to parse a string into the given numeric data type.
- If successful, it stores the converted value in an out parameter, explained in following section.
- It returns a bool to indicate whether the action succeeded or failed.

## Out parameters

Methods can return a value or return "void" - meaning they return no value. Methods can also return values through out parameters, which are defined just like an input parameter, but include the `out` keyword.

When calling a method with an out parameter, you must use the keyword out before the variable, which holds the value.

The out keyword instructs the compiler that the TryParse() method doesn't return a value the traditional way only (as a return value), but also communicates an output through this two-way parameter.

- decimal to int is a narrowing conversion so to round, Convert is the best answer

> NEXT: https://learn.microsoft.com/en-us/training/modules/csharp-convert-cast/

..................................................................

> https://learn.microsoft.com/en-us/training/browse/?products=dotnet

> **CODE EDITOR**: https://microsoftlearning.github.io/c-sharp-minor/
