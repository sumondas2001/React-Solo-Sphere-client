import { useEffect, useState } from "react"
import { useParams } from "react-router";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const JobDetails = () => {
  const axiosSecure = useAxiosSecure()
  const [startDate, setStartDate] = useState(new Date());

  const { user } = useAuth();
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState([]);
  // console.log(id);
  // console.log(import.meta.env.VITE_API_URL);


  const { job_title, deadline, category, min_price, max_price, description, buyer } = jobDetail || [];
  // console.log(buyer.buyer_email);
  // console.log(user.email);

  useEffect(() => {
    axiosSecure.get(`${import.meta.env.VITE_API_URL}/job/${id}`)
      .then(res => {
        setJobDetail(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id]);

  const handelFromSubmission = (e) => {


    e.preventDefault();
    if (buyer?.buyer_email == user.email)
      return toast.error('Action not permitted!')
    const from = e.target;
    const jobId = id;
    const price = parseFloat(from.price.value);
    if (price < parseInt(min_price)) {
      return toast.error('Offer more or at least equal to Minimum Price')
    }
    const bitComment = from.comment.value;
    const email = user?.email;

    const dateline = startDate;

    const status = 'padding';

    const bidData = {
      jobId,
      price,
      bitComment,
      email,
      buyer,
      job_title,
      dateline,
      status,
      category
    }
    console.table(bidData);

    axiosSecure.post(`${import.meta.env.VITE_API_URL}/bid`, bidData)
      .then(res => {
        console.log(res.data)
        if (res.data.acknowledged === true) {
          toast.success("Job Bid successfully")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-800 '>
            <span className="font-bold"> Deadline:</span> {new Date(deadline).toLocaleDateString()}
          </span>
          <span className='px-4 py-2 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-bold text-blue-400 '>
            {job_title}
          </h1>

          <p className='mt-2 text-base font-light text-gray-600 '>
            {description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            Buyer Details:
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm  text-gray-600 '><span className="font-bold">Name :</span> {buyer?.name}</p>
              <p className='mt-2 text-sm  text-gray-600 '>
                <span className="font-bold">Email: </span>   {buyer?.buyer_email}
              </p>
            </div>
            <div className='rounded-full object-cover overflow-hidden w-12 h-12'>
              <img src={buyer?.photo} alt='' />
            </div>
          </div>
          <p className='mt-6 text-lg font-medium text-gray-600 '>
            <span className="font-bold"> Range:</span> ${min_price} - ${max_price}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Place A Bid
        </h2>

        <form onSubmit={handelFromSubmission}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
                Price
              </label>
              <input
                id='price'
                type='text'
                name='price'
                className='block w-full px-4 py-2 mt-2 text-gray-700  bg-white border border-blue-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='comment'>
                Comment
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'" selected={startDate} onChange={(date) => setStartDate(date)} />

            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default JobDetails
