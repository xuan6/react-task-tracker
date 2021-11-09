import PropTypes from 'prop-types'
import Button from './Button'
import { useState, useEffect } from 'react'


const Header = ({title, toggleTaskForm}) => {
    const [text, setText] = useState('Dismiss Form')
    const [visibility, setVisibility]= useState('true')
    const [buttonColor, setButtonColor] = useState('grey')

    const toggleHide = () => {
        setText('Add New Task')
        setVisibility('false')
        setButtonColor('green')
    }
    
    const toggleAdd = () => {
        setText('Dismiss Form')
        setVisibility('true')
        setButtonColor('grey')
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
            <Button color={buttonColor} text={text} onClick={onClick}/>
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
