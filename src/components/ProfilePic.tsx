import React from "react";
import { Image } from "semantic-ui-react";
import useravatar from "../img/useravatar.jpeg";
import styled from "@emotion/styled";

const ImgContainer = styled.div`
  margin: auto;
  border: 5px solid grey;
  border-radius: 100%;
`;

const ProfileImage = () => (
  <ImgContainer>
    <Image src={useravatar} circular size="small" />
  </ImgContainer>
);

export default ProfileImage;
