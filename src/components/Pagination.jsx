// import { useEffect, useState } from "react"

// const Pagination = ({
//      totalCount = 0,
//      perPage = 3,
//      onChange = () => { }
// }) => {

//      const [page, setPage] = useState(1)

//      const handelPaginationButton = (value) => {
//           setPage(value)
//      }

//      const numberOfPages = Math.ceil(totalCount / perPage)
//      const pages = [...Array(numberOfPages).keys()].map(element => element + 1)

//      useEffect(() => {
//           onChange(page)
//      }, [page])

//      return (
//           <div className='flex justify-center mt-12'>
//                <button
//                     disabled={page === 1}
//                     onClick={() => handelPaginationButton(page - 1)}
//                     className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
//                     <div className='flex items-center -mx-1'>
//                          <svg
//                               xmlns='http://www.w3.org/2000/svg'
//                               className='w-6 h-6 mx-1 rtl:-scale-x-100'
//                               fill='none'
//                               viewBox='0 0 24 24'
//                               stroke='currentColor'
//                          >
//                               <path
//                                    strokeLinecap='round'
//                                    strokeLinejoin='round'
//                                    strokeWidth='2'
//                                    d='M7 16l-4-4m0 0l4-4m-4 4h18'
//                               />
//                          </svg>

//                          <span className='mx-1'>previous</span>
//                     </div>
//                </button>

//                {pages.map(btnNum => (
//                     <button
//                          onClick={() => handelPaginationButton(btnNum)}
//                          key={btnNum}
//                          className={`hidden px-4 py-2 mx-1 ${page === btnNum ? 'bg-blue-500 text-white' : ''} transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
//                     >
//                          {btnNum}
//                     </button>
//                ))}

//                <button
//                     disabled={page === numberOfPages}
//                     onClick={() => handelPaginationButton(page + 1)}
//                     className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
//                     <div className='flex items-center -mx-1'>
//                          <span className='mx-1'>Next</span>

//                          <svg
//                               xmlns='http://www.w3.org/2000/svg'
//                               className='w-6 h-6 mx-1 rtl:-scale-x-100'
//                               fill='none'
//                               viewBox='0 0 24 24'
//                               stroke='currentColor'
//                          >
//                               <path
//                                    strokeLinecap='round'
//                                    strokeLinejoin='round'
//                                    strokeWidth='2'
//                                    d='M17 8l4 4m0 0l-4 4m4-4H3'
//                               />
//                          </svg>
//                     </div>
//                </button>
//           </div>
//      )
// }

// export default Pagination