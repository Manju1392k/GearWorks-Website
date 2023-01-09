export default function Navbar() {
  return (
    <>
      {/* Nabar for all pages */}
      <header>
        <div className="navbar mx-auto w-[95vw] flex justify-around items-center h-[5rem] bg-gradient-to-r from-[#42275a] to-[#734b6d] my-3 rounded-md">
          <div className="logo">
            <a href="#">
              <h1 className="text-white font-bold text-3xl">GearWorks</h1>
            </a>
          </div>
          <div className="links">
            <button className="bg-white rounded-md py-4 mx-4 px-5 font-bold">
              Bikes Blogs
            </button>
            <button className="text-white font-bold mx-5">Prices</button>
            <button className="text-white font-bold mx-5">Location</button>
          </div>
          <div className="search flex items-center bg-white rounded-md ">
            <i class="bi bi-search text-black text-xl my-1 mx-2"></i>
            <input
              type="search"
              placeholder="Search"
              className="mx-2 my-1 focus:outline-none"
            />
          </div>
        </div>
      </header>
    </>
  );
}
