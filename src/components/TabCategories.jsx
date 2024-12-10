import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
const TabCategories = () => {
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
                         <JobCard></JobCard>
                    </TabPanel>
                    <TabPanel>
                         <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                         <h2>Any content 3</h2>
                    </TabPanel>
               </div>
          </Tabs>
     );
};

export default TabCategories;