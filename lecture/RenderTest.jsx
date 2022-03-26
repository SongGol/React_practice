import React, { Component, memo } from 'react';

// const Try = memo(({ tryInfo }) => {
//     return (
//         <li>
//             <div>{tryInfo.try}</div>
//             <div>{tryInfo.result}</div>
//         </li>
//     )
// });

class Test extends Component {
    state = {
        counter: 0,
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    onClick = () => {
        this.setState({});
        //setState가 호출되면 rendering이 다시 일어난다
    };

    render() {
        console.log('렌더링', this.state);
        return (
            <div>
                <button onClick={this.onClick}>클릭</button>
            </div>
        )
    }
}