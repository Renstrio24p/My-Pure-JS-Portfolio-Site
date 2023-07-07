let xhr = new XMLHttpRequest();
let url = './src/php/callphp.php';

xhr.onreadystatechange = ()=>{
    if(xhr.readyState === 4 && xhr.status === 2000){
        let response = xhr.responseText;
        console.log(response);
    } 
}

xhr.open('GET',url,true);
xhr.send();