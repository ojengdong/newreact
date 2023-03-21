import React from 'react'
import './Blog.css'
import { useState } from 'react'

const Blog = (props) => {
    let [title,setTitle] = useState([
        "Title1",
        "Title22",
        "Title333",
    ])

    let [name,setName] = useState(["여상현1", "여상현22", "여상현333",])
    // 모달창을 띄우기 위한 상태값
    let [modal,setModal] = useState(false)
    // 모달창에 표시될 제목 글의 인덱스
    let [modalTitle, setModalTtile] = useState(0)

  return (
    <div>
        <div className='nav'>
            <h1>BLOG</h1>
        </div>

        {
            title.map((item, i)=>{
                    
                return (
                    <div key={i} className='list' onClick={()=>{
                        if(modal && modalTitle === i){
                            setModal(false);
                        }else {
                            setModal(true);
                            setModalTtile(i);
                        }
                    }}>
                        <h4>{item}</h4>
                        <p>안녕하세요 저는 {name[i]}입니다.</p>
                        <button  onClick={()=>{
                            const copy = [...title]
                            copy.splice(item, 1)
                            setTitle(copy)
                        }}>글 삭제</button>
                    </div>
                )
            })
        }
        {modal && <Modal modalTitle={modalTitle} title={title} closeModal={()=>setModal(false)}/>}
    </div>
        
  )
}

function Modal(props) {
    return (
        <div className='modal'>
            <h4>{props.title[props.modalTitle]}</h4>
            <p>Content</p>
            <button onClick={props.closeModal}>닫기</button>
        </div>
    )
}

export default Blog