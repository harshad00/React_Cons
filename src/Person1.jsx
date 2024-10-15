/**
 * The Person1 component displays the amount of money a person has and provides a button to increase
 * the money.
 * @returns The `Person1` component is being returned. It is a functional component that displays the
 * amount of money a person has and a button to increase the money. The `Person1` component is wrapped
 * with a Higher Order Component (HOC) before being exported.
 */
import React from 'react'
import HOC from './HOC'


function Person1({money,handleAdd}) {
    // const money = 1000; // Initial amount of money the person has
  return (
    <div>
      <h1> Harshis offering ${money}  </h1>
      <button onClick={handleAdd}> Increase Money </button>
    </div>
  )
}

export default HOC(Person1)  
