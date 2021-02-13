import React from 'react'
import Telegram from '../../../../icons/red/Telegram.svg'
import Twitter from '../../../../icons/red/Twitter.svg'
import Discord from '../../../../icons/red/Discord.svg'  

const SocialNav: React.FC = () => {

  return (
    <>
    <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'8px'}}>
      <img src={Telegram} alt={Telegram} />
      <img src={Twitter} alt={Twitter} />
      <img src={Discord} alt={Discord} />
    </div>
    </>
  );
};

export default SocialNav;
