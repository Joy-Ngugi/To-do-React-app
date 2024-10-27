
import './App.css';
import { TodoProvider } from './Components/TodoContext';
import Home from './Components/Home';


function App() {
  return (
    <TodoProvider>
    <Home />
  </TodoProvider>
  );
}

export default App;
