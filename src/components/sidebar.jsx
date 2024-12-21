import { useEffect, useState } from "react";
import {
  ArrowRightStartOnRectangleIcon,
  Bars4Icon,
  BookOpenIcon,
  ChevronDownIcon,
  CloudIcon,
  CodeBracketIcon,
  Cog6ToothIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import "./sidebar.css";

const SideBar = () => {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    handleResize(); // Check screen size on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sidebarMain">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img src={"/svg/logo.svg"} alt={"logo"} className="logo" />
          <h1 className="sidebar-title">CodeAnt AI</h1>
        </div>
        {isMobile && (
          <button className="sidebar-toggle-button" onClick={() => setIsSideBarVisible((prev) => !prev)}>
            <Bars4Icon className="icon" />
          </button>
        )}
      </div>

      {/* Sidebar */}

      <div className={`sidebar ${isSideBarVisible ? "active" : ""}`}>
        <div className="sidebar-menu-content">
          <div className="sidebar-user-info">
            <span className="user-name">
              UtkarshDhairyaPanwar...
              <ChevronDownIcon className="icon" />
            </span>
          </div>

          <nav className="sidebar-nav">
            <a href="#" className="sidebar-nav-item active">
              <HomeIcon className="icon" />
              <span className="nav-item-text">Repositories</span>
            </a>
            <a href="#" className="sidebar-nav-item">
              <CodeBracketIcon className="icon" />
              <span className="nav-item-text">AI Code Review</span>
            </a>
            <a href="#" className="sidebar-nav-item">
              <CloudIcon className="icon" />
              <span className="nav-item-text">Cloud Security</span>
            </a>
            <a href="#" className="sidebar-nav-item">
              <BookOpenIcon className="icon" />
              <span className="nav-item-text">How to Use</span>
            </a>
            <a href="#" className="sidebar-nav-item">
              <Cog6ToothIcon className="icon" />
              <span className="nav-item-text">Settings</span>
            </a>
          </nav>

          <div className="sidebar-footer">
            <a href="#" className="sidebar-footer-item">
              <PhoneIcon className="icon" />
              <span className="footer-item-text">Support</span>
            </a>
            <a href="#" className="sidebar-footer-item">
              <ArrowRightStartOnRectangleIcon className="icon" />
              <span className="footer-item-text">Logout</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
