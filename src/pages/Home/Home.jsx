import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to={'/tweets'}>Tweets</Link>
    </>
  );
};
export default HomePage;
