import React, { useState } from 'react';
import Modal from './components/Modal/modal';

const Test = () => {
    const [openModal, setOpenModal] = useState(false);



    return (
      <div>
        <button 
        onClick={() => setOpenModal(true)} 
        className='modalButton'>
          Modal
        </button>
        <Modal 
        open={openModal} 
        />
        </div>
    );

};

export default Test;