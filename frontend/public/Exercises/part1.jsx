const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <p>This is a test paragraph to ensure the app is rendering.</p>
      <Header course={course.name} />
      <Content
        part1={course.parts[0]}
        part2={course.parts[1]}
        part3={course.parts[2]}
      />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = ({ course }) => {
  console.log(course);
  return <h2>{course}</h2>;
};

const Content = ({ part1, part2, part3 }) => {
  const Part = ({ part }) => (
    <div>
      {part.name} - {part.exercises} exercises
    </div>
  );
  return (
    <div>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </div>
  );
};
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Total number of exercises: {total}</p>;
};

export default App;
