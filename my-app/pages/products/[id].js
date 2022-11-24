import Styles from '../../styles/singleProduct.module.css'
import Image from 'next/image'
import {fetch} from "next/dist/compiled/@edge-runtime/primitives/fetch";
import Product from "../../components/Product";
import Head from "next/head"


const singleProduct = ({product}) => {
    const {title, price, id, description, thumbnail, stock, rating, images} = product;
    return(

        <div className={Styles.product + " container"}>
            <Head>
                <title>{title} - MyAssignment</title>
                <meta name="description" content={`${description} - MyAssignment`}/>
                <meta property="og:title" content={`${title} - MyAssignment`}/>

            </Head>
            <div>
                <Image src={thumbnail} width="400" height="400"/>
            </div>
            <div className={Styles.containertwo}>
                <h2>{title}</h2>
                <h3>Stock: {stock}</h3>
                <h1>{price}$</h1>
                <h1>Rating: {rating}</h1>
                <p>{description}</p>
            </div>

            <div className={Styles.how}>
                {
                    images.map(image=>(
                        <div>
                            <Image src={image} width="300" height="300"/>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default singleProduct;



export async function getServerSideProps(context){
        const id = context.params.id;
        const req = await fetch('https://dummyjson.com/products/'+id)
        const product = await req.json()

        return{
            props:{product}
        }
    }
