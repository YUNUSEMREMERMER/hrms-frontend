import React from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Candidates from "../pages/Candidates";
import Employers from "../pages/Employers";
import JobPosts from "../pages/JobPosts";
import { Route } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>

          <Grid.Column width={12}>
            <Route exact path="/"  />
            <Route exact path="/candidates" component={Candidates} />
            <Route exact path="/employers" component={Employers} />
            <Route exact path="/jobposts" component={JobPosts} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
