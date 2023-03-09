import React from "react";
import './main.css'
import { useState } from "react";
import back from "./back.jpeg"

const styles = {
    
    bgi : {
        backgroundRepeat: "no-repeat",
        height: "500px",
        width : "100%",
        position : "relative"
    },
    textbox : {
        color : "#fff",
        position : "absolute",
        top : '300px',
        width: '100%',
        // justifyContent : 'center',
        // alignItems : 'center'
        displey: 'flex',
        flexDirection: 'column'
    },
    text : {
        textAline : 'center',
    },
    textp: {
        fontWeight : 'bold'
    },
    secondtextBox: {
        width: '500px',
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#000',
        textAlign: 'center',
        padding: '40px 20px',
        borderRadius: '20px',
        boxShadow: '5px 5px 5px #666',
        position : 'absolute',
        top : '50%',
        right : '35%'
    },
    secondtxt: {
        marginTop: '30px'
    }
}

   // let [border, setBorder] = useState([border])
function Main(props){
    return(
        <div className="main-wrapper">
            <section className="background">
                <img src={back} alt="" style={styles.bgi}/>
                <div className="front-txt" style={styles.textbox}>
                    <h2 className="front-title" style={styles.text}>Lorem Ipsum</h2>
                    <p className="front-content" style={styles.textp}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum veritatis! Nobis,
                        iusto eius ad adipisci velit magnam consectetur doloribus ipsa temporibus!
                        Accusantium facilis quis fugiat atque sit eos vitae.</p>
                </div>
            </section>
            <section className="secondbox" >
                <div className="secondcard" style={styles.secondtextBox}>
                <h2 >Lorem Ipsum</h2>
                    <p className="second-content" style={styles.secondtxt}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum veritatis! Nobis,
                        iusto eius ad adipisci velit magnam consectetur doloribus ipsa temporibus!
                        Accusantium facilis quis fugiat atque sit eos vitae.</p>
                </div>
            </section>
        </div>
    )
    // border.map(function(a,i) {
    //     return(
    //         <section>
    //             <div>
    //                 <h1>{border[i]}</h1>
    //             </div>
    //         </section>
    //     )
    // })
}
export default Main;