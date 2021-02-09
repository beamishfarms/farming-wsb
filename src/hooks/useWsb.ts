import { useContext } from 'react';
import { Context } from '../contexts/WsbProvider';

const useWsb = () => {
  const { wsb: wsb } = useContext(Context);
  return wsb;
};

export default useWsb;
