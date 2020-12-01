# 타입스크립트

## 타입스크립트 시작하기

* npm init
* npm i typescript
* npm i react react-dom 
: web 환경에서는 react-dom을 설치하고 app 환경에서는 react-native를 설치한다.
* npm i webpack webpack-cli -D 
: 최신 문법과 jsx 문법을 옛날 문법으로 바꿔주는 역할 / react 만 사용할 때에는 babel을 더 많이 사용, typescript는 자체적으로 es3(ie9)까지 자체적으로 지원이 된다. babel은 따로 필요하지 않지만 typescript와 babel을 같이 사용하는 경우도 있다. 
* npm i awesome-typescript-loader -D
: webpack과 typescript를 연결해주는 역할로는 유명한 두가지 ts-loader 와 awesome-typescript-loader가 있다. atl(awesome-typescritp-loader)은 ts-loader 보다 빠르며 bable을 지원한다. 후에 babel을 사용할 것을 염두해서 atl을 사용함
* npm i @types/react @types/react-dom
    * ### 유형 다섯가지
        * 리덕스 -> 알아서 타입스크립트를 지원한다
        * axios -> dts 파일을 제공해서 따로 타입 정의를 하지 않아도 된다. 
        * react, react-dom 노드 모듈 안에 둘 다 자바스크립트로 만들어져 있으며 타이핑을 제공하지 않는다. 커뮤니티가 타입을 만들어 놓았다. definitelyTyped
* npm run dev / npx webpack
```
  "scripts": {
    "dev": "webpack"
  },
```
* 파일 만들고 설정하기
    * webpack.config.js 
    * tsconfig.json : 타입스크립트 설정해주는 파일
    * npx webpack 명령어 실행하면 dist 폴더 안에 app.js 가 생성됨
    * index.html 생성
        * export default 가 없으면 사용할 수 없다. 
        ```
        import React from 'react';
        ```

