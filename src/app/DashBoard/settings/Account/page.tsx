const Account = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-9 ">
      <div className="bg-white shadow-xl mx-auto  rounded-xl p-8 ">
        <h1 className="px-4 py-4 font-bold mb-8 text-gray-800 text-3xl flex items-center justify-center">
          Account Settings
        </h1>
        <div className="space-y-8">
          <div>
            <h1 className="text-semibold text-xl text-gray-700 mb-5 flex items-center justify-center">
              Profile Information
            </h1>
            <div className="space-y-8">
              <div>
                <label className="block text-md font-md ml-2 text-gray-600 ">
                  Name :{" "}
                </label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="mt-1 block w-full px-4 py-2 border border-gray-400 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1"
                />
              </div>
              <div>
                <label className="block text-md ml-2 font-md  text-gray-600 ">
                  {" "}
                  Email :
                </label>
                <input
                  type="email"
                  defaultValue="JohnDoe8089@gmail.com"
                  className="mt-1 block w-full  px-4 py-2 border border-gray-400 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1"
                />
              </div>
            </div>
            <div>
              <div className="mt-8">
                <h1 className="text-semibold text-xl text-gray-700 mb-4 flex items-center justify-center">
                  Security
                </h1>
                <div>
                  <label className="block text-md ml-2 font-md  mb-2 text-gray-600 ">
                    Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="mt-1 block w-full  px-4 py-2 border border-gray-400 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1"
                  />
                </div>
                <div>
                  <label className="block text-md ml-2 font-md mb-2 text-gray-600 mt-5">
                    Confirm Password :
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="mt-1 block w-full  px-4 py-2 border border-gray-400 shadow-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ml-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-8 mt-8">
              <button className=" px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Cancel
              </button>
              <button className=" px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Account;
