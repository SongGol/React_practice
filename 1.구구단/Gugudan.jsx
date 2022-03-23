const React = require('react')
const { useState, useRef } = React;

const Gugudan = () => {
    //반드시 컴포넌트 안에 선언되어야함.
    //state를 객체로 묶지 않고 하나씩 쪼갰다고 보면 된다. => hooks
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('초깃값을 여기에 넣어줌');

    const inputRef = useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (parseInt(value) === first * second) {
            setResult(`정답: ${value}`);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else {
            setResult("땡");
            setValue('');
        }
        inputRef.current.focus();
    }

    return(
        <>
            <div>{first}곱하기 {second}는?</div>
                <form onSubmit={onSubmitForm}>
                    <input ref={inputRef} type="number" value={value} onChange={onChangeInput} />
                    <button id="button" type="submit">입력!</button>
                </form>
                <div>{result}</div>
        </>
    );
}

module.exports = Gugudan;