import React from 'react'
import moment, { Moment } from 'moment'

interface TargetTimeFormProps {
  targetTime: Moment
  onChange: React.Dispatch<Moment>
}

const TargetTimeForm: React.FC<TargetTimeFormProps> = ({ targetTime, onChange }) => {
  return (
    <div className="TargetTimeForm">
      <input
        type="datetime-local"
        value={targetTime.format('YYYY-MM-DDTHH:mm')}
        onChange={e => onChange(moment(e.target.value))}
      />
    </div>
  )
}

export default TargetTimeForm
