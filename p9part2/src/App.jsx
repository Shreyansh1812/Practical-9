import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const [arr, setArr] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (data.name.trim() !== '' || data.email.trim() !== '' || data.feedback.trim() !== '') {
      setArr((prevArr) => [...prevArr, data]);
      setData({ name: '', email: '', feedback: '' });
    }
  };

  const handleDelete = () => {
    setArr((prevArr) => prevArr.slice(0, -1));
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <h3>Enter Name</h3>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleInputChange}
        />
        <h3>Enter Email</h3>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <h3>Enter Feedback</h3>
        <input
          type="text"
          name="feedback"
          value={data.feedback}
          onChange={handleInputChange}
        />
        
        <button type="submit" className='submit'>Submit</button>
      </form>

      {arr.length === 0 ? (
        <h2>Empty Form Data</h2>
      ) : (
        <div>
          <h2>Submitted Data</h2>
          <ul>
            {arr.map((item, index) => (
              <li key={index}>
                <strong>Name:</strong> {item.name} <br />
                <strong>Email:</strong> {item.email} <br />
                <strong>Feedback:</strong> {item.feedback}
              </li>
            ))}
          </ul>
          <button onClick={handleDelete}>Delete Last Entry</button>
        </div>
      )}
    </div>
  );
}

export default App;
