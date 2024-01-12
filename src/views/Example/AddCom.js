import React from "react";

class AddCom extends React.Component {


    //STATE
    state = {
        title: '',
        salary: ''
    }


    // FUNCTION
    hanfdleChangeTitleJob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('check data', this.state)

        if (!this.state.title || !this.state.salary) { // bao loi khi khong nhap thong tin
            alert('missing info');
            return;
        }

        // dung de add them 1 job vao parent MyForm
        this.props.add({  // goi ham addNewJob khi click len parent MyForm
            id: Math.floor(Math.random() * 1000), // tao id ngau nhien va lam tron bang Math.floor()
            title: this.state.title,
            salary: this.state.salary
        })

        // input tro lai rong sau khi submit thong tin
        this.setState({
            title: '',
            salary: ''
        })
    }


    render() {
        return (
            <div>
                <p>Add component</p>
                <form>
                    <label htmlFor="Fname">Title</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.hanfdleChangeTitleJob(event)}
                    />

                    <br />
                    <label htmlFor="Lname">Salary</label>
                    <br />

                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />

                    <br />
                    <input type="submit" value='submit' onClick={(event) => this.handleSubmit(event)} />
                </form>
            </div>
        )
    }

}
export default AddCom; 