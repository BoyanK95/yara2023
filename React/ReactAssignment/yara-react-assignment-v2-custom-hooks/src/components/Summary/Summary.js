import classes from './Summary.module.css'

const SummaryComponent = (props) => {

    console.log(props.inputs);
    return (
        <details open className={classes.details}>
            <summary>
                <h3>Summary</h3>
            </summary>
            <ul>
                <li>{props.inputs.firstTd}</li>
                <li>{props.inputs.secondTd}</li>
                <li>{props.inputs.thirdTd}</li>
                <li>{props.inputs.numberTd}</li>
            </ul>
        </details>
    );
};

export default SummaryComponent;
