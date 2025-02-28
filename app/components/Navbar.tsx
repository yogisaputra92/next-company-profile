export default function Navbar() {
  return (
    <div className="">
      <div className="navbar flex bg-[#2596be]">
        <div className="w-full flex items-center px-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#2596be] rounded-box z-[1] mt-3 w-52 p-2"
            >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <datalist>
                    <summary>Product</summary>
                    <ul className="p-2">
                      <li>
                        <a>Submenu 1</a>
                      </li>
                      <li>
                        <a>Submenu 2</a>
                      </li>
                    </ul>
                  </datalist>
                </li>
                <li>
                  <a>About</a>
                </li>
            </ul>
          </div>
          <h1 className="w-full lg:ml-6 text-2xl font-bold text-center lg:text-start md:text-start">
            Boge
          </h1>
          {/* <a className="btn btn-ghost text-xl">Boge</a> */}
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <details>
                <summary>Product</summary>
                <ul className="p-2 bg-[#2596be]">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
