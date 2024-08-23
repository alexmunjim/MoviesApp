import MovieList from './component/Movielist.jsx';
import './App.css';
import Auten from './component/Auten.jsx';


function App() {
  return (
    <>
    <div className="container">
    <h1 className='col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem] text-center m-auto'>En Cartelera</h1>    
        <Auten/>
    </div>
    </>
  );
}

export default App;
