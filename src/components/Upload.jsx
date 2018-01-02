import React from "react";
import Dropzone from "react-dropzone";
import moment from "moment";

class Upload extends React.Component {
  state = {
    name: "",
    file: null
  };

  onDrop = async files => {
    this.setState({ file: files[0] });console.log("fff", this.state);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
      </div>
    );
  }
}


export default Upload;
