// var uId = localStorage.getItem('userId');
var resName
var uId = 'vSmjrlnlnNVIbQZPrAg2pkawk8k2';
console.log(uId)
var arr=[]
// // console.log(uId)
firebase.database().ref('AllUsers').child(uId).child('Category').on('value',function(data){
    resName = data.val();
    // console.log(resName)
    for(key in resName){
       var detail = resName[key]
       for (key1 in detail){
           mypro = detail[key1]
              console.log(mypro)
                arr.push(mypro)
       }
    }
    // console.log(resName)
    console.log(arr)
    // console.log(detail)
    
    // var userName = document.getElementById('name');
    // userName.innerHTML="Thank You For Login : "+resName
})
setTimeout(get = ()=>{
    for(let i=0;i<arr.length;i++){
        document.getElementById('myrest').innerHTML+= `<div class="card" style="width: 18rem;">
             <img src="./Images/${arr[i].imgP}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name : ${arr[i].pName}</h5>
                    <h5 class="card-title">Description : ${arr[i].pDes}</h5>
                    <h5 class="card-title">Price : ${arr[i].pRate}</h5>
                    <h5 class="card-title">Delivery : ${arr[i].pDel}</h5>
                    <a href="./product.html" class="btn btn-primary"onclick="addToCart('${arr[i].pName}','${arr[i].pRate}','${arr[i].pDel}')">Buy Now</a>
                </div>
            </div> `
        }
},5000)

let itemArr = [];
let orderItem = localStorage.getItem('orderItems')
if (orderItem !== null) {
    itemArr = JSON.parse(orderItem)
}

let addToCart = (itemsName, itemPrice, category) => {
    let obj = {
        itemsName,
        itemPrice,
        category
    }
    itemArr.push(obj)
    localStorage.setItem('orderItems', JSON.stringify(itemArr))

}

let tblData = document.getElementById("tblData")
var total= 0;

for (var i = 0; i < itemArr.length; i++) {
    // console.log(itemArr);
    tblData.innerHTML += `
    <tr>
          <td>${itemArr[i].itemsName}</td>
          <td>${itemArr[i].itemPrice}</td>
          <td>1</td>
          <td>${itemArr[i].category}</td>
          <td>${itemArr[i].itemPrice}</td>
        </tr>`
        var itemRate = parseInt(itemArr[i].itemPrice)
        total = total+itemRate
        
    }
    // console.log(total);
    var subTotal = document.getElementById('subTotal')
    subTotal.innerHTML = `<p>Net Amount : ${total}</p>`
