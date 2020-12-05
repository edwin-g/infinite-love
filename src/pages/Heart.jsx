// React
import React, { Component } from "react";
// Material UI
import Typography from "@material-ui/core/Typography";

class Heart extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    const heartsElt =  this.myRef.current
    this.interval = setInterval(() => {
      heartsElt.innerHTML += "❤️";
    }, 100);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <React-fragment>
        <Typography variant="h1">Hearts</Typography>
        <div className="hearts" ref={this.myRef}></div>
      </React-fragment>
    );
  }
}

export default Heart;
