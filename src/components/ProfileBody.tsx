import React from "react";
import { Segment } from "semantic-ui-react";
import ProfilePic from "./ProfilePic";
import ProfileRating from "./ProfileRating";
import ProfileInfo from "./ProfileInfo";
const ProfileBody = () => (
  <Segment compact>
    <ProfilePic />
    <ProfileRating />
    <ProfileInfo />
  </Segment>
);

export default ProfileBody;
