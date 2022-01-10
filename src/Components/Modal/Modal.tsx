import React, { useEffect, useState } from 'react';
import './Modal.css';
const Modal = ({setShowModal, showModal, post}: any) => {
    console.log({showModal});
    const [flagModal, setFlagModal] = useState<boolean>(false)
    const handleShowModal = (flag: any) => {
        setShowModal(flag);
        setFlagModal(flag);
    }

    useEffect(() => {
        handleShowModal(showModal);
    }, [""]);
    return (
        <div id="myModal" className={`modal ${flagModal ? 'd-block' : 'd-none'}`}>
            <div className="modal-content w3-animate-top">
                <span onClick={() => handleShowModal(false)} className="close text-end">&times;</span>
                <div className="d-flex justify-content-center align-items-center">
                    <img 
                        style={{height: '180px', width: "80%"}} 
                        className={`rounded`}
                        src={post?.image} alt="" 
                    />
                    <div className='mx-4'>
                        <h5 className='font-weight-bold'>{post?.title || "Title Hobe"}</h5>
                        <p className="text-info" style={{marginBottom: 0}}>{post?.body || "Accusamus odit fuga numquam est laborum."}</p>
                        <div className='font-weight-light text-warning font-italic my-2' style={{marginTop: '0'}}><small>{new Date(post?.createdAt || "2021-12-27T11:33:13-05:00").toDateString()}</small></div>
                    </div>

                </div>
            </div>

        </div> 
    );
};

export default Modal;