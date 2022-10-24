import React from 'react'
import PropTypes from 'prop-types'


const sentence = "Awu Dzowdzoooooww"

const Header = ({title}) => {
  return (
    <header>
        <h1>{sentence}</h1>
    </header>
  )
}

// will make title this one if there isnt one
Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = {
//     color: "red",
//     backgroundColor: "black",
// }

export default Header
