import {Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";
import { Button } from "../components/Button";
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = ({title}) => {
  const PageTitle = useTitle(title);
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg">
            <img src={PageNotFoundImage} alt='404 Page Not Found!' />
          </div>
          
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button> Back To Cinimate </Button>
            
            {/* <button className="relative w-64 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative w-64 px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                   Back To Cinimate
              </span>
            </button> */}


            {/* <button className="w-64 text-xl text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium ">Back To Cinimate</button> */}
          </Link>
        </div>
      </section>
    </main>
  )
}
