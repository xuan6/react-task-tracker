import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'


const Header = ({title, onToggle}) => {
    const [text, setText] = useState('Add New Task')
    const [visibility, setVisibility]= useState('false')
    const [buttonColor, setButtonColor] = useState('#176917')
    const [textColor, setTextColor] = useState('#FAFAFA')

    const toggleHide = () => {
        setText('Add New Task')
        setVisibility('false')
        setButtonColor('#176917')
        setTextColor('#FAFAFA')
    }
    
    const toggleAdd = () => {
        setText('Dismiss')
        setVisibility('true')
        setButtonColor('#efefef')
        setTextColor('#000000')
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
                (<Button buttonColor={buttonColor} text={text} textColor={textColor} onClick={onClick}/>)
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
