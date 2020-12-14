import React, { BaseSyntheticEvent } from 'react';
import { GrClose } from 'react-icons/gr';

type Props = {
  active: boolean;
  toggleSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderSearch: React.FC<Props> = ({ active, toggleSearch }) => {
  const handleSearch = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    toggleSearch(false);
  };
  return (
    <div
      className={`${
        !active ? 'hidden' : 'flex'
      }  animate-fade bg-gray-100 z-50 fixed top-0 right-0 w-full h-screen flex items-center justify-center`}
    >
      <div className="w-3/5">
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search product"
            className="w-full border-b-2 border-black-300 text-6xl bg-gray-100 focus:outline-none focus:placeholder-gray-100"
          />
        </form>
        <p className="text-gray-300 mt-2 text-xl">#Hit enter to search</p>
      </div>
      <button
        className="absolute top-8 right-8 text-5xl transform hover:rotate-45 transition duration-500 ease-in-out focus:outline-none"
        onClick={() => toggleSearch(false)}
      >
        <GrClose />
      </button>
    </div>
  );
};

export default HeaderSearch;
