import s from './Button.module.css';

export default function Button({text, onClick}) {
    return (
            <button className={s.button} onClick={onClick}>{text}</button>
    )
}
