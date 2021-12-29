import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'


const Header = ({title, onToggle}) => {
    const [text, setText] = useState('Add New Task')
    const [visibility, setVisibility]= useState('false')
    const [buttonColor, setButtonColor] = useState('green')

    const toggleHide = () => {
        setText('Add New Task')
        setVisibility('false')
        setButtonColor('green')
    }
    
    const toggleAdd = () => {
        setText('Dismiss')
        setVisibility('true')
        setButtonColor('grey')
    }
    
    const onClick =()=> {
        text === 'Add New Task' ? toggleAdd() : toggleHide()
    }

    // onToggle(visibility)

    useEffect(() => { //componentDidMount async rendering
        onToggle(visibility)
    });

    const location = useLocation()


    return (
        <div className='header'>
            <h1 className='title'>{title}</h1>
            {location.pathname ==='/' &&
                (<Button id='add' color={buttonColor} text={text} onClick={onClick}/>)
            }
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
