import React from 'react'
import PropTypes from 'prop-types'

const fillColor = worker => {
  switch (worker) {
    case 0:
      return '#fc8d62'
    case 1:
      return '#ffd92f'
    default:
      return 'red'
  }
}

const strokeColor = worker => {
  switch (worker) {
    case 0:
      return '#e64505'
    case 1:
      return '#c7a200'
    default:
      return 'red'
  }
}

const workerHi = workers => (workers.length === 2 ? workers[0] : null)

const workerLo = workers =>
  workers.length > 0 ? workers[workers.length - 1] : null

const StackedWorkerSpot = ({ workers }) => {
  const hi = workerHi(workers)
  const lo = workerLo(workers)
  return (
    <svg
      width="40"
      height="35"
      viewBox="0 0 100 90"
      xmlns="http://www.w3.org/2000/svg"
    >
      {lo !== null && (
        // lo must be drawn first, because hi sits on top of it
        <g>
          <path
            d="M 3 45 V 65 A 47 20 0 0 0 50 85 A 47 20 0 0 0 97 65 V 45"
            stroke={strokeColor(lo)}
            strokeWidth="3"
            fill={fillColor(lo)}
          />
          <ellipse
            cx="50"
            cy="45"
            rx="47"
            ry="20"
            stroke={strokeColor(lo)}
            strokeWidth="3"
            fill={fillColor(lo)}
          />
        </g>
      )}
      {hi !== null && (
        <g>
          <path
            d="M 3 25 V 45 A 47 20 0 0 0 50 65 A 47 20 0 0 0 97 45 V 25"
            stroke={strokeColor(hi)}
            strokeWidth="3"
            fill={fillColor(hi)}
          />
          <ellipse
            cx="50"
            cy="25"
            rx="47"
            ry="20"
            stroke={strokeColor(hi)}
            strokeWidth="3"
            fill={fillColor(hi)}
          />
        </g>
      )}
    </svg>
  )
}

StackedWorkerSpot.propTypes = {
  workers: PropTypes.any.isRequired,
}

export default StackedWorkerSpot
