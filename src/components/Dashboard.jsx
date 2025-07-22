import Example from "./chart-bar-stacked"
import { ChartPieDonut } from "./chart-pie-donut"
import Dropdown from "./dropdown"
import Layout from "./layout"
import OnlyDropdown from "./onlyDropDown"

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="pt-20 p-6 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* First card */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="text-left">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="#5570F1" fill-opacity="0.12" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3986 19.5743C22.9609 19.5743 23.4328 20.0384 23.3468 20.5936C22.8424 23.8603 20.0459 26.2857 16.6731 26.2857C12.9416 26.2857 9.91699 23.2612 9.91699 19.5305C9.91699 16.4568 12.2521 13.5936 14.881 12.9462C15.4459 12.8068 16.0249 13.2041 16.0249 13.7857C16.0249 17.7261 16.1573 18.7454 16.9056 19.2998C17.6538 19.8541 18.5337 19.5743 22.3986 19.5743Z"
                    stroke="#5570F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.0778 16.293C26.1225 13.7614 23.0128 9.68072 19.2234 9.75089C18.9286 9.75616 18.6927 10.0018 18.6795 10.2956C18.5839 12.3772 18.7129 15.0746 18.7848 16.2974C18.8067 16.6781 19.1058 16.9772 19.4857 16.9991C20.7427 17.0711 23.5383 17.1693 25.59 16.8588C25.869 16.8167 26.0734 16.5746 26.0778 16.293Z" stroke="#5570F1"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className="text-lg font-medium text-gray-400 mt-4">
                  Sale
                </h2>
                <div className="flex  items-center mt-2">
                  <p className="text-2xl font-bold">₦0.00</p>
                  <p className="text-sm text-green-500">+0.00%</p>
                </div>
              </div>
              <Dropdown headVolume="Volume" numberValue />
            </div>
            {/* second card */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="text-left">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="#FFCC91" fill-opacity="0.16" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9927 20.6723C19.0668 20.6723 21.6943 21.1382 21.6943 22.999C21.6943 24.8598 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8773 10.291 23.0157C10.291 21.154 12.9002 20.6723 15.9927 20.6723Z" stroke="#1C1D22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9929 18.0165C13.9746 18.0165 12.3379 16.3807 12.3379 14.3623C12.3379 12.344 13.9746 10.7082 15.9929 10.7082C18.0104 10.7082 19.6471 12.344 19.6471 14.3623C19.6546 16.3732 18.0296 18.009 16.0187 18.0165H15.9929Z" stroke="#1C1D22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.7354 17.068C23.0695 16.8805 24.097 15.7355 24.0995 14.3497C24.0995 12.9838 23.1037 11.8505 21.7979 11.6363" stroke="#1C1D22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23.4961 20.2768C24.7886 20.4693 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176" stroke="#1C1D22" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h2 className="text-lg font-medium text-gray-400 mt-4">
                  Customers
                </h2>
                <div className="flex  items-center mt-2">
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-green-500">+0.00%</p>
                </div>
              </div>
              <Dropdown headVolume="Active" numberValue="+0.00%" />
            </div>
            {/* Third card  */}
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
                      <p className="text-sm text-green-500">+0.00%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Fourth card */}
            <div className="flex-block">
              <div className=" bg-white p-4 h-[337px] rounded-xl shadow-md">
                <div className="flex justify-between">
                  <h2 className="text-lg font-semibold text-gray-700">Marketing</h2>
                  <OnlyDropdown />
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="flex items-center space-x-2">
                    <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="8" height="8" rx="4" fill="#5570F1" />
                    </svg>
                    <p className="text-[#A6A8B1] text-sm">Acquisition</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.334961" y="0.5" width="8" height="8" rx="4" fill="#97A5EB" />
                    </svg>
                    <p className="text-[#A6A8B1] text-sm">Purchase</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.669922" y="0.5" width="8" height="8" rx="4" fill="#FFCC91" />
                    </svg>
                    <p className="text-[#A6A8B1] text-sm">Retention</p>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <ChartPieDonut />
                </div>
              </div>
              <div>
              </div>
              {/* eight card */}
              <div className="md:w-173 sale-div col-span-full lg:col-span-3 mt-4 bg-white p-4 rounded-xl shadow-md">
                <div className="w-full">
                  <div className="flex justify-between flex-row ">
                    <div className="flex gap-5 items-center">
                      <h2 className="text-lg font-semibold text-gray-700">Summary</h2>
                      <div className="flex items-center bg-[#5570F114] rounded-full px-3">
                        <span className="text-[#5570F1]">Sales</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#5570F1] lucide lucide-chevron-down ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    <OnlyDropdown />
                  </div>
                  <div className="pt-7">
                    <Example />
                  </div>
                </div>
              </div>
            </div>

            {/* five card */}
            <div className="flex-block">
              <div className="flex justify-between bg-[#5570F1] p-4 h-39 rounded-xl shadow-md mb-6">
                <div className="w-full">
                  <div className="flex justify-between">
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="36" height="36" rx="8" fill="white" fill-opacity="0.16" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M25.8492 21.1101C25.8492 24.0918 24.0917 25.8493 21.11 25.8493H14.625C11.6358 25.8493 9.875 24.0918 9.875 21.1101V14.6101C9.875 11.6326 10.97 9.87508 13.9525 9.87508H15.6192C16.2175 9.87592 16.7808 10.1568 17.1392 10.6359L17.9 11.6476C18.26 12.1259 18.8233 12.4076 19.4217 12.4084H21.78C24.7692 12.4084 25.8725 13.9301 25.8725 16.9726L25.8492 21.1101Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14.2344 20.0525H21.5135" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="text-left">
                      <h2 className="text-lg font-medium text-white mt-4">All Products</h2>
                      <p className="text-2xl font-bold text-white">45</p>
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-medium text-white mt-4">Active</h2>
                      <div className="flex  items-center ">
                        <p className="text-2xl font-bold text-white">32</p>
                        <p className="text-sm text-white">+24%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* six card */}
              <div className="flex justify-between bg-white p-4 h-39 rounded-xl shadow-md">
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
                        <p className="text-sm text-green-500">+0.00%</p>
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
            {/* feven card */}
            <div className="bg-white p-4 rounded-xl shadow-md flex min-h-[726px]">
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
        </div>
      </Layout>
    </>
  )
}

export default Dashboard
