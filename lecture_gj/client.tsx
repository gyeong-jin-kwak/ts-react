import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import GuGuDan from './GuGuDan';
// import WordRelay from './WordRelay';
import NumberBaseball from './NumberBaseball';

//const Hot = hot(WordRelay); //HOC High Order Component 상위 컴포넌트로 감싸는 것
const Hot = hot(NumberBaseball);

ReactDOM.render(<Hot />, document.querySelector('#root'));
// ReactDOM.render(<GuGuDan />, document.querySelector('#root'));