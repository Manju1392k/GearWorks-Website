
import Link from 'next/Link'

export default function Navbar() {

  // Function for Reloading the Page. Reload is required because of (Text Animation).
  const ReloadPage = () => {
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  // Function for OpenMenuBar
  const OpenMenubar = () => {
    if (document.getElementById('Menubar')) {
      document.getElementById('Menubar').style.display = 'flex';
    }
  }

  // Function for CloseMenuBar
  const CloseMenubar = () => {
    if (document.getElementById('Menubar')) {
      document.getElementById('Menubar').style.display = 'none';
    }
  }

  return (
    <>
      {/* Nabar for all pages */}
      <header>
        <div className="navbar mx-auto w-[95vw] flex justify-around items-center h-[5rem] bg-gradient-to-r from-[#42275a] to-[#734b6d] my-3 rounded-md sm:hidden lg:hidden">
          <div className="logo">
            <Link href='/' onClick={ReloadPage}>
              <h1 className="text-white font-bold text-3xl hover:text-slate-400 active:text-blue-400" >GearWorks</h1>
            </Link>
          </div>
          <div className="links">
            <Link href='/bikeblogs'>
              <button className="bg-white rounded-md py-4 mx-4 px-5 font-bold hover:bg-black hover:text-white active:bg-slate-500 active:font-bold">
                Bikes Blogs
              </button>
            </Link>
            <Link href='/bikes'>
              <button className="text-white font-bold mx-5 hover:text-slate-300 active:text-blue-600">Bikes</button>
            </Link>
            <button className="text-white font-bold mx-5 hover:text-slate-300 active:text-blue-600">Prices</button>
            <button className="text-white font-bold mx-5 hover:text-slate-300 active:text-blue-600">Location</button>
          </div>
          <div className="search flex items-center bg-white rounded-md ">
            <i className="bi bi-search text-black text-xl my-1 mx-2"></i>
            <input
              type="search"
              placeholder="Search"
              className="mx-2 my-1 focus:outline-none"
            />
          </div>
        </div>

        {/* Div for Mobile Navbar. For all pages */}
        <div className="mobilenavbar hidden sm:flex sm:h-[5rem] sm:w-[95vw] sm:bg-gradient-to-r from-[#42275a] to-[#734b6d] sm:my-3 sm:mx-auto sm:rounded-md sm:justify-around sm:items-center lg:flex lg:h-[5rem] lg:w-[95vw] lg:bg-gradient-to-t lg:mx-auto lg:my-3 lg:rounded-md lg:justify-around lg:items-center">
          <div className="logo">
            <Link href='/' onClick={ReloadPage}>
              <h1 className="text-white font-bold text-3xl hover:text-slate-400 active:text-blue-400" >GearWorks</h1>
            </Link>
          </div>
          <i className="bi bi-list text-3xl text-white" onClick={OpenMenubar} ></i>

        </div>

        {/* Div for Menubar */}
        <div className="mobilemenubar hidden sm:hidden sm:w-[100vw] sm:h-max sm:bg-gradient-to-r from-[#42275a] to-[#734b6d] sm:flex-col sm:items-center sm:fixed sm:top-0 lg:hidden lg:w-[100vw] lg:h-max lg:bg-gradient-to-r lg:flex-col lg:items-center lg:fixed lg:top-0" id='Menubar'>
          <i className="bi bi-x-circle-fill text-white my-5 text-3xl ml-[75vw]" onClick={CloseMenubar}></i>
          <Link href='/bikeblogs'>
            <button className="bg-white rounded-md py-3 px-4 font-bold hover:bg-black hover:text-white active:bg-slate-500 active:font-bold my-2">
              Bikes Blogs
            </button>
          </Link>
          <Link href='/bikes'>
            <button className="text-white font-bold hover:text-slate-300 active:text-blue-600 my-2">Bikes</button>
          </Link>
          <button className="text-white font-bold  hover:text-slate-300 active:text-blue-600 my-2">Prices</button>
          <button className="text-white font-bold hover:text-slate-300 active:text-blue-600 my-2 mb-9">Location</button>
        </div>
      </header>
    </>
  );
}
