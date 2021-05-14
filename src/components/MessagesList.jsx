import React from 'react';
import propTypes from 'prop-types';
import Message from './Message';

const MessagesList = ({messages}) => {

    let messageList = () => {
        if (messages) {
            messageList = messages.map(message => {
                return <Message key={message.id} {...message}/>
            })       
        }
    }

    return (
        <section className='messages-list'>
            <ul>
                { messageList }
            </ul>
        </section>
    )
}

MessagesList.propTypes = {
    messages: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            message: propTypes.string.isRequired,
            author: propTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default MessagesList;