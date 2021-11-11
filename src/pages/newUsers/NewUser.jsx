import React from 'react';
import './newUser.scss';

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItems">
          <label>Username :</label>
          <input type="text" placeholder="username" />
        </div>
        <div className="newUserItems">
          <label>Password :</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItems">
          <label>Fullname :</label>
          <input type="text" placeholder="Fullname" />
        </div>
        <div className="newUserItems">
          <label>Email :</label>
          <input type="email" placeholder="John@test.com" />
        </div>
        <div className="newUserItems">
          <label>Phone :</label>
          <input type="text" placeholder="+123456789" />
        </div>
        <div className="newUserItems">
          <label>Address :</label>
          <input type="text" placeholder="City , Country" />
        </div>
        <br />
        <div className="newUserItems">
          <label>Active :</label>
          <select name="active" id="active" className="newUserSelect">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserCreateButton">Create</button>
      </form>
    </div>
  );
};

export default NewUser;
