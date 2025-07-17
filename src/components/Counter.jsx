import { useCounterStore } from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold">Count: {count}</h2>
      <div className="space-x-4">
        <button
          onClick={increase}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Increase
        </button>
        <button
          onClick={decrease}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
