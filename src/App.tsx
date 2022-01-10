import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LeftBar from './Components/LeftBar/LeftBar';
import close from '../src/images/close.png';
import MyForm from './Components/Form/MyForm';
import Main from './Components/Main/Main';
import rightArrow from '../src/images/double-right-arrows-symbol.png';
import { findPosts, getImages } from './utils/service';
function App() {
  const [isTransition, setIsTransition] = useState<boolean>(false);
  const [contentStyle, setContentStyle] = useState<string>("list");
  const [isToggleView, setIsToggleView] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);

  const getPosts = async () => {
    const resPosts: any[] = await findPosts();
    // console.log({resPosts});
    if(resPosts.length){
      const images = await getImages();
      const allPosts:any[] = [];
      // console.log({images});
      
      resPosts?.map((item: any) => {
        const randomIdx = Math.floor(Math.random()*3);
        let post: any = item;
        const imgData: any = {
          image: images[randomIdx]?.urls?.regular,
          createdAt: images[randomIdx]?.created_at
        };
        post = {
          ...post,
          ...imgData
        }
        allPosts.push(post);
      })
      setPosts(allPosts);
    }
  }

  useEffect(() => {
    if(!posts.length){
      getPosts();
    }
  }, [""]);

  const removedPost = (id?: string) => {
    const filterPosts = posts?.filter(post => post?.id != id);
    setPosts(filterPosts);
  }
  return (
    <div style={{backgroundColor: "#EBF2F7"}} className="d-flex position-relative">
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
          <div style={{backgroundColor: "#EBF2F7",overflow: 'hidden'}} className={`${isTransition ? "auto" : "side-nav"} left-menu-bar`}>
            <MyForm/>
          </div>
          <div
             onClick={() => {
              setIsTransition(false);
              setIsToggleView(true);
            }}
            className={`${!isTransition ? "bg-normal" : "bg-style"}`}
            ></div>
        </div>
        <div style={{
            left: "22%", width: "78%", 
            overflow: 'hidden',
            transition: isTransition ? '250ms' : '2050ms',
            zIndex: !isTransition ? 1 : -1,
            backgroundColor: "#EBF2F7"
          }} 
          className={`position-absolute px-5 py-4`}
        >
            <div 
               className={`mx-4 row justify-content-center`}
            >
              {
                posts?.length 
                ? posts?.map((item, idx) => {
                  return <div key={idx} className={`${contentStyle == 'grid' ? `col-md-4 ${idx%3 == 1 ? "w3-animate-zoom" : `${(idx%3) ? "w3-animate-left" : "w3-animate-right"}`}` : "col-md-12  w3-animate-bottom"} d-flex align-items-center`}>
                      <div className="w-100 card my-2 p-3 shadow">
                        {
                          contentStyle == 'grid'
                          ? <div onClick={() => removedPost(item?.id)} style={{height: 'fit-content'}} className={`m-2 d-flex justify-content-end`}>
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
                        ? <div onClick={() => removedPost(item?.id)} style={{height: 'fit-content', cursor: 'pointer'}} className={`m-2 card border rounded-circle mx-2 p-3 shadow`}>
                            <img style={{height: '25px'}} src={close} alt="" />
                        </div>
                        : null
                      }
                      
                  </div>
                })
                : <div style={{height: '88vh'}} className="d-flex justify-content-center align-items-center">
                <div style={{color: '#5CC8A1'}}className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              }
            </div>
            
            <div className='d-flex justify-content-center mt-2'>
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
function allPosts(allPosts: any) {
  throw new Error('Function not implemented.');
}

