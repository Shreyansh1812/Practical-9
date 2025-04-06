import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const [arr, setArr] = useState([]);

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setArr((prevArr) => {
      const newArr = [...prevArr, data]; 
      return newArr;
    });
    setData('');
  };

  const handleDelete=()=>{
    setArr((prevArr) => {
      const newArr = [...prevArr]; 
      newArr.pop();
      return newArr});
  }
  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <h1>TodoList</h1>
        <input
          type="text"
          value={data}
          onChange={handleInputChange}
        />
        <button type="submit" className='submit'>Submit</button>
      </form>
      <ul>
        {arr.length>0?"":<h2>Empty Todo List</h2>}
        {arr.map((item, index) => (
          <li key={index}>{item} <button onClick={handleDelete}>delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
