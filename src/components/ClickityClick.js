import React from 'react';

class ClickityClick extends React.Component {
    constructor(){
        super();
        this.state = {
            hasBeenClicked: false
        }
    }


    handleClick = () => {
        this.setState({
            hasBeenClicked: true
        }, () => console.log(`Has Been Clicked logs ${this.state.hasBeenClicked} used as callback in setState`));
        console.log(`Has Been Clicked logs ${this.state.hasBeenClicked} used after setState in same function`)
    }

    render() {
        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }
}
export default ClickityClick;