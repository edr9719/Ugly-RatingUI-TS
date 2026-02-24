import type { StarProps } from '../types/types';

const Star = ({
  color = 'gold',
  star,
  rating,
  hover,
  onMouseEnter,
  onMouseLeave,
  onClick,
  submitted,
}: StarProps) => {
  return (
    <span
      className={`star`}
      style={{
        color: `${star <= (hover || rating) ? color : ''}`,
        cursor: 'pointer',
        pointerEvents: `${submitted ? 'none' : 'auto'}`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {'\u2605'}
    </span>
  );
};

export default Star;
