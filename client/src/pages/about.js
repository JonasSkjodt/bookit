import React from "react";
import './about.css';


const About = () => {
return (
	<div className="">
		 <div className="section about_us_section">
      <div className="row container">
        <h2 className="header our_goal">About Us</h2>
      </div>
    </div>
		<div className="parallax parallax1"></div>
    <div className="section">
      <div className="row container">
        <h2 className="header our_goal">The Goal</h2>
        <p className="paragraphText">Our goal with BookIT has been and always will be to allow students to buy and sell academic literature fast and easily. We believe it's everybody should have the
        right to study only based on their knowledge and hard work. Sadly for many a roadblock will be the price of academic books and literature. We here at BookIT do not believe that the defining factor for wether a student gets to follow their dreams should be
        their wealth. We want to ensure that all students can get required reading material for courses as cheap as possible whilst also allowing students to recoup cost from already owned books. This helps create a 
        circular economy where students help and thrive off each other creating more opportunities for everyone </p>
      </div>
    </div>
    <div className="parallax parallax2"></div>
	<div className="section">
      <div className="row container">
        <h2 className="header our_goal">The Story</h2>
        <p className="paragraphText">BookIT started as a small business catered towards students who didn't want to spend too much on academic books. The founder would
        go around on campus and post online trying to coordinate book trades between students. It eventually got so popular that he decided to launch his own website and BookIT is now one of the 
        most widely used book trading and selling sites for students across the country.</p>
      </div>
      <div className="parallax parallax3"></div>
    </div>
    </div>
	
	
);
};

export default About;
