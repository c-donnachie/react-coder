import s from './SearchWidget.module.css';
import { useState, useContext, useEffect, useRef } from 'react';
import { useGetCollection } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { truncateProductName } from '../../helpers/formats';
import { CartOpenContext } from '../../context/CartOpenContext';

export default function SearchWidget() {
    const { productsData } = useGetCollection('products');
    const [searchTerm, setSearchTerm] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false)
    const { handleCloseCart } = useContext(CartOpenContext);
    const inputRef = useRef(null);

    const handleKeyDown = (event) => {
        if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
            HandleFocus()
            if (isInputFocused) {
                resetSearchTerms()
                inputRef.current.blur();
                setIsInputFocused(false);
            }
            event.preventDefault();
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isInputFocused]);


    const results = !searchTerm
        ? productsData
        : productsData.filter((product) =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

    const handleSearchTerms = (event) => {
        setSearchTerm(event.target.value)
        handleCloseCart()
        setIsInputFocused(true)
    }

    const resetSearchTerms = () => {
        setSearchTerm('')
        setIsInputFocused(false)
    }

    const closeOverlay = () => {
        HandleFocus()
    }

    const HandleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            setIsInputFocused(true);
        }
    }


    return (
        <div className={s.searchContainer}>
            {isInputFocused ? (
                <div className={s.overlay} onClick={resetSearchTerms}></div>
            ) : null}
            <div className={s.card}>
                <input
                    ref={inputRef}
                    className={`${s.input} ${inputRef.current ? s.input__focus : ''}`}
                    type="search"
                    placeholder="¿Qué estás buscando?  ⌘ + K"
                    value={searchTerm}
                    onChange={handleSearchTerms}
                    onClick={closeOverlay}
                />
                <div className={`${s.cardSearch} ${searchTerm.length > 0 ? s.cardSearch__show : ''}`}>
                    {results.length > 0 ? (
                        results.map((product, index) => (
                            <Link
                                className={s.cardSearch__product}
                                key={index} to={`/item/${product.id}`}
                                onClick={resetSearchTerms}
                            >
                                <div className={s.cardSearch__image}>
                                    <img
                                        className={s.cardSearch__img}
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div className={s.cardSearch__name}>
                                    {truncateProductName(product.name, 40)}
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className={s.noResultsMessage}>
                            No se encontraron resultados.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}