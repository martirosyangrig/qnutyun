"use strict";

// 21. for loop-ով աստղանիշներով console-ում ստանալ լիարժեք՝ կլորանման բան (անկյունները կոտրած), 
// քառակուսի, եռանկյունի, ուղղանկյուն, երկու քառակուսի իրար կողք և ցանկացած տառ (latin)

// կլորանման բան (անկյունները կոտրած)

let result = "";

for(let i = 0; i <= 4; i++){
    for(let j = 5; j > 1; j--){
        if((i === 0 || i === 4) && j === 5){
            result += " ";
            continue;
        }
        if(i === 1 || i === 2 || i === 3){
            if(j === 3 || j === 4){
                result += " ";
               continue;
            }
            if(j === 2){
                result += "  *";
                continue;
            }
        }
        result += "* ";
    }
    result += "\n";
}
console.log(result);



//քառակուսի,


let sqr = "";

for(let i = 0; i <= 3; i++){
    for(let j = 0; j <= 3; j++){
        if(i === 1 || i === 2 ){
            if(j === 1 || j === 2){
                sqr += "  ";
                continue;
            }
        }
        sqr += "* ";
    }
    sqr += "\n";
}
console.log(sqr);


//  եռանկյունի
let triAng = "";
let s = "*";
let m = " ";

for (let i = 0; i <= 7; i++) {
    for(let j = 7; j >= i; j--){
        
        if(j === 0){
            triAng += "*";
            break;      
        }
        if(j === i && i !==7){
            triAng += s + m + s;
            m += "  ";
            break;
        } 
        if(i === j ){
            while(j < 15){
                triAng += "* ";
                j++;
            }
            break;
        }
        triAng += " ";
    }
    triAng += "\n";
}
console.log(triAng);



//ուղղանկյուն,

let rectangl = "";

for(let i = 0; i <= 2; i++){
    for(let j = 0; j <= 7; j++){
       if(i ===1 ){
            if(j > 0 && j < 7){
                rectangl += "  ";
                continue;
            }
       }
        rectangl += "* ";
    }
    rectangl += "\n";
}
console.log(rectangl);


// երկու քառակուսի իրար կողք

let twoSqr = "";

for(let i = 0; i <= 4; i++){
    for(let j = 0; j <= 11; j++){

        if(j > 4 && j < 7){
            twoSqr += "  ";
            continue;
        }
        if(i > 0 && i < 4){
            if((j > 0 && j < 4) || (j > 7 && j < 11)){
                twoSqr += "  ";
                continue;
            }
        }
        twoSqr += "* ";
    }
    twoSqr += "\n";
}
console.log(twoSqr);


//ցանկացած տառ (L) esi hesht er :) 

let lettr = "";

for(let i = 0; i <= 6; i++) {
    for(let j = 0; j <= 4; j++) {
        if(i < 6){
            lettr += "*";
            break;
        }else{
            lettr += "* ";
        }
    }
    lettr += "\n";
}
console.log(lettr);











//22. ստեղծում ենք փոփոխական, որի մեջ ստեղծում եք սթրինգ 500 բառից բաղկացած պատմություն, 
//ու էդ սթրիգի մեջ օգտագործում եք ${} սրանցից ու մեջը գրում եք տարատեսակ JS կոդեր, որոնք կարող են 
//ձեր պատմության հետ կապ ունենալ, օրինակ (տարեթվեր, անուններ և այլն)



const country = "Armenia";
const year = 331;
const satrap = "Երվանդ Գ";
const any = `
Մեծ Հայք, հայտնի է նաև որպես Հայոց թագավորություն կամ Մեծ Հայքի թագավորություն (լատ.՝ ${console.log(country)}, Maior), 
հինաշխարհյան և վաղմիջնադարյան շրջանի պետություն Հայկական լեռնաշխարհում, որը գոյություն է ունեցել 
մ․թ․ա․ ${year}-ից մինչև մ․թ․ 428 թվականը։ Թագավորությունը հիմնադրել է Հայաստանի սատրապ Երվանդ ${satrap}-ն, ով Ալեքսանդր 
Մակեդոնացու արևելյան արշավանքից հետո Մեծ Հայքը հռչակել է անկախ պետություն։ Երվանդունիներն իրենց աթոռանիստն են 
դարձնում Վանի թագավորության օրոք հիմնադրված Արգիշտիխինիլի քաղաքը, որը վերանվանվում է Արմավիր։ Երվանդունիների 
համահայկական թագավորությունն անկում է ապրում մ․թ․ա․ մոտ 2000 թվականին՝ սելևկյան զորքերի կողմից Հայքի նվաճումից
 և Երվանդ Վերջինի գահազրկումից հետո։
`;
console.log(any); // shat karai grei jamanak qich er (





//23. ստեղծում եք ֆունկցիա, որը կաշխատի ֆակտորիալ ֆորմուլայով


