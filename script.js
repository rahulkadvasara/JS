// // console.log("Hello World!");
// const product={
//     title:"Ball Pen",
//     rating:4,
//     offer:5,
//     price:270,
//     isDeal:true
// };
// console.log(product);
// console.log(typeof product);
// console.log(product["isDeal"])

// // Arithmatic Operators
// let a=5;
// let b=2;
// console.log("a - b = ",a - b);
// console.log("a + b = ",a + b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);

// // Unary operators
// let x=5;
// x++;
// console.log("x++ = ",x); // post-increment
// x--;
// console.log("x-- = ",x); // post-decrement
// console.log("++x = ",++x); //pre-increment
// console.log("--x = ",--x); //pre-decrement

// // Assignment operators
// let a=5;
// let b=2;
// a += 4; // a = a + 4
// console.log("a = ",a);

//  Comparision Operators
// let a=5;
// let b=4;
// console.log(a==b);

// // Conditional Statements
// let age=20;
// if(age>=18){
//     console.log("You can vote");
// }else{
//     console.log("You can't vote")
// }
// let a = age>=18?"adult":"not adult";
// console.log(a)

// let n = prompt("Enter a Number : ");
// if(n % 5 === 0){
//     console.log(n,"is multiple of 5");
// }else{
//     console.log(n,"is not a multiple of 5");
// }

// let n = prompt("Enter the score (0-100) : ");
// let grade;
// if(n >= 90 && n<=100){
//     // console.log("Grade : A");
//     grade='A';
// }else if(n >= 70 && n<=89){
//     // console.log("Grade : B");
//     grade='B';
// }else if(n >= 60 && n<=69){
//     // console.log("Grade : C");
//     grade='C';
// }else if(n >= 50 && n<=59){
//     // console.log("Grade : D");
//     grade='D';
// }else if(n >= 0 && n<=49){
//     // console.log("Grade : F");
//     grade='F';
// }
// console.log("Grade : ",grade);

// // loops

// // for loop
// for(let i=1; i<=5;i++){
//     console.log("Hello World!");
// }
// let n=prompt("Enter a number : ");
// let sum=0;
// for(let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log(sum);

// // while loop
// let i=1;
// while(i<=5){
//     console.log("i = ",i);
//     i++;
// }

// // do while loop
// let i=20;
// do{
//     console.log("Hello World!");
//     i++;
// }while(i<=10);

// // for-of loop
// let str="Hello";
// let size=0;
// for(let val of str){
//     console.log("val = ", val );
//     size++;
// }
// console.log("size = ",size);

// // for-in loop
// let student={
//     name:"Rahul",
//     age:17,
//     cgpa:9.5,
//     isPass:true
// };
// for(let key in student){
//     console.log("key = ",key,"value = ",student[key]);
// }

// for(let i=0;i<=100;i++){
//     if( i % 2 === 0){
//         console.log("even = ",i);
//     }
// }

// let num=17;
// let n=prompt("Guess the number : ");
// console.log(n);
// while(n!=num){
//     n=prompt("You entered wrong number.Guess again : ")
// }
// console.log("You are correct!");

// // string
// let str="Hello World!";
// console.log(str.length);
// console.log(str[0]);

// // template literal
// let str=`this is a template literal`;
// let obj={
//     item:"pen",
//     price:10
// };
// let output=`the price of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.slice(1,5));
// console.log(str.replace("is","in"));
// console.log(str.charAt(0));

// let fullName=prompt("Enter your name (without spaces): ");
// // let username=`@${name}${name.length}`;
// let username="@"+fullName+fullName.length;
// console.log(username);

// // Arrays
// let marks=[16,37,89,76];
// // console.log(marks);
// // console.log(marks[1]);
// // marks[2]=20;
// // console.log(marks);
// // for(let i=0;i<marks.length;i++){
// //     console.log(marks[i]);
// // }
// // for of loop
// for(let el of marks){
//     console.log(el);
// }

// let marks=[85,97,44,37,76,60];
// let sum=0;
// // for(let i=0;i<marks.length;i++){
// //     sum=sum+marks[i];
// // }
// for(let val of marks){
//     sum += val;
// }
// let avg=sum/marks.length;
// console.log(avg);

// let items=[250,645,300,900,50];
// let offer=0;
// // let i=0;
// // for(let val of items){
// //     offer=val/10;
// //     items[i]-=offer;
// //     i++;
// // }
// // console.log(items);
// for(let i=0;i<items.length;i++){
//     offer=items[i]/10;
//     items[i]-=offer;
// }
// console.log(items);

