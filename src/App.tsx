import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [contentStyle, setContentStyle] = useState<string>("list");
  return (
    <div className="d-flex position-relative">
        <div className='d-flex position-fixed w-100 h-100 border'>
          <div className={`${isTransition ? "side-nav auto" : "side-nav"} text-center border p-3`}>
            <div style={{width: !isTransition ? "100%" : "25%"}} className="position-absolute">
              <div className="p-5">
                <button onClick={() => setIsTransition(!isTransition)} className='btn btn-outline-danger'>Open</button>
              </div>
              <div className="d-flex justify-content-around">
                <button onClick={() => setContentStyle("grid")} className="btn btn-outline-primary">Grid</button>
                <button onClick={() => setContentStyle("list")} className="btn mx-2 btn-outline-info">List</button>
              </div>
            </div>
            
          </div>
          {/* <div className={`${isTransition ? "side-nav auto" : "side-nav"} border p-3`}>
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
            <h2>Hello</h2>
          </div> */}
        </div>
        <div style={{left: "21.5%", width: '69.5%', zIndex: !isTransition ? 1 : -1,}} className='position-absolute p-5 '>
            <div className={`m-4 row justify-content-center`}>
              {
                [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(item => {
                  return <div className={`${contentStyle == 'grid' ? "col-md-4" : "col-md-12"}`}>
                      <div className="card p-4 my-2">
                      <p>Hello-1</p>
                    </div>
                  </div>
                })
              }
            </div>
            
        </div>
    </div>
  );
}

export default App;
