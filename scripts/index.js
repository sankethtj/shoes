//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit",productformfunc);

var productArr=[];

function productformfunc(e){

    e.preventDefault();

    var types = document.getElementById("type").value;
    var descr = document.getElementById("desc").value;
    var prices= document.getElementById("price").value;
    var images = document.getElementById("image").value;

    var obj={
        type:types,
        desc:descr,
        price:prices,
        image:images,
    };

    productArr.push(obj);
    console.log(productArr);
    
}

localStorage.setItem("products",productArr);
