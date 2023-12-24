let shoppeng = document.querySelector('.shoppeng')
let quonted = document.querySelector('.quonted') ;Number
let liast = document.querySelector('.liast')
let clos = document.querySelector ('.clos')
let listCard = document.getElementById('listCard')
let boby = document.querySelector('body')
let total= document.querySelector('.total')
let card = document.querySelector('.card')
let btn = document.querySelector('.btn')



shoppeng.addEventListener('click',function(){
    boby.classList.add('actev')


})
clos.addEventListener ('click',function(){
    boby.classList.remove('actev')

})
let products =[
    {
        id :1,
        name: 'beysa',
        img: '1.jpeg',
        priss: 350,
        del : 500
    },
    {
        id :2,
        name: 'gatoo',
        img: '2.jpeg',
        priss: 175,
        del : 200

    },
    {
        id :3,
        name: 'prodct',
        img: '3.jpeg',
        priss: 100,
        del : 200

    },
    {
        id :4,
        name: 'prodct',
        img: '4.png',
        priss: 177,
        del : 200

    },{
        id :5,
        name: 'prodct',
        img: '5.jpeg',
        priss: 100,
        del : 120

    },{
        id :6,
        name: 'prodct',
        img: '6.png',
        priss: 100,
        del : 150

    },{
        id :7,
        name: 'prodct',
        img: '7.jpeg',
        priss: 115,
        del : 132

    },{
        id :8,
        name: 'prodct',
        img: '8.png',
        priss: 50,
        del : 80

    },{
        id :9,
        name: 'prodct',
        img: '9.png',
        priss: 55,
        del : 150

    }
]

let data_add  = [];
// data_add.push(products)
function initApp(){
    products.forEach((e, k) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="img/${e.img}">
            <div class="title">${e.name}</div>
            <div class="price"><del class="del">${e.del}</del>$${e.priss}</div>
            <button class="btenn" onclick="addToCard(${k})">Add To Card</button>`;
            liast.appendChild(newDiv);
    })
}

initApp()

document.addEventListener('click',function(e){
    if(e.target.className === 'btenn' ){
let a = e.target.innerHTML;
e.target.classList.add('contenu')

}
})
onclick
//دي الزرار الي بدوس عليه في الصفحه 
function addToCard(e){

    if( data_add[e]==null ){
        data_add[e] = JSON.parse(JSON.stringify(products[e]));
        data_add[e].quonted= 1 // دي انا بقوله لما يشتري خليه يشتري واحد بس لو عايز يزود يبقا يزود تحت
    }   
    
    
    rpledcard()
}

// دي الي بضيفلك في السله الحاجات الي اشتريتها 
function rpledcard(){
    listCard.innerHTML = ''; // دي li
    let caunt = 0 ; // ده لي العداد
  let  totalpres = 0; // ده لي اجاي السعر 


  data_add.forEach(function(e,i){
    totalpres = totalpres +e.priss // اجملي السعر لكل المناجات
    caunt = caunt + e.quonted  // دي اعمالي الي اشتراه لكل المنتاجات

    if(e != null){
let li = document.createElement("li");

li.innerHTML = `
<div id="img"> <img src="./img/${e.img}" alt=""></div>
       <div class="name"> ${e.name}</div>
       <div class="press">${e.priss}</div>
       <div class = "i">
       <button class="add-" onclick="adds(${i}, ${e.quonted-1}) ">-</button>
       <div class="cunt"> ${ e.quonted} </div>
       <button class="add-"  onclick="adds(${i}, ${e.quonted+1} )" >+</button>
       </div>

`
listCard.appendChild(li)

    }
  })
total.innerHTML =totalpres.toLocaleString()
quonted.innerHTML = caunt
}


////

function adds(e, i){
    if(i == 0){ // لو رقم العنصر = 0 اعملي احزفلي العنصر كله 
        delete data_add[e]
        

    }else{
        data_add [e].quonted = i; 
        data_add[e].priss = i * products[e].priss;

    }
    rpledcard() // شغلي الفنكشن دي 
}





















///  دي بتاع الاسكرل لما تنزل تطلك لفوق

window.onscroll = function(){
if(window.scrollY >= 100){
btn.style.display = 'block'

}else{
    btn.style.display = 'none'
}
}

btn.onclick = function(){
    window.scroll({top : 0,behavior :'smooth'})
}