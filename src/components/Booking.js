import React from 'react';
import BookingForm from './BookingForm';
import {useNavigate} from 'react-router-dom';

// const Booking = (props) =>{
//     return(
//         <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm = {props.submitForm}/>
//     )
// }

// En el componente Booking

const Booking = (props) => {
    const navigate = useNavigate();

    function submitForm(formData) {
        if (props.submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={submitForm} />
    );
}

export default Booking