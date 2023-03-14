import classes from './Summary.module.css'

const SummaryComponent = (props) => {

    return (
        <details open className={classes.details}>
            <summary>
                <h4>Summary</h4>
            </summary>
            <ul>
                {props.inputs?.map((input)=> <li key={Math.random()}>{input}</li>)}
            </ul>
        </details>
    );
};

export default SummaryComponent;
