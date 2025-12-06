import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleincrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="p-8">
      <button
        className="bg-blue-600 px-4 py-1 text-white mx-6 rounded-lg"
        onClick={handleincrement}
      >
        Increment
      </button>
      <button
        className="bg-blue-600 px-4 py-1 text-white rounded-lg"
        onClick={handledecrement}
      >
        Decrement
      </button>
      <h1 className="p-4 font-bold">count: {count}</h1>
    </div>
  );
}
