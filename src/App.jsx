import './App.css'
import GlobalProviders from './context/GlobalProviders';
import Login from './pages/auth/Login'
import Routing from './routes/Routing';

function App() {
  return (
    <>
      <GlobalProviders>
        <Routing />
      </GlobalProviders>
    </>
  )
}

export default App;
