import Layout from './layout'
import OnlyDropdown from './onlyDropDown'

const Inventory = () => {
    return (
        <>
            <Layout>
                <div className="pt-20 p-6 ">
                    <div className="w-full md:flex justify-between mb-6 items-center">
                        <h1 className="font-medium text-xl">Customers Summary</h1>
                        <a
                            className="inline-flex items-center gap-2 bg-indigo-500 text-white px-5 py-2 rounded-full hover:bg-indigo-600 transition"
                            href=""
                            data-discover="true"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4" aria-hidden="true">
                                <path d="M5 12h14"></path>
                                <path d="M12 5v14"></path>
                            </svg>
                            Add a New Customer
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        {/* first card  */}
                        <div className="flex justify-between bg-[#5570F1] p-4 h-37 rounded-xl shadow-md">
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="36" height="36" rx="8" fill="white" fill-opacity="0.16" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8492 21.1101C25.8492 24.0918 24.0917 25.8493 21.11 25.8493H14.625C11.6358 25.8493 9.875 24.0918 9.875 21.1101V14.6101C9.875 11.6326 10.97 9.87508 13.9525 9.87508H15.6192C16.2175 9.87592 16.7808 10.1568 17.1392 10.6359L17.9 11.6476C18.26 12.1259 18.8233 12.4076 19.4217 12.4084H21.78C24.7692 12.4084 25.8725 13.9301 25.8725 16.9726L25.8492 21.1101Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.2344 20.0525H21.5135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-left">
                                        <h2 className="text-lg font-medium text-white mt-4">All Products</h2>
                                        <p className="text-2xl font-bold text-white">350</p>
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-lg font-medium text-white mt-4">Active</h2>
                                        <div className="flex  items-center ">
                                            <p className="text-2xl font-bold text-white">316</p>
                                            <p className="text-sm text-white">+86%</p>
                                        </div>
                                    </div>
                                    <div className="text-left">

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second card  */}
                        <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
                            <div className="w-full">
                                <div className="flex justify-between">
                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9927 20.6724C19.0668 20.6724 21.6943 21.1382 21.6943 22.999C21.6943 24.8599 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8774 10.291 23.0157C10.291 21.154 12.9002 20.6724 15.9927 20.6724Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9929 18.0163C13.9746 18.0163 12.3379 16.3805 12.3379 14.3622C12.3379 12.3438 13.9746 10.708 15.9929 10.708C18.0104 10.708 19.6471 12.3438 19.6471 14.3622C19.6546 16.373 18.0296 18.0088 16.0187 18.0163H15.9929Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M21.7354 17.0679C23.0695 16.8804 24.097 15.7354 24.0995 14.3496C24.0995 12.9837 23.1037 11.8504 21.7979 11.6362" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M23.4961 20.2769C24.7886 20.4694 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <OnlyDropdown />
                                </div>
                                <div className="flex justify-between">
                                    <div className="text-left">
                                        <h2 className="text-lg font-medium text-[#CC5F5F] mt-4">
                                            Low Stock Alert
                                        </h2>
                                        <div className="flex  items-center ">
                                            <p className="text-2xl font-bold">23</p>
                                        </div>
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-lg font-medium text-gray-400 mt-4">Expired</h2>
                                        <p className="text-2xl font-bold">3</p>
                                    </div>
                                    <div className="text-left">
                                        <h2 className="text-lg font-medium text-gray-400 mt-4">1 Start Rating</h2>
                                        <p className="text-2xl font-bold">2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-xl shadow-md mt-4 min-h-screen'>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Inventory
