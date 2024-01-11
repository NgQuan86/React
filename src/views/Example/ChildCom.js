import React from "react";

//voi child component khong can state vi chi can nhan props tu parent component nen chi can render ra data cho UI 
//neu muon tu quan ly component thi co the them state khi su dung class component
class Child extends React.Component {


    //--STATE--
    state = {
        showJob: false
    }

    // *********************** FUNCTION **************************


    handleShowHide = () => { 
        this.setState({
            showJob: !this.state.showJob
        })
    }


    // RENDER
    render() {

        console.log('child check props: ', this.props) // object from component parent MyCom


        //---VARIABLE---

        //-Props- (tu parent component)

        // co 2 cach khai bao bien
        // let name = this.props.name; 
        // let age = this.props.age;
        let { firstName, age, adress, } = this.props; // nen dat var trung voi key => object destructuring assignment
        let { arrJob } = this.props;


        //-State- (tu ban than component)

        let { showJob } = this.state
        // let check = showJob === true ? 'showJob = true' : 'showjob = flase';
        // console.log('check', check);


        // Var thuong
        //let a = ''; tao bien a de chua array tao boi arrJob.map()


        return (
            <>
                <div>Child component : {firstName} - {age} - {adress}</div>
                
                {/* dieu kien toan tu 3 ngoi => let check = showJob === true ? 'showJob = true' : 'showjob = flase';*/}
                {showJob === true ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                :
                    <>
                        <div className="job-lists">
                            {
                                // a = arrJob.map((item, index) => { co the tao 1 let a moi de chua arrJob
                                arrJob.map((item, index) => {
                                    
                                    if (+item.salary >= 900) { //dau + de chuyen string thanh number
                                        return (
                                            <div key={item.id}> {/*tao ra 1 key cho moi data*/}
                                                {item.title} -{item.salary} $
                                            </div>
                                        );
                                    }
                                    return null;
                                })
                            }
                        </div>
                        <button onClick={() => this.handleShowHide()}>hide</button>
                    </>
                }

            </>
        )
    }
}

export default Child;