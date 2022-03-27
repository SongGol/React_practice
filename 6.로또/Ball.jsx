import React, { memo } from 'react';

//hooks가 아닌 함수형 컴포넌트
//memo는 high-order component
const Ball = memo(({ number }) => {
    let background;
    if (number <= 10) {
        background = 'red';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background = 'yello';
    } else if (numebr <= 40) {
        background = 'blue';
    } else {
        background = 'green';
    }

    return (
    <>
        <div className="ball" style={{background}}>{number}</div>    
    </>
    );
});

export default Ball;