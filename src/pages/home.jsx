import { useState } from "react";
import SideBar from "../components/sidebar.jsx";
import { ArrowPathIcon, CircleStackIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

import { DataMock } from "../data.js";
import "./home.css";

// Layout Component
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SideBar />
      <div className="layout-content">{children}</div>
    </div>
  );
};

// Home Component
const Home = () => {
  const [filterdData, setFilterdData] = useState(DataMock);

  const handleFilter = (e) => {
    const value = e.target.value.toLowerCase();
    const filtered = DataMock.filter(
      (item) => item.title.toLowerCase().includes(value) || item.language.toLowerCase().includes(value)
    );
    setFilterdData(filtered);
  };

  return (
    <Layout>
      <div className="home-container">
        <div className="repositories-container">
          <div className="header">
            <div className="header-top">
              <div>
                <span className="title">Repositories</span>
                <span className="subtitle">{`${filterdData.length} total repositories`}</span>
              </div>
              <div className="buttons-container">
                <button className="button refresh-button">
                  <ArrowPathIcon className="icon" />
                  Refresh All
                </button>
                <button className="button add-button">
                  <PlusIcon className="icon" />
                  Add Repository
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="inputSearch" className="search-container">
                <MagnifyingGlassIcon className="icon" />
                <input
                  id="inputSearch"
                  placeholder="Search Repositories"
                  onChange={handleFilter}
                  className="search-input"
                />
              </label>
            </div>
          </div>
          <div className="repositories-list">
            {filterdData.length >= 1 ? (
              filterdData.map((item, index) => (
                <div
                  key={index}
                  className={`repository-item ${index !== filterdData.length - 1 ? "border-bottom" : ""}`}
                >
                  <div className="repository-header">
                    <span className="repository-title">{item.title}</span>
                    <span className="repository-type">{item.type}</span>
                  </div>
                  <div className="repository-details">
                    <span className="language">
                      {item.language}
                      <span className="language-indicator"></span>
                    </span>
                    <span className="size">
                      <CircleStackIcon className="icon-small" />
                      {item.size}
                    </span>
                    <span className="updated-at">{item.updatedAt}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-repository">Looks like there is no repository to show.</div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
