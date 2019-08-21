import React from 'react'
import moment from 'moment'

const Notifications = (props) => {

  const { notifications } = props

  return (
    <div>
      <div className='noti-box'>
        <div className="box">
          <span className="title is-5">Notifications</span>
          <br/>
          <br/>
          <ul>
            { notifications && notifications.map(notification => {
              return (
                <li className="content" key={notification.id} >
                  <span>{notification.user} </span>
                  <span>{notification.content}</span>
                  <p className="is-size-6 has-text-grey">
                    {moment(notification.time.toDate()).fromNow()}
                  </p>
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
