import Rating from './components/Rating';

const App = () => {
  return (
    <>
      <Rating
        heading='How do you feel about Yourself?'
        feedbackMessages={[
          'Fucking Terrible',
          'I Suck',
          'Meehh',
          'Good but I could better',
          'Fucking amazing!.',
        ]}
      />
    </>
  );
};

export default App;
