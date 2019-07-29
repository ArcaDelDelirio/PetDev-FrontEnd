import React from "react";
import useravatar from "../img/useravatar.jpeg";
import styled from "@emotion/styled";
import { Button, Card, Image, Icon } from "semantic-ui-react";

const ContainerCard = styled.div`
  background: white;
  color: white;
`;
const description = [
  "Amy is a violinist with 2 years experience in the wedding industry.",
  "She enjoys the outdoors and currently resides in upstate New York."
].join(" ");
const MapProfile = () => (
  <ContainerCard>
    <Card>
      <Card.Content header="About Amy" />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name="user" />4 Friends
      </Card.Content>
    </Card>
  </ContainerCard>
);
export default MapProfile;
