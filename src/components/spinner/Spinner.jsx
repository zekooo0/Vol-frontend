import BeatLoader from "react-spinners/BeatLoader";

function Spinner({ color = "#fff", size = 10, apiSpinner = {} }) {
  return (
    <div style={apiSpinner}>
      <BeatLoader color={color} size={size} />
    </div>
  );
}

export default Spinner;
