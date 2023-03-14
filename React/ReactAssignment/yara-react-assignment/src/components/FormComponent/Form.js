import { useState } from 'react';
import classes from './Form.module.css';

const Form = () => {
    const [regionInput, setRegionInput] = useState('');
    const [regionHasError, setRegionInputError] = useState(false);
    const [calendarName, setCalendarName] = useState('');
    const [calendarHasError, setCalendarError] = useState(false);
    const [varietyInput, setVarietyInput] = useState('');
    const [varietyHasError, setVarietyError] = useState(false);

    function regionInputHandler(e) {
        setRegionInput(e.target.value);
    }
    function calendarNameHandler(e) {
        setCalendarName(e.target.value);
    }
    function varietyInpytHandler(e) {
        setVarietyInput(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        if (!regionInput) {
            setRegionInputError(true);
            return;
        }
        if (!calendarName) {
            setCalendarError(true);
            return;
        }
        if (!varietyInput) {
            setVarietyError(true);
            return;
        }
        console.log(regionInput);
        console.log(calendarName);
        console.log(varietyInput);
        setRegionInputError(false);
        setCalendarError(false);
        setVarietyInput(false);
    }

    function resetHandler() {
        setRegionInput('');
        setCalendarName('');
        setVarietyInput('');
    }

    const regionInputClass = !regionHasError ? classes.input : classes.error;
    const calendarInputClass = !calendarHasError ? classes.input : classes.error;
    const varietyInputClass = !varietyHasError ? classes.input : classes.error;

    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div>
                <div className={classes.container}>
                    <label htmlFor='region'>Region</label>
                    <input
                        className={regionInputClass}
                        type='text'
                        name='region'
                        id='region-input'
                        onChange={regionInputHandler}
                        value={regionInput}
                    />
                    {regionHasError && <p className={classes.errorText}>Input is empty</p>}
                </div>
            </div>
            <div className={classes.container}>
                <label htmlFor='calendar-name'>Calendar name</label>
                <input
                    className={calendarInputClass}
                    type='text'
                    name='calendarName'
                    onChange={calendarNameHandler}
                    value={calendarName}
                />
                {calendarHasError && <p className={classes.errorText}>Input is empty</p>}
                <p id='max-char'>
                    Optional description but not including cultivation type, region & varieties. (50 characters)
                </p>
            </div>
            <div className={classes.container}>
                <label htmlFor='variety'>Please specify the crop variety:</label>
                <input className={varietyInputClass} type='text' name='variety' onChange={varietyInpytHandler} value={varietyInput} />
                {varietyHasError && <p className={classes.errorText}>Input is empty</p>}
            </div>
            <div className={classes.btnContainer}>
                <button className='btnCancel' type='button' onClick={resetHandler}>
                    Cancel
                </button>
                <button className='btn'>Save</button>
            </div>
        </form>
    );
};

export default Form;
