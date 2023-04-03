import React from "react";
import { SideBarData } from "../data/courseData";
import { Link } from "react-router-dom";

import './sidebar.css';

const sidebar = () => {
  return (
    <>
      <section>
        <div className="text-white">
          {SideBarData.map((item, index) => {
            return (
              <div key={index}>
                <Link to={item.path} className="hover:bg-red-500 pl-1 mt-7 w-full h-14 flex justify-start items-center text-white text-2x1 space-x-1 font-bold">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </Link>
              </div>
            );
          })}
        </div> 
      </section>
    </>
  );
};

export default sidebar;
