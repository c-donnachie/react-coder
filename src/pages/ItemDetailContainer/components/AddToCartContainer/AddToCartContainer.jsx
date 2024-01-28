import AddToCartButton from "../../../../components/AddToCartButton/AddToCartButton";
import { useState, useContext, useEffect } from 'react';
import s from "./AddToCartContainer.module.css";
import { CartContext } from "../../../../context/CartContext";

export default function AddToCartContainer({ product }) {

    const { totalQuantity } = useContext(CartContext)

    const [quantity, setQuantity] = useState(1)

    const addQuantity = () => {
        if (quantity === 10) return
        setQuantity(quantity + 1)
    }

    const removeQuantity = () => {
        if (quantity === 1) return
        setQuantity(quantity - 1)
    }

    useEffect(() => {
        setQuantity(1)

    }, [totalQuantity])

    return (
        <div className={s.container}>
            <div className={s.item}>
                <button className={s.item__quantityButton} onClick={removeQuantity}>
                    -
                </button>
                <p className={s.item__quantity}>{quantity}</p>
                <button className={s.item__quantityButton} onClick={addQuantity}>
                    +
                </button>
            </div>
            <AddToCartButton product={product} quantity={quantity} />
        </div>
    )
}
