import React from 'react';
import { Container } from '@material-ui/core';
import SideBar from '../components/sidebar.js';

class CreateGroupPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    generateInviteCode() {

    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Container max-width='xs'>
                <SideBar></SideBar>
                <h1>Create New Group</h1>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Group Name:</label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} /><br/><br/>
                        
                        <table>
                            <thead><button>Invite Users</button><br/>
                                <tr><th>Email</th><th>Existing User?</th><th>Name</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Jack@test.com</td><td>1</td><td>Jack</td></tr>
                                <tr><td>Eugene@test.com</td><td>1</td><td>Eugene</td></tr>
                                <tr><td>Marcus@test.com</td><td>1</td><td>Marcus</td></tr>
                                <tr><td>JunXiang@test.com</td><td>1</td><td>JunXiang</td></tr>
                                <tr><td>KengThong@test.com</td><td>0</td><td></td></tr>
                                <tr><td>JitWei@test.com</td><td>0</td><td></td></tr>
                                <tr><td>David@test.com</td><td>0</td><td></td></tr>
                            </tbody>
                        </table>
                        <br/>
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </Container>
        )
    }
}
export default CreateGroupPage;