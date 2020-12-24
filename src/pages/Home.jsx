// React
import React, { Component } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// Spring
import { useSpring, animated } from "react-spring";
// Axios
import axios from "axios";
// Components
import HomeCard from "../components/HomeCard";

// Test de react-spring : https://www.react-spring.io/
function Title() {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.div style={props}>Home</animated.div>;
}
class Home extends Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((result) => {
      const persons = result.data;
      this.setState({ persons });
      console.log(this.state);
    });
  }

  render() {
    return (
      <>
        <Typography variant="h1" color="initial">
          <Title></Title>
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <HomeCard name="Heart" emoji="❤️" link="/heart" />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCard name="Flowers" emoji="💐" link="/flowers" />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCard name="Sentences" emoji="💬" link="/" />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeCard name="Playlists" emoji="🎵" link="/playlists" />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default Home;
