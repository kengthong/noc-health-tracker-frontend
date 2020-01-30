import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SideBar from '../../components/sidebar';
import UserStatusForm from './components/userStatus';
import UserUpdateForm from './components/userUpdateForm';

const UserMainContainer = styled(Container)`
  font-family: roboto;
`;

export default class userMain extends React.Component {
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
    const { status } = this.state;
    return (
      <UserMainContainer max-width='xs'>
        <SideBar/>
        {!status && <UserStatusForm updateStatus={this.updateStatus}/>}
        {status && 
          <UserUpdateForm status={status}/>
        } 
       </UserMainContainer>
    );
  }
}