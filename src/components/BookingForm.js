import React, {useState} from 'react';

const BookingForm = (props) =>{
    const [date,setDate] = useState("");
    const [times,setTimes] = useState("");
    const [guests,setGuests] = useState("");
    const [ocassion,setOcassion] = useState("");

    const handleChange = (e) =>{
        setDate(e)
        props.dispatch(e)
    }

    const handleSumbit = (e) => {
        e.preventDefault()
        props.submitForm(e);
    }
    return(
        <header className='formfield'>
            <section>
                <form onSubmit={handleSumbit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input id="book-date" type="date" onChange={(e) => handleChange(e.target.value)} value={date} required></input>
                        </div>
                    
                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=""> Select a Time </option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {
                                        return <option key={availableTimes}>{availableTimes}</option>
                                    })
                                }
                            </select>
                        </div>

                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id="book-guests" min="1" max="5" value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='book-ocassion'>Ocassion:</label>
                            <select id="book-ocassion" value={ocassion} onChange={(e) => setOcassion(e.target.value)} key={ocassion}>
                                <option > Birthday </option>
                                <option > Weeding </option>
                                <option > Anniversary </option>
                            </select>
                        </div>

                        <div className='btnReceive'>
                            <input aria-label='On Click' type="submit" value={"Make your Reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;