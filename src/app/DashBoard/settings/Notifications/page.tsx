const Notification = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 p-8">
      <div className="max-4-xl bg-white rounded-lg shadow-xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-700">
            Notification Preference
          </h1>
          <div className="space-y-9">
            <div>
              <label className="block text-sm font-md mb-1 text-gray-600">
                Email Notification
              </label>
              <select className="mt-1 block-w-full px-9 py-2 border border-gray-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option className="px-4 py-4">Enabled</option>
                <option className="px-4 py-4">Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1 font-md text-gray-600">
                SMS Notification
              </label>
              <select className="mt-1 block-w-full px-9 py-2 border border-gray-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option className="px-4 py-4">Enabled</option>
                <option className="px-4 py-4">Disabled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm  mb-1 font-md text-gray-600">
                Push Notification
              </label>
              <select className="mt-1 block-w-full px-9 py-2 border border-gray-300 rounded-lg shadow-sm  focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option className="px-4 py-4 ">Enabled</option>
                <option className="px-4 py-4 ">Disabled</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end space-x-8">
            <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-800 transition-colors">
              Cancel
            </button>
            <button className="px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-800 transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Notification;
