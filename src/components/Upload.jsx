import React from "react";
import Dropzone from "react-dropzone";
import moment from "moment";
import { connect } from 'react-redux';
import  { setFileDetails, removeImage } from "../actions/index.jsx";

class Upload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      files: []
    };
  }


  onDrop = (files, rejectedFiles) => {console.log("files array", files[0].name);console.log("rejected", rejectedFiles);
  this.props.setFileDetails(files);
  };

  removeImages(data, el, index){console.log("inside remove", el);
     this.props.removeImage(el);
  }
  render() {
  let mydropzone = {
          maxFiles: 1,
          maxFilesize: 10, //mb
          acceptedFiles: 'image/*',
          addRemoveLinks: true,
          autoProcessQueue: false,// used for stopping auto processing uploads
          autoDiscover: false,
          paramName: 'prod_pic',
          previewsContainer: '.img-wrap', //used for specifying the previews div
          clickable: true
  }
    let files_uploaded = null;
    let style =
    {
      "width": "100px",
      "height" : "20px",
      "border" : "2px solid gray"
    };
    let image_style = {
      "width": "100px",
      "height" : "100px",
      "border" : "2px solid gray"
    }
    {
      if(this.props.files!==undefined){
         files_uploaded = this.props.files.map((el, i) => {
          console.log("jjjjjjj", el[0].type.substring(0,5));
              return (<div className="img-wrap" key={i}>
                    <span className="close"  onClick={this.removeImages.bind(this, el, i)}>&times;</span>
                    <img src={el[0].preview}  style={image_style} />
                    </div>);
        });
      }
      else{
        files_uploaded = (<p>drag and drop files here </p>);
      }

    }

    return (
      <div>
        <Dropzone onDrop={this.onDrop} style={style}>
          <span>here</span>
        </Dropzone>
        <div>
          {files_uploaded}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state)
{
 const { files } =
 {
   "files" : state
 };console.log("state, props", state, files);

  return{
	files
  }
}

export default connect(mapStateToProps, { setFileDetails, removeImage })(Upload);
