import React from 'react'
import './Blog.css'
import { useState } from 'react'

const Blog = (props) => {
    let [title,setTitle] = useState([
        "Title1",
        "Title2",
        "Title3",
    ])

    let [name,setName] = useState(["여상현1", "여상현2", "여상현3",])
   

   
  return (
    <div>
        <div className='nav'>
            <h1>BLOG</h1>
        </div>

        {
            title.map((item, i,index)=>{
                return (
                    <div className='list'>
                        <h4>{item}</h4>
                        <p>안녕하세요 저는 {name[i]}입니다.</p>
                        <button onClick={()=>{
                            const copy = [...title]
                            copy.splice(index, 1)
                            setTitle(copy)
                        }}>글 삭제</button>
                        <Modal/>
                    </div>
                    
                )
                
            })
        }
        
    </div>

  )
}

function Modal() {
    return (
        <div className='modal'>
            <h4>Title</h4>
            <p>Content</p>
            <button >닫기</button>
        </div>
    )
}

export default Blog