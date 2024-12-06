import React from 'react';
import '../styles/profile.css'

function Profile({img,name,summary} ) {
  return (
    <div className='profile'>
      <img src={img} alt="apeach" />
      <h2>{name}</h2>
      <p>{summary}</p>
    </div>
  );
}

export default Profile;
