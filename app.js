var uId = localStorage.getItem('userId');
var resName
// // console.log(uId)
firebase.database().ref('AllUsers').child(uId).on('value',function(data){
    resName = data.val().resturant;
    console.log(data.val().Category)
    var userName = document.getElementById('name');
    userName.innerHTML="Thank You For Login : "+resName
})
setTimeout(get = ()=>{
    document.getElementById('myrest').innerHTML+= `<div class="card" style="width: 18rem;">
             <img src="Images/rest.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${resName}</h5>
                    <a href="./product.html" class="btn btn-primary">Go to Product</a>
                </div>
            </div> `
},5000)

let sendItem=()=>{
    var imgPath = document.getElementById('imgP').files;
    var imgP=imgPath[0].name
    var cat = document.getElementById('catg').value
    var pName = document.getElementById('pName').value
    var pDes = document.getElementById('pDes').value
    var pRate = document.getElementById('pRate').value
    var pDel = document.getElementById('delivery').value
    // document.getElementById('link').innerHTML=imgPath
    // console.log(imgPath[0].name)
    // console.log(op)
    console.log(imgP,cat,pName,pDes,pRate)
    let obj={
        imgP,
        cat,
        pName,
        pDes,
        pRate,
        pDel
    }
    firebase.database().ref(`AllUsers/${uId}/Category`).child(obj.cat).push(obj);
    alert('Item Sucessfully Added')
    window.location.href='./addProduct.html'
}

let signOut=()=>{
    localStorage.clear()
    window.location.href="signin.html"
}