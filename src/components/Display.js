import { useSelector } from "react-redux";

const Display = () => {
  const list = useSelector((state) => state);
  console.log(list.robot["isPlaced"]);
  if (!list.robot["isPlaced"]) return <div>Nothing yet</div>;
  else
    return (
      <div>
        {" "}
        <label>X:Y</label> {" = "}
        {list.robot["facing"]["x"]}:{list.robot["facing"]["y"]}
      </div>
    );
};
export default Display;
