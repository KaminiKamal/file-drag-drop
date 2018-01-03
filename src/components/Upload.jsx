import React from "react";
import Dropzone from "react-dropzone";
import moment from "moment";
import { connect } from 'react-redux';
import  { setFileDetails, removeImage, showCroppedImage } from "../actions/index.jsx";
import {Cropper} from 'react-image-cropper';

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



  cropImage(data, el, index){
    let src = this.refs.cropper.crop();console.log("src", src);
    let values = this.refs.cropper.values();console.log("values", values);
  //  this.props.showCroppedImage({"src": srcvalues});
  }

  render() {

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
          // console.log("jjjjjjj", el[0].type.substring(0,5));
              return (<div className="img-wrap" key={i}>
                    <span className="close"  onClick={this.removeImages.bind(this, el, i)}>&times;</span>

                    <Cropper src={el[0].preview} ref="cropper" style={image_style}/>
                    <button type="button" onClick={this.cropImage.bind(this,el, i)}> crop</button>
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

export default connect(mapStateToProps, { setFileDetails, removeImage, showCroppedImage })(Upload);
