import React from 'react';
import {Link} from 'react-router-dom';

const CreateGroupButton = () => {
    return (
        <div style={{marginTop: '20px'}}>
            <Link to="/createGroup">
                <button style={{border: '1px solid #e8e8e8', padding: '12px 24px', borderRadius: '16px', background: 'black', color: 'white'}}>
                    CREATE NEW GROUP
                </button>
            </Link>
        </div>
    )
}

export default CreateGroupButton;