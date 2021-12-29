import {Link} from 'react-router-dom'
const About = () => {
    return (
        <div className='footer'>
            <h4>Version 1.0.0</h4>
            <p>This App includes a React-based UI and a JSON-server for the mock backend. The skeleton of this project was built based on the <a href='https://www.youtube.com/watch?v=w7ejDZ8SWv8' rel='noreferrer' target='_blank'>YouTube React Crash Course</a>.</p>
            
            <p>Xuan Liu developed custom styles and addtional features to improve usability, such as enabling users to check and uncheck tasks, edit existing tasks, and choose date and time from a picker instead of typing strings.</p>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
