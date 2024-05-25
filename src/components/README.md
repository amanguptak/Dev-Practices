# TypeScript Tips and Tricks

Remembering which types to use and when to make them optional can be simplified by following some basic principles and strategies. Here are some tricks and methods to help you:

## 1. Understand the Context

- **Events**: When dealing with event handlers (e.g., click, change), use the appropriate `React` event types, such as `React.MouseEvent`, `React.ChangeEvent`, etc. The generic part (`<HTMLButtonElement>`) specifies the element type the event is associated with.
- **Props**: For component props, use interfaces or types that describe the shape of the data.

## 2. Using Optional Types

- **Optional Parameters**: Use `?` when a parameter is optional. This is useful when the parameter might or might not be provided.
- **Default Parameters**: Set default values for optional parameters to handle cases when they are not provided.

## 3. Common Patterns

- **Event Handlers**:
  - For mouse events: `React.MouseEvent<HTMLButtonElement>`
  - For change events (e.g., input fields): `React.ChangeEvent<HTMLInputElement>`
  - Make the event optional if it's not always provided: `event?: React.MouseEvent<HTMLButtonElement>`

- **Props with Optional Fields**:
  - Use `?` in the interface to mark props as optional: `someProp?: string`

## 4. TypeScript Utility Types

- **Partial**: Use `Partial<T>` to make all properties of a type optional.
- **Required**: Use `Required<T>` to make all properties of a type required.
- **Pick**: Use `Pick<T, K>` to create a type by picking a set of properties from another type.
- **Omit**: Use `Omit<T, K>` to create a type by omitting a set of properties from another type.

### Partial<T>

The `Partial<T>` utility type constructs a type with all properties of `T` set to optional. This is useful when you want to create a type that has the same properties as another type but doesn't require all of them to be present.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
    name: "John",
    // age and email are optional
};
```

### Required<T>

The `Required<T>` utility type constructs a type with all properties of `T` set to required. This is useful when you want to ensure that all properties of a type are present.

#### Example:

```typescript
interface User {
    name?: string;
    age?: number;
    email?: string;
}

type RequiredUser = Required<User>;

const newUser: RequiredUser = {
    name: "Jane",
    age: 30,
    email: "jane@example.com",
    // all properties are required
};
```

### Pick<T, K>

The `Pick<T, K>` utility type constructs a type by picking a set of properties `K` from `T`. This is useful when you want to create a type that only includes some properties of another type.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type UserNameAndEmail = Pick<User, "name" | "email">;

const userInfo: UserNameAndEmail = {
    name: "Alice",
    email: "alice@example.com",
    // age is omitted
};
```

### Omit<T, K>

The `Omit<T, K>` utility type constructs a type by omitting a set of properties `K` from `T`. This is useful when you want to create a type that excludes some properties of another type.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
    name: "Bob",
    age: 25,
    // email is omitted
};
```

## 5. Consistent Naming Conventions

- **Event Types**: Always suffix your event handler types with `Event` to remember their purpose, like `MouseEvent`, `ChangeEvent`, etc.
- **Props Interfaces**: Prefix your prop interfaces with `I` to indicate that they are interfaces for props, like `IButtonProps`.

## 6. Practice and Reference

- **Practice**: The more you use these types, the more familiar you will become with them.
- **Reference**: Keep a reference sheet of common types and patterns handy until you are comfortable.

## Example Cheat Sheet

### Common Event Types

```typescript
// Mouse events
type MouseEvent = React.MouseEvent<HTMLButtonElement>;

// Change events
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

// Form events
type FormEvent = React.FormEvent<HTMLFormElement>;
```

### Component Props

```typescript
// Basic props with optional and required fields
interface IButtonProps {
    onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void; // Optional event parameter
    text?: string; // Optional text
    disabled?: boolean; // Optional boolean
}

// Using the interface in a component
const Button = ({ onClick, text = "Default", disabled = false }: IButtonProps) => (
    <button onClick={onClick} disabled={disabled}>
        {text}
    </button>
);
```

### Example Usage

```typescript
const handleClick = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    console.log("Button clicked!");
};

