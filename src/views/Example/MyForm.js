import React from "react";

class MyForm extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
    handleSubmit= (event)=> {
        event.preventDefault()
        alert("submit")
    }

    render() {
        console.log(this.props);
        return (
            <>
                <h1>Hello my form</h1>

                <form>
                    <label htmlFor="Fname">First Name</label>
                    <br/>

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
            </>
        )
    }
}

export default MyForm;