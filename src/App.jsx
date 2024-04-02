import { Suspense, lazy } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';

// Lazy load the AddTodo and Todos components
// const AddTodo = lazy(() => import('./components/AddTodo'));
const Todos = lazy(() => import('./components/Todos'));

function App() {
  return (
    <>
      <h1>Redux Todo</h1>
      {/* Wrap lazy-loaded components with Suspense */}
      <AddTodo />
      <Suspense fallback={<div className='text-white'>Loading...</div>}>
        <Todos />
      </Suspense>
    </>
  );
}

export default App;
