import React, { useState } from "react";
import './sell.css'
import {
    categories, age
} from "./data";
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../../utils/firebase/firebase.config";
import { saveItem } from "../../utils/firebase/firebasefirestore.utils";

const CreateItem = () => {
    const [alertStatus, setAlertStatus] = useState("danger");
    const [fields, setFields] = useState(false);
    const [msg, setMsg] = useState(null);
    const [title, setTitle] = useState("");
    const [plantAge, setPlantAge] = useState()
    const [category, setCategory] = useState(null);
    const [frameColor, setFrameColor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [imageAsset, setImageAsset] = useState(null);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [glass, setGlass] = useState("No");
    const [material, setMaterial] = useState("");
    const [dimensions, setDimensions] = useState("");
    const [price, setPrice] = useState();

    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const uploadProgress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (error) => {
                console.log(error);
                setFields(true);
                setMsg("Error while uploading : Try AGain 🙇");
                setAlertStatus("danger");
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageAsset(downloadURL);
                    setIsLoading(false);
                    setFields(true);
                    setMsg("Image uploaded successfully 😊");
                    setAlertStatus("success");
                    setTimeout(() => {
                        setFields(false);
                    }, 4000);
                });
            }
        );
    };

    const deleteImage = () => {
        setIsLoading(true);
        const deleteRef = ref(storage, imageAsset);
        deleteObject(deleteRef).then(() => {
            setImageAsset(null);
            setIsLoading(false);
            setFields(true);
            setMsg("Image deleted successfully 😊");
            setAlertStatus("success");
            setTimeout(() => {
                setFields(false);
            }, 4000);
        });
    };

    const saveDetails = () => {
        setIsLoading(true);
        try {
            if (!title || !imageAsset) {
                setFields(true);
                setMsg("Required fields can't be empty");
                setAlertStatus("danger");
                setTimeout(() => {
                    setFields(false);
                    setIsLoading(false);
                }, 4000);
            } else {
                const data = {
                    id: `${Date.now()}`,
                    title: title,
                    imageURL: imageAsset,
                    category: category,
                    age: plantAge,

                    price: price,
                };
                saveItem(data);
                setIsLoading(false);
                setFields(true);
                setMsg("Data Uploaded successfully 😊");
                setAlertStatus("success");
                setTimeout(() => {
                    setFields(false);
                }, 4000);
                clearData();
            }
        } catch (error) {
            console.log(error);
            setFields(true);
            setMsg("Error while uploading : Try AGain 🙇");
            setAlertStatus("danger");
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);
            }, 4000);
        }

    };

    const clearData = () => {
        setTitle("");
        setImageAsset(null);
    };

    //   const fetchData = async () => {
    //     await getAllFrames().then((data) => {
    //       dispatch({
    //         type: actionType.SET_FRAME,
    //         setFrame: data,
    //       });
    //     });
    //   };

    return (
        <div className="container">
            <div className="summet">
                <div className="border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                    {fields && (
                        <p className={`alert ${alertStatus === "danger" ? "alert-danger" : "alert-success"}`}>
                            {msg}
                        </p>
                    )}

                    <div className="image-container group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md-h-340 cursor-pointer rounded-lg">
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : (
                            <>
                                {!imageAsset ? (
                                    <>
                                        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                            <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                {/* <p className="text-gray-500 hover:text-gray-700">
                            Click here to upload
                          </p> */}
                                            </div>
                                            <input
                                                type="file"
                                                name="uploadimage"
                                                accept="image/*"
                                                onChange={uploadImage}
                                                className="w-0 h-0"
                                            />
                                        </label>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative h-full">
                                            <img
                                                src={imageAsset}
                                                alt="uploaded image"
                                                className="image"
                                            />
                                            <button
                                                type="button"
                                                className="delete-button"
                                                onClick={deleteImage}
                                            >
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </>
                                )}
                            </>
                        )}
                    </div>

                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Give me a title..."
                            className="title-input"
                        />
                    </div>

                    <div className="w-full">
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            className="select"
                        >
                            <option value="other" className="bg-white">
                                Select Category
                            </option>
                            {categories &&
                                categories.map((item) => (
                                    <option
                                        key={item.id}
                                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                                        value={item.urlParamName}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="w-full">
                        <select
                            onChange={(e) => setPlantAge(e.target.value)}
                            className="select"
                        >
                            <option value="other" className="bg-white">
                                Plant Age
                            </option>
                            {age &&
                                age.map((item) => (
                                    <option
                                        key={item.id}
                                        className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                                        value={item.ageValue}
                                    >
                                        {item.ageValue}
                                    </option>
                                ))}
                        </select>
                    </div>

                    <div className="w-full border border-grey-300 p-4 rounded-lg">
                        <input
                            type="text"
                            required
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price in Rupees"
                            className="price-input"
                        />
                    </div>

                    <div className="flex items-center w-full savebutton">
                        <button
                            type="button"
                            className="save-button"
                            onClick={saveDetails}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateItem;