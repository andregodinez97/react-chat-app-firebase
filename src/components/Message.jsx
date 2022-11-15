import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?cs=srgb&dl=pexels-vlada-karpovich-9968493.jpg&fm=jpg" alt="" />
        <span>just now</span>
      </div>
      
      <div className="messageContent">
        <p>hello</p>
        <img src="https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?cs=srgb&dl=pexels-vlada-karpovich-9968493.jpg&fm=jpg" alt="" />
      </div>
    </div>
  )
}

export default Message