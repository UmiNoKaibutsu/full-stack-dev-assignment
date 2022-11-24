import Link from "next/link"
import Styles from "../styles/Product.module.css"
import Image from "next/image";
const Product = ({product}) => {
    const {title, price, id, thumbnail, stock, rating} = product
    return (
        <div className={Styles.product}>
            <div>
                <Image src={thumbnail} width="300" height="300"/>
            </div>
            <ul>
                <li>{title}</li>
                <li>{price}$</li>
                <li>Stock: {stock}</li>
                <li>Rating: {rating}</li>
            </ul>
            <Link href={`products/${id}`} className='button'>Details</Link>
        </div>
    );
}

export default Product;