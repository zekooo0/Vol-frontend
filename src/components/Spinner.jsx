import BeatLoader from 'react-spinners/BeatLoader';

function Spinner({ color = '#fff', size = 10, apiSpinner = {}, style }) {
  return <BeatLoader color={color} size={size} style={apiSpinner} />;
}

export default Spinner;
