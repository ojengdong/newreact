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
    scondtextBox: {
        color : '#fff',
        backgroundColor : 'black', 
        width : '600px',
        height : '200px', 
        margin: '0 auto',
        borderRadius : '10px',
        textAline : 'center'
    }
}
function Main(){
    return(
        <div className="main-wrapper">
            <section className="background">
                <img src={back} alt="" style={styles.bgi}/>
                <div className="front-txt" style={styles.textbox}>
                    <h2 className="front-title" style={styles.text}>Lorem Ipsum</h2>
                    <p className="front-content" style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum veritatis! Nobis,
                        iusto eius ad adipisci velit magnam consectetur doloribus ipsa temporibus!
                        Accusantium facilis quis fugiat atque sit eos vitae.</p>
                </div>
            </section>
            <section className="secondbox">
                <div className="secondcard" style={styles.scondtextBox}>
                <h2 >Lorem Ipsum</h2>
                    <p className="second-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum veritatis! Nobis,
                        iusto eius ad adipisci velit magnam consectetur doloribus ipsa temporibus!
                        Accusantium facilis quis fugiat atque sit eos vitae.</p>
                </div>
            </section>
        </div>
    )
}
export default Main;