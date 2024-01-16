import s from './SearchWidget.module.css';
import { useState } from 'react';

export default function SearchWidget() {

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className={s.card}>
            <input
                className={s.input}
                type="search"
                placeholder="Que estas buscando?"
                value={searchTerm}
                onChange={handleSearchTerm}

            />
            <div
                className={`${s.cardSearch} ${searchTerm.length > 0 ? s.cardSearch__show : ''}`}>
            </div>
        </div>

    )
}
