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
        "data:image/webp;base64,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cmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEzMTI0NDE3ODYiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9ldWxhP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+dGc1MDwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+Q2hsb3JvcGh5dHVtIGNvbW9zdW0gYWthIHNwaWRlciBwbGFudCwgYWlycGxhbmUgcGxhbnQsIFN0IEJlcm5hcmQgbGlseSwgc3BpZGVyIGl2eSBvciByaWJib24gcGxhbnQ8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8xMzEyNDQxNzg2P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+CgA=",
      title: "Spider Plant",
    },
    {
      category: "decorative",
      price: "69.99",
      age: "0 - 2 days",
      id: "1712237086110",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1cfczixWu28lXvKegoqkgQELMiANCYOLiuQ&s",
      title: "Monsetra",
    },
    {
      category: "decorative",
      price: "69.99",
      age: "0 - 2 days",
      id: "1712237086110",
      imageURL:
        "https://nurserylive.com/cdn/shop/products/nurserylive-neem-tree-azadirachta-indica-plant-1_525x700.jpg?v=1634224775",
      title: "Neem pot",
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

      <h3>Recommended</h3>
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
