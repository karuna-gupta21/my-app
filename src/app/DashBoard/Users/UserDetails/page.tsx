const UserDetails = () => {
  const user = {
    name: "karuna gupta",
    email: "karunagupta8074@gmail.com",
    role: "Admin",
    status: "Active",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae earum architecto accusantium dolores! Sint voluptatum maxime, consequatur enim laboriosam eveniet veniam qui. Cumque sed obcaecati quaerat minima corporis laborum.",
    ProfilePicture: "https://randomuser.me/api/portraits/men/1.jpg",
    activities: [
      { id: 1, desciption: "Updated password", timeStamp: "2025-02-10" },
      { id: 2, desciption: "changed Email password", timeStamp: "2025-01-25" },
      {
        id: 3,
        desciption: "loged in from new device",
        timeStamp: "2025-01-20",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8  ">
      <div className="max-4-4xl mx-auto bg-white rounded-lg shadow-xl p-8 ">
        <div className="flex items-center mb-8">
          <img
            src={user.ProfilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover mr-6"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800 ">{user.name}</h1>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">Role : {user.role}</p>
            <p
              className={`text-sm mt-2 ${
                user.status === "Active" ? "text-green-600" : "text-red-600"
              }`}
            >
              status : {user.status}
            </p>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">About</h2>
          <p className="text-gray-600">{user.bio}</p>
        </div>
        <div>
          <h2>Recent Activities</h2>
          <ul className="space-y-4 ">
            {user.activities.map((activity) => (
              <li key={activity.id} className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex item-center justify-center   ">
                  <span className="text-sm flex items-center">A</span>
                </div>
                <div>
                  <p className="text-gray-700">{activity.desciption}</p>
                  <p className="text-sm text-gray-500 ">{activity.timeStamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors ">
            Edit Profile
          </button>
          <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors ">
            Send Profile
          </button>
        </div>
      </div>
    </div>
  );
};
export default UserDetails;
