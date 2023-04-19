import Dashboard from './components/Dashboard';
import FormLayout from './components/FormLayout';
import Navbar from './components/Navbar';
import PageHeading from './components/PageHeading';
import Steps from './components/Steps';

function App() {

  return (
    <div>
      <Navbar />
      <PageHeading/>
      <Dashboard />
      <Steps />
      <FormLayout/>
    </div>
  )
}

export default App
