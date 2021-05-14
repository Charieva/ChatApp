import React from 'react';
import propTypes from 'prop-types';

const Sidebar = ({users}) => {

    let usersName = users.map(user => (
        <li key={user.id}>{user.name}</li>
    ))
    
    return (
        <aside id='sidebar' className='sidebar'>
            <ul>
                { usersName }
            </ul>
        </aside>
    )
}

Sidebar.propTypes = {
    users: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            name: propTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default Sidebar;
