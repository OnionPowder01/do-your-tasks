import React, { useState } from "react";

export const HandleUpdateTaskClick = (open, setTaskName, item, setItemId) => {
  open();
  setTaskName(item.content);
  setItemId(item.id);
  console.log(item.id);
};
