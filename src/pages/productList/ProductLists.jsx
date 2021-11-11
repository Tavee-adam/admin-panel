import './productlist.scss';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './products';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ProductLists = () => {
  const [data, setData] = useState(rows);

  const DeleteProduct = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: 'Name',
      width: 220,
      renderCell: (params) => {
        return (
          <div className="productList">
            <img className="productListImg" src={params.row.image} alt="" />
            <span>{params.row.name}</span>
          </div>
        );
      }
    },
    {
      field: 'stock',
      headerName: 'Stock',
      type: 'string',
      width: 220
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100
    },
    {
      field: 'price',
      headerName: 'Transaction',
      description: 'This column has a value of payment of the user.',
      type: 'number',
      sortable: true,
      width: 160
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 110,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <button className="editProductList">Edit</button>
            </Link>
            <DeleteOutlinedIcon
              className="deleteProductList"
              onClick={() => DeleteProduct(params.row.id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="productLists">
      <div style={{ height: '100%', width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default ProductLists;
