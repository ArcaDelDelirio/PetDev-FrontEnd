import React from "react";
import ProfilePic from "./ProfilePic";
import ProfileRating from "./ProfileRating";
import ProfileInfo from "./ProfileInfo";
import ProfileSettingsButton from "./ProfileSettingsButton";
import styled from "@emotion/styled";

const StyledBody = styled.div`
  background: lightgreen;
  display: flex;
  flex-direction: column;
  width: 30vw;
  border-radius: 5px;
  box-shadow: 1px 1px 5px;
  text-align: center;
  max-width: 350px;
  min-width: 250px;
  min-height: 100%;
`;
const StyledSettings = styled.div`
  display: relative;
  margin-left: 75%;
  margin-top: 3%;
`;
const ProfileBody = () => (
  <StyledBody>
    <StyledSettings>
      <ProfileSettingsButton />
    </StyledSettings>
    <ProfilePic />
    <ProfileRating />
    <ProfileInfo />
  </StyledBody>
);

export default ProfileBody;
