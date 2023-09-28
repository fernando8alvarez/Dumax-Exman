import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import InformeGeocercas from './components/geofencesReport/InformeGeocercas';
import './App.css';

function App() {

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='w-full h-screen flex gap-8 max-w-screen-xl mx-auto'>
        <SideBar />
        <InformeGeocercas />
      </div>
    </div>
  )
}

export default App
