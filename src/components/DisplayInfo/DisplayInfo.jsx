import React from 'react';
import PropTypes from 'prop-types';

const DisplayInfo = ({ profile }) => {
  
  return (
    <section>

      <header>
        {profile.name}
      </header>

      <div>
      
        <h4>Followers: {profile.followers}</h4>
  
        <h5>Following: {profile.following}</h5>
    
      </div>

      <p>
        <a href={profile.html_url}>{profile.login}</a>
      </p>
      
    </section>
  );
};

DisplayInfo.propTypes = {
  profile: PropTypes.object.isRequired
};

export default DisplayInfo;
