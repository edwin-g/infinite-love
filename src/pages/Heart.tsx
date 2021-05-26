// React
import React, { Component } from "react";
// Material UI
import Typography from "@material-ui/core/Typography";
import { TapAndPlayTwoTone } from "@material-ui/icons";

class Heart extends Component {
  constructor(props: any) {
    super(props);
  }
  
  interval: any; 
  
  myRef: any = React.createRef();

  componentDidMount() {
    const heartsElt: any =  this.myRef.current
    this.interval = setInterval(() => {
      heartsElt.innerHTML += "❤️";
    }, 100);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    return (
      <>
        <Typography variant="h1">Hearts</Typography>
        <div className="hearts" ref={this.myRef}></div>
      </>
    );
  }
}

export default Heart;
