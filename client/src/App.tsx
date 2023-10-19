import { Outlet} from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <Outlet />
      </div>
    </>
  );
};

export default App;
