import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      {/* Menu Bar or Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero title="This is title" subtitle="This is subtitle" />

      {/* Developers and Employers */}
      <Homecard />

      {/* Browse Jobs */}
      <JobListings />

      {/* View All Jobs */}
      <ViewAllJobs />
      
    </>
  );
};

export default App;
