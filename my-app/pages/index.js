import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Head from "next/head"

const index = ({products}) => {
  return(
    <main className="container">
        <Head>
            <title>Assignment</title>
        </Head>

      <div className='main'>
        {
          products.products.map(product=><Product key={products.id} product={product}/>)
        }
      </div>
    </main>

  )
}

export default index;

export async function getStaticProps() {
  const req = await fetch('https://dummyjson.com/products');
  const products = await req.json();

  return{
    props:{products}
  }
}