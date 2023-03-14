import classes from './Summary.module.css'

const SummaryComponent = (props) => {

    return (
        <details open className={classes.details}>
            <summary>
                <h3>Summary</h3>
            </summary>
            <ul>
                {props.inputs?.map((input)=> <li key={Math.random()}>{input}</li>)}
            </ul>
        </details>
    );
};

export default SummaryComponent;
