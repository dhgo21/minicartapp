
import { BrowserRouter } from 'react-router'
import './App.css'
import Navbar from './components/jsx/Navbar'
import Routing from './Routing'
import Fotter from './components/jsx/Fotter'
import Loader from './components/jsx/Loader'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Navbar />
      <Routing />
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        theme="dark"
        className="toaster"/>
    </>
  )
}

export default App
