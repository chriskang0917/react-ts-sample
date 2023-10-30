<div id="top"></div>

# TypeScript 課程筆記補充

## String 形態

```
  let name: string;
  name = "小明";
  name = 5; //報錯：Type 'number' is not assignable to type 'string'
```

## Number 數字

附註："|" 寫法：age 可以接受 number 和 string 的型別

```
  let age: number | string;
  age = 5;
  age = "五歲";
```

## Boolean 布林值

```
  let isStudent: boolean;
  isStudent = true;
```

## Array 陣列

設定 hobbies 為一個由 string 組成的 Array

```
  let hobbies: string[];
  hobbies = ["Typescript", "javascript"];
```

## Tuple 元組

Tuple: seat[0] 一定要是 number seat[1] 一定要是 string

```
  let seat: [number, string];
  seat = [5, "B"];
```

## Object：type & interface 物件形態

### type 的語法

Type 中可以包含 property 和 method

```
  type Person = {
    name: string;
    age: number;
    action: () => void;
  };
```

### interface 的語法

```
  interface Person2 {
    name: string;
    age: number;
    action: () => void;
  }
```

### 用 object, type、interface 宣告變數的方法

```
  const student1: {name: string; age: number; action: () => void} = {
    name: '小明',
    age: 5,
    action: () => console.log('Hello'),
  }

  const student2: Person = {
    name: "小明",
    age: 5,
    action: () => console.log("Hello!"),
  };
```

### Array of Object

定義 aLotOfPeople 是由 Person object 所組成的陣列

```
  let aLofOfPeople: Person[];
```

## Union

"|" 寫法：age 可以接受 number 和 string 的型別

```
  let height: number | string;
  height = 160;
  height = "160公分";
```

### Any

可以接受所有型別，但濫用就失去寫 typescript 的意義

```
  let lotteryBox: any;

  //Unknown：適合在不確定資料類型時使用，例如：串接API時
  let fetchData: unknown;
```

## Function 函式

### 定義參數型別的語法

```
  function printName(name: string) {
    console.log(name);
  }
```

### 定義參數、回傳值型別的語法

```
  function returnName(name: string): string {
    return name;
  }
```

### 可選參數和默認參數

age 被設定為可選參數，不傳入參數也不會報錯

```
  function printPerson(name: string, age?: number) {
    console.log(`My name is ${name}, I'm ${age} years old.`);
  }

  printPerson("小明");
```

## void、never

### void

函數沒有回傳值，因此 return 為 undefined

```
  function greeting(name: string): void {
    console.log(`Hello! ${name}`);
    return; //此時只寫return也不會報錯，因為沒有回傳值，若寫明回傳值就會報錯
  }
```

### never

不會回傳任何東西，常見的使用情境：檢查錯誤、無限迴圈時

```
  function checkError(message: string): never {
    throw new Error(message);
  }
```

## 型別推斷

即使沒有下型別定義，TypeScript 也會自動推斷型別

```
  let applePrice = 5;

  // 報錯，因為 Typescript 已推斷 applePrice 為 number
  applePrice = "一百元";
```

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.freecodecamp.org/">
    <img src="./public/fcc.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">TypeScript Handbook for React Developers – How to Build a Type-Safe Todo App</h3>

  <p align="center">
    A Step-By-Step Tutorial for Beginners
    <br />
    <a href="https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers"><strong>Read on FreeCodeCamp »</strong></a>
    <br />
    <br />
    <a href="https://react-ts-fcc-tutorial.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/Yazdun/react-ts-fcc-tutorial/issues">Request Feature</a>
    ·
    <a href="https://github.com/Yazdun/react-ts-fcc-tutorial/issues">Report Bug</a>
  </p>

[![freeCodeCamp](https://img.shields.io/badge/-freeCodeCamp-brightgreen?logo=freeCodeCamp)](https://www.freecodecamp.org/)
[![React](https://img.shields.io/badge/-React-blue?logo=React)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-6E36F6?logo=TypeScript&logoColor=white&color=black)](#)
[![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?logo=Tailwind%20CSS&logoColor=black&color=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-blue?logo=Framer)](https://www.framer.com/api/motion/)

</div>

<div align="center">

![Thumbnail](./public/thumbnail.jpg)

</div>

## Introduction

Welcome to the GitHub repository for the
[TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-tutorial-for-react-developers)
tutorial!

In today's JavaScript landscape, TypeScript is gaining more and more popularity,
and React developers are increasingly embracing it. If you're a React developer
looking to explore TypeScript or enhance your skills with it, this tutorial is
just for you. I'll guide you through using TypeScript in a React application by
building a classic todo app.

## Getting Started

To get started with the project in your local development environment, follow
these steps:

1. Clone the repository to your local machine.

```bash
git@github.com:Yazdun/react-ts-fcc-tutorial.git
```

2. Open the cloned folder in your preferred code editor, install the required
   dependencies by running the following command in the terminal:

```bash
npm install
```

3. To access the starter files for the tutorial, use the following command:

```bash
git checkout starter
```

4. Start the development server by running the following command:

```bash
npm run dev
```

You are now ready to go!

## Contribute to this project

Thank you for browsing this repo. Any contributions you make are **greatly
appreciated**.

If you have a suggestion that would make this better, please fork the repo and
create a pull request. You can also simply open an issue with the tag
"enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
