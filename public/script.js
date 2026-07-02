let cart =
JSON.parse(
localStorage.getItem('cart')
) || [];

function addToCart(name,price,image){

const item =
cart.find(p=>p.name===name);

if(item){

item.qty++;

}else{

cart.push({
name,
price,
image,
qty:1
});

}

updateCart();

const toast =
document.getElementById('toast');

toast.style.display='block';

setTimeout(()=>{

toast.style.display='none';

},2000);

}

function updateCart(){

localStorage.setItem(
'cart',
JSON.stringify(cart)
);

let totalQty = 0;

cart.forEach(item=>{

totalQty += item.qty;

});

document.getElementById('cartCount')
.innerText = totalQty;

renderCart();

}

document.getElementById('cartBtn')
.onclick = function(){

document.getElementById('cartModal')
.classList.remove('hidden');

renderCart();

};

function closeCart(){

document.getElementById('cartModal')
.classList.add('hidden');

}

function increaseQty(name){

const item =
cart.find(p=>p.name===name);

item.qty++;

updateCart();

}

function decreaseQty(name){

const item =
cart.find(p=>p.name===name);

if(item.qty > 1){

item.qty--;

}else{

cart =
cart.filter(p=>p.name!==name);

}

updateCart();

}

function renderCart(){

const cartItems =
document.getElementById('cartItems');

if(cart.length===0){

cartItems.innerHTML =
'<p>Keranjang kosong</p>';

document.getElementById('totalPrice')
.innerText='';

document.getElementById(
'checkoutContainer'
).innerHTML='';

return;

}

let html = '';

let total = 0;

cart.forEach(item=>{

total += item.price * item.qty;

html += `

<div style="
margin-bottom:20px;
padding:15px;
border:1px solid #ddd;
border-radius:10px;
">

<img src="${item.image}"
width="80"
style="
border-radius:10px;
">

<h3 style="
margin-top:10px;
">
${item.name}
</h3>

<p>
Rp${item.price.toLocaleString()}
</p>

<div style="
margin-top:10px;
">

<button onclick="
decreaseQty('${item.name}')
">

−

</button>

<span style="
margin:0 10px;
font-weight:bold;
">

${item.qty}

</span>

<button onclick="
increaseQty('${item.name}')
">

+

</button>

</div>

</div>

`;

});

cartItems.innerHTML = html;

document.getElementById('totalPrice')
.innerText =
'Total Rp'+total.toLocaleString();

document.getElementById(
'checkoutContainer'
).innerHTML = `

<button onclick="checkout()">

Checkout

</button>

`;

}

async function checkout(){

let total = 0;

cart.forEach(item=>{

total += item.price * item.qty;

});

try{

const response =
await fetch('/api/checkout',{

method:'POST',

headers:{
'Content-Type':
'application/json'
},

body:JSON.stringify({
total:total
})

});

const data =
await response.json();

console.log(data);

if(data.paymentUrl){

window.location.href =
data.paymentUrl;

}else{

alert(
'Gagal membuat pembayaran'
);

}

}catch(err){

alert('Terjadi error');

console.log(err);

}

}

updateCart();