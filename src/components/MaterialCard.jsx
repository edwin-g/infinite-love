// React
import React from "react";
// Router
import { withRouter } from 'react-router-dom';
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "15rem"
  },
  emoji: {
    fontSize: '5rem',
  },
});

const ComingSoon = (props) => {
  const isComingSoon = props.isComingSoon;
  if(isComingSoon != "/heart"){
    return (<Typography variant="body1" gutterBottom>
      (Coming soon)
    </Typography>)
  }
  return null;
}

const MaterialCard = (card) => {
  const classes = useStyles();
  return (
    <Card onClick={()=>{card.history.push(card.link)}}>
      <CardActionArea>
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

export default withRouter(MaterialCard);
