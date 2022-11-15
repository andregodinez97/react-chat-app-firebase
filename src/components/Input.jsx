import React from 'react'
import Img from '../img/img.png'
import File from '../img/attach.png'

const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something...' />
        <div className="send">
            <img src={Img} alt="" />
            <input type="file" style={{display: 'none'}} id='file' />
            <label htmlFor="file">
                <img src={File} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input