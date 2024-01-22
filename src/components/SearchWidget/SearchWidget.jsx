import s from './SearchWidget.module.css';
import { useState } from 'react';
import { useGetCollection } from '../../hooks/useProducts';
import { Link } from 'react-router-dom';
import { truncateProductName } from '../../helpers/formats';

export default function SearchWidget() {
    const { productsData } = useGetCollection('products');
    const [searchTerm, setSearchTerm] = useState('');
    const [isInputFocused, setIsInputFocused] = useState(false)


    const results = !searchTerm
        ? productsData
        : productsData.filter((product) =>
            product.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
        );

    const handleSearchTerms = (event) => {
        setSearchTerm(event.target.value)
    }

    const resetSearchTerms = () => {
        setSearchTerm('')
    }

    const handleInputClick = () => {
        setIsInputFocused(!isInputFocused);
    }



    return (
        <div className={s.searchContainer}>
            {searchTerm.length > 0 && (
                <div className={s.overlay} onClick={resetSearchTerms}>
                </div>
            )}
            <div className={s.card}>
                <input
                    className={`${s.input} ${searchTerm.length > 0 ? s.input__focus : ''}`}
                    type="search"
                    placeholder="¿Qué estás buscando?"
                    value={searchTerm}
                    onChange={handleSearchTerms}
                    onClick={handleInputClick}
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