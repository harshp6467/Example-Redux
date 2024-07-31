import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index'

function App() {
  const myState=useSelector ((state) =>state.changeTheNumber)
  const dispatch=useDispatch();

  return (
    <div className="container">
     <h1>Increment/Decrement Counter</h1>
     <h4>Using React and Redux</h4>
     <div className='quantity'>
      <a className='quintity_minus' title='decrement'onClick={ () => dispatch(decNumber())}><span>-</span></a>
      <input name='quality' type='text' className='quality_input' value={myState}></input>
      <a className='quintity_plus' title='decrement' onClick={ () => dispatch(incNumber())}><span>+</span></a>
     </div>
    </div>
  );
}

export default App;
