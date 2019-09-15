function AddComma(text,e){
          let char = String.fromCharCode(e.which);
          console.log(char);
          if(!(Number.isInteger(parseInt(char)))){
            let fullPrice=
            text.value;
            let first=
            fullPrice.substring(0,(text.value.length-1));
            text.value=first;
          }

         switch(text.value.length){    
             case 1:
             document.getElementById("price").value="0.0"+text.value;
             break;
             default:
             let data=
             text.value.replace(".","");
             let first=
             data.substring(0,(data.length-2));
             let second=
             data.substring(data.length-2);
             let temp=Math.abs(first) +"." + second;
             document.getElementById("price").value=temp; 
             if(document.getElementById("price").value.length >=6 )
             {
                 let stretch =document.getElementById("price");
                 stretch.style.width="70%";
             }else{
                let stretch =document.getElementById("price");
                stretch.style.width="40%";
             }
             if(document.getElementById("price").value.length >=13 ){
                let stretch =document.getElementById("price");
                stretch.style.width="90%";
            }
            if(document.getElementById("price").value.length >=15 ){
                let stretch =document.getElementById("price");
                stretch.style.width="110%";
            }
         }
}
