import React from "react";
import { showFormattedDate } from "../utils";

function ItemContent({ title, body, createdAt }) {
  return (
    <div>
      <h3 className="text-2xl font-bold ">{title}</h3>
      <p className="text-[#795757]">{showFormattedDate(createdAt)}</p>
      <p className="pb-5 leading-5">{body}</p>
    </div>
  );
}

export default ItemContent;
