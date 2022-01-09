import React from 'react';
import avatar from '../../images/MMHK.jpg';
const Main = (props: any) => {
    const {contentStyle, post} = props;
    return (
        <div className={`d-flex ${contentStyle == "grid" ? "flex-column-reverse " : " align-items-center"}`}>
            <img 
                style={{height: contentStyle == "grid" ? '180px' : '100px'}} 
                className={`${contentStyle == "list" ? "rounded-circle mb-2" : ""}`}
                src={post?.image || avatar} alt="" 
            />
            <div className='mx-2'>
                <h5 className='font-weight-bold'>{post?.title || "Title Hobe"}</h5>
                <p style={{marginBottom: 0}}>{post?.body || "Accusamus odit fuga numquam est laborum."}</p>
                <div className='font-weight-light font-italic my-2' style={{marginTop: '0'}}><small>{new Date(post?.createdAt || "2021-12-27T11:33:13-05:00").toDateString()}</small></div>
            </div>
        </div>
    );
};

export default Main;