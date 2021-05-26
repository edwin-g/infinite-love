// React
import React from "react";
// Router
import { withRouter } from 'react-router-dom';
// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: 'pointer',
  },
}));

const Header = (card: any) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
        <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className={classes.title} onClick={()=>{card.history.push("/")}}>
              Infinite Love
            </Typography>
        </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
