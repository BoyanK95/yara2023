import { useState } from 'react';
import useInput from '../../hooks/use-input';
import SummaryComponent from '../Summary/Summary';
import classes from './Form.module.css';

const isNotEmpty = (value) => value.trim() !== '';

const Form = (props) => {
    const [submitedData, setSubmitedData] = useState([])
    const [showSummary, setShowSummary] = useState(false)

    const {
        value: regionInput,
        isValid: regionsIsValid,
        hasError: regionHasError,
        valueChangeHandler: regionInputHandler,
        inputBlurHandler: regionBlurHandler,
        reset: resetRegion
    } = useInput(isNotEmpty);

    const {
        value: calendarName,
        isValid: calendarIsValid,
        hasError: calendarHasError,
        valueChangeHandler: calendarNameHandler,
        inputBlurHandler: calendarBlurHandler,
        reset: resetCalendar
    } = useInput(isNotEmpty);

    const {
        value: varietyInput,
        isValid: varietyIsValid,
        hasError: varietyHasError,
        valueChangeHandler: varietyInputHandler,
        inputBlurHandler: varietyBlurHandler,
        reset: resetVariety
    } = useInput(isNotEmpty);

    let formIsValid = false;
    // console.log(formIsValid);

    if (regionsIsValid && calendarIsValid && varietyIsValid) {
        formIsValid = true;
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        // console.log(formIsValid);
        if (!formIsValid) {
            return;
        }
        console.log('SIBMITED');
        console.log(regionInput);
        console.log(calendarName);
        console.log(varietyInput);

        const dataArr = []
        dataArr.push(regionInput)
        dataArr.push(calendarName)
        dataArr.push(varietyInput)
        console.log(dataArr);
        setSubmitedData(dataArr)
        setShowSummary(true)
        

        resetHandler();
    }

    function resetHandler() {
        resetRegion();
        resetCalendar();
        resetVariety();
    }

    const regionInputClass = !regionHasError ? classes.input : classes.error;
    const calendarInputClass = !calendarHasError ? classes.input : classes.error;
    const varietyInputClass = !varietyHasError ? classes.input : classes.error;

    return (
        <>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <div>
                    <div className={classes.container}>
                        <label htmlFor='region'>{props.firstLabel}</label>
                        <input
                            className={regionInputClass}
                            type='text'
                            name='region'
                            id='region-input'
                            onBlur={regionBlurHandler}
                            onChange={regionInputHandler}
                            value={regionInput}
                        />
                        {regionHasError && <p className={classes.errorText}>Value of {props.firstLabel} is required!</p>}
                    </div>
                </div>
                <div className={classes.container}>
                    <label htmlFor='calendar-name'>{props.secondLabel}</label>
                    <input
                        className={calendarInputClass}
                        type='text'
                        name='calendarName'
                        onBlur={calendarBlurHandler}
                        onChange={calendarNameHandler}
                        value={calendarName}
                    />
                    {calendarHasError && <p className={classes.errorText}>Value of {props.secondLabel} is required!</p>}
                    <p id='max-char'>
                        Optional description but not including cultivation type, region & varieties. (50 characters)
                    </p>
                </div>
                <div className={classes.container}>
                    <label htmlFor='variety'>{props.thirdLabel}</label>
                    <input
                        className={varietyInputClass}
                        type='text'
                        name='variety'
                        onBlur={varietyBlurHandler}
                        onChange={varietyInputHandler}
                        value={varietyInput}
                    />
                    {varietyHasError && <p className={classes.errorText}>Value of {props.thirdLabel} is required!</p>}
                </div>
                <div className={classes.btnContainer}>
                    <button className='btnCancel' type='button' onClick={resetHandler}>
                        Cancel
                    </button>
                    <button className='btn' disabled={!formIsValid}>
                        Save
                    </button>
                </div>
            </form>
            {submitedData && showSummary && <SummaryComponent inputs={submitedData}/>}
        </>
    );
};

export default Form;
