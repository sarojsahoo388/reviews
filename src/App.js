import './App.css';
import Main from './component/Main';
import Reviews from './component/Reviews';

function App() {
  return (
    <div className='bg-body-tertiary' style={{backgroundSize: 'cover'}}
    >
     <Main/>
     <Reviews/>  
    </div>
  );
}

export default App;
