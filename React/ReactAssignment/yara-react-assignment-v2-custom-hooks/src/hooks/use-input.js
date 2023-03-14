import { useState } from 'react';

function useInput(params) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const hasError = isTouched && !enteredValue;

    function valueChangeHandler(e) {
        setEnteredValue(e.target.value);
    }

    function inputBlurHandler() {
        setIsTouched(true);
    }

    function reset() {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
}

export default useInput;
