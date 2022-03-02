import React from 'react'
import '../css/Course.css'
import { Grid, Image } from 'semantic-ui-react'
// import {useState} from 'react'
// import { Icon } from 'semantic-ui-react'

function Course({course}) {

    // const [isShown, setIsShown] = useState(false)

    return (
        <div className='body'>
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={3} className='card'>
                    <Image src={course.screenshot} fluid />
                </Grid.Column>
                <Grid.Column 
                    width={7} 
                    className='card desc' 
                    onClick={()=>alert(`Learn about ${course.name}?`)}
                    // onMouseEnter={()=>{setIsShown(true)}}
                    // onMouseLeave={()=>{setIsShown(false)}}
                >
                    <h3>{course.name}</h3>
                    <p className='fulldesc'>{course.description}</p>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Course
