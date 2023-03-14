import classes from './Form.module.css'

const Form = () => {
    

    return (
        <form action='#' className={classes.form}>
            <div>
                <div className={classes.container}>
                    <label htmlFor='region'>Region</label>
                    <input type='text' name='region' id='region-input' defaultValue='All' />
                </div>
                {/* <div className={classes.container}>
                    <label htmlFor='crop'>Crop</label>
                    <select name='crop'>
                        <option>Wheat</option>
                        <option>Corn</option>
                        <option>Potato</option>
                    </select>
                </div> */}
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
                <div>
                    <button className='btn'>
                        Submit
                    </button>
                </div>
            </div>
        </form>
        
    );
};

export default Form;
