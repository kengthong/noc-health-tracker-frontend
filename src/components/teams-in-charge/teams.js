import React from 'react';

class Teams extends React.Component {
    render() {
        let teams = this.props.teams || [];
        return (
            <div className="flex-row" style={{width: '100%', flexWrap: 'wrap', justifyContent: 'space-around'}}>
                {teams.map( (t,i) => {
                    return (
                        <div className="flex-row" style={{width: '30%',position: 'relative', alignItems: 'flex-end', minHeight: '130px', border: '1px solid #e8e8e8'}}>
                            <div className="flex-row" style={{alignItems: 'center', height: '100%'}}>
                                <img style={{width: '100%'}} src={`https://picsum.photos/id/${i*i*i}/100/120/?blur=2`} alt="haha"/>
                            </div>
                            <div style={{position: 'absolute', height: '60px', backgroundColor: 'rgba(190,190,190,0.8', width: '100%'}}>    
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