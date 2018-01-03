import { FILE_ARRAY, REMOVE_FILE, CROPPED_IMAGE } from "../constants/index.jsx";

export function setFileDetails(files)
{
  const action = {
    type: FILE_ARRAY,
    files
  }
  return action;
}

export function removeImage(index)
{
  const action = {
    type: REMOVE_FILE,
    index
  }
  return action;
}

export function showCroppedImage(data){

const action =
{
  type: CROPPED_IMAGE,
  src : data,
  values : data
}

}
