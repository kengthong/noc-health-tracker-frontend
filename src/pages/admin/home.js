import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SideBar from '../../components/sidebar';

import TeamsInCharge from '../../components/teams-in-charge';
import groupViewPage from './groupview';

const AdminHomeContainer = styled(Container)`
  font-family: roboto;
`;


class AdminHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    handleChangeActiveGroup = () => {
        if (this.state.activeGroup) {
            this.setState({
                activeGroup: null
            })
        } else { 
            this.setState({
                activeGroup: { 
                    name: "Class-3A",
                    organisation: "Tembusu Secondary School"
                }
            })
        }
    }

    render() {
        const {activeGroup} = this.state;
        return (
            <AdminHomeContainer max-width='xs'>
                <SideBar/>
                { !activeGroup && <TeamsInCharge /> }
                <button onClick={this.handleChangeActiveGroup}>View/Unview Group</button>
                { activeGroup && <groupViewPage group={activeGroup}/> }
            </AdminHomeContainer>
        )
    }
}

export default AdminHomePage;