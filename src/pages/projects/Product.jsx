import './product.scss';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from './productData';
import Publish from '@mui/icons-material/Publish';
const Product = () => {
  return (
    <div className="product">
      <div className="productContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productCreateButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopleft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images.pexels.com/photos/7981660/pexels-photo-7981660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="productInfoImg"
            />
            <div className="productName">Iphone 13 Max Pro</div>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id : </span>
              <span className="productInfoValue">1112</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">salse : </span>
              <span className="productInfoValue">122</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active : </span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock : </span>
              <span className="productInfoValue">yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label className="productName">Product Name:</label>
            <input type="text" placeholder="Iphone 13 Max Pro" />
            <label>In Stock :</label>
            <select name="inStock" id="inStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active :</label>
            <select name="isActive" id="isActive">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/7981660/pexels-photo-7981660.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="productUpdateButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
