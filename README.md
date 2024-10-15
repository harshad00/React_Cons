
```markdown
# React Higher-Order Component (HOC) Example

### How to Run

1. Clone the repository.
2. Install the dependencies using:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

---

This project demonstrates the implementation of a **Higher-Order Component (HOC)** in React. HOCs are an advanced technique in React that allows you to reuse component logic across different parts of your application. In this example, a HOC is used to provide state and a function to increment money to different components.

## What is a Higher-Order Component (HOC)?

A Higher-Order Component (HOC) is a pattern where a function takes a component and returns a new component. The new component can contain added functionality or logic, enabling you to reuse that functionality across multiple components without repeating the same code.

In this project, the HOC injects a `money` state and a `handleAdd` function into the components it wraps, allowing them to display and update a money value.

For a more detailed explanation, watch this [YouTube video](https://youtu.be/J5P0q7EROfw?si=13qZHAYzSPqAxZwi).

## Example Code

### HOC.jsx

```jsx
import React, { useState } from 'react';

function HOC(Comps) {
  function NewComps() {
    const [addMoney, setAddMoney] = useState(0);

    const handleAdd = () => {
      setAddMoney(addMoney + 1);
    };

    return <Comps money={addMoney} handleAdd={handleAdd} />;
  }
  return NewComps;
}

export default HOC;
```

The HOC function wraps any component and provides it with a `money` state and a `handleAdd` function to increment the money.

### Person1.jsx

```jsx
import React from 'react';
import HOC from './HOC';

function Person1({ money, handleAdd }) {
  return (
    <div>
      <h1> Harsh is offering ${money} </h1>
      <button onClick={handleAdd}> Increase Money </button>
    </div>
  );
}

export default HOC(Person1);
```

### Person2.jsx

```jsx
import React from 'react';
import HOC from './HOC';

function Person2({ money, handleAdd }) {
  return (
    <div>
      <h1> Jay is offering ${money} </h1>
      <button onClick={handleAdd}> Increase Money </button>
    </div>
  );
}

export default HOC(Person2);
```

Both `Person1` and `Person2` components are wrapped by the `HOC`, enabling them to share the `money` state and the `handleAdd` function.

---

## License

This project is open-source and available under the MIT License.
```

This `README.md` file provides a clear description of the HOC concept, explains the code structure, and includes steps on how to run the project.