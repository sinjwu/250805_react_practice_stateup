import { useState } from "react";
import E from "./E";

const B = () => {
  const [count, setCount] = useState(0);
  const decrease = () => setCount(count - 1);
  return (
    <div className="bg-blue-400 m-12 p-12">
      B <E decrease={decrease} />
    </div>
  );
};
export default B;
