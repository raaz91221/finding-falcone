import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
  Link,
} from "@material-ui/core";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  headerBg: {
    background: "#13134D",
  },
  homeLink: {
    color: "#EFEFEF",
  },
});

class AppHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.headerBg}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Finding Falcone!
            </Typography>
            <Link
              href="http://www.geektrust.in/"
              color="inherit"
              className={classes.homeLink}
            >
              GeekTrust Home
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(withStyles(styles), withRouter)(AppHeader);
