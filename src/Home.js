import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    
  return (
    
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
             alt='home_image'/>
        

            <div className='home__row'>
                {/* Product */}
                <Product id="100000"
                title='The lean Startup' price={129.99}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                rating={3}/>
            
                {/* Product */}
                <Product id="100001"
                title='Kenwood kMix Stand Mixer' price={1229.99}
                image="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1663837718/Croma%20Assets/Small%20Appliances/Food%20Preparation%20App/Images/225092_0_uahc49.png/mxw_2048,f_auto"
                rating={4}/>
            </div>

            <div className='home__row'>
                {/* Product */}
                <Product id="100002"
                title='Samsung LC49RG90SSUXEN 49' price={3829.99}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                rating={4}/>
                {/* Product */}
                <Product id="100003"
                title='Amazon Echo (3rd Generation)' price={799.34}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                rating={5}/>
                {/* Product */}
                <Product id="100004"
                title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' price={99999.99}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                rating={5}/>
            </div>

            <div className='home__row'>
                {/* Product */}
                <Product id="100005"
                title='Samsung LC49RG90SSUXEN 49' price={28929.99}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                rating={3}/>
            </div>
        </div>
    </div>
  )
}

export default Home
