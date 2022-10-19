import MovingComponent from "react-moving-text";
const AnimationText = () => {
  return (
    <h1 className="ah-headline d-flex">
      {`I'm`}{" "}
      <MovingComponent
        type="typewriter"
        dataText={[
          "Advyt",
          "a data analyst",
        ]}
      />
    </h1>
  );
};
export default AnimationText;
