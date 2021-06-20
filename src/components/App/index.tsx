import React from 'react';
import Nav from '../Nav';
import Question from '../Question';

const App: React.FC = () => {
  const questions = [
    {
      question: 'this is an example question',
      username: 'user1',
      title: 'question title',
    },
    {
      question: 'this is another example question',
      username: 'user2',
      title: 'question title TWO',
    },
  ];

  return (
    <>
      <Nav />
      {questions.map((q) => (
        <Question title={q.title} question={q.question} username={q.username} />
      ))}
    </>
  );
};

export default App;
