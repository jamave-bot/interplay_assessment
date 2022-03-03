import React from "react";
import "../css/Course.css";
import { Image } from "semantic-ui-react";

function Course({ course }) {

//   return (
//     <div className="body">
//       <Grid>
//         <Grid.Column width={3}></Grid.Column>
//         <Grid.Column width={3} className="card">
//             <Image src={course.screenshot} fluid />
//         </Grid.Column>
//         <Grid.Column
//           width={7}
//           className="card desc"
//           onClick={() => alert(`Learn about ${course.name}?`)}
//         >
//           <h3>{course.name}</h3>
//           <p className="fulldesc">{course.description}</p>
//         </Grid.Column>
//         <Grid.Column width={3}></Grid.Column>
//       </Grid>
//     </div>
//   );

  return (
    <div 
      className="container"
      onClick={() => alert(`Continuing to '${course.name}' \n(Difficulty ${course.difficulty_level})`)}
    >
        <Image src={course.screenshot} fluid />
        <div>
          <h3>{course.name}</h3>
          <p className="fulldesc">{course.description}</p>
        </div>
    </div>
  );
}

export default Course;
