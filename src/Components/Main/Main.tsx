import React, { useState } from 'react';
import avatar from '../../images/MMHK.jpg';
import Modal from '../Modal/Modal';
const Main = (props: any) => {
    const {contentStyle, post} = props;
    // console.log({post});
    const [showModal, setShowModal] = useState<boolean>(false);
    return (
        <div 
            onClick={() => !showModal && setShowModal(true)} 
            className={`d-flex ${contentStyle == "grid" ? "flex-column-reverse " : " align-items-center"}`}
            style={{cursor: 'pointer'}}
        >
            <img 
                style={{height: contentStyle == "grid" ? '180px' : '110px', width: contentStyle == 'grid' ? "100%" : '100px'}} 
                className={`${contentStyle == "list" ? "rounded-circle mb-2" : " rounded"}`}
                src={post?.image || avatar} alt="" 
            />
            <div className='mx-2'>
                <h5 className='font-weight-bold'>{post?.title || "Title Hobe"}</h5>
                <p style={{marginBottom: 0}}>{post?.body || "Accusamus odit fuga numquam est laborum."}</p>
                <div className='font-weight-light font-italic my-2' style={{marginTop: '0'}}><small>{new Date(post?.createdAt || "2021-12-27T11:33:13-05:00").toDateString()}</small></div>
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} post={post} showModal={showModal}/>
            }
            {/* <Modal setShowModal={setShowModal} post={post} showModal={showModal}/> */}
        </div>
    );
};

export default Main;