// let items=[250,645,300,900,50];
// // console.log(items.push(20));
// // console.log(items.toString());
// // items.unshift(10);
// // items.shift();
// console.log(items);
// items.splice(2,1,20,30,40,50);
// console.log(items);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(2,1,"Ola");
// companies.push("Amazon");
// console.log(companies);

// function myFunc(){
//     console.log("Hello World!");
// }
// myFunc();

// function sum(x,y){
//     // console.log(`${x}+${y}=${x+y}`);
//     s=x+y;
//     return s;
// }
// let val=sum(4,5);
// console.log(val);

// const sum=(a,b)=>{
//     console.log(a+b);
// };
// sum(3,2);
// function countVowels(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]==="a"||str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// function countVowels(str){
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("HelloWorld");

// const countVowels= (str)=>{
//     let count=0;
//     for(let char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels("HelloWorld");

// let arr = [1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })
// arr.forEach((val)=>{
//     console.log(val);
// // });
// arr.forEach((val,i,arr)=>{
//     console.log(val,i,arr);
// });

// let arr=[1,2,3,4,5];
// // arr.forEach((val)=>{
// //     console.log(val**2);
// // })
// let calSq=(val)=>{
//     console.log(val**2);
// }
// arr.forEach(calSq);

// let arr=[1,2,3,4,5];
// let newArr = arr.map((val)=>{
//     // console.log(val);
//     return val**2;
// });
// console.log(newArr);

// let arr=[1,2,3,4,5];
// let evenArr=arr.filter((val)=>{
//     return val % 2 === 0 ;
// });
// console.log(evenArr);

// let arr=[1,2,3,4];
// const output=arr.reduce((pre,curr)=>{
//     // return pre+curr;
//     return pre>curr?pre:curr;
// });
// console.log(output);

// let arr=[87,93,64,99,86];
// let newArr=arr.filter((val)=>{
//     return val>90;
// });
// console.log(newArr);

// let n=prompt("Enter a Number : ");
// let arr=[];
// for(let i=1;i<=n;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// const output=arr.reduce((pre,curr)=>{
//     // return pre + curr ;
//     return pre*curr; //factorial of n
// });
// console.log(output);

// document.body.style.background="green";
// document.body.childNodes[1].innerText="abcd";

// console.log("Hello");
// let h1=document.getElementById("myId");
// console.dir(h1);
// let classes=document.getElementsByClassName("myClass");
// console.dir(classes);
// console.log(classes);
// let paras=document.getElementsByTagName("p");
// console.log(paras);
// console.dir(paras);
// let firstEl=document.querySelector("p");
// console.dir(firstEl);
// let allEl=document.querySelectorAll("p");
// console.dir(allEl);

// let firstClass=document.querySelector(".myClass");
// console.dir(firstClass);
// let allClass=document.querySelectorAll(".myClass");
// console.dir(allClass);

// let firstId=document.querySelector("#myId");
// console.dir(firstId);
// let allId=document.querySelectorAll("#myId");
// console.dir(allId);

// console.log(firstId.tagName);
// console.dir(document.body.firstChild);
// console.dir(document.querySelector("body").children);

// let div=document.querySelector("div");
// console.dir(div.textContent);
// let h1=document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText+=" by The Psycho Clan";
// console.dir(h1.innerText);

// let allDiv=document.querySelectorAll(".box");
// console.log(allDiv);
// // allDiv[0].innerText="new value 1";
// // allDiv[1].innerText="new value 2";
// // allDiv[2].innerText="new value 3";
// let i=1;
// for(let div of allDiv){
//     div.innerText=`new value ${i}`;
//     i++;
// }

// let div=document.querySelector("div");
// // console.log(div);
// // let id=div.setAttribute("id","newId");
// // console.log(id);
// console.log(div.setAttribute("id","newId"));

// let btn=document.createElement("button");
// btn.innerText="Click me!";
// let div=document.querySelector("div");
// // div.append(btn);
// // div.prepend(btn);
// // div.before(btn);
// // div.after(btn);

// let heading=document.createElement("h1");
// heading.innerHTML="<i>Hi,I'm new</i>";
// let body=document.querySelector("body");
// body.prepend(heading);

// let para=document.querySelector("p");
// para.remove();

// let btn=document.createElement("button");
// btn.innerText="Click me!";
// btn.style.backgroundColor="red";
// btn.style.color="white";
// let body=document.querySelector("body");
// body.prepend(btn);

// let para=document.querySelector("p");
// para.classList.add("newClass");

// let btn1=document.querySelector("#btn1");
// btn1.onclick=(e)=>{
//     console.log("btn1 was clicked!");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX);
//     console.log(e.clientY);
// };
// let box=document.querySelector("#box");
// box.onmouseover=()=>{
//     console.log("You are inside div!");
// };

// let btn1=document.querySelector("#btn1");
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked! handler 1");
// });
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked! handler 2");
// });
// const handler3=()=>{
//     console.log("btn1 was clicked! handler 3");
// };
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("btn1 was clicked! handler 4");
// });
// btn1.removeEventListener("click",handler3);

// let modeBtn=document.querySelector("#mode");
// let body=document.querySelector("body");
// let currMode="light";
// modeBtn.addEventListener("click",()=>{
//     // console.log("you are trying to change mode");
//     if(currMode==="light"){
//         currMode="dark";
//         // document.querySelector("body").style.backgroundColor="black";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currMode="light";
//         // document.querySelector("body").style.backgroundColor="white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currMode);
// });

// const student={
//     fullName : "Rahul Kumar",
//     marks : 95,
//     printMarks : function(){
//         console.log("marks = ",this.marks); //student.marks
//     }
// };
// console.log(student.printMarks());

// const employee={
// calTex1(){
//     console.log("The tax is 10%");
// },
// calTex2 :function(){
//     console.log("The tax is 10%");
// }
// };
// const xyz={
//     salary : 50000
// };
// xyz.__proto__ = employee;

// class toyotaCar{
//     constructor(){
//         console.log("creating new object");
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brandName = brand;
//     }
// };
// let fortuner = new toyotaCar();

// class parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class child extends parent{};

// class Person{
//     // constructor(){
//     //     this.species="Homo Sapiens";
//     // }
//     constructor(name){
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// };
// class Engineer extends Person{
//     constructor(name){
//         super(name); //to invoke parent class constructor
//         this.branch=branch;
//     }
//     work(){
//         super.eat();
//         console.log("solve problem");
//     }
// };
// let EngObj = new Engineer("Rahul");
// console.log(EngObj);

// let DATA="secret information";
// class user{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
//     }
// }
// class admin extends user{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA="some new value";
//     }
// }
// let std1 = new user("abc","abc@gmail.com");
// let teach1 = new user("xyz","xyz@gmail.com");
// let admin1 = new admin("admin","admin@gmail.com");

// let a=4;
// let b=3;
// console.log(a+b);
// console.log(a+b);
// try{
//     console.log(a+c);
// }catch(err){
//     console.log(err);
// }
// console.log(a+b);
// console.log(a+b);

// setTimeout(()=>{
//     console.log("hello");
// },2000); //2s=2000ms

// function sum(a,b){
//     console.log(a+b);
// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// calculator(1,2,sum);

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data = ",dataId);
//             resolve("success");
//             // if(getNextData){
//             //     getNextData();
//             // }
//         },2000);
//     });
// }

// // promise chain
// // getData(1).then((res)=>{
// //    console.log(res);
// //    getData(2).then((res)=>{
// //     console.log(res);
// //    })
// // });
// getData(1).then((res)=>{
//     return getData(2);
//  }).then((res)=>{
//     return getData(3);
//    }).then((res)=>{
//     console.log(res);
//    });

// callback hell
//  console.log("Getting Data 1");
//  getData(1,()=>{
//  console.log("Getting Data 2");
//     getData(2,()=>{
//   console.log("Getting Data 3");
//     getData(3);
// });
// });

// let promise=new Promise((resolve,reject)=>{
//     console.log("I'm a promise");
//     // resolve("success");
//     // reject("some error occured");
// });
// console.log(promise);

// const getPromise=()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I'm a promise");
//         // resolve("success");
//         reject("network error");
//     });
// };
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected",err);
// });

// function asyncFunc(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },3000);
//     });
// };
// function asyncFunc2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },3000);
//     });
// };
// console.log("fatching data1.....");
// let p1=asyncFunc();
// p1.then((res)=>{
//     console.log(res);
//     let p2=asyncFunc2();
//     p2.then((res)=>{
//         console.log(res);
//     });
// });

// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// }
// async function getWeatherData(){
//     await api();
//     await api();
// }

// function getData(dataId){
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 console.log("data = ",dataId);
//                 resolve("success");
//             },2000);
//         });
// }
// // //async-await
// // async function getAllData(){
// //     await getData(1);
// //     await getData(2);
// //     await getData(2);
// // }

// // IIFE
// (async function (){
//     await getData(1);
//     await getData(2);
//     await getData(3);
// })();

// const URL = "https://cat-fact.herokuapp.com/facts";
// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// async-await
// const getFacts = async ()=>{
//     console.log("getting data......");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data[0].text;
// }

// promise chain
// // function getFacts(){
// //     fetch(URL)
// //     .then((response)=>{
// //         return response.json();
// //     })
// //     .then((data)=>{
// //         console.log(data);
// //         factPara.innerText = data[0].text;
// //     });
// // }

// btn.addEventListener("click",getFacts);

