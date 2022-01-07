import React, {useState, useEffect} from 'react';
import avatar from '../../images/MMHK_100x100.jpg';
import grid from '../../images/horizontal.png';
import list from '../../images/list.png';
// import avatar from '../../images/logo.png';
const LeftBar = (props: any) => {
    const { isTransition, isToggleView, setIsToggleView, setContentStyle, contentStyle, setIsTransition} = props;
    return (
        <div className='mt-5'>
            <div className="card my-3 mx-2 p-2">
                <div className="d-flex align-items-center">
                    <div style={{height: "50px", width: '50px', overflow: 'hidden'}} 
                        className='border rounded-circle text-center'
                    >
                        <img style={{height: '100%', width: '100%'}} src={avatar} alt="img" />
                    </div>
                    <div className='p-2'>
                        <h5>Hi, MMHK</h5>
                        <span>Here's your news!</span>
                    </div>
                </div>
            </div>
            {
                isToggleView 
                ?<div className={`card my-3 mx-2 p-3 text-center`}>
                    <h3>View Toggle</h3>
                    <div className='d-flex justify-content-center'>
                        <div style={{cursor: 'pointer',overflow: 'hidden', height: '70px'}} onClick={()=> setContentStyle("grid")} className={`${contentStyle == 'grid' ? "bg-special" : "bg-light "} px-4 py-3 card`}>
                            <img style={{height: contentStyle == "grid" ? "40px" : "35px", transition: '550ms'}}  src={grid} alt="" />
                        </div>
                        <div style={{cursor: 'pointer',overflow: 'hidden', height: '70px'}} onClick={()=> setContentStyle("list")} className={`${contentStyle == 'list' ? "bg-special" : "bg-light "} px-4 py-3 card`}>
                            <img style={{height: contentStyle == "list" ? "40px" : "35px", transition: '550ms'}} src={list} alt="" />
                        </div>
                    </div>
                </div>
                : null 
            }
            
            <div className="card my-3 mx-2 p-3">
                <h4 className="text-center">Have a Feedback?</h4>
                <div
                 onClick={() => {
                    setIsToggleView(false);
                    setIsTransition(!isTransition);
                 }} 
                 style={{cursor: 'pointer'}}
                 className={`text-center ${isToggleView ? "bg-special " : "bg-dangerous "} p-2 card w-100 mx-auto`}
                >
                    We're Listening
                </div>
            </div>
        </div>
    );
};

export default LeftBar;