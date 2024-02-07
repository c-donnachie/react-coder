import { formatCurrency, truncateProductName } from "../../helpers/formats";
import { Link } from "react-router-dom";
import s from "./ItemList.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function ItemList({ productsData }) {

    const adjustedProducts = productsData.concat(Array(4 - (productsData.length % 4)).fill(null));

    return (
        adjustedProducts.map((product, index) => (
            <div className={`${s.card} ${product ? '' : s.invisible}`} key={index}>
                {product && (
                    <>
                        <p className={s.card__brand}>{product.brand}</p>

                        <Link to={`/filtered?category=${product.category}`} className={s.card__category}>
                            <p className={s.card__category}>{product.category}</p>
                        </Link>

                        <Link to={`/item/${product.id}`}>
                            <h2 className={s.card__title}>{truncateProductName(product.name, 100)}</h2>
                        </Link>

                        <div className={s.card__image}>
                            <Link to={`/item/${product.id}`}>
                                <img className={s.card__img} src={product.image} alt={product.name} />
                            </Link>
                        </div>

                        <div className={s.card__footer}>
                            <div className={s.card__priceFooter}>
                                <div>
                                    <p className={s.card__price}>${formatCurrency(product.price)}</p>
                                    <p className={s.card__priceDesc}>precio oferta</p>
                                </div>
                                <div className={s.card__button}>
                                    <AddToCartButton product={product} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        ))
    );
}
