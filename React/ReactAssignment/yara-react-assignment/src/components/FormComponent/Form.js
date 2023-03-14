import { useState } from 'react';
import classes from './Form.module.css'

const Form = () => {
    const [regionInput, setRegionInput] = useState('')
    const [calendarName, setCalendarName] = useState('')
    const [varietyInput, setVarietyInput] = useState('')
    
    function regionInputHandler(e) {
        setRegionInput(e.target.value)
    }
    function calendarNameHandler(e) {
        setCalendarName(e.target.value)
    }
    function varietyInpytHandler(e) {
        setVarietyInput(e.target.value)
    }

    function formSubmitHandler(e) {
        e.preventDefault()
        console.log(regionInput);
        console.log(calendarName);
        console.log(varietyInput);
    }

    function resetHandler() {
        setRegionInput('')
        setCalendarName('')
        setVarietyInput('')
    }

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div>
                <div className={classes.container}>
                    <label htmlFor='region'>Region</label>
                    <input type='text' name='region' id='region-input' onChange={regionInputHandler} value={regionInput}/>
                </div>
            </div>
            <div>
                <label htmlFor='calendar-name'>Calendar name</label>
                <input type='text' name='calendarName' onChange={calendarNameHandler} value={calendarName} />
                <p id='max-char'>
                    Optional description but not including cultivation type, region & varieties. (50 characters)
                </p>
            </div>
            <div>
                <label htmlFor='variety'>Please specify the crop variety:</label>
                <input type='text' name='variety' onChange={varietyInpytHandler} value={varietyInput}/>
                <div className={classes.btnContainer}>
                <button className='btnCancel' type='button' onClick={resetHandler} >
                        Cancel
                    </button>
                    <button className='btn'>
                        Save
                    </button>
                </div>
            </div>
        </form>
        
    );
};

export default Form;
