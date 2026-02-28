---
language: TypeScript
slug: typescript
type: reference
level: beginner–intermediate
last_updated: 2026-002-28
official_docs: https://www.typescriptlang.org/docs/
---

<li><a href="./../index.html">Compare</a></li>
<li><a href="./../details.html">In Depth</a></li>
<li><a href="./../frameworks.html">Frameworks</a></li>

# TypeScript — Reference Notes

## C# correlations

- Types
- Classes
- Interfaces
- OOP
- Generics
- Enums
- Null, Undefined, and Safety
- Access Modifiers: public, private, protected, readonly

---

1. Types Are Real, Not Suggestions - Train your brain to always care about types, not rely on inference

```ts
let count: number = 0;
let name: string = 'Luna';

function add(a: number, b: number): number {
  return a + b;
}
```

C# parallel:

```cs
int count = 0;
string name = "Jim";

int Add(int a, int b)
{
    return a + b;
}
```

---

2. Classes = HUGE, really understand -> Class syntax, constructors, fields vs methods, public / private / readonly

```ts
class User {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

```C#
class User
{
    public string Name { get; set; }
    private int Age;

    public User(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public string Greet()
    {
        return $"Hi, I'm {Name}";
    }
}
```

---

3. Interfaces (VERY IMPORTANT): a way to define a contract that specifies required properties and methods. In TypeScript, this describes the shape of an object and exists only at compile time. In C#, this defines an explicit contract that classes must implement and exists at runtime.

```ts
interface User {
  name: string;
  greet(): string;
}

// Have the Class Implement the Interface - connect them:
class Person implements User {
  public name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hi, I'm ${this.name}`;
  }
}
```

Interfaces in C# are used for:

- Dependency injection
- Testing (mocking)
- Service abstraction
- Clean architecture layers

in C#:

- The interface defines a contract - "If you implement this interface, you promise to provide these members"
- This class fulfills the contract - The service must honor the interface contract

```cs
// An interface is a contract, not an object. This is central to C# design
// C# interfaces typically start with I
public interface IUser
{
    // property with getters/setters — not just a field
    string Name { get; set; }
    string Greet();
}

// Implement the Interface
class User : IUser
{
    public string Name { get; set; }
    private int Age;

    public User(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public string Greet()
    {
        return $"Hi, I'm {Name}";
    }
}
```

- In TypeScript: Interfaces disappear after compilation
- In C#: Interfaces are part of the compiled assembly. They exist at runtime. They’re used heavily for dependency injection

```cs
// When you move into ASP.NET Core, you will constantly see:
public class UserService : IUserService
// That pattern is foundational in C# backend architecture
```

---

4. OOP Concepts (Not Just Syntax)

| Concept       | TS              | C#   |
| :------------ | :-------------- | :--- |
| Encapsulation | private/public  | same |
| Inheritance   | extends         | :    |
| Polymorphism  | interface usage | same |
| Abstraction   | interfaces      | same |

```ts
class Animal {
  speak() {
    console.log('sound');
  }
}

class Dog extends Animal {
  speak() {
    console.log('woof');
  }
}
```

```cs
class Animal {
    public virtual void Speak() => Console.WriteLine("sound");
}

class Dog : Animal {
    public override void Speak() => Console.WriteLine("woof");
}
```

---

5. Generics (BIG crossover)

```ts
function identity<T>(value: T): T {
  return value;
}

// also understand
// Array<string>
// Promise<number>
```

```cs
T Identity<T>(T value)
{
    return value;
}
// also understand
// List<string>
// Task<int>
```

---

6. Enums

```ts
enum Role {
  Admin,
  User,
}
```

```cs
enum Role {
    Admin,
    User
}
```

---

7. Null, Undefined, and Safety - TS strict null checks prepare you for C#'s null rules

```ts
let name: string | null = null;
```

```cs
string? name = null;
```

---

8. Arrays & Collection Thinking - Get used to:: mapping, filtering, transforming data - This translates to LINQ in C# later

```ts
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
```

```cs
var nums = new List<int> {1,2,3};
var doubled = nums.Select(n => n * 2);
```

---

9. Access Modifiers: public, private, protected, readonly - C# uses them constantly

10. What NOT to worry about (not very C#-ish)

- DOM manipulation
- Browser APIs
- Async fetch patterns (you’ll relearn with C# async/await differently)
- Weird JS coercion rules
