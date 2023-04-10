import React from 'react'
import { useRouter } from 'next/router'
import { client , urlFor } from '@/lib/client'
import { product } from '@/ecom/schemas/product'

const ProductDetails = ({products , product}) => {
    console.log(products , product)
  return (
    <div>
        <div className='product-detail-container'>
            <div>
                <div className='image-container'>
                    <img src='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export const getStaticPaths = async ()=>{
    const query = `*[_type == "product"]{
        slug {
           current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params:{
            slug:product.slug.current
        }
    }))

    return {
        paths,
        fallback:'blocking'
    }
}

export const getStaticProps = async ({params:{slug}})=>{
    const query = `*[_type == "product" && slug.current == '${slug}][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    return {
        props:{
            products , product
        }
    }
}


export default ProductDetails