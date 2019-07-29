import React from "react";
import ProfileBody from "./components/ProfileBody";
import ProfileMap from "./components/ProfileMap";
import { Grid, Segment } from "semantic-ui-react";

import styled from "@emotion/styled";

const Container = styled.div`
  display: inline;
`;
const App: React.FC = () => {
  return (
    /* 
    <Container>
      <ProfileBody />
      <ProfileMap />
    </Container> */
    <Grid columns={2} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <ProfileBody />
        </Grid.Column>
        <Grid.Column>
          <ProfileMap />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default App;
