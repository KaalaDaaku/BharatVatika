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
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
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
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
              <button className='button'>Buy Now</button>
            </div>
          </a>

        </div>

        <div className=" card m-4">
          <a >
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Dummy name</h5>
              <p className="card-text">Rs. 23/=</p>
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
