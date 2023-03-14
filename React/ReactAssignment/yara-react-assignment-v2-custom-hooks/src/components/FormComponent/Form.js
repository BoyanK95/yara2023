import useInput from '../../hooks/use-input';
import classes from './Form.module.css';

const isNotEmpty = (value) => value.trim() !== '';

const Form = () => {
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
    console.log(formIsValid);

    if (regionsIsValid && calendarIsValid && varietyIsValid) {
        formIsValid = true
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        console.log(formIsValid);
        debugger
        if (!formIsValid) {
            return
        }
        console.log('SIBMITED');
        console.log(regionInput);
        console.log(calendarName);
        console.log(varietyInput);

        resetHandler()
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
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <div>
                <div className={classes.container}>
                    <label htmlFor='region'>Region</label>
                    <input
                        className={regionInputClass}
                        type='text'
                        name='region'
                        id='region-input'
                        onBlur={regionBlurHandler}
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
                    onBlur={calendarBlurHandler}
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
                <input
                    className={varietyInputClass}
                    type='text'
                    name='variety'
                    onBlur={varietyBlurHandler}
                    onChange={varietyInputHandler}
                    value={varietyInput}
                />
                {varietyHasError && <p className={classes.errorText}>Input is empty</p>}
            </div>
            <div className={classes.btnContainer}>
                <button className='btnCancel' type='button' onClick={resetHandler}>
                    Cancel
                </button>
                <button className='btn' disabled={!formIsValid}>Save</button>
            </div>
        </form>
    );
};

export default Form;
