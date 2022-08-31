import React from "react"
// import { useState, useEffect } from "react"
// import data from "../../data"


// const { users } = data
function SliderCard() {
    // const [service, setService] = useState([])

    // useEffect(() => {
    //     setService(data)
    // }, [])

    // console.log("data", data);
    return (
        // <div className="swiper-slide">
        // style={{ margin: "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", transitionProperty: "transform" }}
        <div className="service-box" style={{ margin: "20px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", transitionProperty: "transform" }}>
            <div className="box-icon">
                <img src="assets/images/icon/icon-5.png" alt="Icon" />
            </div>
            <div className="box-content">
                <h4 className="title">
                    <a href="!#">Publication of Papers</a>
                </h4>
                <p>Publicating your Research Papers in Various Journals</p>
            </div>
        </div >
        // </div>
    )
}



export default SliderCard