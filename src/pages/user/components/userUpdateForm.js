import React from 'react';
import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';

import CustomizedSlider from '../../../components/slider';

const ActionableGroup = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding:20px;
`;

const StyledTitle = styled.text`
  font-weight: 900;
  font-size: xx-large;
  padding-bottom: 20px;
`;

export default class userUpdateForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          temperature: 36.5,
      };
  }

  componentDidMount = () => {};

  updateSliderValue = value => {
      this.setState({
          temperature: value
      })
  }

  render() {
    const { status } = this.props;
    const { temperature } = this.state;

    return (
        <ActionableGroup>
            <StyledTitle>A quick update...</StyledTitle>
            <Typography variant="h5" >
                Temperature: {temperature}°C
            </Typography>
            <CustomizedSlider
            updateSliderValue={this.updateSliderValue}
            />
        </ActionableGroup>
    );
  }
}