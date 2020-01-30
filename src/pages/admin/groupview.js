import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SideBar from '../../components/sidebar';

const GroupViewContainer = styled(Container)`
  font-family: roboto;
`;

/**
 * To call, <groupViewPage group={group}/>
 */
export default class groupViewPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        
      };
  }

  componentDidMount = () => {};

  updateStatus = status => {
    console.log(status);
    this.setState({
      status: status,
    })
  }

  render() {
    const { group } = this.props;
    return (
      <GroupViewContainer max-width='xs'>
        <SideBar/>
        Group View
       </GroupViewContainer>
    );
  }
}