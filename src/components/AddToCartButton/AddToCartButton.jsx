import Lottie from "lottie-react"
import addingToCart from "../../assets/animations/addingToCart.json"
import buyAnimation from "../../assets/animations/buyAnimation.json"
import s from "./AddToCartButton.module.css"
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

export default function AddToCartButton({ product }) {
    const { addToCart } = useContext(CartContext);
    const [animationStates, setAnimationStates] = useState({});
    const [cooldown, setCooldown] = useState(false);

    const handleAddToCart = (product) => {
        if (!cooldown) {
            setCooldown(true);

            setAnimationStates((prevStates) => ({
                ...prevStates,
                [product.id]: true,
            }));

            addToCart(product);

            setTimeout(() => {
                setAnimationStates((prevStates) => ({
                    ...prevStates,
                    [product.id]: false,
                }));
                setCooldown(false);
            }, 1900);
        }
    };

    useEffect(() => {
        const cooldownTimer = setTimeout(() => {
            setCooldown(false);
        }, 1900);

        return () => {
            clearTimeout(cooldownTimer);
        };
    }, [cooldown]);

    return (
        <button onClick={() => handleAddToCart(product)}>
            {animationStates[product.id] ? (
                <Lottie
                    className={`${s.card__button__animation} ${animationStates[product.id] ? s.stopped : s.stopped}`}
                    animationData={buyAnimation}
                />
            ) : (
                <Lottie
                    className={`${s.card__button__animation} ${animationStates[product.id] ? '' : ''}`}
                    animationData={addingToCart}
                    autoplay={false}
                    loop={false}
                />
            )}
        </button>
    )
}
