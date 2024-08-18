import React, { useState } from 'react';
import Icon1 from "./icons/SvgIcon1";
import Icon2 from "./icons/SvgIcon2";
import { Button } from "@mui/base";
import "./Steps.css";
// import Working from "./Working/Working";

const Card = ({ title, imageSrc, altText, description, icon, metric }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={altText} className="card-image1" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <div className="card-footer">
        <span className="card-metric">{icon}{metric}</span>
      </div>
    </div>
  );
};
const nutritionIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#0000FF"
    />
  </svg>
);

const physicalActivityIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#FF0000"
    />
  </svg>
);

const sleepIcon = (
  <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M12 2C9.79 2 7.75 3.26 6.68 5.68 5.6 3.26 3.56 2 1.34 2 0.6 2 0 2.6 0 3.34 0 7.42 2.58 11 5.68 13.2 3.56 15.68 1.34 18.62 1.34 21.68 1.34 22.4 2.2 23 3 23h17c0.8 0 1.66-0.6 1.66-1.34 0-3.06-2.78-6.1-5.68-8.4C18.28 4.7 15.32 2.6 12 2zM12 4c1.78 0 3.38 0.72 4.68 1.84 1.31 1.12 2.2 2.59 2.84 4.16H4.48c0.64-1.57 1.54-3.04 2.84-4.16 1.3-1.12 2.9-1.84 4.68-1.84zm-7.4 11.3l1.7 1.7 1.7-1.7-1.7-1.7-1.7 1.7zm3.4 0l1.7 1.7 1.7-1.7-1.7-1.7-1.7 1.7zm3.4 0l1.7 1.7 1.7-1.7-1.7-1.7-1.7 1.7zm6.3-1.7l1.7 1.7 1.7-1.7-1.7-1.7-1.7 1.7z"
    fill="#4CAF50" /* Green color */
  />
</svg>
);

const blueHeartIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#0000FF"
    />
  </svg>
);

const redHeartIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      fill="#FF0000"
    />
  </svg>
);

const greenClockIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
      fill="#008000"
    />
    <path
      d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"
      fill="#008000"
    />
  </svg>
);
const cards = [
  {
    title: "Nutrition",
    imageSrc: "https://s3-alpha-sig.figma.com/img/c791/8478/0d4a881f69ac62b90b5fce8ca2ae5823?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dSXhgW~afPcE79cXat328LygCG6rRko6usTVtVxiA-187eU~kFXd8wj6zzVwN4jTTShUp7N8dBmkchblvmooVR0OauVd7it3iXO-d-T-dz0iZlhtlsoOVsL5MMN7UVu1VtdCek9dMzo~8lO~yANHmyfh0OraF~tUM9e7wclJ43wDESmVls5EKTxovmtgJD7JWDIu4eBeGG3R8cZQRA~c1MyzI6yq5WjDcjItDqfhfb-xLw20TODluA~ykvNV8TAPxLWYDRwy1DFftN88TW6GHHTMJKftePklYzvh~yGqq6x7~oJVvdp9C4pCMDQFladi866qzmINXCEHEbogKelPFQ__",
    altText: "Nutrition",
    description: "Evidence supports the use of whole foods, plant-based nutritional diets to prevent, treat, and reverse chronic diseases.",
    icon: nutritionIcon,
    metric: "121/80 mmHg"
  },
  {
    title: "Exercise",
    imageSrc: "https://s3-alpha-sig.figma.com/img/de26/5be3/7badb81d55ce232eb9da300186918b0c?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EYRxKIyWSsQtS3jVOdYFuT7CIP2OxHSOPHH3~sR2zzOLXWSGZR8zT9GimNlYo4~yrZvMGcL499Y5p--206-yxTX~OIQYJs9NL2Q6aYasd2gn3ouHMCNJ8g1veDuIUJYP97MyjAh2tWUQYppLq55ewMKVSN5DhkGCbysrMTkCT~0XBIo0uNCug9RefMsrJLWnUCmGXFy4HJtD-upizzcfW~v9M~8oxn9SVskBelEJD3YI112OJv3hQg4hf5DlMWkMuMH3ypBAJkQtmSkvfSi5Jdp~euLRg2TRaLE7hUHq4czR70exUDJmd4DGT3CMAa1orp-QaUPZVxVurbG0hMO6fg__",
    altText: "Exercise",
    description: "Regular physical activity helps maintain a healthy weight, boosts mental health, and reduces the risk of chronic diseases.",
    icon: physicalActivityIcon,
    metric: "30 minutes/day"
  },
  {
    title: "Sleep",
    imageSrc: "https://s3-alpha-sig.figma.com/img/7e69/9d30/c29ce0f90e9b6057b9d430849b53d270?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EZbHm5p0jAbpFFRUr11-UaPi6bcF22yBrEYH7iWHuGtVa0cXbST4iXfDEUHHOS8YlpjvGrR~JriYkGC5CYQM5x-vxqKwVWdl5Bo5GHLirGj0ws9AmdWFSGnbjBTuUnGw-846bnFBFGNB1TJUc21kaIQxn7T5iBL1P6UrWRgJafvCttFvJP8n6PXnh6DrSnONOO7tU5kYwsWzOGHI8NTshdb9gBOn0fEobRRrL~6Lg4FcoKbwnxqbSDgQiWmKz729F0JZjq42G6FK3itgCcTABWJoQjvpLhT~2x2aIArJfiJmnggem3hEtwPaLSSP6H~apaZZ6w6yCPndZtKtEJgGaw__",
    altText: "Sleep",
    description: "Adequate sleep is essential for overall health, impacting mental function, immune response, and disease prevention.",
    icon: sleepIcon,
    metric: "7-9 hours/night"
  },
  {
    title: "Stress Management",
    imageSrc: "https://s3-alpha-sig.figma.com/img/5f26/e17d/000d7b7cb6550cd5e937e1969f9b9b2d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J3Qb6lzguofs0hb6xiMib7eM0FR3rOu~NtI18enH8gX4ybxJSQzip-GN6mYpz21Bm1w6cD7tRIj50tusiFIEv7rIrL05db0e1uQllHGA4wxnWAMeTpCSVA90ganEAIH00wGp-pNN2bB4~mLY6BkumQzWAbGWb8tY1rFHXRv5Y-z82F4BlYAKgl115tS8DM1RLv9gMLl-4wTY8nF0CXFptmTxL0orb3JPb66e43iRR8kjtwe9IHPZPHCgZ1RNhHMOPgBUqJ~GnPqRjNK61gKZtW10Nl4I2LFQ1-5s~uta74mU-x9MZv9kaFrb9essDAdHl48zUFpErM6NCYWoXcduTA__",
    altText: "Stress Management",
    description: "Effective stress management techniques can improve mental health, reduce risk of chronic conditions, and enhance overall well-being.",
    icon: blueHeartIcon,
    metric: "Meditation: 15 minutes/day"
  },
  {
    title: "Hydration",
    imageSrc: "https://s3-alpha-sig.figma.com/img/ce0a/6253/ae206c19cb431ca2e16ef2200e907669?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CkYWuYhuM5uUMbSqOPNzea0UtWWUh5E5CpW54ckXTUOdJieQf3-s8nQiyYJccL48K5S7IhwXBO~JOrQhGz207fLCDDHp6uTKj8NlD-8usin2y48~J99T7TupTcBEUO9wjZKpPV50StR~X6DcZRbdU~ApfXBGcttjc9eNR3Y6PYyrVj6sEikfKJtS9JXYywkCXC7sXgH~eZgsG1nHfxFCtsZd57K6BEkrmvNegtuRrioW7bUaBqsP2vJU0BPUKxk~vKCPEUUD3oWgVgac5CVGuT7Adv61tgMX1iORFRJpGbZ~7s1SrZhpm313CfeblyPVnShhwzu2zGuG0RUJw9ymsg__",
    altText: "Hydration",
    description: "Maintaining proper hydration levels supports bodily functions, improves energy levels, and aids in digestion.",
    icon: redHeartIcon,
    metric: "8 glasses/day"
  },
  {
    title: "Mental Health",
    imageSrc: "https://s3-alpha-sig.figma.com/img/d8a3/0aac/47fe40184d7dd9db9ac53ba1b82a4819?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBAW4d0dfz3dp6C3cOBN9aDDeaEKE3x2sP0wRz-xJidrtgAd2mIJMMrNOar2VGmUSNRjWrGZ7xmulDQjucE-zt41JmtJ0jEQ5T9upor7kq0USGb9LbOFQQ0HQ4Qv~H6TO2hCOuCsa2jLONFEC0geiFDG8znzKpDgVVBimViluc7PF~JFgBsmif9Hhi2jf6Jfcu1r82NhxnqS4tY1Jzvuhc3zikwbHrrSbp7eEiKQifsoAlzH-PpSE~c7RlLusKvYhB19MeCrw3Q3DNxsj-c7Esg4o0hDdIbub4vvV5fuG58weH94Riv9WcDmp4dEllwjbFmeYcIOoAphhVtBbiOPbQ__",
    altText: "Mental Health",
    description: "Promoting mental health through therapy, mindfulness, and supportive relationships is crucial for a balanced life.",
    icon: greenClockIcon,
    metric: "Counseling: Weekly"
  }
];


function Steps() {
  const [currentIndex, setCurrentIndex] = useState(0);

const handleNext = () => {
  setCurrentIndex(prevIndex => (prevIndex + 1) % cards.length);
};

const handlePrev = () => {
  setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
};

const cardStyle = {
  transform: `translateX(-${currentIndex * 50}%)`,
  transition: 'transform 0.5s ease'
};


  return (
    <div className="steps-container">
      <div className="steps-section">
        <p className="steps-title">HOW IT WORKS</p>
        <div className="steps-content">
          <p className="steps-heading">
            <span className="highlight-text">Lifestyle as medicine:</span>
            <span className="main-title">The six pillars</span>
          </p>
          <div className="steps-controls">
            <div className="icon-prev" onClick={handlePrev}>
              <Icon1 className="icon1" />
            </div>
            <div className="icon-next" onClick={handleNext}>
              <Icon2 className="icon1" />
            </div>
          </div>
        </div>
        
        <div className="steps-buttons">
          <Button className="btn-nutrition">Nutrition</Button>
          <Button className="btn-active">Physical activity</Button>
          <Button className="btn-restorative">Restorative sleep</Button>
          <Button className="btn-stress">Stress management</Button>
          <Button className="btn-social">Social connection</Button>
          <Button className="btn-substance">Substance abuse</Button>
        </div>
        
        <div className="working-container">
          <div className="working-wrapper" style={cardStyle}>
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
