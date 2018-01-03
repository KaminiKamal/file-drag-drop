import { FILE_ARRAY } from "../constants/index.jsx";

export function setFileDetails(files) {
  const action = {
    type: FILE_ARRAY,
    files
  }
  return action;
}
