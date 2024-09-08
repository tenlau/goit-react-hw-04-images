import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <TailSpin
        height="100"
        width="100"
        color="grey"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
