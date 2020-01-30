import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/sidebar.js';
import { Container } from '@material-ui/core';

const HomeContainer = styled(Container)`
  font-family: roboto;
`;

class HomePage extends React.Component {
    goToUserUpdate = () => {
        const { history } = this.props;
        history.push('/usermain');
    }

    render() {
        return (
            <HomeContainer max-width='xs'>
                <SideBar/>
                <button onClick={this.goToUserUpdate}>Press</button>
            </HomeContainer>
        )
    }
}

export default HomePage;