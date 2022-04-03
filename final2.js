var Todolist=[];

function AddTODO(){
    var inputText=document.getElementById('TO-DOS').value ;
    Todolist.push(inputText) ;
    var add="";
    for (i=0;i<Todolist.length;i++){
        add=add+ "<p class='c'>" + Todolist[i]+ "</p>";
    } 
    document.getElementById('Text').innerHTML=add;
}

$(document).ready(function(){
    $(document).on('click', '.c',function(){
        $(this).css('color','green');

    });
}
)   
// $("#Text").dbclick(function(){
//     $("p").remove();
//   });