import React from "react";

export default function Box({ title }) {
  const [name, setName] = useState("JEEVASTATE");

  return (
    <div>
      <div>Box3</div>
      <div>{title}</div>
      <div>{name}</div>
    </div>
  );
}
