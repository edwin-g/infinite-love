// React
import React from "react";
// Router
import { withRouter } from "react-router-dom";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    height: "15rem",
    borderRadius: "1rem",
  },
  cardActionArea: {
    height: "100%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emoji: {
    fontSize: "5rem",
  },
});

const ComingSoon = (props) => {
  const isComingSoon = props.isComingSoon;
  if (isComingSoon != "/heart" && isComingSoon != "/playlists") {
    return (
      <Typography variant="body1" gutterBottom>
        (Coming soon)
      </Typography>
    );
  }
  return null;
};

const HomeCard = (card) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.card}
      onClick={() => {
        card.history.push(card.link);
      }}
    >
      <CardActionArea className={classes.cardActionArea}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.emoji}>{card.emoji}</Typography>
          <Typography component="h2" variant="h4">
            {card.name}
          </Typography>
          <ComingSoon isComingSoon={card.link} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(HomeCard);
