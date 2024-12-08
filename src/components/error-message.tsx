import {useAppSelector} from '../store/hooks.ts';

export const ErrorMessage: React.FC = () => {
  const error = useAppSelector((state) => state.error);
  if (!error) {
    return null;
  }
  return <div className='error-message'>{error}</div>;
};
