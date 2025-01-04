import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import useAxiosSecure from '../hooks/useAxiosSecure';
const TabCategories = () => {
     const axiosSecure = useAxiosSecure();

     const [jobs, setJobs] = useState([]);

     useEffect(() => {
          axiosSecure.get(`/jobs`)
               .then(res => {
                    setJobs(res.data)
                    console.log(res.data);
               })
               .catch(error => {
                    console.log(error)
               })
     }, [])

     return (
          <Tabs>
               <div className='container px-6 py-10 mx-auto'>

                    <h1 className='text-3xl font-semibold text-center'>Browse Jobs By Categories</h1>
                    <p className='max-w-2xl font-medium my-6 mx-auto text-center'> Three categories available for the time being. They are Web Development, Graphics Design and Digital Marketing. Browse them by clicking on the tabs below.</p>

                    <div className='flex justify-center items-center mt-10'>
                         <TabList >
                              <Tab>Web Development </Tab>
                              <Tab>Graphics Design</Tab>
                              <Tab>Digital Marketing</Tab>
                         </TabList>
                    </div>

                    <TabPanel>
                         <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                              {
                                   jobs.filter(j => j.category === 'Web Development').map(job => <JobCard key={job._id} job={job}></JobCard>)
                              }
                         </div>
                    </TabPanel>
                    <TabPanel>
                         <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                              {
                                   jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCard key={job._id} job={job}></JobCard>)
                              }
                         </div>
                    </TabPanel>
                    <TabPanel>
                         <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                              {
                                   jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCard key={job._id} job={job}></JobCard>)
                              }
                         </div>
                    </TabPanel>
               </div>
          </Tabs>
     );
};

export default TabCategories;