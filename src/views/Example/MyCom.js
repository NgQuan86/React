import React, { Component } from "react";

class MyCom extends Component {

    state =  {          // state (object) déclare outside render()
        name: 'Nguyen',
        age: '30'
    }
    state1 = {
        car: 'fiat',
        color: 'red'
    }

    
    render() {

                        //variable
        let title = 'My first component';    
        

        return (
            <div className="abc">

                                        {/* {} use to insert js inside html*/}

                <h1 className="first">{title}</h1>

                                    {/* this. to use object  */}
                <p className="second">My name is {this.state.name}</p>  {/* state */}
                <p className="third">i'm {this.state['age']}</p>

                <p className="third">my car {this.state1['car']}</p> {/* state1 */}
                <p className="third">the color is {this.state1['color']}</p> 

                {console.log(`variable let: ${title}`)}
            </div>
        )
    }
}

export default MyCom;