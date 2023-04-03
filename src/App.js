import React from "react";
import ImageSlider from "./components/ImageSlider";
import './App.css'; 

function App() {
  const images = [
    "https://images.csmonitor.com/csmarchives/2010/05/0517-sci-sun.jpg?alias=standard_900x600",
    "https://media.istockphoto.com/id/1227310848/photo/setting-sun-over-the-black-isle.jpg?s=612x612&w=0&k=20&c=-0X8XJNxmUJ6-qb1rhXIuGBOg1HRI72N9_7j0TtD0HY=",
    "https://media.istockphoto.com/id/1172427455/photo/beautiful-sunset-over-the-tropical-sea.jpg?s=612x612&w=0&k=20&c=i3R3cbE94hdu6PRWT7cQBStY_wknVzl2pFCjQppzTBg=",
    "https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2021/03/sunset-photography-tips-1.jpg?resize=1500%2C1000&ssl=1",
  ];

  return (
    <div className="App">
      <ImageSlider images={images} />
    </div>
  );
}

export default App;
