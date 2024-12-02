import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const ButtonBar = () => (
    <div>
      <button onClick={setGood(good + 1)}>good</button>
      <button onClick={setNeutral(neutral + 1)}>neutral</button>
      <button onClick={setbad(bad + 1)}>bad</button>
    </div>
  );

  return (
    <div>
      <h1>give feedback</h1>
      <ButtonBar />
    </div>
  );
};

const Stats = () => {
  return <h1>statistics</h1>;
};
export default App;
