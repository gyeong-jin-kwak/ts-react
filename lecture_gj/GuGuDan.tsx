import * as React from 'react';
import { useState, useRef } from 'react';

// < > === React.Fragment
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    //분리할 경우 모두 적어주어야 한다.
    const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = inputEl.current;
        if(parseInt(value) === first * second){
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            // 문제 다시 내는 부분
            if(input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');
            if(input) {
                input.focus();
            }
        }
    }

    return(
        <>
            <div>{first} 곱하기 {second}</div>
            <form onSubmit={onSubmitForm}>
                <input 
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <div>{result}</div>
            </form>
        </>
    )
}

export default GuGuDan;