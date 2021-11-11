import './userLists.scss';
import { DataGrid } from '@mui/x-data-grid';
import { rows } from './userData';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserLists = () => {
  const [data, setData] = useState(rows);

  const DeleteUser = (id) => {
    setData(data.filter((item) => item.id === id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'username',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userAvatar">
            <img className="userAvatarImg" src={params.row.avatar} alt="" />
            <span>{params.row.username}</span>
          </div>
        );
      }
    },

    {
      field: 'email',
      headerName: 'Email',
      width: 200
    },
    {
      field: 'status',
      headerName: 'Status',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100
    },
    {
      field: 'transaction',
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
            <Link to={`/user/${params.row.id}`}>
              <button className="editUserList">Edit</button>
            </Link>
            <DeleteOutlinedIcon
              className="deleteUserList"
              onClick={() => DeleteUser(params.row.id)}
            />
          </>
        );
      }
    }
  ];

  return (
    <div className="userLists">
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

export default UserLists;
