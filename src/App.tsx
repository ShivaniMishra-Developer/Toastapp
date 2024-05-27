import React from 'react';
import Toast from './Toast';
import vectorIcon from './Vector.png'; // Import the image


function App() {
  const [openToast,setopenToast] = React.useState(false);
  const toastButton = () => {
    console.log('confiremed')
  }
  const cancelbutton = () => {
    console.log('cancel')
  }

  const handleOpen = () =>{
     setopenToast(!openToast)
  }


  return (
    <div className='mainBody' >
      <div>
      <div className='toast'>Toast</div>
      <div className='discription'>Notification message or a piece of information displayed above the page content.</div>
      <button className='openButton' onClick={handleOpen}>Open</button>
      {openToast && <Toast title='Toast Title' message={`Long details go here after the title, long details go here 
      after the title`}
 onConfirm={toastButton} onCancel={cancelbutton} />}
 
</div>
<img className='vectorIcon' src={vectorIcon} alt="vector icon" /> {/* Use the imported image */}
    </div>
  );
}

export default App;
