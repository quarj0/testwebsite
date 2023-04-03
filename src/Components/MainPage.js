import React from "react";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import NavPage from "./NavPage";

import '../styles.css'

function MainPage() {
  return (
    <>
      <section>
        <nav className="navbar">
          <Navbar />
        </nav>
      </section>
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-3 sidebar">
            <SideBar />
          </div>
          <div className="col-span-3 navpage">
            <NavPage />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPage;
