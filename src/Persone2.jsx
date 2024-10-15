/**
 * The Persone2 component displays a money amount and allows the user to increase it by +1 when a
 * button is clicked.
 * @returns The `Persone2` component is being returned. It displays the current money amount and a
 * button to increase the money by +1 when clicked. The component is wrapped with a Higher Order
 * Component (HOC) before being exported.
 */
import React from 'react'
import HOC from './HOC';

function Persone2({money,handleAdd}) {
// Example money amount for demonstration purposes. You can replace this with your own logic.

  // Increase the money by 10% when the button is clicked
  return (
    <div>

        <h1> Jay is offering ${money} </h1>
        <button onClick={handleAdd}> Increase Money </button>
      
    </div>
  )
}

export default HOC(Persone2) 
