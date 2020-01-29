import React from 'react';
import styled from 'styled-components';
import SideBar from '../components/sidebar.js';
import { Container } from '@material-ui/core';

const HomeContainer = styled(Container)`
  font-family: roboto;
`;

class HomePage extends React.Component {
    render() {
        return (
            <HomeContainer max-width='xs'>
                <SideBar/>
            </HomeContainer>
        )
    }
}

export default HomePage;