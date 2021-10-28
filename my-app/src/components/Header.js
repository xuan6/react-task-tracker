import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <div>
            <h1>{props.titile}</h1>
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
