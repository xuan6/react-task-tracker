import PropTypes from 'prop-types'
import Button from './Button'
import { useState, useEffect } from 'react'


const Header = ({title, toggleTaskForm}) => {
    const [text, setText] = useState('Dismiss')
    const [visibility, setVisibility]= useState('true')

    const toggleHide = () => {
        setText('Add New Task')
        setVisibility('false')
    }
    
    const toggleAdd = () => {
        setText('Dismiss')
        setVisibility('true')
    }
    
    const onClick =()=> {
        text === 'Add New Task' ? toggleAdd() : toggleHide()
    }

    useEffect(() => { //componentDidMount async rendering
        toggleTaskForm(visibility)
    });


    return (
        <div>
            <h1 className='header'>{title}</h1>
            <Button color='green' text={text} onClick={onClick}/>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
