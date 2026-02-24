import type { ButtonProps } from '../types/types';
import './button.css';

const Button = ({
  description,
  onClick,
  submitted,
  backgroundColor,
  fontColor,
  rating,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={'submit-btn'}
      style={{
        backgroundColor: `${submitted ? 'grey' : backgroundColor}`,
        color: `${fontColor}`,
        borderRadius: '20px',
        cursor: `${submitted ? 'not-allowed' : ''}`,
        opacity: `${submitted ? '0.5' : '1.0'}`,
      }}
      disabled={disabled ?? (!rating || submitted)}
    >
      {description}
    </button>
  );
};

export default Button;
