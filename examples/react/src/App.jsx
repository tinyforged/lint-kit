import React from 'react';

export default function App() {
  const [count, setCount] = React.useState(0);
  return <button type="button" onClick={() => setCount((c) => c + 1)}>{count}</button>;
}