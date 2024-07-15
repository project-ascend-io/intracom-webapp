import React from 'react';


const ProfilePic =({ imageUrl, alt }) => {
    return (
        <div className="profile-pic">
            <img src={imageUrl} alt={alt} />
            </div>
    );
};


export default ProfilePic;