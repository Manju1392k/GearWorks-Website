/* eslint-disable @next/next/no-img-element */

import Head from "next/head";

export default function Bikes({ data }) {
  return (
    <>
      <Head>
        <title>Bikes</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      {/* Div for margin:0 and padding:0 for all elements */}
      <div className="m-0 p-0  ">
        {/* Main tag for main content */}
        <main className="blackbox w-[90vw] mx-auto bg-white h-max rounded-md p-6">

          <div className="bikes grid grid-cols-2 place-items-center sm:flex sm:flex-col lg:flex lg:flex-col sm:items-center lg:items-center">
            {
              data.map(bikedata => {
                return (
                  <div key={bikedata.id} className="bikeone w-[40vw] h-[35rem] shadow-sm shadow-black rounded-xl mb-10 sm:w-[70vw] lg:w-[70vw] sm:h-[26rem] lg:h-[33rem] sm:mb-10 lg:mb-10">
                    {/* Div for image color box */}
                    <div className="imagebackbox w-[40vw] h-[20rem] rounded-t-xl bg-gradient-to-r from-[#42275a] to-[#734b6d] flex justify-around items-center sm:w-[70vw] lg:w-[70vw] sm:h-[10rem] lg:h-[18rem]">
                      <img
                        src={bikedata.bikeImage}
                        alt='Loading'
                        className='w-[30vw] h-max rounded-md sm:w-[50vw] lg:w-[50vw]'
                      />
                    </div>
                    <div className="heading h-[6rem] flex items-center">
                      <h1 className='mx-5 text-2xl font-bold my-4'>{bikedata.bikeName} </h1>
                    </div>
                    <h1 className='mx-5 text-xl font-semibold my-2'>Ex-show-room Price: ₹{bikedata.bikePrice} </h1>
                    <h1 className='mx-5 text-lg my-2'>Engine: {bikedata.bikeEngine} </h1>
                    <h1 className='mx-5 text-base my-2'>Top Speed: {bikedata.bikeTopSpeed} Kmph </h1>
                  </div>
                )
              })
            }

          </div>
        </main>
      </div>

      {/* Text changing div */}
      <div className="textbox my-8 h-[5rem] hidden">
        <h2 className="h1tag text-center font-bold text-5xl transition-all duration-700 font-[cursive]"></h2>
      </div>
    </>
  );
}

// getServerSideProps is a function for fetching data..
// I'm going to use getServerSideProps. You have the option of using getServerSideProps or getStaticProps. In this application, we are using getServerSideProps.

export async function getStaticProps() {
  // Importing bikes data from json file
  const { bikes } = await import('/Database/bikes.json');
  // console.log(bikes)
  return {
    props: {
      data: bikes,
    },
  }
}