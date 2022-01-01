import logo from './logo.svg';
import './App.css';
import RelicLayout from './components/RelicLayout';

function App() {

  return (
    <div className="bg-slate-800 h-screen">
      <header className="bg-slate-900 fixed h-24 w-full">
        <img src={logo} alt="logo" height={100} width={100}/>
      </header>
      <div className="h-screen pt-24">
        <RelicLayout/>
      </div>
    </div>
  );
}

export default App;
