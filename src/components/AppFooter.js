import React from "react";
import { Paper, Grid } from "@material-ui/core";

function AppFooter() {
  return (
    <div
      style={{
        marginTop: "20px",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <Paper style={{ background: "#13134D" }}>
        <Grid container justify="center">
          <Grid item xs={12}>
            <h4 style={{ color: "white" }} align="center">
              Coding problem -{" "}
              <a
                href="https://www.geektrust.in/coding-problem/frontend/space"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#CCC" }}
              >
                www.geektrust.in/finding-falcone"
              </a>
            </h4>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default AppFooter;
