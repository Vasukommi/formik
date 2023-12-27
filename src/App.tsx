import UseFormik from './components/use-formik/UseFormik';
import UseFormikContext from './components/use-formik/UseFormikContex';
import UseField from './components/use-formik/UseField';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseFormik />
      <UseFormikContext />
      <UseField />
    </div>
  );
}

export default App;