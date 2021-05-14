import React from 'react';
import propTypes from 'prop-types';

const AddMessage = (props) => {
    let input 

    return (
        <section className='new-message'>
            <input
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        props.dispatch(input.value, 'Me')
                        input.value = ''
                    }
                }}
                type="text"
                ref = {(node) => {
                    input = node
                }}
            />
            <button>Send Messege</button>
        </section>
    )
}

AddMessage.propTypes = {
    dispatch: propTypes.func.isRequired
}

export default AddMessage;