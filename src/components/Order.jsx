import React from 'react'
import Layout from './layout'
import { Sidebar } from 'lucide-react'
import OnlyDropdown from './onlyDropDown'


const Order = () => {
  return (
    <>
      <Layout>
        <div className="pt-20 p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* first card  */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="w-full">
                <div className="flex justify-between">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 25.9167H14.805C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.0201 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3168 25.9167 21.7615 25.9167Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.876 13.4987C21.876 11.5103 20.2641 9.89835 18.2757 9.89835V9.89835C17.3182 9.89429 16.3985 10.2718 15.72 10.9474C15.0416 11.6231 14.6601 12.5411 14.6602 13.4987V13.4987" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.7471 17.2515H20.709" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.8878 17.2515H15.8496" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <OnlyDropdown />
                </div>
                <div className="flex justify-between">
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">All Orders</h2>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">Pending</h2>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">Complete</h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">0</p>
                      {/* <p className="text-sm text-green-500">+0.00%</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second card */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="w-full">
                <div className="flex justify-between">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7615 25.9167H14.805C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.0201 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3168 25.9167 21.7615 25.9167Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.876 13.4987C21.876 11.5103 20.2641 9.89835 18.2757 9.89835V9.89835C17.3182 9.89429 16.3985 10.2718 15.72 10.9474C15.0416 11.6231 14.6601 12.5411 14.6602 13.4987V13.4987" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20.7471 17.2515H20.709" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15.8878 17.2515H15.8496" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <OnlyDropdown />
                </div>
                <div className="flex justify-between">
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">Canceled</h2>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">Returned</h2>
                    <p className="text-2xl font-bold">0</p>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">Damaged</h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">0</p>
                      {/* <p className="text-sm text-green-500">+0.00%</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* third card */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
                <div className="w-full">
                  <div className="flex justify-between">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
                      <g clip-path="url(#clip0_659_3522)">
                        <path d="M24.6663 26.3333C25.1266 26.3333 25.4997 25.9602 25.4997 25.5C25.4997 25.0398 25.1266 24.6667 24.6663 24.6667C24.2061 24.6667 23.833 25.0398 23.833 25.5C23.833 25.9602 24.2061 26.3333 24.6663 26.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15.5003 26.3333C15.9606 26.3333 16.3337 25.9602 16.3337 25.5C16.3337 25.0398 15.9606 24.6667 15.5003 24.6667C15.0401 24.6667 14.667 25.0398 14.667 25.5C14.667 25.9602 15.0401 26.3333 15.5003 26.3333Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.83301 8.83334H12.1663L14.3997 19.9917C14.4759 20.3753 14.6846 20.72 14.9893 20.9653C15.294 21.2105 15.6753 21.3408 16.0663 21.3333H24.1663C24.5574 21.3408 24.9387 21.2105 25.2434 20.9653C25.5481 20.72 25.7568 20.3753 25.833 19.9917L27.1663 13H12.9997" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_659_3522">
                          <rect width="20" height="20" fill="white" transform="translate(8 8)" />
                        </clipPath>
                      </defs>
                    </svg>
                    <OnlyDropdown />
                  </div>
                  <div className="flex justify-between">
                    <div className="text-left">
                      <h2 className="text-lg font-medium text-[#CC5F5F] mt-4">Abandoned Cart</h2>
                      <div className="flex  items-center ">
                        <p className="text-2xl font-bold">0</p>
                        {/* <p className="text-sm text-green-500">+0.00%</p> */}
                      </div>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-medium text-gray-400 mt-4">Customers</h2>
                      <p className="text-2xl font-bold">0</p>
                    </div>

                  </div>
                </div>
              </div>

            </div>

              {/* Forth card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex min-h-[650px] mt-4">
              <div className="w-full">
                <div className="itmes-left flex mb-40">
                  <h2 className="text-lg font-semibold text-gray-700">Recent Orders</h2>
                </div>
                <div className="flex items-center justify-center p-8 flex-col text-center gap-3">
                  <svg width="100" height="1o0" viewBox="0 0 141 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="0.5" width="139" height="139" rx="69.5" fill="#F4F5FA" />
                    <rect x="1" y="0.5" width="139" height="139" rx="69.5" stroke="#E1E2E9" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M92.7832 80.7868L90.8609 65.3002C89.6899 59.7741 86.3757 57.5 83.2161 57.5H57.8293C54.6255 57.5 51.2009 59.6149 50.2066 65.3002L48.2623 80.7868C46.6714 92.1574 52.5265 95 60.1713 95H80.8962C88.5189 95 94.1972 90.8839 92.7832 80.7868ZM63.2425 70.3714C62.0222 70.3714 61.033 69.3533 61.033 68.0973C61.033 66.8414 62.0222 65.8232 63.2425 65.8232C64.4627 65.8232 65.452 66.8414 65.452 68.0973C65.452 69.3533 64.4627 70.3714 63.2425 70.3714ZM75.5051 68.0973C75.5051 69.3533 76.4943 70.3714 77.7145 70.3714C78.9348 70.3714 79.924 69.3533 79.924 68.0973C79.924 66.8414 78.9348 65.8232 77.7145 65.8232C76.4943 65.8232 75.5051 66.8414 75.5051 68.0973Z" fill="#BEC0CA" />
                    <path opacity="0.4" d="M82.9347 56.9358C82.9425 57.1297 82.9053 57.3228 82.8258 57.5H79.233C79.1634 57.3199 79.1266 57.1288 79.1242 56.9358C79.1242 52.1421 75.2247 48.256 70.4144 48.256C65.6041 48.256 61.7046 52.1421 61.7046 56.9358C61.7376 57.1224 61.7376 57.3134 61.7046 57.5H58.0247C57.9918 57.3134 57.9918 57.1224 58.0247 56.9358C58.3043 50.2648 63.8125 45 70.5124 45C77.2122 45 82.7204 50.2648 83 56.9358H82.9347Z" fill="#BEC0CA" />
                  </svg>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">No Orders Yet?</h2>
                  <p className="text-sm text-gray-500 mb-6">Add products to your store and start selling to see orders here.</p>
                  <a className="inline-flex items-center gap-2 bg-indigo-500 text-white px-5 py-2 rounded-md hover:bg-indigo-600 transition" 
                  href="" 
                  data-discover="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus w-4 h-4" aria-hidden="true">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                  </svg>New Product</a>
                </div>
              </div>
            </div>


            </div>
      </Layout>
    </>
  )
}

export default Order
