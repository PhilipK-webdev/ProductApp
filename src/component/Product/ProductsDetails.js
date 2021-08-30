import React, { useState } from 'react'
import coffe from "../../img/coffer.jpg"
function ProductsDetails({ displayObj, addToArrayProduct, initialValue }) {

    const [nameProduct, setNameProduct] = useState(displayObj.Name);
    const [descProduct, setDescProduct] = useState(displayObj.Description);
    const [price, setPrice] = useState(displayObj.Price);
    const handleName = (e) => {
        setNameProduct(e.target.value);
    }
    const handleDesc = (e) => {
        setDescProduct(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const saveProduct = (e) => {
        e.preventDefault();
        initialValue = true;
        addToArrayProduct(nameProduct, descProduct, price);

    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="card">
                            <img src={coffe} class="card-img-top" alt="..." />
                            <form action="/action_page.php">
                                <label for="name" className="form-label">Name: </label><br />
                                <input type="text" id="name" name="name" value={nameProduct} onChange={handleName} /><br />
                                <label for="description" className="form-label">Description:</label><br />
                                <input type="text" id="description" name="description" value={descProduct} onChange={handleDesc} /><br />
                                <label for="price" className="form-label">Price:</label><br />
                                <input type="number" id="price" name="price" value={price} onChange={handlePrice} /><br />
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={saveProduct}>Save</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductsDetails
