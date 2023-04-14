import { useState } from "react"

const Example = () => {
  let [val, setVal] = useState();
  // 分割代入を用いて使用する
  return (
    <>
      <input
      type="text"
      onChange={(e) => {
        setVal( e.target.value)
      }}/> = {val}
    </>
  );
};

export default Example;
