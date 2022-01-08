import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftBar from './Components/LeftBar/LeftBar';
import close from '../src/images/close.png';
import MyForm from './Components/Form/MyForm';
import Main from './Components/Main/Main';
import rightArrow from '../src/images/double-right-arrows-symbol.png';
function App() {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [contentStyle, setContentStyle] = useState<string>("list");
  const [isToggleView, setIsToggleView] = useState<boolean>(true);
  // useEffect(() => {
  //   setIsToggleView(isToggleView);
  // }, [isToggleView]);
  return (
    <div className="d-flex position-relative">
        <div style={{backgroundColor: "#EBF2F7"}} className='d-flex position-fixed w-100 h-100'>
          <div style={{width: "22%"}} className={!isTransition ? "left-menu-bar" : ""}>
            <div className="py-3 px-3">
              <LeftBar 
                isTransition={isTransition} 
                setIsTransition={setIsTransition}
                contentStyle={contentStyle}
                setContentStyle={setContentStyle}
                isToggleView={isToggleView}
                setIsToggleView={setIsToggleView}
              />
              
            </div>
            
          </div> 
          <div onClick={() => {
            setIsTransition(false);
            setIsToggleView(true);
          }} className={`${!isTransition ? "bg-normal" : "bg-style"}`}></div>
          <div style={{backgroundColor: "#EBF2F7"}} className={`${isTransition ? "auto" : "side-nav"} left-menu-bar`}>
            <MyForm/>
          </div>
        </div>
        <div style={{left: "22%", width: '78%', 
            zIndex: !isTransition ? 1 : -2,
            transition: '1600ms',
            backgroundColor: "#EBF2F7"
          }} 
          className={`position-absolute p-5 `}
        >
            <div className={`m-4 row justify-content-center`}>
              {
                [,1,1,1,1,1,1,1,1,1].map((item, idx) => {
                  return <div key={idx} className={`${contentStyle == 'grid' ? "col-md-4" : "col-md-12"} d-flex align-items-center`}>
                      <div className="w-100 card my-2 p-3">
                        {
                          contentStyle == 'grid'
                          ? <div style={{height: 'fit-content'}} className={`m-2 d-flex justify-content-end`}>
                            <img style={{height: '35px'}} className='btn btn-outline-white border pt-2 rounded-circle' src={close} alt="" />
                          </div>
                          : null
                        }
                        <Main 
                          // id={item?.id} 
                          post={item}
                          contentStyle={contentStyle} 
                        />
                      </div>
                      {
                        contentStyle == 'list'
                        ? <div style={{height: 'fit-content', cursor: 'pointer'}} className={`m-2 card border rounded-circle mx-2 p-3 shadow`}>
                          <img style={{height: '25px'}} src={close} alt="" />
                        </div>
                        : null
                      }
                      
                  </div>
                })
              }
            </div>
            <div className='d-flex justify-content-center'>
              <p className="card border rounded-circle p-2">1</p>
              <p className="card bg-light-black text-light border rounded-circle p-2 mx-2">2</p>
              <p className="card bg-light-black text-light border rounded-circle p-2">3</p>
              <img style={{height: '35px'}} src={rightArrow} className="mx-2 p-2"/>
            </div>
        
        </div>
    </div>
  );
}

export default App;
