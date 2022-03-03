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
     // eslint-disable-next-line
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

          console.log(sortSubArrAlphabetically(obj.courses))
          setInterplayObj(obj);
        });
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(interplayObj.courses);

  const sortSubArrAlphabetically = (arr) =>{
    console.log("This is the arr: ", arr)
    let newArr = [];
    let subArr = [];
    let currentDiff = arr[0].difficulty_level
    // console.log(currentDiff)
    arr.forEach(course => {
      if (course.difficulty_level === currentDiff){
        subArr.push(course)
        console.log("same diff arr: ", subArr)
      } if (course === arr[arr.length-1]){
        subArr.sort((a,b)=> a.name.localeCompare(b.name))
        console.log("Sorted subarray: " ,subArr)
        newArr.concat(subArr)
      } else if (course.difficulty_level !== currentDiff){
        currentDiff = course.difficulty_level
        // console.log(subArr)
        // console.log("are we getting here")
        subArr.sort((a,b)=> a.name.localeCompare(b.name))
        console.log("Sorted subarray: " ,subArr)
        newArr.concat(subArr) 
        console.log("this should be the newArr: ", newArr)
        // console.log(newArr)
        subArr = [course];
      }
    });
    return newArr;
  }

  // console.log("maybe sorted: ", sortSubArrAlphabetically(interplayObj.courses))

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
