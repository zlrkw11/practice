const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <div>
      <h1>Course: {course}</h1>
      <p>This is a test paragraph to ensure the app is rendering.</p>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

const Header = ({ course }) => <h2>{course}</h2>;

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <p key={index}>
        {part.name} - {part.exercises} exercises
      </p>
    ))}
  </div>
);

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total number of exercises: {total}</p>;
};

export default App;
