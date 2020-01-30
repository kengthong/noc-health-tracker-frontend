import React from 'react';

import Teams from './teams';

class TeamsInCharge extends React.Component {
    render() {
        return (
            <div>
                {/* Search */}
                <div>
                    <input placeholder="Search" style={{border: '1px solid #e8e8e8', borderRadius: '4px', width: '80%', paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#e9e9e9', paddingLeft: '20px'}} />
                </div>

                <div>
                    <Teams teams={this.state.teams} />
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