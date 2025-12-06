import React from "react";
import CourseCard from "./CourseCard";

export default function Course() {
  const courses = [
    {
      id: 1,
      title: "Full Stack Course",
      subtitle: "Learn to build modern web apps",
      price: "$99.99",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png",
    },
    {
      id: 2,
      title: "App development",
      subtitle: "Become a App dev expert",
      price: "$129.99",
      img: "https://media.geeksforgeeks.org/wp-content/uploads/20250607112207275971/What-is-Mobile-App-Development-Process__.webp",
    },
    {
      id: 3,
      title: "Devop Engineer",
      subtitle: "Master your Devop skills",
      price: "$119.99",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQHNatUdkYtWxw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1681904263173?e=2147483647&v=beta&t=a9NCaev-2hQvlodzIAE5DyVupKcENHVcyz1wPHOUvA0",
    },
    {
      id: 4,
      title: "Software Engineering",
      subtitle: "Build a career in Software Engineering",
      price: "$299.99",
      img: "https://uploads.sarvgyan.com/2025/02/career-in-software-engineering.webp",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-8">List of Courses</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((item) => (
          <CourseCard
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
