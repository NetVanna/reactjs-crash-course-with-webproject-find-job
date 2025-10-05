import Hero from "../components/Hero";
import Homecard from "../components/HomeCard";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";
const HomePage = () => {
  return (
    <>
      {/* Hero */}
      <Hero
        title="Become React Dev"
        subtitle="Find the react job that fit your skill set"
      />

      {/* Developers and Employers */}
      <Homecard />

      {/* Browse Jobs */}
      <JobListings  isHome ={true}/>

      {/* View All Jobs */}
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
