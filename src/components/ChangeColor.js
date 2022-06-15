import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../redux/theme";

function ChangeColor() {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");

  useEffect(() => {
    dispatch(changeColor(color));
  }, [color]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button>CHANGE COLOR</button>
    </div>
  );
}

export default ChangeColor;
