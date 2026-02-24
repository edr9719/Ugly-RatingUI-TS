import type { ModalProps } from '../types/types';
import './modal.css';
import Button from './Button';
import { useContext } from 'react';
import { IsOpenContext } from './Rating';

const Modal = ({ description }: ModalProps) => {
  const onClick = useContext(IsOpenContext);
  return (
    <div className='modal'>
      <h1>{description}</h1>
      <Button
        description='Close'
        backgroundColor='gold'
        fontColor='black'
        onClick={() => onClick(false)}
        disabled={false}
      />
    </div>
  );
};

export default Modal;
