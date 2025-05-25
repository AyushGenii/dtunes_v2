import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import { Bell, Menu, Search, X } from "lucide-react";

const NavBar = () => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="bg-gray-100 shadow px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left: Brand */}
        <div className="text-xl font-bold text-gray-800">Dtunes</div>

        {/* Right (mobile): Toggle Buttons */}
        <div className="sm:hidden flex items-center gap-3">
          <button
            aria-label="Toggle Search"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            {showMobileSearch ? (
              <X className="w-6 h-6" />
            ) : (
              <Search className="w-6 h-6" />
            )}
          </button>
          <button
            aria-label="Toggle Menu"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Right (desktop): Notifications and Profile */}
        <div className="hidden sm:flex items-center gap-4">
          <button className="relative" aria-label="Notifications">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <ProfileButton />
        </div>
      </div>

      {/* Desktop SearchBar */}
      <div className="hidden sm:block max-w-md mx-auto">
        <SearchBar />
      </div>

      {/* Mobile SearchBar */}
      {showMobileSearch && (
        <div className="sm:hidden mt-3">
          <SearchBar />
        </div>
      )}

      {/* Mobile Menu Items */}
      {showMobileMenu && (
        <div className="sm:hidden mt-3 flex flex-col gap-3">
          <button className="relative" aria-label="Notifications">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <ProfileButton />
        </div>
      )}
    </div>
  );
};

export default NavBar;
