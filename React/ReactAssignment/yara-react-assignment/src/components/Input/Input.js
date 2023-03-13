const Input = (props) => {
    return (
        <div>
            <label htmlFor={props.name}>{props.label}</label>
            <input type={props.type} name={props.name} defaultValue='All' />
            <p>{props.desc}</p>
        </div>
    );
};

export default Input;
