//GLOBAL
var products= JSON.parse(localStorage.getitem('cart'));
var cartitems=[];
var cart_n=document.getElementById('cart_n');
var table=document.getElementById('table');
var total=0;
//HTML
function tableHTML(i){
    return 
    <tr>
        <th scope="row">$(i+1)</th>
        <th><img style="width:90px;" src="${products[i].url}"></img></th>
        <td>${products[i].name}</td>
        <td>1</td>
        <td>${products[i].price}</td>
    </tr>
    ;
}
//CLEAR
function clean(){
    localStorage.clear();
    for(let index=0; index < products.length; index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    total=0;
    tableHTML.innerHTML =
       <tr>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
           <th></th>
       </tr>
    ;
    cart_n.innerHTML='';
    document.getElementById("btnBuy").style.display="none";
    document.getElementById("btnClean").style.display="none"
}
(()=>{
    for(let index=0;index <products.length;index++){
        table.innerHTML+=tableHTML(index);
        total=total+parseInt(products[index].price);
    }
    table.innerHTML+=
    <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">total:$${total}.00</th>
    </tr>
    <tr>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col">
            <button id="btnClean" onclick="clean()" class="btn text-white btn-warning">
                Clean Shopping Cart
            </button>
        </th>
        <th scope="col">
            <form id="form1" action="/cart" method="POST" autocomplete="off">
                <input type="hidden" name="total" value="${total}"></input>
                 <input type="hidden" name="_id" value=""></input>
                 <button id="submitbtn" class="btn btn-success">Buy</button>
            </form>
        </th>
    </tr>
    ;
    products=JSON.parse(localStorage.getItem('cart'));
    cart_n.innerHTML=`[${products.length}]`;
})();
var form =document.getElementById('form1');
document.getElementById('submitbtn').addEventListener('click',()=>{
    localStorage.clear();
    setTimeout(() => {
        Sub();
    }, 5000);
});
function Sub(){
    setTimeout(() => {
        form.submit();
    },5000);
}