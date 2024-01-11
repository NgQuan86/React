import React from "react";
import Child from "./ChildCom";
import MyFunctionalComponent from './FunctionCom';

class MyForm extends React.Component {

    //*STATE *
    state = {
        firstName: '',
        lastName: '',
        adress: '',
        arrJob: [
            { id: 'abcjob1', title: 'dev', salary: '500' },
            { id: 'abcjob2', title: 'test', salary: '1000' },
            { id: 'abcjob3', title: 'manager', salary: '1500' }
        ]
    }


    //----FUNCTION----
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert("submit")
    }
                                        //RENDER 
render() {
    console.log(this.props);
    return (
        <>
            <h1>Hello my form</h1>

            <form>
                <label htmlFor="Fname">First Name</label>
                <br />

                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={(event) => this.handleChangeFirstName(event)}
                />

                <br />
                <label htmlFor="Lname">Last Name</label>
                <br />

                <input
                    type="text"
                    value={this.state.lastName}
                    onChange={(event) => this.handleChangeLastName(event)}
                />

                <br />
                <input type="submit" value='submit' onClick={(event) => this.handleSubmit(event)} />

            </form>



            {/*COMPONENT*/}

            <Child //props : object from parent to child component
                firstName={this.state.firstName}
                age={'30'}
                adress={'VN'}
                arrJob={this.state.arrJob}
            />

            <MyFunctionalComponent
                arrJob={this.state.arrJob}
            />

        </>
    )
}
}

export default MyForm;