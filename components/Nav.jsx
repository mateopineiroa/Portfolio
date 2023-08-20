import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { PiHamburgerFill, PiHamburgerLight } from "react-icons/pi";

const Nav = ({
  scrollAboutMe,
  scrollIntro,
  scrollSkills,
  scrollProjects,
  scrollContact,
}) => {
  const [isRendered, setIsRendered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const Sections = [
    { title: "Intro", onClick: scrollIntro },
    { title: "About Me", onClick: scrollAboutMe },
    { title: "Skills", onClick: scrollSkills },
    { title: "Projects", onClick: scrollProjects },
    { title: "Contact", onClick: scrollContact },
  ];

  useEffect(() => {
    if (!isRendered) setIsRendered(true);
    if (
      (isRendered && localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isRendered]);

  return (
    <header className="text-[#11181C]  dark:text-white">
      <nav
        className={`${
          !mobileMenuOpen &&
          "backdrop-blur:bg-white/90 backdrop-blur dark:bg-[#111827]/90"
        } fixed top-0 z-20 mx-auto flex w-full items-center  justify-end p-3 lg:justify-center lg:px-8`}
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-6 text-inherit"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Close menu</span>
            {isRendered && window && window.localStorage.theme === "dark" ? (
              <PiHamburgerFill size={25} />
            ) : (
              <PiHamburgerLight size={25} />
            )}
          </button>
        </div>
        <Popover.Group className=" hidden items-center dark:text-white lg:flex lg:gap-x-12">
          <button
            type="button"
            className="ease p-4 text-xs font-bold transition-all hover:text-gray-500 dark:text-inherit sm:text-base"
            onClick={() => {
              setIsRendered(!isRendered);
              if (window.localStorage.theme === "light") {
                window.localStorage.theme = "dark";
              } else {
                window.localStorage.theme = "light";
              }
            }}
          >
            {isRendered && window && window.localStorage.theme === "dark" ? (
              <MdDarkMode size={25} />
            ) : (
              <MdLightMode size={25} />
            )}
          </button>

          {Sections.map(({ title, onClick }) => (
            <button
              key={title}
              className="z-30 p-4 text-sm font-semibold leading-6 text-gray-800 dark:text-gray-200"
              onClick={onClick}
            >
              {title}
            </button>
          ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="dark:bg-[#111827] lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-30" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto bg-white px-6 py-6  dark:bg-[#111827] dark:text-white sm:max-w-sm">
          <div className="flex items-center justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-inherit"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              {isRendered && window && window.localStorage.theme === "dark" ? (
                <PiHamburgerFill size={25} />
              ) : (
                <PiHamburgerLight size={25} />
              )}
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 text-inherit">
              <div className="h-full w-full space-y-2 py-6">
                {Sections.map(({ title, onClick }) => (
                  <button
                    key={title}
                    className="-mx-3 block w-full rounded-lg px-3 py-2 text-left text-base font-semibold leading-7  hover:bg-gray-50 dark:hover:bg-[#1F2937]"
                    onClick={() => {
                      onClick();
                      setMobileMenuOpen(false);
                    }}
                  >
                    {title}
                  </button>
                ))}

                <button
                  type="button"
                  className="ease absolute bottom-4 left-4 p-2 text-xs font-bold transition-all hover:text-gray-500 dark:text-inherit sm:text-base"
                  onClick={() => {
                    setIsRendered(!isRendered);
                    if (window.localStorage.theme === "light") {
                      window.localStorage.theme = "dark";
                    } else {
                      window.localStorage.theme = "light";
                    }
                  }}
                >
                  {isRendered &&
                  window &&
                  window.localStorage.theme === "dark" ? (
                    <MdDarkMode size={25} />
                  ) : (
                    <MdLightMode size={25} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Nav;
