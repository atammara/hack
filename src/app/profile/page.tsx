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
    profileImage: "https://via.placeholder.com/150", // Replace with user's profile image URL
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User>(user);

  const handleEditToggle = () => {
    if (isEditing) {
      setUser(editedUser); // Save changes
    } else {
      setEditedUser(user); // Reset edited data
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleLogout = () => {
    console.log("User logged out");
    setUser({ name: "", email: "", profileImage: "" });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditedUser({ ...editedUser, profileImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 text-white w-64 p-6 hidden md:block">
        <h2 className="text-lg font-semibold mb-6">Navigation</h2>
        <nav className="space-y-4">
          <Link href="/" className="block hover:text-gray-300">
            Dashboard
          </Link>
          <Link href="/" className="block hover:text-gray-300">
            Settings
          </Link>
          <button onClick={handleLogout} className="text-red-400 hover:text-red-300">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <div className="text-center mb-6">
            <img
              src={user.profileImage || "https://via.placeholder.com/150"}
              alt={user.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-blue-500"
            />
            <h2 className="text-2xl font-semibold mt-4">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>

          {isEditing ? (
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="profileImage" className="block text-sm font-medium">
                  Profile Image
                </label>
                <input
                  type="file"
                  id="profileImage"
                  name="profileImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                />
              </div>
            </form>
          ) : null}

          <div className="mt-6 flex justify-center space-x-4">
            <button
              onClick={handleEditToggle}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              {isEditing ? "Save" : "Edit Profile"}
            </button>
            {isEditing && (
              <button
                onClick={() => setEditedUser(user)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
