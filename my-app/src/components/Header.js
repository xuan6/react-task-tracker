import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({titile}) => {
    const onClick =()=>{
        console.log('click')
    }

    return (
        <div>
            <h1 className='header'>{titile}</h1>
            <Button color='green' text='hello' onClick={onClick}/>
        </div>
    )
}

Header.defaultProps = {
    titile: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
