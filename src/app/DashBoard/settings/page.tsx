import Link from "next/link.js";
const Setting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-600">Setting</h1>
        <p className="max-w-3xl text-lg text-gray-700 mb-6">
          {" "}
          Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.
        </p>
        <div className="flex space-x-12">
          <div className="w-1/4 bg-white p-6 rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/DashBoard/settings/Account"
                  className="flex items-center text-lg text-gray-800 hover:text-indigo-600 transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                >
                  <span className="text-indigo-900">Account</span>
                </Link>
                <Link
                  href="/DashBoard/settings/Notifications"
                  className="flex items-center text-lg text-gray-800 hover:text-red-600 transition-colors py-2 px-4 rounded-md hover:bg-red-50"
                >
                  <span className="text-red-900">Notifications</span>
                </Link>
                <Link
                  href="/DashBoard/settings/Profile"
                  className="flex items-center text-lg text-gray-800 hover:text-yellow-600 transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                >
                  <span className="text-yellow-900">Profile</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white shadow-md rounded-lg p-9">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Select a Setting
            </h2>
            <p className="text-lg text-gray-900 max-w-3xl">
              {" "}
              Choose an option from the sidebar to manage your account,
              notifications, or profile settings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Setting;
