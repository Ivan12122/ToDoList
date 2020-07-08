import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    debugger
    document.title = `Вы нажали ${count} раз`;
  });

  return (
    <div>
      <p>Вы нажали {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}