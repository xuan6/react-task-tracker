import PropTypes from 'prop-types'

const Button = ({buttonColor, text, textColor, onClick}) => {
    
    return <button
        onClick={onClick}
        style={{backgroundColor:buttonColor, color:textColor}}
        className='btn'>
        {text}
    </button>
}

Button.defaultProps = {
    buttonColor:'#176917',
    text:'Button'
}

Button.propTypes = {
    buttonColor : PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
    textColor: PropTypes.string
}

export default Button
