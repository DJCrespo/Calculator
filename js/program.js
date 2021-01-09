let suma = function(x, y){
    return x+y;
}

let resta = function(x, y){
    return x-y;
}

let division = function(x, y){
    return x/y;
}

let multi = function(x, y){
    return x*y;
}

function operation(op){
    let text = document.getElementById("textBox2").innerText;
    document.getElementById("textBox2").innerHTML = "";
    document.getElementById("textBox1").innerHTML = text + " " +op;
}

function result(){
    let x = "", aux = 0;
    let tB1 = Array.from(document.getElementById("textBox1").innerText);
    let y = parseInt(document.getElementById("textBox2").innerText);
    let op = tB1[tB1.length - 1];
    tB1.splice(tB1.length-2, tB1.length-1);
    for(let i=0; i<tB1.length; i++){
        x += tB1[i].toString();
    }
    x = parseInt(x);
    switch(op){
        case ("/"):
            aux = division(x, y);
            break;
        case ("X"):
            aux = multi(x, y);
            break;
        case ("-"):
            aux = resta(x, y);
            break;
        case ("+"):
            aux = suma(x, y);
            break;
    }
    let text = document.getElementById("textBox2").innerText;
    document.getElementById("textBox1").innerHTML += " " + text;
    document.getElementById("textBox2").innerHTML = aux;
}

function add(valor){
    document.getElementById("textBox2").innerHTML += valor;
}

function cA(){
    document.getElementById("textBox1").innerHTML = "";
    document.getElementById("textBox2").innerHTML = "";
}

function c(){
    document.getElementById("textBox2").innerHTML = "";
}

function deleteOne(){
    aux = "";
    let text = Array.from(document.getElementById("textBox2").innerText);
    text.splice(text.length - 1);
    for(let i=0; i<text.length; i++){
        aux += text[i].toString();
    }
    document.getElementById("textBox2").innerHTML = aux;
}