import React from "react";

class Child extends React.Component {

        render(){
            console.log('check props: ', this.props) // object from component parent MyCom
            
                // co 2 cach khai bao bien
            // let name = this.props.name; 
            // let age = this.props.age;
            let {name, age} = this.props; // nen dat var trung voi key


            return(
                <div>
                    <div>Child component : {name} - {age}</div> 
                </div>
            )
        }
}

export default Child;