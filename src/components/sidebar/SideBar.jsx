import React, { useState } from 'react';
import './sidebar.scss';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SendIcon from '@mui/icons-material/Send';
import WorkIcon from '@mui/icons-material/Work';
import ErrorIcon from '@mui/icons-material/Error';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [expand, setExpand] = useState({ class: '', isSlide: false });

  return (
    <div
      className={`sidebar ${expand.class}`}
      onMouseEnter={() => setExpand({ class: 'expand', isSlide: true })}
      onMouseLeave={() => setExpand({ class: '', isSlide: false })}
    >
      {!expand.isSlide ? (
        <>
          <div className="sidewrapper">
            <div className="menu">
              <ul className="menulist">
                <li className="menulistitem">
                  <Link to="/" className="linkText">
                    <HomeIcon className="sideIcons" />
                  </Link>
                </li>
                <li className="menulistitem">
                  <TimelineIcon className="sideIcons" />
                </li>
                <li className="menulistitem">
                  <TrendingUpIcon className="sideIcons" />
                </li>
              </ul>
            </div>
            <div className="menu">
              <ul className="menulist">
                <li className="menulistitem">
                  <Link to="/users" className="linkText">
                    <PersonIcon className="sideIcons" />
                  </Link>
                </li>
                <li className="menulistitem">
                  <Link to="/productlists" className="linkText">
                    <StorefrontIcon className="sideIcons" />
                  </Link>
                </li>
                <li className="menulistitem">
                  <AttachMoneyIcon className="sideIcons" />
                </li>
                <li className="menulistitem">
                  <EqualizerIcon className="sideIcons" />
                </li>
              </ul>
            </div>
            <div className="menu">
              <ul className="menulist">
                <li className="menulistitem">
                  <EmailIcon className="sideIcons" />
                </li>
                <li className="menulistitem">
                  <FeedbackIcon className="sideIcons" />
                </li>
                <li className="menulistitem">
                  <SendIcon className="sideIcons" />
                </li>
              </ul>
            </div>
            <div className="menu">
              <ul className="menulist">
                <li className="menulistitem">
                  <WorkIcon className="sideIcons" />
                </li>
                <li className="menulistitem">
                  <ErrorIcon className="sideIcons" />
                </li>
              </ul>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="sidewrapper">
            <div className="menu">
              <h3 className="title">DASHBOARD</h3>
              <ul className="menulist">
                <li className="menulistitem">
                  <Link to="/" className="linkText">
                    <HomeIcon className="sideIcons" />
                    Home
                  </Link>
                </li>
                <li className="menulistitem">
                  <TimelineIcon className="sideIcons" />
                  Analytics
                </li>
                <li className="menulistitem">
                  <TrendingUpIcon className="sideIcons" />
                  sales
                </li>
              </ul>
            </div>
            <div className="menu">
              <h3 className="title">QUICK MENU</h3>
              <ul className="menulist">
                <li className="menulistitem">
                  <Link to="/users" className="linkText">
                    <PersonIcon className="sideIcons" />
                    Users
                  </Link>
                </li>
                <li className="menulistitem">
                  <Link to="/products" className="linkText">
                    <StorefrontIcon className="sideIcons" />
                    Products
                  </Link>
                </li>
                <li className="menulistitem">
                  <AttachMoneyIcon className="sideIcons" />
                  Transactions
                </li>
                <li className="menulistitem">
                  <EqualizerIcon className="sideIcons" />
                  Reports
                </li>
              </ul>
            </div>
            <div className="menu">
              <h3 className="title">NOTIFICATION</h3>
              <ul className="menulist">
                <li className="menulistitem">
                  <EmailIcon className="sideIcons" />
                  Emails
                </li>
                <li className="menulistitem">
                  <FeedbackIcon className="sideIcons" />
                  Feedbacks
                </li>
                <li className="menulistitem">
                  <SendIcon className="sideIcons" />
                  Messages
                </li>
              </ul>
            </div>
            <div className="menu">
              <h3 className="title">STAFF</h3>
              <ul className="menulist">
                <li className="menulistitem">
                  <WorkIcon className="sideIcons" />
                  manage & setting
                </li>
                <li className="menulistitem">
                  <ErrorIcon className="sideIcons" />
                  Reports
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
