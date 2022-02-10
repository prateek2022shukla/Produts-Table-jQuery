//jQuery Code

$(".close1").click(function(){
    $(".success").hide();
    
});


$(".close2").click(function(){
    $(".error").hide();
    
});

//Edit Form Function

var temp=0;

function editForm(p_id){  
    
        $("#add_product").hide();     
        $(".update-btn").show();   
    
    for(var i=0;i<proList.length;i++){
        if(proList[i].id == p_id){
            document.getElementById("product_sku").value = proList[i].id;
            document.getElementById("product_name").value = proList[i].name;
            document.getElementById("product_price").value = proList[i].price;
            document.getElementById("product_quantity").value = proList[i].quantity;   
            temp = i;      
           
        }
    } 

}

var update_button = $('<input/>').attr({ type: 'button', name:'btn1', value:'Update Product', class: "update-btn", onclick:'update()'});
$(".edit").append(update_button);

$(".update-btn").hide();   


function update(){   

    // proList[temp].id = document.getElementById("product_sku").value;
    proList[temp].name = document.getElementById("product_name").value;
    proList[temp].price = document.getElementById("product_price").value;
    proList[temp].quantity = document.getElementById("product_quantity").value;
           
    display(proList);

    $("#add_product").show();     
    $(".update-btn").hide();   
         
}



//Delete Function 


function deleteForm(id){

    if(confirm("Do you want to delete this field ?")){
        for(var i=0;i<proList.length;i++){
            if(proList[i].id == id){
                proList.splice(i,1);
            }
        }
    }
  
    display(proList);   
    

}


//JavaScript code

var proList = [];

function submitForm(){
    var val1 = document.getElementById("product_sku").value;
    var val2 = document.getElementById("product_name").value;
    var val3 = document.getElementById("product_price").value;
    var val4 = document.getElementById("product_quantity").value;

    var result = "";

    if(checkData(val1,val2,val3,val4)){
        result = store(val1,val2,val3,val4);
        display(result);
         }
    else
      document.getElementsByClassName("error").innerHTML = "<p>There is some problem</p>";
}

function checkData(val1,val2,val3,val4){
   if(val1=="" && val2 == "" && val3 == "" && val4=="")
      {
        document.getElementById("product_sku").style.border = "1px solid red";
        document.getElementById("product_name").style.border = "1px solid red";
        document.getElementById("product_price").style.border = "1px solid red";
        document.getElementById("product_quantity").style.border = "1px solid red";    
        $(".error").css("display", "block");
        return false;
      }


    if( isNaN(val1) || !isNaN(val2) || isNaN(val3) || isNaN(val4)){
        if(isNaN(val1)){
            document.getElementById("product_sku").style.border = "1px solid red";
            $(".error").css("display", "block");
        }
        else{
            document.getElementById("product_sku").style.border = "1px solid grey";
        }

        if(!isNaN(val2)){
            document.getElementById("product_name").style.border = "1px solid red";
            $(".error").css("display", "block");
        }
        else{
            document.getElementById("product_name").style.border = "1px solid grey";
        }

        if(isNaN(val3)){
            document.getElementById("product_price").style.border = "1px solid red";
            $(".error").css("display", "block");
        }
        else{
            document.getElementById("product_price").style.border = "1px solid grey";
        }
        if(isNaN(val4)){
            document.getElementById("product_quantity").style.border = "1px solid red";
            $(".error").css("display", "block");
        }
        else{
            document.getElementById("product_quantity").style.border = "1px solid grey";
        }
        
        return false;
    }
   

   else
     return true;
}


function store(val1, val2, val3, val4){
    parse_val1 = parseInt(val1);
    parse_val3 = parseInt(val3);
    parse_val4 = parseInt(val4);
    $(".success").css("display", "block");
   for (var x = 0; x < proList.length; x++ ){

       if(proList[x].id == parse_val1){
       $(".error").css("display", "block");
            return proList;
            
       }
       $(".success").css("display", "block");
   }

   const myArray = { "id": parse_val1, "name" : val2, "price" : parse_val3, "quantity":parse_val4};
   proList.push(myArray);
   return proList;
}

function display(result){
    document.getElementById("product_list").innerHTML = "<tr>\
                            <th>SKU</th>\
                            <th>Name</th>\
                            <th>Price</th>\
                            <th>Quantity</th>\
                            <th>Action</th>\
                        </tr>";
    for(let i = 0; i < result.length; i++)
    document.getElementById("product_list").innerHTML += '<tr> <td>' + result[i].id + '</td> <td>'+ result[i].name  + '</td ><td>'+ result[i].price + '</td> <td>' + result[i].quantity +  '</td>\
    <td><a href="#" class="edit" onclick = "editForm('+ result[i].id + ')">Edit</a><a href="#" class="delete" onclick = "deleteForm('+result[i].id +')" >Delete</a></td>\
     <tr/>';

   
}











