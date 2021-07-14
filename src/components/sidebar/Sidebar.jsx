import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <div className="sidebar-title">Dashboard</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
          <div className="sidebar-title">Quick Menu</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <PermIdentity className="sidebar-icon" />
              Users
            </li>
            <li className="sidebar-list-item">
              <Storefront className="sidebar-icon" />
              Products
            </li>
            <li className="sidebar-list-item">
              <AttachMoney className="sidebar-icon" />
              Transaction
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
          <div className="sidebar-title">Notifications</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <MailOutline className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
          <div className="sidebar-title">Staff</div>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <WorkOutline className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <Report className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
