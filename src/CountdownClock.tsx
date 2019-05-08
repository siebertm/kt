import React from 'react'
import moment, { Moment } from 'moment'

interface CountdownClockProps {
  targetTime: Moment
  now: Moment
}

const CountdownClock: React.FC<CountdownClockProps> = ({ targetTime, now }) => {
  const remainingTime = moment.duration(targetTime.diff(now))

  const remainingParts = [remainingTime.hours(), remainingTime.minutes(), remainingTime.seconds()]

  const sep = ':'

  return (
    <div className="CountdownClock">
      88:88:88
      <div className="front">{remainingParts.map(n => `${n}`.padStart(2, '0')).join(sep)}</div>
    </div>
  )
}

export default CountdownClock
