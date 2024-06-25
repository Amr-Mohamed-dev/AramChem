import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Popover } from "@headlessui/react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
    },
    {
      name: "About",
    },
    {
      name: "Services",
    },
    {
      name: "Contact-Us",
    },
  ];

  return (
    <header className=" text-white w-full bg-black/95">
      <nav
        className="mx-auto flex max-w-7xl lg:max-w-[85%] items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-white font-bold text-[20px] lg:text-[25px]">
              AramChem
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navLinks.map((item) => (
            <a
              key={item.name}
              className={({ isActive }) => {
                return (
                  "text-sm font-semibold leading-6 " +
                  (isActive
                    ? " text-gray-100 border-b-2 border-primary transition duration-300 ease-in-out"
                    : " text-gray-500 hover:text-gray-300  transition duration-300 ease-in-out")
                );
              }}
            >
              {item.name}
            </a>
          ))}
        </Popover.Group>
        {/* <div
          to={"/contact-us"}
          className="hidden lg:block text-[16px] font-semibold lg:ml-10 py-1 px-3 bg-primary rounded-md leading-6 text-gray-100 hover:bg-secondary transition duration-300 ease-in-out"
        >
          Contact Us
        </div> */}
      </nav>

      {/* mobile menu */}

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full h-[45%] overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-400/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <span className="text-white font-bold text-[20px]">AramChem</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 " aria-hidden="true" />
            </button>
          </div>
          <div className="mt-9 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {navLinks.map((item) => (
                <div
                  key={item.name}
                  className="space-y-1 py-2 text-white text-center w-[100%] rounded-lg transition duration-300 ease-in-out hover:bg-white/10"
                >
                  <div
                    to={item.href}
                    className={({ isActive }) => {
                      return (
                        "text-sm font-semibold leading-6 " +
                        (isActive
                          ? " text-white border-b-2 border-primary transition duration-300 ease-in-out"
                          : " text-white hover:text-gray-300  transition duration-300 ease-in-out")
                      );
                    }}
                  >
                    {item.name}
                  </div>
                </div>
              ))}
              {/* <div
                to={"/contact-us"}
                className="block mt-2 mx-auto w-fit text-[14px] font-semibold py-1 px-3 bg-primary rounded-md leading-6 text-gray-100 hover:bg-secondary transition duration-300 ease-in-out"
              >
                Contact Us
              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
