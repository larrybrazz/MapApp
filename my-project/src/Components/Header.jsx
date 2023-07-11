import React, { useState } from "react";

const Header = () => {
  const [navActive, setNavActive] = useState(null);
  const [displayMenu, setDisplayMenu] = useState(false);

  const menuDisplay = () => {
    setDisplayMenu((prev) => !prev);
    
  };

  return (
    <div className="flex sticky space-x-2 justify-between md:items-center py-6 px-3  shadow-xl rounded bg-slate-500">
      <h1 className="text-2xl font-medium text-white"> Caravans Map</h1>
      <div className="">
        {" "}
        <input
          onChange={(e) => handleInputChange(e.target.value)}
          type="number"
          name=""
          id=""
          placeholder="Input Caravan Number"
          className="placeholder:text-sm placeholder:text-center px-2 rounded py-2 outline-none"
        />
     
        <button className="text-white font-mono font-semibold rounded bg-green-600 p-2">
          Submit
        </button>
      </div>
      <div className=" text-white  font-bold">
        {/* <Link href="">
          <div onClick={menuDisplay} className={`nav__menu-bar`}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="">
            {displayMenu && <Menu setDisplayMenu={setDisplayMenu} />}
          </div>
        </Link> */}
        <div
          className={` md:flex hidden items-center text-white space-x-2 font-bold`}
        >
          <select
            onChange={(e) => handleSelect(e.target.value)}
            name="Caravans"
            id=""
            className="md:flex text-black hidden placeholder:text-sm placeholder:text-center px-4 rounded py-2 outline-none"
          >
            <option value="Turnberry">Select Caravans</option>
            <option value="Turnberry">Turnberry</option>
            <option value="Badger Lake">Badger Lake</option>
            <option value="Castle Lake">Castle Lake</option>
            <option value="West View">West View</option>
            <option value="West Lawn">West Lawn</option>
            <option value="South Lawn">South Lawn</option>
            <option value="Lakefield">Lakefield</option>
            <option value="Lakeside East">Lakeside East</option>
            <option value="Lakeside North">Lakeside North</option>
            <option value="Tower Lawn">Tower Lawn</option>
            <option value="Well Close">Well Close</option>
            <option value="The Belfry">The Belfry</option>
            <option value="Troon">Troon</option>
            <option value="Pennisula Lawn">Pennisula Lawn</option>
          </select>
          <p>About US</p>
          <p>Contact</p>
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

export function Menu({ setDisplayMenu }) {
  return (
    <div className="relative text-white bg-slate-600 font-bold ">
      <div
        className={
          "absolute top-20 left-80 items-center text-black space-y-4 font-bold nav__menu-list "
        }
      >
        <div onClick={() => setDisplayMenu(false)}>X</div>
        <select
          onChange={(e) => handleSelect(e.target.value)}
          name="Caravans"
          id=""
          className="flex flex-col text-black placeholder:text-sm placeholder:text-center px-4 rounded py-2 outline-none"
        >
          <option value="Turnberry">Select Caravans</option>
          <option value="Turnberry">Turnberry</option>
          <option value="Badger Lake">Badger Lake</option>
          <option value="Castle Lake">Castle Lake</option>
          <option value="West View">West View</option>
          <option value="West Lawn">West Lawn</option>
          <option value="South Lawn">South Lawn</option>
          <option value="Lakefield">Lakefield</option>
          <option value="Lakeside East">Lakeside East</option>
          <option value="Lakeside North">Lakeside North</option>
          <option value="Tower Lawn">Tower Lawn</option>
          <option value="Well Close">Well Close</option>
          <option value="The Belfry">The Belfry</option>
          <option value="Troon">Troon</option>
          <option value="Pennisula Lawn">Pennisula Lawn</option>
        </select>
        <p>About US</p>
        <p>Contact</p>
        <div className="space-x-10 pt-8">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
