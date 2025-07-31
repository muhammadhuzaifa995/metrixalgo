import { CiFilter, CiLocationArrow1 } from "react-icons/ci";
import Layout from "./layout";
import OnlyDropdown from "./onlyDropDown";
import FilterDropdownMenu from "./customer-filter-drop";
import CustomerTable from "./customer-table";

const Customers = () => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-plus w-4 h-4"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
              Add a New Customer
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {/* first card  */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="w-full">
                <div className="flex justify-between">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#FFCC91"
                      fill-opacity="0.16"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9927 20.6724C19.0668 20.6724 21.6943 21.1382 21.6943 22.999C21.6943 24.8599 19.0843 25.339 15.9927 25.339C12.9177 25.339 10.291 24.8774 10.291 23.0157C10.291 21.154 12.9002 20.6724 15.9927 20.6724Z"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9929 18.0163C13.9746 18.0163 12.3379 16.3805 12.3379 14.3622C12.3379 12.3438 13.9746 10.708 15.9929 10.708C18.0104 10.708 19.6471 12.3438 19.6471 14.3622C19.6546 16.373 18.0296 18.0088 16.0187 18.0163H15.9929Z"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.7354 17.0679C23.0695 16.8804 24.097 15.7354 24.0995 14.3496C24.0995 12.9837 23.1037 11.8504 21.7979 11.6362"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M23.4961 20.2769C24.7886 20.4694 25.6911 20.9227 25.6911 21.856C25.6911 22.4985 25.2661 22.9152 24.5794 23.176"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <OnlyDropdown />
                </div>
                <div className="flex justify-between">
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      All Customers
                    </h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">1,250</p>
                      <p className="text-sm text-green-500">+15.80%</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      Active
                    </h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">1,180</p>
                      <p className="text-sm text-green-500">+85%</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      In-Active
                    </h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">70</p>
                      <p className="text-sm text-[#CC5F5F]">-10%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second card  */}
            <div className="flex justify-between bg-white p-4 h-37 rounded-xl shadow-md">
              <div className="w-full">
                <div className="flex justify-between">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="36"
                      height="36"
                      rx="8"
                      fill="#FFCC91"
                      fill-opacity="0.16"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.7615 25.9167H14.805C12.2496 25.9167 10.2893 24.9937 10.8461 21.279L11.4945 16.2447C11.8377 14.3911 13.0201 13.6817 14.0574 13.6817H22.5395C23.5921 13.6817 24.7058 14.4445 25.1024 16.2447L25.7508 21.279C26.2237 24.5742 24.3168 25.9167 21.7615 25.9167Z"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.876 13.4987C21.876 11.5103 20.2641 9.89835 18.2757 9.89835V9.89835C17.3182 9.89429 16.3985 10.2718 15.72 10.9474C15.0416 11.6231 14.6601 12.5411 14.6602 13.4987V13.4987"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.7471 17.2515H20.709"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.8878 17.2515H15.8496"
                      stroke="#130F26"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <OnlyDropdown />
                </div>
                <div className="flex justify-between">
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      New Customers
                    </h2>
                    <div className="flex  items-center ">
                      <p className="text-2xl font-bold">30</p>
                      <p className="text-sm text-[#CC5F5F]">-20%</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      Purchasing
                    </h2>
                    <p className="text-2xl font-bold">657</p>
                  </div>
                  <div className="text-left">
                    <h2 className="text-lg font-medium text-gray-400 mt-4">
                      Abandoned Carts
                    </h2>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* third card  */}
          <div className="bg-white p-4 rounded-xl shadow-md flex min-h-[650px] mt-4">
            <div className="w-full">
              <div className="w-full md:flex justify-between mb-6 ">
                <h1 className="font-medium text-md">Customers Summary</h1>
                <div className="hidden lg:flex gap-2">
                  <input
                    type="search"
                    placeholder="Search"
                    className="shadow border border-gray-300 rounded px-2 py-1 text-sm w-48"
                  />
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-2 py-1 text-sm">
                    <CiFilter />
                    Filter
                  </button>
                  <button className="flex items-center gap-1 border border-gray-300 rounded px-2 py-1 text-sm">
                    <CiLocationArrow1 />
                    Share
                  </button>
                  <button className="border border-gray-300 rounded px-2 py-1 text-sm">Bulk</button>
                </div>
                <div className="hidden sm:flex lg:hidden gap-2 w-full sm:w-auto">
                  <input
                    type="search"
                    placeholder="Search"
                    className="border border-gray-300 rounded px-2 py-1 text-sm flex-1"
                  />
                  <FilterDropdownMenu />
                </div>
              </div>
              <CustomerTable />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Customers;
