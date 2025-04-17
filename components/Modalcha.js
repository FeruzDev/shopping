// "use client";
//
//
// import React, {useEffect} from 'react';
//
// import Modal from "react-modal";
//
// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//     },
// };
//
// const Modalcha = ({modalIsOpen, closeModal, adress, setReg, setName, setPhone, phone, name, reg }) => {
//     useEffect(() => {
//         // Modal.setAppElement('#__next'); // Next.js sahifa ildizi
//     }, []);
//
//     return (
//
//         <Modal
//             isOpen={modalIsOpen}
//             // onAfterOpen={afterOpenModal}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//         >
//
//             <div className="d-flex justify-content-end">
//                 {/*<h2 ref={(_subtitle) => (subtitle = _subtitle)}> </h2>*/}
//                 <button onClick={closeModal} className="border-0 bg-transparent p-0" style={{width: "16px"}}>
//                     <img className="w-100" src="/img/close.png" alt="...."/>
//                 </button>
//             </div>
//
//             <div className="order-box mt-2" style={{width: "300px"}}>
//                 <label className="form-label">Имя Фамилия</label>
//                 <input type="text" className="form-control w-100 mt-1 mb-2" onChange={(e) => setName(e.target.value)}/>
//                 <label className="form-label">Номер телефона</label>
//                 <input type="text" className="form-control w-100 mt-1 mb-2" onChange={(e) => setPhone(e.target.value)}/>
//                 <label className="form-label" >Адрес</label>
//                 <select className="form-control mt-1 w-100" onChange={(e) => setReg(e.target.value)}>
//                     <option></option>
//
//                     {
//                         adress.map((item, index) => (
//                             <option key={index} value={item.label}>{item?.name}</option>
//                         ))
//                     }
//                 </select>
//                 <button className="mt-4 w-100 btn btn-success" disabled={!reg || !name || !phone} onClick={() => sendOrder()}>Заказ</button>
//             </div>
//         </Modal>
//     );
// };
//
// export default Modalcha;

import React from 'react';

const Modalcha = () => {
    return (
        <div>
            
        </div>
    );
};

export default Modalcha;