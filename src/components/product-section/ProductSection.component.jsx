import React from 'react'
import ProductLoop from '../product-loop/ProductLoop.component'
import './bbc.css'
const ProductSection = () => {
  return (
    <div className='m-5'>
      <h3>NEWLY LISTED PLANTS</h3>
      <hr />

      <div className="bbc">



        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/1031628/pexels-photo-1031628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Marigold</h5>
              <p className="card-text">Rs. 19</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/18866215/pexels-photo-18866215/free-photo-of-close-up-of-sunflower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Sun Flower</h5>
              <p className="card-text">Rs. 199</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/18852115/pexels-photo-18852115/free-photo-of-close-up-of-a-pink-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Daisy HO</h5>
              <p className="card-text">Rs. 99</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>
      </div>
      <div className='m-5'>

        <h3>Recommeded</h3>
        <hr />
        <div className="bbc">
        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.immediate.co.uk/production/volatile/sites/10/2019/03/2048x1365-Three-herb-container-displays-LI4029823-4deacae.jpg?quality=90&fit=700,466 "
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Winter Savory</h5>
              <p className="card-text">Rs. 499</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://www.southernliving.com/thmb/meAHVDAwG4ArHdPbRcMPrDrg0Eg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1317766855-141c13b245d142e1bfd5f41d5ddd79a7.jpg"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Whaline</h5>
              <p className="card-text">Rs. 399</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://www.mayernikkitchen.com/pub/blogimages/20220520195004_PottedHerbs.jpg"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Tulsi</h5>
              <p className="card-text">Rs. 59</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>
        </div>



      </div>

      <div className='row'>
        <ProductLoop />
      </div>
    </div>
  )
}

export default ProductSection
