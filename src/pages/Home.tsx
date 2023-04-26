import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home:React.FC = props => {
  return (
    <div><Link to={"/Profile"}>Profile</Link>
    <Link to={"/Profile"}>Profile</Link>
    <Link to={"/Profile"}>Profile</Link>
    <Link to={"/Profile"}>Profile</Link></div>
  )
}

Home.propTypes = {}

export default Home