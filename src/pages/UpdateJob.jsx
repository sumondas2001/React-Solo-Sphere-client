import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";

const UpdateJob = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate()
  const [jobDetail, setJobDetail] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const { job_title, category, min_price, max_price, description } = jobDetail || [];




  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/job/${id}`)
      .then(res => {
        setJobDetail(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const job_title = from.job_title.value;

    const deadline = startDate;
    const category = from.category.value;
    const min_price = parseFloat(from.min_price.value);
    const max_price = parseFloat(from.max_price.value);
    const description = from.description.value;


    const updateJob = {

      job_title,
      deadline,
      category,
      min_price,
      max_price,
      description,
      buyer: {
        buyer_email: user?.email,

        name: user?.displayName,
        photo: user?.photoURL,
      }
    }
    // console.table(addJob)

    axios.put(`${import.meta.env.VITE_API_URL}/updateJob/${id}`, updateJob)
      .then(res => {
        console.log(res.data)
        toast.success('Job Data Updated Successfully!')
        navigate('/my-posted-jobs');
        from.reset();
      })
      .catch(error => {
        console.log(error)
      })
  }



  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Job
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                defaultValue={job_title}
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
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
                defaultValue={user?.email}
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>
              <DatePicker className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'" selected={startDate} onChange={(date) => setStartDate(date)} />
              {/* Date picker input field */}
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                defaultValue={category}


                id='category'
                className='border p-2 rounded-md'
              >
                <option value='Web Development'>Web Development</option>
                <option value='Graphics Design'>Graphics Design</option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                defaultValue={min_price}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                defaultValue={max_price}
                type='number'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              defaultValue={description}
              id='description'
              cols='30'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button type="submit" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateJob;
