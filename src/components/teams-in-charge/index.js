import React from 'react';
import { Avatar } from '@material-ui/core';

import Teams from './teams';
import CreateGroupButton from './button';

class TeamsInCharge extends React.Component {
    render() {
        return (
            <div style={{maxWidth: '90%', marginLeft: 'auto', marginRight: 'auto'}}>
                <div style={{marginTop: '40px'}}>
                    <Avatar style={{width: '80px', height: '80px'}} src="data:image/jpeg;base64,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" />
                </div>

                <div>
                    <h2>
                        Teams In Charge
                    </h2>

                    <h3>
                        Tembusu Secondary School
                    </h3>
                </div>
                {/* Search */}
                <div>
                    <input placeholder="Search" style={{border: '1px solid #e8e8e8', borderRadius: '4px', width: '80%', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e9e9e9', paddingLeft: '20px'}} />
                </div>

                <div style={{marginTop: '20px'}}>
                    <Teams teams={this.state.teams} />
                </div>

                <div>
                    <CreateGroupButton />
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            teams: [
                {
                    name: 'NOC BJ'
                }, {
                    name: 'NOC SH'
                },{
                    name: 'NOC Shen Zhen'
                }
            ],
            students: [
                {
                    name: 'bj1',
                    team: 'Beijing',
                    teamId: 1,
                    status: 'ok'
                },{
                    name: 'sh1',
                    team: 'Shanghai',
                    teamId: 2,
                    status: 'sick'
                },{
                    name: 'bj2',
                    team: 'Beijing',
                    teamId: 1,
                    status: 'ok'
                },
            ]
        }
    }

    componentWillMount() {
        let students = this.state.students.sort((a,b) => (a.teamId > b.teamId) ? 1: -1)
        this.setState({
            students
        })
    }
}

export default TeamsInCharge;