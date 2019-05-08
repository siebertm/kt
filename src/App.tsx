import React, { useState, useEffect } from 'react'
import moment from 'moment'

import CountdownClock from './CountdownClock'
import TargetTimeForm from './TargetTimeForm'

import 'dseg/css/dseg.css'
import './App.css'

import useInterval from './useInterval'

const DEFAULT_TARGET_TIME = '2019-05-11T00:00:00+02:00'
const STORAGE_KEY = 'targetTime'

const App: React.FC = () => {
  const initialTargetTime = window.localStorage.getItem(STORAGE_KEY) || DEFAULT_TARGET_TIME
  const [targetTime, setTargetTime] = useState(moment(initialTargetTime))
  const [now, setNow] = useState(moment())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, targetTime.toISOString())
  })

  useInterval(() => {
    setNow(moment())
  }, 1000)

  return (
    <div className="App">
      <header className="App-header">
        <CountdownClock now={now} targetTime={targetTime} />
      </header>
      <footer className="App-footer">
        <TargetTimeForm targetTime={targetTime} onChange={setTargetTime} />
      </footer>
    </div>
  )
}

export default App
