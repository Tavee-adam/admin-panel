import './topbar.scss';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Topbar = () => {
  return (
    <div className="topbar">
      <div className="TopbarWarpper">
        <div className="TopLeft">
          <span className="logo">APP ADMIN</span>
        </div>
        <div className="TopRight">
          <div className="IconContainer">
            <NotificationsIcon className="Icon" />
            <span className="NumberNotify">2</span>
          </div>
          <div className="IconContainer">
            <LanguageIcon className="Icon" />
            <span className="NumberNotify">2</span>
          </div>

          <div className="IconContainer">
            <AccountCircleIcon className="Icon" />
            <span className="NumberNotify">2</span>
          </div>
          <div className="IconContainer">
            <ArrowDropDownIcon className="Icon" />
            <div className="options">
              <span className="toggle">Setting</span>
              <span className="toggle">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
