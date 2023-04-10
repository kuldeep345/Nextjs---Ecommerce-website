import React, { useState } from 'react'
import { client, urlFor } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Product } from '@/components'
import { useStateContext } from '@/context/StateContext'

const ProductDetails = ({ product, products }) => {

    const { decQty , incQty , qty , onAdd } = useStateContext()

    const { Name, Image, details, price } = product

    const [ index , setIndex ] = useState(0)

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(Image && Image[index])} className='product-detail-image'/>
                    </div>
                    <div className='small-images-container'>
                    {Image?.map((item , i) => (
                        <img src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image' } onMouseEnter={()=>setIndex(i)}/>
                    ))}
                    </div>
                </div>
                <div className='product-detail-desc'>
                    <h1>{Name}</h1>
                    <div className='reviews'>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                    </div>
                    <p>(20)</p>
                <h4>Details: </h4>
                <p>{details}</p>
                <p className='price'>${price}</p>
                <div className='quantity'>
                    <h3>Quantity: </h3>
                    <p className='quantity-desc'>
                        <span className='minus' onClick={decQty}>
                            <AiOutlineMinus />
                        </span>
                        <span className='num' >{qty}</span>
                        <span className="plus" onClick={incQty}>
                            <AiOutlinePlus />
                        </span>
                    </p>
                </div>
                <div className="buttons">
                    <button type='button' onClick={()=>onAdd(product , qty)} className='add-to-cart'>
                        Add to Cart
                    </button>
                    <button type='button' className='buy-now'>
                        Buy Now
                    </button>
                </div>
                </div>
            </div>
            <div className='maylike-products-wrapper'>
                    <h2>You may also like</h2>
                    <div className='marquee'>
                        <div className='maylike-products-container track'>
                            {products.map((item) => (
                                <Product key={item._id} product={item}/>
                            ))}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export const getStaticPaths = async () => {
    const query = `*[_type == "product"]{
        Slug {
           current
        }
    }`;

    const products = await client.fetch(query);

    const paths = products.map((product) => ({
        params: {
            slug: product.Slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && Slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query)
    const products = await client.fetch(productsQuery)

    return {
        props: {
            product, products
        }
    }
}


export default ProductDetails