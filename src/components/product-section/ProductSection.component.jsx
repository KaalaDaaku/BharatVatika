import React, { useEffect, useState } from "react";
import ProductLoop from "../product-loop/ProductLoop.component";
import "./bbc.css";
import { getAllPlants } from "../../utils/firebase/firebasefirestore.utils";
import { auth, db } from "../../utils/firebase/firebaseauth.utils";
import { addDoc, collection } from "firebase/firestore";
const ProductSection = () => {
  const [recentPlant, setRecentPlant] = useState([]);
  const [plantdata, setplantdata] = useState([
    {
      name: "Winter Savory",
      price: "69.99",
      age: "0 - 2 days",
      id: "1712237086110",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/bharatvatika-ad7af.appspot.com/o/Images%2F1712237067149-coder-amoled-.png?alt=media&token=375cace3-0717-48a7-9956-f92eda978562",
      title: "jvnkdfnv",
    },
    {
      category: "decorative",
      price: "69.99",
      age: "0 - 2 days",
      id: "1712237086110",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/bharatvatika-ad7af.appspot.com/o/Images%2F1712237067149-coder-amoled-.png?alt=media&token=375cace3-0717-48a7-9956-f92eda978562",
      title: "jvnkdfnv",
    },
    {
      category: "decorative",
      price: "69.99",
      age: "0 - 2 days",
      id: "1712237086110",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/bharatvatika-ad7af.appspot.com/o/Images%2F1712237067149-coder-amoled-.png?alt=media&token=375cace3-0717-48a7-9956-f92eda978562",
      title: "jvnkdfnv",
    },
  ]);
  useEffect(() => {
    getAllPlants().then((res) => setRecentPlant(res.slice(0, 3)));
    // console.log(recentPlant);
  }, []);

  const [product, setProduct] = useState({});

  const hello = () => {
    console.log("hello");
  };

  const addProductToCart = async (plant) => {
    console.log(plant);

    if (!auth.currentUser) {
      alert("Please log in to add items to your cart");
      return;
    }

    const userId = auth.currentUser.uid;
    const cartCollectionRef = collection(db, "cart");

    try {
      console.log(plant);
      const docRef = await addDoc(cartCollectionRef, {
        user: userId,
        ...plant,
        qty: 1,
      });

      if (docRef.id) {
        alert("Item added to cart");
      } else {
        alert("Item not added to cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      alert("Error adding item to cart. Please try again later.");
    }
  };

  return (
    <div className="m-5">
      <h3>NEWLY LISTED PLANTS</h3>
      <hr />

      <div className="bbc">
        {recentPlant?.map((plant) => (
          <div className=" m-4 " key={plant.id}>
            <a>
              <img className=" product-img" src={plant.imageURL} alt="hb" />
              <div className="">
                <h5 className="">{plant.title}</h5>
                <p className="">Rs. {plant.price}</p>
                <button
                  className="button"
                  onClick={() => addProductToCart(plant)}
                >
                  Buy Now
                </button>
              </div>
            </a>
          </div>
        ))}

        {/* <div className=" card m-4">
          <a>
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/1031628/pexels-photo-1031628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Marigold</h5>
              <p className="card-text">Rs. 19</p>
              <button className="button">Buy Now</button>
            </div>
          </a>
        </div>

        <div className=" card m-4">
          <a>
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/18866215/pexels-photo-18866215/free-photo-of-close-up-of-sunflower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Sun Flower</h5>
              <p className="card-text">Rs. 199</p>
              <button className="button">Buy Now</button>
            </div>
          </a>
        </div>

        <div className=" card m-4">
          <a>
            <img
              className="card-img-top product-img"
              src="https://images.pexels.com/photos/18852115/pexels-photo-18852115/free-photo-of-close-up-of-a-pink-flower.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="hb"
            />
            <div className="card-body">
              <h5 className="card-title">Daisy HO</h5>
              <p className="card-text">Rs. 99</p>
              <button className="button">Buy Now</button>
            </div>
          </a>
        </div> */}
      </div>

      <h3>Recommeded</h3>
      <hr />

      <div className="bbc">
        {plantdata?.map((plant) => (
          <div className=" m-4 " key={plant.id}>
            <a>
              <img className=" product-img" src={plant.imageURL} alt="hb" />
              <div className="">
                <h5 className="">{plant.title}</h5>
                <p className="">Rs. {plant.price}</p>
                <button
                  className="button"
                  onClick={() => addProductToCart(plant)}
                >
                  Buy Now
                </button>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="m-5">
        <div className="bbc">
          <div className=" card m-4">
            <a>
              <img
                className="card-img-top product-img"
                src="https://images.immediate.co.uk/production/volatile/sites/10/2019/03/2048x1365-Three-herb-container-displays-LI4029823-4deacae.jpg?quality=90&fit=700,466 "
                alt="hb"
              />
              <div className="card-body">
                <h5 className="card-title">Winter Savory</h5>
                <p className="card-text">Rs. 499</p>
                <button
                  className="button"
                  // onClick={() => addProductToCart(plant)}
                >
                  Buy Now
                </button>
              </div>
            </a>
          </div>

          <div className=" card m-4">
            <a>
              <img
                className="card-img-top product-img"
                src="https://www.southernliving.com/thmb/meAHVDAwG4ArHdPbRcMPrDrg0Eg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1317766855-141c13b245d142e1bfd5f41d5ddd79a7.jpg"
                alt="hb"
              />
              <div className="card-body">
                <h5 className="card-title">Whaline</h5>
                <p className="card-text">Rs. 399</p>
                <button className="button">Buy Now</button>
              </div>
            </a>
          </div>

          <div className=" card m-4">
            <a>
              <img
                className="card-img-top product-img"
                src="https://www.mayernikkitchen.com/pub/blogimages/20220520195004_PottedHerbs.jpg"
                alt="hb"
              />
              <div className="card-body">
                <h5 className="card-title">Tulsi</h5>
                <p className="card-text">Rs. 59</p>
                <button className="button">Buy Now</button>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <ProductLoop />
      </div>
    </div>
  );
};

export default ProductSection;
