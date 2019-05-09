import React from 'react'
import moment, { Moment } from 'moment'
import classnames from 'classnames'

interface CountdownClockProps {
  targetTime: Moment
  now: Moment
}

const CountdownClock: React.FC<CountdownClockProps> = ({ targetTime, now }) => {
  let remainingTime = moment.duration(targetTime.diff(now))
  if (remainingTime.asSeconds() < 0) {
    remainingTime = moment.duration(0)
  }
  const shouldBlink = remainingTime.asSeconds() < 60

  const remainingParts = [remainingTime.hours(), remainingTime.minutes(), remainingTime.seconds()]

  const sep = ':'

  return (
    <div className={classnames('CountdownClock', shouldBlink ? 'blinking' : false)}>
      88:88:88
      <div className="front">{remainingParts.map(n => `${n}`.padStart(2, '0')).join(sep)}</div>
    </div>
  )
}

export default CountdownClock
