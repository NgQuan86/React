import React, { Component } from "react";
import MyForm from "./MyForm";



class MyCom extends Component {
    state = {          // state (object) déclare outside render()
        name: '',
        age: '30',
        car: 'fiat',
        color: 'red'
        
    }

    // FUNCTION
    handleClickButoon = () => {             //arrow function
        console.log('hit the button ')
        alert('click me')
    }
    handleChangeName = (event) => {
        this.setState({
            name: event.target.value // set vao name 1 value moi thong qua event trong function handleChangeName dc goi ra  
        })
    }

    render() {
        //variable
        let title = 'My first component';


        return (
            <div className="abc">

                {/* {} use to insert js inside html*/}

                <h1 className="first">{title}</h1>

                {/* this. to use object  */}
                <p className="second">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleChangeName(event)} />  {/* ligne 17*/}
                    My name is {this.state.name}
                </p>

                <p className="third">i'm {this.state['age']}</p>

                <p className="vehicle">my car {this.state['car']}</p>
                <p className="vehicle">the color is {this.state['color']}</p>

                <div className="ab">
                    <button onClick={() => this.handleClickButoon()}>Click me</button>
                    {/*goi ham handleClickbutton vao trong onClick */}
                </div>

                {console.log(`variable let: ${title}`)}


                                                {/*COMPONENT*/}
                <MyForm />
            </div>
        )
    }
}

export default MyCom;