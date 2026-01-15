import React, { useState } from "react"; 

export default function StateFunc() {
  const [text, setText] = useState("Hello World");
  const [size, setSize] = useState(16); 

  const onClickSetTet = () => {
    let t = prompt("กำหนดข้อความ");
    if (t) setText(t);
  };

  const onClickZoomln = () => {
    setSize(size + 1);
  };

  
  const msgBoxStyle = {
    display: 'inline-block',
    width: 350,        
    fontSize: size,    
    backgroundColor: '#ccc',
    padding: 5,
    textAlign: 'left'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
     
      <div style={msgBoxStyle}>{text}</div><br />
      
      <button onClick={onClickSetTet}>กำหนดข้อความ</button>&nbsp;
      <button onClick={onClickZoomln}>ขยายข้อความ</button>&nbsp;
      <button onClick={() => setSize(size - 1)}>ย่อข้อความ</button>
    </div>
  );
}