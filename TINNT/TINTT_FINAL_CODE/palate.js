function f1(){
    var pageContent = document.getElementById("fav").innerHTML;
    sessionStorage.setItem("page1content", pageContent);
    console.log(pageContent);
    window.location.href="favourites.html";
}
document.getElementById("helo").innerHTML = sessionStorage.getItem("page1content");
function f2(){
    var pageContent = document.getElementById("fav1").innerHTML;
    sessionStorage.setItem("pagecontent", pageContent);
    console.log(pageContent);
    window.location.href="favourites.html";
}
document.getElementById("hi").innerHTML = sessionStorage.getItem("pagecontent");
function f3(){
    var pageContent = document.getElementById("fav3").innerHTML;
    sessionStorage.setItem("page2content", pageContent);
    console.log(pageContent);
    window.location.href="favourites.html";
}
document.getElementById("h5").innerHTML = sessionStorage.getItem("page2content");