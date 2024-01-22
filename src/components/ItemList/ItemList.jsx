import { formatCurrency, truncateProductName } from "../../helpers/formats";
import { Link } from "react-router-dom";
import s from "./ItemList.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

export default function ItemList({ productsData }) {

    return (
        productsData.map((product) => (
            <div className={s.card} key={product.id}>
                <p className={s.card__category}>{product.brand}</p>
                <p className={s.card__category}>{product.category}</p>
                <h2 className={s.card__title}>{truncateProductName(product.name, 80)}</h2>
                <div className={s.card__image}>
                    <Link to={`/item/${product.id}`}>
                        <img
                            className={s.card__img}
                            src={product.image}
                            alt={product.name} />
                    </Link>
                </div>
                <div className={s.card__footer}>
                    <div className={s.card__priceFooter}>
                        <p className={s.card__price}>{formatCurrency(product.price)}</p>
                        <AddToCartButton product={product}/>
                    </div>
                </div>
            </div>
        ))
    );
}
