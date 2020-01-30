import React from 'react';

class Teams extends React.Component {
    render() {
        let teams = this.props.teams || [];
        return (
            <div className="flex-row" style={{width: '100%'}}>
                {teams.map( (t,i) => {
                    return (
                        <div style={{width: '50%'}}>
                            <div>
                                <img src="https://picsum.photos/200/300" />
                            </div>
                            <div>
                                {t.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
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

export default Teams;