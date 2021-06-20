import React from "react";

interface Props {
  title: string
  question: string,
  username: string
}

const Question: React.FC<Props> = ({ title, question, username }) => {
  return (
    <div>
      <h1>
        {title}
      </h1>
      <h2>
        {username}
      </h2>
      <p>
        {question}
      </p>
    </div>
  )
}

export default Question;