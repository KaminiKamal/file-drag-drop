import { FILE_ARRAY, REMOVE_FILE } from "../constants/index.jsx";

const file_array = (action) => {
  let { files } = action;
  return {
    files
  }
}

const removeById = (state = [], index) => {
  var file_array = state.map((el, i) => {console.log("kdbcke", el, i);
      if(i!==index){
        return el;
      }

  });console.log("incich", file_array);
   var file_array_new = file_array.filter((el, i) => el!==undefined);
  ;console.log("incich11", file_array_new);
  return file_array_new;
}

export default (state = [], action) => {
  let file_list = null;
  switch(action.type) {

			case  FILE_ARRAY:
        file_list = [...state, action.files];console.log("state-->", state);console.log("files array ", action.files);
				return file_list;

     case REMOVE_FILE:console.log("oahdiohe", action.index);
     console.log("remove _file", removeById(state, action.index));
     file_list = removeById(state, action.index)
       return file_list;

    default:
      return state;
  }
}
