import { connect } from 'react-redux';
import AddMessageComponnent from '../components/AddMessage';
import { AddMessage } from '../action';

const mapDispatchToProps = (dispatch) => {
    dispatch: (message, author) => {
        dispatch(AddMessage(message, author))
    }
};

export const AddMessage = connect(() => 
    ({}), mapDispatchToProps)(AddMessageComponent);