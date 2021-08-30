import React from 'react'
import Button from '../Button/Button'
import coffe from "../../img/coffer.jpg";
function Product({ productArray, btn, handleDelete, handleDisplay, initialValue }) {

    const display = (id) => {
        handleDisplay(id);
        initialValue = false
    }
    return (
        <div className="container">
            <div className="row">
                {productArray.map((product, index) => (
                    <div key={index} className="card" onClick={() => {
                        display(product.ID);
                    }} tyle="width: 18rem;">
                        <img src={coffe} class="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3>{product.Name}</h3>
                            <h3>{product.Description}</h3>
                            <Button btn={btn} handleDelete={handleDelete} id={product.ID} />
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Product

