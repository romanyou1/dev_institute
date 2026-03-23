import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../features/age/ageSlice';

function AgeControls() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.age.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="controls">
      <button
        type="button"
        onClick={() => dispatch(ageUpAsync())}
        disabled={loading}
      >
        Age Up
      </button>

      <button
        type="button"
        onClick={() => dispatch(ageDownAsync())}
        disabled={loading}
      >
        Age Down
      </button>
    </form>
  );
}

export default AgeControls;