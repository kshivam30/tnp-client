import React from 'react';
import Layout from '../layout/Layout';
import ProfileCard from '../components/ProfileCard';
import KeyValueCard from '../components/KeyValueCard';

const HomePage = () => {
  const profile = {
    name: "John Doe",
    avatarUrl: "https://via.placeholder.com/150",
    description: "Software Engineer"
  };

  const keyValueData = [
    { key: "Email", value: "john.doe@example.com" },
    { key: "Phone", value: "(123) 456-7890" },
    { key: "Location", value: "San Francisco, CA" }
  ];

  return (
    <Layout>
      <div>
        <h1>Welcome to the Home Page</h1>
        <ProfileCard 
          name={profile.name} 
          avatarUrl={profile.avatarUrl} 
          description={profile.description} 
        />
        <KeyValueCard data={keyValueData} />
      </div>
    </Layout>
  );
};

export default HomePage;