// Using the Button component
<Button onClick={handleClick} text="Click me" />
```

## Summary

- **Know the Context**: Understand the type of event or data you are dealing with.
- **Use Optional Types**: Use `?` for optional parameters and props.
- **Utilize TypeScript Utility Types**: Use utility types like `Partial`, `Required`, `Pick`, and `Omit` to manipulate types.
- **Naming Conventions**: Use consistent naming conventions to help remember types.

By following these principles and practicing regularly, you'll develop a strong intuition for when and how to use specific types in TypeScript.


Sure! Let's add some additional utility type examples to illustrate how these can be used in practice.

# TypeScript Tips and Tricks

Remembering which types to use and when to make them optional can be simplified by following some basic principles and strategies. Here are some tricks and methods to help you:

## 1. Understand the Context

- **Events**: When dealing with event handlers (e.g., click, change), use the appropriate `React` event types, such as `React.MouseEvent`, `React.ChangeEvent`, etc. The generic part (`<HTMLButtonElement>`) specifies the element type the event is associated with.
- **Props**: For component props, use interfaces or types that describe the shape of the data.

## 2. Using Optional Types

- **Optional Parameters**: Use `?` when a parameter is optional. This is useful when the parameter might or might not be provided.
- **Default Parameters**: Set default values for optional parameters to handle cases when they are not provided.

## 3. Common Patterns

- **Event Handlers**:
  - For mouse events: `React.MouseEvent<HTMLButtonElement>`
  - For change events (e.g., input fields): `React.ChangeEvent<HTMLInputElement>`
  - Make the event optional if it's not always provided: `event?: React.MouseEvent<HTMLButtonElement>`

- **Props with Optional Fields**:
  - Use `?` in the interface to mark props as optional: `someProp?: string`

## 4. TypeScript Utility Types

- **Partial**: Use `Partial<T>` to make all properties of a type optional.
- **Required**: Use `Required<T>` to make all properties of a type required.
- **Pick**: Use `Pick<T, K>` to create a type by picking a set of properties from another type.
- **Omit**: Use `Omit<T, K>` to create a type by omitting a set of properties from another type.

### Partial<T>

The `Partial<T>` utility type constructs a type with all properties of `T` set to optional. This is useful when you want to create a type that has the same properties as another type but doesn't require all of them to be present.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>;

const updateUser: PartialUser = {
    name: "John",
    // age and email are optional
};
```

### Required<T>

The `Required<T>` utility type constructs a type with all properties of `T` set to required. This is useful when you want to ensure that all properties of a type are present.

#### Example:

```typescript
interface User {
    name?: string;
    age?: number;
    email?: string;
}

type RequiredUser = Required<User>;

const newUser: RequiredUser = {
    name: "Jane",
    age: 30,
    email: "jane@example.com",
    // all properties are required
};
```

### Pick<T, K>

The `Pick<T, K>` utility type constructs a type by picking a set of properties `K` from `T`. This is useful when you want to create a type that only includes some properties of another type.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type UserNameAndEmail = Pick<User, "name" | "email">;

const userInfo: UserNameAndEmail = {
    name: "Alice",
    email: "alice@example.com",
    // age is omitted
};
```

### Omit<T, K>

The `Omit<T, K>` utility type constructs a type by omitting a set of properties `K` from `T`. This is useful when you want to create a type that excludes some properties of another type.

#### Example:

```typescript
interface User {
    name: string;
    age: number;
    email: string;
}

type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
    name: "Bob",
    age: 25,
    // email is omitted
};
```

## 5. Consistent Naming Conventions

- **Event Types**: Always suffix your event handler types with `Event` to remember their purpose, like `MouseEvent`, `ChangeEvent`, etc.
- **Props Interfaces**: Prefix your prop interfaces with `I` to indicate that they are interfaces for props, like `IButtonProps`.

## 6. Practice and Reference

- **Practice**: The more you use these types, the more familiar you will become with them.
- **Reference**: Keep a reference sheet of common types and patterns handy until you are comfortable.

## Example Cheat Sheet

### Common Event Types

```typescript
// Mouse events
type MouseEvent = React.MouseEvent<HTMLButtonElement>;

// Change events
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

// Form events
type FormEvent = React.FormEvent<HTMLFormElement>;
```

### Component Props

```typescript
// Basic props with optional and required fields
interface IButtonProps {
    onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void; // Optional event parameter
    text?: string; // Optional text
    disabled?: boolean; // Optional boolean
}

// Using the interface in a component
const Button = ({ onClick, text = "Default", disabled = false }: IButtonProps) => (
    <button onClick={onClick} disabled={disabled}>
        {text}
    </button>
);
```

### Example Usage

```typescript
const handleClick = (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    console.log("Button clicked!");
};

// Using the Button component
<Button onClick={handleClick} text="Click me" />
```

## Summary

- **Know the Context**: Understand the type of event or data you are dealing with.
- **Use Optional Types**: Use `?` for optional parameters and props.
- **Utilize TypeScript Utility Types**: Use utility types like `Partial`, `Required`, `Pick`, and `Omit` to manipulate types.
- **Naming Conventions**: Use consistent naming conventions to help remember types.

By following these principles and practicing regularly, you'll develop a strong intuition for when and how to use specific types in TypeScript.