import React from 'react'
import moment from 'moment'

const Notifications = (props) => {

  const { notifications } = props

  return (
    <div>
      <div>
        <div>
          <span>Notifications</span>
          <ul className='notification'>
            { notifications && notifications.map(notification => {
              return (
                <li key={notification.id} >
                  <span>{notification.user} </span>
                  <span>{notification.content}</span>
                  <div>{moment(notification.time.toDate()).fromNow()}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Notifications
