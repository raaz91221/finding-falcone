import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";
import { Grid, Paper, withStyles, Button } from "@material-ui/core";
import PropTypes from "prop-types";

const styles = () => ({
  root: {
    height: "inherit",
    overflow: "auto",
  },
});

class MissionReport extends Component {
  render() {
    const { classes, totalSearchTime, planetFound, searchStatus, token } =
      this.props;
    const successBg = "linear-gradient(270deg, #B1FB28  0%, #00E2A6  100%)";
    const failureBg = "linear-gradient(270deg, red  0%, orange  100%)";
    return (
      <div style={{ height: "inherit", marginTop: "20px" }}>
        {token !== "" ? (
          <Paper
            elevation={0}
            square
            className={classes.root}
            style={{
              background: searchStatus === "success" ? successBg : failureBg,
            }}
          >
            {searchStatus === "success" ? (
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                  <h2 style={{ color: "white" }} align="center">
                    Success! Congratulations on Finding Falcone! King Shan is
                    mighty pleased!
                  </h2>
                </Grid>
                <Grid item xs={12}>
                  <h3 style={{ color: "white" }} align="center">
                    Time Taken : {totalSearchTime}
                  </h3>
                </Grid>
                <Grid item xs={12}>
                  <h3 style={{ color: "white" }} align="center">
                    Planet found : {planetFound}
                  </h3>
                </Grid>
              </Grid>
            ) : (
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                  <h2 style={{ color: "white" }} align="center">
                    Failure! Unable to locate Falcone!
                  </h2>
                </Grid>
              </Grid>
            )}
            <Grid container justify="center">
              <Grid
                item
                xs={6}
                style={{
                  marginBottom: "50px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="primary">
                  <Link
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Start Again
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          this.props.history.push("/")
        )}
      </div>
    );
  }
}

MissionReport.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  token: PropTypes.string.isRequired,
  totalSearchTime: PropTypes.string.isRequired,
  planetFound: PropTypes.string.isRequired,
  searchStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  totalSearchTime: state.timeReducer.totalSearchTime,
  planetFound: state.mainReducer.findFalconeResult.planet_name,
  searchStatus: state.mainReducer.findFalconeResult.status,
});

export default connect(mapStateToProps)(
  compose(withStyles(styles), withRouter)(MissionReport)
);
