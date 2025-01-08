import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPen, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from './ThemeContext';

const Nav = () => {
  const { inputValue, setInputValue } = useContext(ThemeContext);
  console.log(inputValue)

  return (
    <div className="h-[10vh] w-full bg-slate-100 flex items-center px-6 sm:h-[8vh] border border-slate-200">
      {/* Left Section */}
      <div className="md:text-3xl lg:text-3xl font-bold text-lg sm:text-base font-serif">
        Medium
      </div>

      {/* Search Bar */}
      <div className="flex items-center ml-6 flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-xl bg-slate-300 px-3 py-1 h-8 text-sm sm:text-xs sm:h-6 w-full max-w-xs"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="bg-slate-300 rounded-r-xl px-3 flex items-center h-8 sm:h-6">
          <FontAwesomeIcon icon={faSearch} className="text-gray-600 text-sm sm:text-xs" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex justify-end gap-5 items-center ml-6">
        <FontAwesomeIcon icon={faUser} className="text-gray-600 text-sm sm:text-xs h-4 w-4" />
        <FontAwesomeIcon icon={faBell} className="text-gray-600 text-sm sm:text-xs h-4 w-4" />
        <FontAwesomeIcon icon={faPen} className="text-gray-600 text-sm sm:text-xs h-4 w-4" />
      </div>
    </div>
  );
};

export default Nav;
