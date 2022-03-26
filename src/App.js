import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <div className='title'>
        <h2>Take your Sunglass and be stylish</h2>
        <p>In front of the world</p>
      </div>
      <Shop></Shop>
      <div className='answer'>
        <div>
          <h2>How React Works?</h2>
          <p><strong>React is a JavaScript library for building user interfaces</strong>React works in declarative code. To show what we mean by declarative code, we want you to imagine the following code expressed as an app. What you picture could look like the screen below, with a navbar, a header, a filter, and a list. That's because each line of code declares what each element of the app is. React is most use for its virtual DOM.</p>
        </div>
        <div>
          <h2>How useState Works?</h2>
          <p>When the web page interact by user it could be change then we will use state. UseState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
