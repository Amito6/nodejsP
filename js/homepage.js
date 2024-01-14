window.onload = () =>{
    ajaxRequest();
}
function ajaxRequest(){
    let form = document.querySelector("#signup-form");
    form.onsubmit = function(e){
        e.preventDefault();
        const ajax = new XMLHttpRequest();
        ajax.open("POST","/api/signup",true);
        ajax.send();

        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4)
            {
                const data = JSON.parse(ajax.response);
                alert(data.message);
            }
        }
    }
}