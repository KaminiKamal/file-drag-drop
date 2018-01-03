import { FILE_ARRAY } from "../constants/index.jsx";

const file_array = (action) => {
  let { files } = action;
  return {
    files
  }
}

export default (state = [], action) => {
  let file_list = null;
  switch(action.type) {

			case  FILE_ARRAY:
        file_list = [...state, action.files];console.log("state-->", state);console.log("files array ", action.files);
				return file_list;

    default:
      return state;
  }
}
