import React from "react";

type TodoItemsProps = {
  id: string;
  title: string;
  complete: boolean;
};
const TodoItem = ({ id, title, complete }: TodoItemsProps) => {
  return (
    <li className="flex gap-1 items-center">
      <input type="checkbox" id={id} className="cursor-pointer peer" />
      <label htmlFor={id} className="peer-checked:line-through">
        {title}
      </label>
    </li>
  );
};

export default TodoItem;
