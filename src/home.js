import React from "react";

export default function Home() {
    return (
         <p style={{textAlign:'center'}}>
            <h3>Home</h3>
            รายชื่อ<a href="/products">สินค้า</a>ที่เรามีจำหน่าย<br/>เเต่ท่านต้องเป็น 
            <a href="/member">สมาชิก</a>จึงจะสั่งซื้อได้ <br/>หากท่านมีข้อสงสัยสามารถติดต่อเราได้ที่ 
            <a href="/contact">ติดต่อเรา</a>
            
         </p>
    )
}