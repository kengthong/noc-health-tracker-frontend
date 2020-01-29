import React from 'react';
import { Container } from '@material-ui/core';

class GroupDetailPage extends React.Component {
    render() {
        return (
            <Container max-width='xs'>
                <h1>Group Detail</h1>
                <div>
                    <h2>NOC SH</h2>
                    <table>
                        <tr><td>Feeling Well</td><td>10</td></tr>
                        <tr><td>Not Feeling Well</td><td>5</td></tr>
                        <tr><td>Yet to Respond</td><td>2</td></tr>
                    </table>
                    <button>Export as CSV</button><br/>
                    <table>
                        <thead>
                            <tr><th>Name</th><th>Fever</th><th>Cough</th><th>Status</th><th>Updated Time</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Jack</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>Eugene</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>Marcus</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>JunXiang</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>KengThong</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>JitWei</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                            <tr><td>David</td><td>1</td><td>1</td><td>0</td><td>dd/mm/yyyy hh:mm:ss</td></tr>
                        </tbody>
                    </table>
                    <br />

                </div>
            </Container>
        )
    }
}
export default GroupDetailPage;