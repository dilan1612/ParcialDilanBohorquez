const xhr = new XMLHttpRequest();
var bt =document.getElementById("bt1");
xhr.open("GET","departments.json",true)

xhr.onreadystatechange = ()=>{
    if( xhr.readyState === 4 ){
      const data = JSON.parse( xhr.responseText)
      showData( data )
      fillBySpecies(data);
      fillByNombre(data);
      fillDepartment(data);
      bt.addEventListener("click",function(){
          lis(data);})
      
    }
  }
  
  xhr.send()
  
  
  function showData(data){
    console.log(data)
    const body = document.getElementById('datost')
    data.forEach((character)=>{
      columnas(character,body);
    }
    )
  
  }


function fillDepartment(data){

    var selec = document.getElementById('sdepartamento');
    var departs = [];

    data.forEach((character)=>{
        if (!departs.includes(character.name)) {
            departs.push(character.name);
            var option = document.createElement('option');
            option.value = character.name;
            option.textContent = character.name;
            selec.appendChild(option);
        }
    });


}



function lis(data){
    var selecN=document.getElementById('sdepartamento');
   // var selecE=document.getElementById('sEspecie');
   // var body2 =document.getElementById('datosf');
    /*var resultadosFiltrados = data.filter((character)=>{
        return character.species === selecE.value;
    });
     // Verifica si el valor ingresado es un número válido
           
                resultadosFiltrados.forEach((character)=>{
                    columnas(character,body2);
                })*/
    body2.innerHTML="";
    if(selecE.selectedIndex!==0 && selecN.selectedIndex===0){
        data.forEach((character)=>{
            if(selecE.value===character.species){
            columnas(character,body2);
            }
        })
    }else if(selecE.selectedIndex===0 && selecN.selectedIndex!==0){
        data.forEach((character)=>{
            if(selecN.value===character.name){
                columnas(character,body2);
            }
         })
    } else if(selecE.selectedIndex!==0 && selecN.selectedIndex!==0){
        data.forEach((character)=>{
            if(selecN.value===character.name && selecE.value===character.species){
                columnas(character,body2);
            }
        })
    }
}






const numeroInput = document.getElementById("salario");



numeroInput.addEventListener("keydown", function(event) {
 
    const key = event.key;
  
    
    const esNumero = /^\d$/.test(key) || ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key);
  
   
    if (!esNumero) {
      event.preventDefault();
    }
  });

  const letrasInput = document.getElementById("apellidos");

// Agrega un evento de escucha al campo de entrada
letrasInput.addEventListener("keydown", function(event) {
  // Obtiene el código de tecla presionada
  const key = event.key;

  // Verifica si la tecla presionada es una letra (a-zA-Z) o teclas especiales
  const esLetra = /^[a-zA-Z]$/.test(key) || ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key);

  // Si no es una letra ni una tecla especial, prevenimos la entrada del carácter
  if (!esLetra) {
    event.preventDefault();
  }
});

const letrasInput2 = document.getElementById("nombres");


letrasInput2.addEventListener("keydown", function(event) {

  const key = event.key;

  
  const esLetra = /^[a-zA-Z]$/.test(key) || ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key);

  
  if (!esLetra) {
    event.preventDefault();
  }
});






