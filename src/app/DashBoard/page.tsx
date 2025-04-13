import Link from "next/link.js";
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-9">
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-400 mb-4 sm:mb-0">
            Dashboard
          </h1>
          <p className="text-lg text-gray-400 mt-3">
            Welcome here you can manage your tasks,View analytics and make
            adjustment
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link
            href="DashBoard/tasks"
            className="bg-blue-300 p-6 rounded-xl shadow-md hover: shadow-xl transition-all duration-200 ease-in-out transfrom hover:scale-105 "
          >
            <div className="flex item-center justify-between ">
              <h2 className="text-xl font-semibold text-blue-800">Tasks</h2>
              <span className="text-blue-400 text-2xl">📋</span>
            </div>
            <p className="text-gray-600 mt-2">
              {" "}
              View, organize, and manage your daily tasks.
            </p>
          </Link>
          <Link
            href="DashBoard/Analytics"
            className="bg-green-100 p-6 rounded-xl shadow-md hover: shadow-xl transition-all duration-200 ease-in-out transfrom hover:scale-105 "
          >
            <div className="flex item-center justify-between ">
              <h2 className="text-xl font-semibold text-green-800">
                Analytics
              </h2>
              <span className="text-green-400 text-2xl">📊</span>
            </div>
            <p className="text-gray-600 mt-2">
              {" "}
              Gain insights into your performance and trends.
            </p>
          </Link>
          <Link
            href="DashBoard/settings"
            className="bg-yellow-100 p-6 rounded-xl shadow-md hover: shadow-xl transition-all duration-200 ease-in-out transfrom hover:scale-105 "
          >
            <div className="flex item-center justify-between ">
              <h2 className="text-xl font-semibold text-yellow-800">
                Settings
              </h2>
              <span className="text-yellow-400 text-2xl">⚙️</span>
            </div>
            <p className="text-gray-600 mt-2">
              {" "}
              Customize and tweak your dashboard settings.
            </p>
          </Link>
          <Link
            href="DashBoard/Users"
            className="bg-red-100 p-6 rounded-xl shadow-md hover: shadow-xl transition-all duration-200 ease-in-out transfrom hover:scale-105 "
          >
            <div className="flex item-center justify-between ">
              <h2 className="text-xl font-semibold text-red-800">Users</h2>
              <span className="text-red-400 text-2xl">👥</span>
            </div>
            <p className="text-gray-600 mt-2">
              {" "}
              View and manage your user base.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
