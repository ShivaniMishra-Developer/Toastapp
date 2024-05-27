// App.tsx
import React from 'react';
import Toast from './Toast';
import vectorIcon from './Vector.png'; // Import the image
import Toast1 from './Toast1';
function App() {
  const [openToast, setOpenToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState({ message: '', type: '' });
  const [toastKey, setToastKey] = React.useState(0);

  const toastButton = () => {
    console.log('confirmed');
    setToastMessage({ message: 'Success message', type: 'success' });
    setToastKey(prevKey => prevKey + 1);
  }

  const cancelbutton = () => {
    console.log('cancel');
    setToastMessage({ message: 'Error message', type: 'danger' });
    setToastKey(prevKey => prevKey + 1);
  }

  const handleOpen = () => {
    setOpenToast(!openToast);
  }

  return (
    <div className='mainBody' >
      <div>
        <div className='toast'>Toast</div>
        <div className='discription'>Notification message or a piece of information displayed above the page content.</div>
        <button className='openButton' onClick={handleOpen}>Open</button>
        {openToast && <Toast title='Toast Title' message={`Long details go here after the title, long details go here 
        after the title`} onConfirm={toastButton} onCancel={cancelbutton} />}
        {toastMessage.message && <Toast1 key={toastKey} message={toastMessage.message} type={toastMessage.type} />}
      </div>
      <img className='vectorIcon' src={vectorIcon} alt="vector icon" />
    </div>
  );
}

export default App;