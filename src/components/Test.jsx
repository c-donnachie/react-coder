import React from "react"
import propTypes from "prop-types"

export default function Test({ firstName, lastName }) {
  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  )
}

UserData.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
}
