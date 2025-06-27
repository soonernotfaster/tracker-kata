import { useState } from "react";

function WorkList() {
  const [workItem, setWorkItem] = useState([]);

  function handleClick() {
    setWorkItem([{}]);
  }

  return (
    <div>
      <button data-testid="btn-add" onClick={handleClick}></button>
      <div data-testid="work-list">
        {workItem.map((value) => (
          <div data-testid="work-item-1"></div>
        ))}
      </div>
    </div>
  );
}

export default WorkList;