function fac(n){
    let result = 1;

    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(fac(5));





//24. ստեղծում եք ֆունկցիա, որը կաշխատի ֆիբոնաչի ֆորմուլայով

function fibonachi(length) {
    if(length === 1 || length <= 0 ){
        return 0;
    }
    let arr = [0, 1];
    for(let i = 2; i < length; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
    }
    return arr;
}
console.log(fibonachi(11));



//25. ստեղծում եք ֆունկցիա, որը որպես արգումենտ ստանում ա ինչ-որ հայտնի շենք/կառույց, ու
// վերադարձնում ա էդ շենքի պարամետրերը (բարձրություն, լայնություն, քմ և այլն)



function infoBuild(shenq) {
    switch(shenq){
        case "Piza": 
            console.log(`
            Աշտարակի բարձրությունը գետնից 56.67 մ է, 
            քաշը կազմում է 14 500 տոննա
            Նախագծի հեղինակն էր Բոնանո Պիզանոն։
            `); 
        break;

        case "Elfelyan": 
            console.log(`
            Այն ունի 324 մետր բարձրություն,
            գետնից բարձր է 276 մետր,
            Ճարտարապետ	Գուստավ Էյֆել
            `);
        break;

        case "Burj_Xalif":
            console.log(`
            բարձրությունն է 828 մետր և ավելի քան 163 հարկ,
            Տարածքը շինության մեջ	344 000 մ²
            Ճարտարապետ	Skidmore, Owings and Merrill
            `);
        break;

        default: console.log("Trvac shenqi masin inffo chunenq");
    }
}
infoBuild("Elfelyan");








//26. ստեղծում եք ֆունկցիա, որը իր մեջ ստեղծում է մեքենաներ (արգումենտներով), 
// որ ամեն կանչելուց կարողանաք այլ պարամետրեր տալ ու ստանալ տարբեր մեքենաներ


function cars(mator, tiv , brand){
    if(mator === 2 && tiv === 2014 && brand === "bmw"){
        console.log("bmw 5 series");
    }else if(mator === 1.4 && tiv === 2017 && brand === "chevrolet"){
        console.log("Chevrolet Crouse");
    }else if(mator === 1.6 && tiv === 2018 && brand === "ford"){
        console.log("Ford Fiesta");
    }else if(mator === 2.5 && tiv === 2017 && brand === "toyota"){
        console.log("Toyota Camery");
    }else{
        console.log("trvac parametrerov avto chunenq");
    }
}
cars(1.4, 2017, "chevrolet");



//27.ստեղծում եք 2 զանգված, որտեղ առաջինում պետք է լինեն և բացասական և դրական թվեր,
// ու for loop-ի միջոցով զանգվածից հանեք դրական թվերը, իսկ բացասականները դրեք 2րդ դատարկ զանգվածի մեջ

let anyArr = [-3, 12, 5, -2,  5, -8, 4, -75 ];
let nevArr = [];
let j = 0;
for(let i = 0; i < anyArr.length; i++){
    if(anyArr[i] < 0){
        nevArr[j] = anyArr[i];
        j++;
    }
}
anyArr.splice(0, anyArr.length);
console.log(anyArr, nevArr);

// es haskacel em vor arajin zangvace petqe e datarkvi lriv isk bacasakannere nor zangvaci mej qcenq





// 28. ստեղծում եք օբյեկտ, որտեղ նկարագրում եք մարդու, որը ունի ընկերներ, ստատուսներ, 
//սև ցուցակի մեջ մարդիկ, լայքեր, էլ. հասցե, հեռախոս, գաղտնաբառ և այլն (նմանեցնել Ֆեյսբուքին)


const facebook = {
    user: {
        name: "Joe",
        lastName: "Smith",
        friends: [
                {
                    name: "Vitali", 
                    lastName: "Shevchenko"
                },
                {
                    name: "Kein",
                    lastName: "Snow"
                },
                {
                    name: "Gugo",
                    lastName: "vaspurovich"
                }
            ],

        status: [
            "kyanqe djvar mi bane",
            "erknqic ereq xndzor",
            "xorimast mtqer"
        ],

        number: "+ 7785518811",
        email: "joe.smith12@gmail.com",

        chorniSpisok: [
            "aliev",
            "erdoxan"
        ],

        photos: 5456554,
        likes: 5,

        login: "bangladeshci_01",
        password: "********"

    }
};





//29 ստեղծում եք զանգված, ու մեջը 10 հատ օբյեկտ, ամեն օբյեկտում ձեր նախընտրած մարդկանց մասին մի քանի ինֆորմացիա՝ 
//անուն ազգանուն, տարիք, մասնագիտություն ու ազգություն, հետո loop-ի միջոցով էդ օբյետկտերի մարդկանց 
//անունները տպում եք կոնսոլում

const people = [
    {name: "karen", lastName: "karoyan", age: 20},
    {name: "miqo", lastName: "baxchyan", age: 28},
    {name: "nina", lastName: "demirchyan", age: 31},
    {name: "lilit", lastName: "karapetyan", age: 12},
    {name: "ani", lastName: "suqiasyan", age: 54},
    {name: "dav", lastName: "mrdoyan", age: 15},
    {name: "rob", lastName: "saroyan", age: 22},
    {name: "narek", lastName: "pichaxjyan", age: 45},
    {name: "zara", lastName: "martirosyan", age: 9},
    {name: "erik", lastName: "bergiyan", age: 29}
];
let names = "";
for(let i = 0; i < people.length; i++){
    names += " " + people[i].name;

}
console.log(names);




// 30. ստեղծում եք Math անունով օբյեկտ, որի մեջ մեթոդներով ստեղծում ենք այն մաթեմատիկական ալգորիթմներ
// (արմատ, քառակուսի)


const math = {
    square(num){
        return num * num;
    },

    astchan(num1, num2){
        let a = num1;
        for(let i = 1; i < 3; i++){
            num1 = a * num1;
        }
        return num1;
    },

    bazmapatik(num1 , num2) {
        let result;
        if(num1 >= num2) {
            result = num1;
        }else{
            result = num2;
        }
        while(true){
            if(result % num1 === 0 && result % num2 === 0){
            return result;
            
            }else {
                result ++;
            }
        }
    }
};

console.log(math.square(5));  /// 5 * 5 = 25
console.log(math.astchan(4, 3)); // 4i 3 astchan = 64
console.log(math.bazmapatik(4, 8));// amenapoqr bnakan tive vor bajanvume aranc mnacord = 8




// mnacace exam.txt faylum


