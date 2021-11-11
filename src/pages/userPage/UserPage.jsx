import './userpage.scss';
import PermIdentity from '@mui/icons-material/PermIdentity';
import CalendarToday from '@mui/icons-material/CalendarToday';
import LocalPhone from '@mui/icons-material/LocalPhone';
import Email from '@mui/icons-material/Email';
import Place from '@mui/icons-material/Place';
import Language from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
const UserPage = () => {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAdding">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userDisplay">
          <div className="userDisplayTop">
            <img
              src="https://images.pexels.com/photos/7322089/pexels-photo-7322089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="userDisplayImg"
            />
            <div className="userDisplayTitle">
              <span className="username">Robeto Niclolus</span>
              <span className="description">artist</span>
            </div>
          </div>
          <div className="userDisplayBottom">
            <span className="userInfo">Account Details</span>
            <div className="userDisplatInfoDetail">
              <PermIdentity className="userDisplayIcon" />
              <span className="userDisplayInfo">Robeto_Niclolus</span>
            </div>
            <div className="userDisplatInfoDetail">
              <CalendarToday className="userDisplayIcon" />
              <span className="userDisplayInfo">12/3/1970</span>
            </div>
            <div className="userDisplatInfoDetail">
              <Language className="userDisplayIcon" />
              <span className="userDisplayInfo">English , Japanese</span>
            </div>
            <span className="userInfo">Contact Details</span>
            <div className="userDisplatInfoDetail">
              <LocalPhone className="userDisplayIcon" />
              <span className="userDisplayInfo">+12345678</span>
            </div>
            <div className="userDisplatInfoDetail">
              <Email className="userDisplayIcon" />
              <span className="userDisplayInfo">Robeto_Niclolus@test.com</span>
            </div>
            <div className="userDisplatInfoDetail">
              <Place className="userDisplayIcon" />
              <span className="userDisplayInfo">Tokyo , Japan</span>
            </div>
          </div>
        </div>
        <div className="userEdit">
          <span className="userEditTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItems">
                <label>Username :</label>
                <input
                  type="text"
                  placeholder="New Username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItems">
                <label>Fullname :</label>
                <input
                  type="text"
                  placeholder="New Username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItems">
                <label>Email :</label>
                <input
                  type="email"
                  placeholder="email@email.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItems">
                <label>Phone :</label>
                <input
                  type="number"
                  placeholder="Phone"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItems">
                <label>Address :</label>
                <input
                  type="text"
                  placeholder="Location"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/7322089/pexels-photo-7322089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                  className="userUpdateImg"
                />
                <input type="file" className="userUpdateInput" />
              </div>
              <button className="userUpdateBut">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
