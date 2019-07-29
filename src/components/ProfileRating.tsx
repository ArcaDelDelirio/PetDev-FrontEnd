import React, { Component } from "react";
import { Rating } from "semantic-ui-react";
import styled from "@emotion/styled";

const RatingContainer = styled.div``;

export default class ProfileRating extends Component {
  state = { rating: 3 };

  handleChange = e => this.setState({ rating: e.target.value });

  render() {
    /*  const { rating } = this.state; */

    return (
      <RatingContainer>
        <Rating icon="star" rating={this.state.rating} maxRating={5} />
      </RatingContainer>
    );
  }
}
