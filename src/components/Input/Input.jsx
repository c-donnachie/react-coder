import s from './Input.module.css';
import { useState } from 'react';

export default function Input() {
    const [inputFocus, setInputFocus] = useState(false);
    const {inputChange, setInputChange} = useState(false);

    const handleInputFocus = () => {
        setInputFocus(!inputFocus);
    };

    return (
        <div className={s.inputContainer}>
            <div className={s.input__title}>Placeholder</div>
            <input
                className={`${s.input} ${inputFocus ? s.input__title__onChange : ''}`}
                type='text'
                onFocus={handleInputFocus}
                onBlur={handleInputFocus}
            />
        </div>

    );
}