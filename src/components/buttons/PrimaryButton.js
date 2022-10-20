import React from "react";
import './button.css'

function PrimaryButton({ children }) {
    function check() {
        alert('Ok')
    }

    return (
        <div className="primary-button"><p className="button-text">{children}</p></div>
    )
} export default PrimaryButton;

const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2AB7C8',
        minWidth: '350px',
        minHeight: '350px',
        maxWidth: '350px',
        maxHeight: '200px',
        borderRadius: 5,
        alignSelf: 'center',

    }
}