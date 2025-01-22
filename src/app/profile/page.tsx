"use client";
import { useState } from "react";
import Link from "next/link";

interface User {
  name: string;
  email: string;
  profileImage: string;
}

const UserProfile = () => {
  const [user, setUser] = useState<User>({
    name: "John Doe",
    email: "john.doe@example.com",
    profileImage:
      "https://via.placeholder.com/150", // Replace with the user's actual profile image URL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes when exiting edit mode
      setUser(editedUser);
    } else {
      setEditedUser(user); // Reset edited data to current user
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleLogout = () => {
    console.log("User logged out");
    setUser({ name: "", email: "", profileImage: "" }); // Reset user data
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      {/* Header Section */}
      <div className="relative h-40 bg-blue-500 flex items-center justify-center">
        {user.profileImage ? (
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-24 h-24 rounded-full border-4 border-white absolute bottom-0 transform translate-y-1/2"
          />
        ) : (
          <div className="w-24 h-24 bg-gray-300 rounded-full border-4 border-white flex items-center justify-center absolute bottom-0 transform translate-y-1/2">
            <span className="text-gray-700 text-lg">No Image</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {isEditing ? (
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editedUser.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={editedUser.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </form>
        ) : (
          <div className="text-center">
            {user.name && user.email ? (
              <>
                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.email}</p>
              </>
            ) : (
              <p className="text-gray-500">User is not logged in</p>
            )}
          </div>
        )}

        {/* Buttons Section */}
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={handleEditToggle}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            {isEditing ? "Save" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              onClick={() => setEditedUser(user)} // Reset changes
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          )}
          {!isEditing && (
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div className="p-4 border-t text-center">
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;
