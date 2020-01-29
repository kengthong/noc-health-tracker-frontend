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
                HOME PAGE
            </HomeContainer>
        )
    }
}
// const HomePage = () => {
//     return(
//         <div>
//             This is a home page
//         </div>
//     )
// }
export default HomePage;