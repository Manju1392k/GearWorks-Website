export default function Footercomponent() {
    return (
        <>
            {/* footer for all pages */}
            <footer>
                <div className="footer w-[95vw] bg-black text-white mx-auto my-3 h-max rounded-md flex items-center justify-around sm:flex-col lg:flex-col">
                    {/* Heading div */}
                    <div className="heading">
                        <h1 className='text-2xl font-bold my-3'>GearWorks</h1>
                    </div>
                    {/* Icons div */}
                    <div className="links">
                        <a href='https://www.google.com' target="_blank" rel="noreferrer">
                            <i className="bi bi-google text-2xl"></i>
                        </a>
                        <a href='https://www.facebook.com' target="_blank" rel="noreferrer">
                            <i className="bi bi-facebook text-2xl ml-4"></i>
                        </a>
                        <a href='https://www.whatsapp.com' target="_blank" rel="noreferrer">
                            <i className="bi bi-whatsapp text-2xl ml-4"></i>
                        </a>
                        <a href='https://www.instagram.com' target="_blank" rel="noreferrer">
                            <i className="bi bi-instagram text-2xl ml-4"></i>
                        </a>
                    </div>
                    {/* Copy right text div */}
                    <div className="copyright my-4">
                        &copy; 2022 GearWorks Inc.
                    </div>
                </div>
            </footer>
        </>
    )

}