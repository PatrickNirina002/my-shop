import React, { useState } from 'react';

const Coeur= props =>{
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      
      <button onClick={() => setCount(count + 1)}>
      {count}   ❤️
      </button>
    </div>
  );
}
export default Coeur