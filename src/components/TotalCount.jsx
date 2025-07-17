import { useCounterStore } from "../store/counterStore";

const TotalCount = ({ username }) => {
  const count = useCounterStore((state) => state.count);

  const handleClick = () => {
    alert(`${username}, your total count is ${count}`);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 text-white px-6 py-2 rounded mt-6"
    >
      Show Total
    </button>
  );
};

export default TotalCount;
