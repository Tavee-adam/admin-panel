import './newProduct.scss';

const NewProduct = () => {
  return (
    <div className="newProduct">
      <div className="addProductContainer">
        <h1 className="addProductTitle">New Product</h1>
      </div>
      <div className="addProductBottom">
        <form action="" className="addProductForm">
          <div className="addProductFormLeft">
            <label className="addProductName">Product Name:</label>
            <input type="text" placeholder="Product Name" />
            <label>Stock :</label>
            <input type="text" placeholder="222" />
            <label>Active :</label>
            <select name="isActive" id="isActive">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="addProductFormRight">
            <div className="addProductUpload">
              <label>Image :</label>
              <input type="file" id="file" />
            </div>
            <button className="addProductUpdateButton">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
