import React, { Component } from 'react';

//클래스의 경우 -> constructor -> shouldComponentUpdate -> render -> ref
// -> componentDidMount -> componentDidUpdate -> componentWillUnmount -> 소멸

const rspCoords = {
    '바위': '0',
    '가위': '-142px',
    '보': '-284px',
};

const scores = {
    '가위': 1,
    '바위': 0,
    '보': -1,
};

class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        rspState: '가위',
        score: 0,
    };

    interval;

    componentDidMount() { //컴포넌트가 첫 랜더링 된 후 -> 비동기 요청을 많이 함
        //일정시간마다 반복
        this.interval = setInterval(() => {
            const { rspState } = this.state;
            if (rspState === "바위") {
                this.setState({
                    rspState: 'rspCoords.가위',
                });
            } else if (rspState === '가위') {
                this.setState({
                    rspState: '가위',
                });
            } else if (rspState === '보') {
                this.setState({
                    rspState: '바위',
                });
            }
        }, 1000);

    }

    componentDidUpdate() { //리랜더링 후

    }

    componentWillUnmount() { //컴포넌트가 제거되기 직전 -> 비동기 요청 정리를 많이 함
        clearInterval(this.interval);
    }

    onClickBtn = (choice) => () => {

    }

    render() {
        const { result, score, rspState } = this.state;
        return (
            <>
                <div>{rspState}</div>
                <div>
                    <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        )
    }
}

export default RSP;