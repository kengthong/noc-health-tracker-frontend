import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import SideBar from '../../components/sidebar';

import TeamsInCharge from '../../components/teams-in-charge';
import MembersAtRisk from '../../components/admin/memberatrisk';
import GroupViewPage from './groupview';

const AdminHomeContainer = styled(Container)`
  font-family: roboto;
`;


class AdminHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAtRiskMember: false
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
                },
                isAtRiskMember: false,
            })
        }
    }

    handleIsAtRiskMember = () => {
        const {isAtRiskMember} = this.state;
        this.setState({
            isAtRiskMember: !isAtRiskMember,
            activeGroup: null
        })
    }

    handleMainPage = () => {
        this.setState({
            activeGroup: null,
            isAtRiskMember: false,
        })
    }

    render() {
        const { activeGroup, isAtRiskMember } = this.state;
        return (
            <AdminHomeContainer max-width='xs'>
                <SideBar/>
                <button onClick={this.handleMainPage}>Main Page</button>
                <button onClick={this.handleChangeActiveGroup}>View/Unview Group</button>
                <button onClick={this.handleIsAtRiskMember}>View Risky Groups</button>
                { !activeGroup && !isAtRiskMember && <TeamsInCharge /> }
                { activeGroup && !isAtRiskMember && <GroupViewPage group={activeGroup}/> }
                { isAtRiskMember && !activeGroup && <MembersAtRisk /> }
            </AdminHomeContainer>
        )
    }
}

export default AdminHomePage;