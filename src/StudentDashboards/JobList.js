import React from 'react';
import { Link } from 'react-router-dom';

const JobList = () => {
  // Fetch job data from your API or other data source
  const jobs = [
    { id: 1, title: 'Software Engineer Intern', company: 'TechCo' },
    { id: 2, title: 'Marketing Assistant', company: 'MarketingPro' },
    // Add more job entries as needed
  ];

  return (
    <div>
      
      <h2>Job List</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.title} at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
