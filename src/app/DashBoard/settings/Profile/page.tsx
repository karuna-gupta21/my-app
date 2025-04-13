const Profile = () => {
  return (
    <div className=" p-8 min-h-screen bg-gradient-to-br from-indigo-50 via-blue-100 to-purple-100">
      <div className="max-x-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Profile Settings
        </h1>
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 font-semibold">
            Profile picture
          </h2>
          <div className="flex items-enter space-x-4">
            <div className="w-24 h-24 rounded-full bg-gray-300">
              <img
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <div>
            <button className="px-6 mt-5 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-700 transition-colors">
              Change Picture
            </button>
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">
            Profile Information
          </h1>
          <div className="space-y-4">
            <div>
              <label className="block mt-1 text-sm font-medium text-gray-500">
                FullName :{" "}
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 order border-gray-300 shadow-sm rounded-lg"
                defaultValue="john doe"
              />
            </div>
            <div className="block text-sm mt-1 font-medium text-gray-500">
              <label>UserName</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 order border-gray-300 shadow-sm rounded-lg"
                defaultValue="john doe"
              />
            </div>
            <div>
              <label className="block text-sm mt-1 font-medium text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 order border-gray-300 shadow-sm rounded-lg"
                defaultValue="johndoe8074@gmail.com"
              />
            </div>
          </div>
          <div className="flex space-x-9 justify-end mt-9">
            <button className="px-6 py-2 text-gray-900 bg-gray-100  rounded-lg hover:bg-gray-300">
              Cancel
            </button>
            <button className="px-6 py-2 text-white bg-blue-600  rounded-lg hover:bg-blue-800">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
