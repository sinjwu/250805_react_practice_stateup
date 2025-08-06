import { useCount } from "../context/CountContext";

const D = () => {
  const { increase } = useCount();
  return (
    <div className="bg-orange-400 m-12 p-12">
      D <button onClick={increase}>증가</button>
    </div>
  );
};
export default D;
