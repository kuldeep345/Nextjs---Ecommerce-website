import Link from 'next/link'
import React from 'react'
import { urlFor } from '@/lib/client'

const HeroBanner = ({heroBannner}) => {

  return (
    <div className='hero-banner-container'>
        <div>
          <p className='beat-solo'>{heroBannner.smallText}</p>
          <h3>{heroBannner.midText}</h3>
          <h1>{heroBannner.largeText1}</h1>
          <img src={urlFor(heroBannner.Image)} className='hero-banner-image'/>
        </div>
        <div>
          <Link href={`/product/${heroBannner._id}`}>
            <button type='button'>{heroBannner.ButtonText}</button>
          </Link>
          <div className='desc'>
          <h5>DESCRIPTION</h5>
          <p>{heroBannner.desc}</p>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner