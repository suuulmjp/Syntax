import './App.css';
import { useState } from 'react';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>REACT BLOG</h4>
      </div>
       

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(true); setTitle(i) }}> { 글제목[i] } <span onClick={()=>{따봉변경(따봉+1) }}
              >👍</span> {따봉} </h4>
              <p>4월 11일 발행</p>
            </div> 
          )
        })
      }

      <button onClick={()=>{setTitle(0)}}>글제목0</button>
      <button onClick={()=>{setTitle(1)}}>글제목1</button>
      <button onClick={()=>{setTitle(2)}}>글제목2</button>
      


      {
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목 ={글제목}/>  : null
      }
    </div>
    );

    }
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <h4>날짜</h4>
      <h4>상세내용</h4>
      <button>글수정</button>
      </div>
  )
}

export default App;
