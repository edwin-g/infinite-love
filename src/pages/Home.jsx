// React
import React, { Component   } from "react";
// Material UI
import Grid from '@material-ui/core/Grid';
// Components
import MaterialCard from "../components/MaterialCard";

class Home extends Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}><MaterialCard name="Heart" emoji="❤️" link="/heart"/></Grid>
        <Grid item xs={12} md={6}><MaterialCard name="Flowers" emoji="💐" link="/"/></Grid>
        <Grid item xs={12} md={6}><MaterialCard name="Sentences" emoji="💬" link="/"/></Grid>
        <Grid item xs={12} md={6}><MaterialCard name="Playlists" emoji="🎵" link="/"/></Grid>
      </Grid>
    );
  }
}

export default Home;
