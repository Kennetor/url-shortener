function DropdownMenu() {
  return (
    <>
      <div className="absolute right-5 top-6 scale-150 text-white z-50 five lg:hidden">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn m-1 bg-[#3b3054] text-center bg-transparent hover:bg-transparent border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-[#3b3054] top-20 rounded-box w-52 -translate-x-4 items-center"
          >
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
            <hr className="w-40" />
            <li>
              <a>Login</a>
            </li>
            <li>
              <div className="w-44 rounded-full text-[12px] bg-[#2acfcf]  flex justify-center mb-4">
                Sign Up
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default DropdownMenu;
