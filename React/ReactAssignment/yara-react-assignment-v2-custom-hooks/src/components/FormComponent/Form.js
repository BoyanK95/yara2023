import { createContext } from 'react';
import useInput from '../../hooks/use-input';
import classes from './Form.module.css';

const isNotEmpty = (value) => value.trim() !== '';
const dataArr = []

const Form = (props) => {
    const ctx = createContext(dataArr)
    console.log(ctx);

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

    const {
        value: numberInput,
        isValid: numberInputIsValid,
        hasError: numberInputHasError,
        valueChangeHandler: numberInputHandler,
        inputBlurHandler: numberBlurHandler,
        reset: resetNumberInput
    } = useInput(isNotEmpty);

    let formIsValid = false;
    // console.log(formIsValid);

    if (regionsIsValid && calendarIsValid && varietyIsValid && numberInputIsValid) {
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

        
        dataArr.push(regionInput)
        dataArr.push(calendarName)
        dataArr.push(varietyInput)
        dataArr.push(numberInput)
        console.log(dataArr);
        console.log(`ctx; ${ctx}`);

        // setSubmitedData(dataArr)
        // setShowSummary(true)

        resetHandler();
    }

    function resetHandler() {
        resetRegion();
        resetCalendar();
        resetVariety();
        resetNumberInput()
    }

    const regionInputClass = !regionHasError ? classes.input : classes.error;
    const calendarInputClass = !calendarHasError ? classes.input : classes.error;
    const varietyInputClass = !varietyHasError ? classes.input : classes.error;
    const numberInputClass = !numberInputHasError ? classes.input : classes.error;

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
                <div className={classes.container}>
                    <label htmlFor={props.numberLabel}>{props.numberLabel}</label>
                    <input
                        className={numberInputClass}
                        type='number'
                        name='numberInput'
                        onBlur={numberBlurHandler}
                        onChange={numberInputHandler}
                        value={numberInput}
                    />
                    {numberInputHasError && <p className={classes.errorText}>Value of {props.numberLabel} is required!</p>}
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
        </>
    );
};

export default Form;
