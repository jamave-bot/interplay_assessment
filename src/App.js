import "./App.css";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Course from "./components/Course";

function App() {
  const [interplayObj, setInterplayObj] = useState({
    app: "Loading",
    courses: [],
  });

  useEffect(() => {
    
    getInfo();
  }, []);
  
  async function getInfo() {
    try {
      await fetch(
        "https://s3-us-west-1.amazonaws.com/assets.interplay-learning.com/interview-tests/simple-catalog/catalog.json"
      )
        .then((res) => res.json())
        .then((obj) => {
          obj.courses.sort(
            (a, b) =>
              parseInt(a.difficulty_level) - parseInt(b.difficulty_level)
          );
          setInterplayObj(obj);
        });
    } catch (error) {
      console.log(error);
    }
  }
  
  console.log(interplayObj.courses);

  return (
    <div className="App">
      <h1 className="title">{interplayObj.app.toUpperCase()}</h1>
      {interplayObj.courses.length === 0 ? (
        <ReactLoading
          type="spin"
          color="#1C2D47"
          height={"20%"}
          className="spinner"
        />
      ) : (
        interplayObj.courses.map((course, index) => {
          return <Course course={course} key={index} />;
        })
      )}
    </div>
  );
}

export default App;
