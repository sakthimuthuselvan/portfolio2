const blink=["developer","fresher"]
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

    document.getElementById("span").innerHTML=letter
    if(letter.length===textcontent.length){
        index++;
        count=0
        
    }
    setTimeout(no,500)

}
no()