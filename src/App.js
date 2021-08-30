import { useState, useEffect } from 'react';
import './App.css';
import Button from './component/Button/Button';
import Header from './component/Header/Header';
import Input from './component/Input/Input';
import Product from './component/Product/Product';
import ProductsDetails from './component/Product/ProductsDetails';
function App() {
  let initialValue = true;
  const [toDisplayProduct, setToDisplayProduct] = useState(initialValue);
  const [colorChange, setColorChange] = useState("white")
  const [displayObj, setDisplayObj] = useState([]);
  const [productArray, setProductArray] = useState([{
    ID: 1,
    Name: "Coffe",
    Description: "Tasty coffe",
    Price: 20
  },
  {
    ID: 2,
    Name: "Coffe",
    Description: "Tasty coffe",
    Price: 30
  },
  {
    ID: 3,
    Name: "Coffe",
    Description: "Tasty coffe",
    Price: 40
  },
  {
    ID: 4,
    Name: "Coffe",
    Description: "Tasty coffe",
    Price: 50
  }
  ]);

  const handleDelete = (id) => {
    let products = productArray.filter(product => {
      return product.ID !== id;
    });
    setProductArray(products);
  }

  const handleDisplay = (id) => {
    setToDisplayProduct(initialValue => !initialValue);
    let products = productArray.filter(product => {
      return product.ID === id;
    });
    setDisplayObj(...products);
  }
  // Add Product
  const handleChange = (e) => {

  }

  const addToArrayProduct = (name, description, price) => {
    let obj = {
      ID: productArray.length,
      Name: name,
      Description: description,
      Price: price
    }
    productArray.push(obj)

  }

  const save = (e) => {
    e.preventDefault();
    setProductArray(productArray);
    setToDisplayProduct(initialValue => !initialValue);
  }
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <Header />
          <div className="container" style={{ marginBottom: "1%" }} >
            <div className="row">
              <button type="button" className="btn btn-primary" style={{ marginTop: "10px !important" }} onClick={save} >ADD</button>
              <Input handleChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
      <Product productArray={productArray} btn={"delete"} handleDelete={handleDelete} handleDisplay={handleDisplay} initialValue={initialValue} />
      {toDisplayProduct ? null : <ProductsDetails displayObj={displayObj} addToArrayProduct={addToArrayProduct} initialValue={initialValue} />}
    </div>
  );
}

export default App;
