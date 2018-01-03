import React from "react";
import Dropzone from "react-dropzone";
import moment from "moment";
import { connect } from 'react-redux';
import  { setFileDetails } from "../actions/index.jsx";

class Upload extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      files: []
    };
  }


  onDrop = (files) => {console.log("files array", files[0].name);
  this.props.setFileDetails(files);
  };


  render() {
    let files_uploaded = null;
    let style =
    {
      "width": "100px",
      "height" : "100px"
    };
    {
      if(this.props.files!==undefined){
         files_uploaded = this.props.files.map((el, i) => {
          console.log("jjjjjjj", el[0].preview);
          return (<img src={el[0].preview} key={i} style={style} />)
        })
      }
      else{
        files_uploaded = (<p>drag and drop files here </p>);
      }

    }

    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          {files_uploaded}
        </Dropzone>

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

export default connect(mapStateToProps, { setFileDetails })(Upload);
