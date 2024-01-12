import React from "react";
import Child from "./ChildCom";
import AddCom from "./AddCom";
import MyFunctionalComponent from './FunctionCom';

class MyForm extends React.Component {

    //*STATE *
    state = {
        
        adress: '',
        arrJob: [
            { id: 'abcjob1', title: 'dev', salary: '500' },
            { id: 'abcjob2', title: 'test', salary: '1000' },
            { id: 'abcjob3', title: 'manager', salary: '1500' }
        ]
    }

                                    //----FUNCTION----
                        // cach them 1 job vao array arrJob
    addNewJob = (job) => { //job la event click tu child AddCom.js
        this.setState({
            arrJob: [...this.state.arrJob, job] //copy lai arrJob bang '...' sau do them 1 job tu child AddCom.js
        })
        console.log('check job', job)
    }

    deleteAjob = (job) => {
        let currenJob = this.state.arrJob;
        currenJob = currenJob.filter(item => item.id !== job.id) // dung filter loc cac id khong duoc chon boi delete tao ra var currenJob moi
        this.setState({
            arrJob: currenJob
        })
    }
    
                                        //RENDER 
render() {
    console.log(this.props);
    return (
        <>
            <h1>Hello my form</h1>

                                        {/*COMPONENT*/}
            <AddCom
                add= {this.addNewJob}
                
            />
            
            <Child //props : object from parent to child component
                age={'30'}
                adress={'VN'}
                arrJob={this.state.arrJob}
                delete = {this.deleteAjob}
            />

            <MyFunctionalComponent
                arrJob={this.state.arrJob}
            />
        </>
    )
}
}

export default MyForm;