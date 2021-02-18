import React from 'react'
import Telegram from '../../../../icons/red/Telegram.svg'
import Twitter from '../../../../icons/red/Twitter.svg'
import youtube from '../../../../icons/youtube/youtube.svg'  

const SocialNav: React.FC = () => {

  return (
    <>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'8px'}}>
      <a target='_blank' href="https://t.me/satoshistreetbets">
        <img src={Telegram} alt={Telegram} />
      </a>
      <a target='_blank' href="https://twitter.com/BetsPodcast">
        <img src={Twitter} alt={Twitter} />
      </a>
      <a target='_blank' href="https://www.youtube.com/channel/UCuvw3AlJmW-db0OTWNd1I-Q">
       <img  src={youtube} alt={youtube} />
      </a>
    </div>
    </>
  );
};

export default SocialNav;
