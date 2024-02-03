import { useState } from "react"
import { useGetCategories } from "../../hooks/useCategory"

export default function Carousel() {

    const { categories } = useGetCategories('categories2')

    const images = []

    for (let i = 0; i < categories.length; i++) {
        if (categories[i].image) {
            images.push(categories[i].image);
        } else {
            images.push("");
        }
    }


    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImage, setSelectedImage] = useState(images[0])

    const selectedNewImage = (index, images, next = true) => {
        const condition = next ? selectedImage < images.length - 1 : selectedIndex > 0;
        const nextIndex =
            next ? condition ? selectedIndex + 1 : 0
                : condition ? selectedIndex - 1 : images.length - 1;
        setSelectedImage(images[nextIndex]);
        setSelectedIndex(nextIndex);
    }

    const previous = () => {
        selectedNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectedImage(selectedIndex, images)
    }

    return (
        <>
            <img src="`../../assets/images/${selectedImage}`" alt="image" />
            <button onClick={previous}>{'<'}</button>
            <button onClick={next}>{'>'}</button>

        </>
    )
}
