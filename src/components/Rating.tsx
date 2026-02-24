import './rating.css';
import Star from './Star';
import { createContext, useState } from 'react';
import type { RatingProps } from '../types/types';
import Modal from './Modal';
import Button from './Button';

export const IsOpenContext = createContext<(value: boolean) => void>(() => {});

const Rating = ({
  heading,
  feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'],
}: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className='rating-container'>
      <div className='inner-container'>
        <div>
          <h1>{heading}</h1>{' '}
          <img
            src='/public/middle-finger-svgrepo-com.svg'
            alt='Middle Finger'
            height={60}
          />
        </div>
        <div className='stars'>
          {stars.map((star) => (
            <Star
              submitted={submitted}
              key={star}
              star={star}
              hover={hover}
              rating={rating}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
        {rating > 0 && (
          <h2 className='feedback'>{feedbackMessages[rating - 1]}</h2>
        )}
      </div>

      <textarea placeholder='Why? (less than 50 words)'></textarea>

      <Button
        description='Submit your Fucking Rating'
        onClick={() => setSubmitted(true)}
        submitted={submitted}
        rating={rating}
      />

      {submitted && isOpen && (
        <IsOpenContext.Provider value={setIsOpen}>
          <Modal description='Congrats on rating yourself, bitch!' />
        </IsOpenContext.Provider>
      )}
    </div>
  );
};

export default Rating;
