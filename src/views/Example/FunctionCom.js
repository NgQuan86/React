import React from "react";

// Function component sử dụng hàm Arrow Function 

//*****KHONG DUNG THIS TRONG FUNCTION COMPONENT (ARROW) VA KHONG TAO STATE (tru khi dung hook)*****

const MyFunctionalComponent = (props) => {

    let { arrJob } = props;

    return (
        <div>
            <h1>function component </h1>
            {/*arrJob duoc khai bao trong state cua component parent MyFrom */}
            <div className="job-lists">
                {
                    // a = arrJob.map((item, index) => { co the tao 1 let a moi de chua arrJob
                    arrJob.map((item, index) => {
                        if (+item.salary >= 900) { //dau + de chuyen string thanh number
                            return (
                                <div key={item.id}> {/*tao ra 1 key cho moi data*/}
                                    {item.title} -{item.salary} $
                                </div>
                            )
                        }

                    })
                }
            </div>
        </div>
    );
};
export default MyFunctionalComponent;