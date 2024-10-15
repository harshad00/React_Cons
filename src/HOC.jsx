/**
 * The HOC function is a higher-order component in React that adds a money state and a handleAdd
 * function to the component passed to it.
 * @returns The `HOC` function is returning a new component `NewComps` that wraps the original
 * component `Comps`. Inside `NewComps`, it initializes a state variable `addMoney` using the
 * `useState` hook with an initial value of 0. It also defines a `handleAdd` function that increments
 * the `addMoney` state by 1 when called. Finally, it
 */
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
