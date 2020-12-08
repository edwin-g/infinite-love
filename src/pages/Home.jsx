// React
import React, { Component } from "react";
// Material UI
import Grid from "@material-ui/core/Grid";
// Components
import HomeCard from "../components/HomeCard";

class Home extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <HomeCard name="Heart" emoji="❤️" link="/heart" />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard name="Flowers" emoji="💐" link="/" />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard name="Sentences" emoji="💬" link="/" />
        </Grid>
        <Grid item xs={12} md={6}>
          <HomeCard name="Playlists" emoji="🎵" link="/playlists" />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
