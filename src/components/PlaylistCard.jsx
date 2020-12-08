// React
import React from "react";
// Router
import { withRouter } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    borderRadius: "1rem",
  },
  cardActionArea: {
    position: "relative",
    height: "15rem",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      zIndex: 1,
      width: "100%",
      height: "100%",
      background: "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#ffffff",
  },
});

const PlaylistCard = (card) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea
        href={card.link}
        target="_blank"
        className={classes.cardActionArea}
      >
        <CardMedia
          component="img"
          alt={card.name}
          image={process.env.PUBLIC_URL + card.img}
          title={card.name}
        />
        <Box className={classes.content}>
          <Typography component="h2" variant="h4">
            {card.name}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(PlaylistCard);
