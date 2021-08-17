import React from "react";
import { Grid } from "semantic-ui-react";
import Sidebar from "./Sidebar";
import Candidates from "../pages/Candidates";
import Employers from "../pages/Employers";
export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>

          <Grid.Column width={12}>
            <Candidates />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
