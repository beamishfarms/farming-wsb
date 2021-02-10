import React from 'react';

import vddLogo from '../../assets/img/basis-cash-logo.svg';
import vdsLogo from '../../assets/img/basis-share-logo.svg';
import vdbLogo from '../../assets/img/basis-bond-logo.svg';
import DAILogo from '../../assets/img/DAI.png';
import sUSDLogo from '../../assets/img/sUSD.png';
import USDCLogo from '../../assets/img/USDC.png';
import USDTLogo from '../../assets/img/USDT.png';
import Layerx from '../../icons/layerx'
import VoodooShare from '../../icons/voodooshare'
import VoodooBond from '../../icons/voodoobond'
import logo from '../../assets/img/logo.png';
import settle from '../../img/settle.png'
import approve from '../../img/approve.png'

const logosBySymbol: {[title: string]: string} = {
  'VDD': vddLogo,
  'VDB': vdbLogo,
  'VDS': vdsLogo,
  'DAI': DAILogo,
  'WSB_ETH-UNI-LPv2': sUSDLogo,
  'ETH_PROPHET-UNI-LPv2': USDCLogo,
  'VDD_DAI-UNI-LPv2': vddLogo,
  'VDS_DAI-UNI-LPv2': vdsLogo,  
};

type VoodooLogoProps = {
  symbol?: string;
  size?: number;
}

const TokenSymbol: React.FC<VoodooLogoProps> = ({ symbol, size = 64 }) => {
  // if (!logosBySymbol[symbol]) {
  //   throw new Error(`Invalid VoodooLogo symbol: ${symbol}`);
  // }

  console.log(symbol)

  if(symbol==='WSB' || symbol==='VDD' || symbol==='VDD_DAI-UNI-LPv2'){
    return <img src={settle} width={100} height={100} alt='settle'/>
  } else if(symbol==='VoodooShare'  || symbol==='VDS_DAI-UNI-LPv2' || symbol==='VDS' ){
    return <VoodooShare />
  } else if (symbol==='VoodooBond' || symbol==='VDB') {
    return <VoodooBond />
  } else if (symbol==='VoodooBond') {
    return <VoodooBond />
  } else if (symbol==='ETH_PROPHET-UNI-LPv2') {
    return <img width={64} height={64} style={{borderRadius:'50px'}} src="https://i.ibb.co/xHHgKJ4/icon.jpg" alt="Trinity"/>
  } else if (symbol==='WSB_ETH-UNI-LPv2') {
    return <img width={100} height={100} src={approve} alt="approve"/>
  }else {
    return (
      <img
        src={logosBySymbol[symbol]}
        alt={`${symbol} Logo`}
        width={64}
        height={64}
      />
    )
  }


};

export default TokenSymbol;
