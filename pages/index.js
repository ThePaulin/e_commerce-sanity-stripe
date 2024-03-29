import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({products, bannerData}) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

      <div>
        <h2 className='products-heading'>Best Selling Product</h2>
        <p> Leather bags for everyone!</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => <Product key={product._id} product={product} />
        )}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
      {console.log(bannerData)}
    </div>
  )
}

export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  
  return {
    props: { products, bannerData}
  }
}

export default Home