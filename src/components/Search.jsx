import React from 'react'

const Search = () => {
    return (
        <div className="search">
            <div className="searchForm"><input type="text"  placeholder='Search for a user'/></div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/9968493/pexels-photo-9968493.jpeg?cs=srgb&dl=pexels-vlada-karpovich-9968493.jpg&fm=jpg" alt="" />
                <div className="userChatInfo">
                    <span>Jane</span>
                </div>
            </div>
        </div>
    )
}

export default Search