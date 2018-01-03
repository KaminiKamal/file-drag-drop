import { FILE_ARRAY, REMOVE_FILE, CROPPED_IMAGE } from "../constants/index.jsx";

const file_array = (action) => {
  let { files } = action;
  return {
    files
  }
}

const removeById = (state = [], index) => {
  var file_array = state.map((el, i) =>
  {
      if(i!==index){
        return el;
      }

  });

   var file_array_new = file_array.filter((el, i) => el!==undefined);
   return file_array_new;
}

export default (state = [], action) => {
  let file_list = null;
  switch(action.type) {

			case  FILE_ARRAY:
        file_list = [...state, action.files];
				return file_list;

     case REMOVE_FILE:
     file_list = removeById(state, action.index)
       return file_list;

     case CROPPED_IMAGE:
     const {src, values} = action;
     const cropped_image = {
     "src" : src,
     "values": values
     }
     return cropped_image;

    default:
      return state;
  }
}
