const blink=["developer"]
let index=0
let count=0

let textcontent=""
var letter=""


function no(){
    if(index===blink.length){
        index=0
    }
    textcontent=blink[index]
    letter=textcontent.slice(0,++count)

    document.getElementById("span").innerText=letter
    if(letter.length===textcontent.length){
        index++;
        count=0
        
    }
    setTimeout(no,300)

}
no()



var click=false

function sakthi(){
    var sec=document.getElementById("navsection")
    click=!click
    console.log(click)
    if(click==true){
       sec.style.display="block"
    
    }else{
        sec.style.display="none" 
    }
console.log(sec)
}

