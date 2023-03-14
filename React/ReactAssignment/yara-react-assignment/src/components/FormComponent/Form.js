import { useState } from 'react';
import classes from './Form.module.css'

const Form = () => {
    const [regionInput, setRegionInput] = useState('')
    
    function regionInputHandler(e) {
        setRegionInput(e.target.value)
    }

    function formSubmitHandler(e) {
        e.preventDefault()
        console.log(regionInput);
    }

    function resetHandler() {
        setRegionInput('')
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
                <input type='text' name='calendar-name' />
                <p id='max-char'>
                    Optional description but not including cultivation type, region & varieties. (50 characters)
                </p>
            </div>
            <div>
                <label htmlFor='variety'>Please specify the crop variety:</label>
                <input type='text' name='variety' />
                <div className={classes.btnContainer}>
                <button className='btnCancel' type='button' onClick={resetHandler}>
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
