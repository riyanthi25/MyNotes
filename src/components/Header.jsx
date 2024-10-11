import React from "react";
import Input from "./FormInput";

function Header({ search, setQuery }) {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-center md:p-2 md:px-10 bg-[#3B3030] text-white">
      <div>
        <img
          src="/logo.svg"
          alt="Logo"
          className="md:w-9 md:h-9 md:mr-4 mr-1 w-5 h-5"
        />
      </div>
      <h1 className="md:m-2 md:flex-1 md:text-4xl text-xl mr-5 md:mr-0 my-3 md:my-0 text-[#FFF0D1] font-semibold">
        MyNotes
      </h1>
      <div>
        <Input
          value={search}
          onChange={setQuery}
          type="text"
          placeholder="Find your Notes..."
          className="bg-[#FFF0D1] md:rounded-3xl rounded-xl md:pl-5 pl-2 md:text-xl text-base text-[#3B3030] md:py-2 md:mr-3 md:my-2 py-1 my-1 placeholder-[#795757] "
        />
      </div>
    </div>
  );
}

export default Header;
