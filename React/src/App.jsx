import React from "react";
import Navbar from "./components/navbar.jsx";
import Card from "./components/card.jsx";

function App() {
  const jobOpenings = [
    {
      brandLogo: "https://example.com/logos/google.png",
      companyName: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "Junior level",
      pay: 45,
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/microsoft.png",
      companyName: "Microsoft",
      datePosted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 60,
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/amazon.png",
      companyName: "Amazon",
      datePosted: "3 days ago",
      post: "Data Analyst",
      tag1: "Part-time",
      tag2: "Junior level",
      pay: 35,
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/meta.png",
      companyName: "Meta",
      datePosted: "7 days ago",
      post: "Product Manager",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 70,
      location: "Islamabad, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/netflix.png",
      companyName: "Netflix",
      datePosted: "2 days ago",
      post: "UI/UX Designer",
      tag1: "Part-time",
      tag2: "Junior level",
      pay: 40,
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/airbnb.png",
      companyName: "Airbnb",
      datePosted: "8 days ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 55,
      location: "Karachi, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/uber.png",
      companyName: "Uber",
      datePosted: "6 days ago",
      post: "Mobile App Developer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 65,
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/spotify.png",
      companyName: "Spotify",
      datePosted: "9 days ago",
      post: "DevOps Engineer",
      tag1: "Full-time",
      tag2: "Mid level",
      pay: 50,
      location: "Rawalpindi, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/twitter.png",
      companyName: "Twitter",
      datePosted: "4 days ago",
      post: "Content Strategist",
      tag1: "Part-time",
      tag2: "Junior level",
      pay: 30,
      location: "Lahore, Pakistan",
    },
    {
      brandLogo: "https://example.com/logos/tesla.png",
      companyName: "Tesla",
      datePosted: "1 day ago",
      post: "QA Engineer",
      tag1: "Full-time",
      tag2: "Senior level",
      pay: 58,
      location: "Islamabad, Pakistan",
    },
    
  ];

  console.log(jobOpenings);

  return (
    <>
      <div className="parent">
        {jobOpenings.map(function (elem,idx){
          return <div key={idx}>
          
          <Card  company={elem.companyName} post={elem.post} date={elem.datePosted} img={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location}/>;
</div>;
        })}

      </div>
    </>
  );
}

export default App;
