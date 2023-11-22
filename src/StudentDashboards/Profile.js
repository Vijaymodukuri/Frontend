import React from 'react';

const Profile = () => {
  // Fetch user profile data from your API or other data source
  const userProfile = {
    name: 'Vijay',
    email: 'Vijaydattasai@gmail.com',
    // Add more profile details as needed
  };

  return (
    <div>
      
      <h2>Your Profile</h2>
      <p>Name: {userProfile.name}</p>
      <p>Email: {userProfile.email}</p>
      {/* Add more profile details as needed */}
    </div>
  );
};

export default Profile;
