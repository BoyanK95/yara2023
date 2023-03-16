import React from 'react';

const ActionButtons = ({showCancel, showSave, onCancelClick, onSaveClick }) => {
    return (
    <>
        {showCancel && <button onClick={onCancelClick}>Cancel</button>}

        {showSave && <button onClick={onSaveClick}>Save</button>}
    </>);
};

export default ActionButtons;