const WorkoutListing = ({ workout }) => {
  return (
    <div className="workout-preview">
      <h2>{workout.title}</h2>
      <p>Difficulty: {workout.difficulty}</p>
      <p>{workout.description}</p>
      <p>Price: ${workout.price.toFixed(2)}</p>
    </div>
  );
};

export default WorkoutListing;
