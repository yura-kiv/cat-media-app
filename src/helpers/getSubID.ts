import { v4 as uuidv4 } from "uuid";

export function getSubID() {
  let subIDValue = localStorage.getItem("sub-id");
  if (!subIDValue) {
    subIDValue = uuidv4();
    localStorage.setItem("sub-id", subIDValue);
  }

  return subIDValue;
}
