window.addEventListener('load',()=>{
  
    let calorie= document.querySelector("#calorie");
    //let energy= document.querySelector("#energy");
    
   
    const pp= document.querySelector("#pp")
//    const pq= document.querySelector("#pq")
//    const recipe= document.querySelector("#recipe")
  
   //const = document.querySelector("#")

        const searchbox = document.querySelector('#search-box');
        searchbox.addEventListener('keypress', setQuery);
        
        function setQuery(e) {
            if (e.keyCode == 13) {
             const name= searchbox.value
              const product=`one normal ${name}`;
      
                getResults(product);
                 console.log(searchbox.value);
            }
        }
        


   // analysis food api
  // const name="noodles";
   //const product=`one normal ${name}`;

   function getResults(query) 
   {
   

  const api=`https://api.edamam.com/api/nutrition-data?app_id=765bc46f&app_key=e9391d05fb9c422f5f1d235aebafa808&ingr=${query}`;
 

   fetch(api)
.then(response=>{
    return response.json();
})
.then(data=>{
    console.log(data);

    // to fetch CALORIES from json
const calories = data.calories;
calorie.textContent= calories+"K";

console.log(`current calories is ${calories}`);

 // to fetch energy from json

//to fetch description
//const {quantity} = data.totalDaily.CA;

if(data.totalDaily.PROCNT!==undefined){

const pcen = data.totalDaily.PROCNT.quantity;

var pcent = pcen.toFixed(2);

pp.textContent= pcent+"%";


console.log(`% is d ${pcent}`);

}
else{
    pp.textContent= 0;


}




// to fetch fats
if(data.totalDaily.FAT!==undefined){

const Fcen = data.totalDaily.FAT.quantity;

var Fcent = Fcen.toFixed(2);
Fp.textContent= Fcent+"%";



console.log(`% is F ${Fcent}`);

}
else{
    Fp.textContent= 0;

}

// to fetch Cholestrol
if(data.totalDaily.CHOLE!==undefined){
const Cacen = data.totalDaily.CHOLE.quantity;
// const Caunit = data.totalNutrients.CHOLE.unit;
// const Caqty = data.totalNutrients.CHOLE.quantity;

var Cacent = Cacen.toFixed(2);

cap.textContent= Cacent+"%";


console.log(`% is F ${Cacent}`);

}
else{
    cap.textContent= 0;



}



// const rname= searchbox.value
             

// fetch(`https://api.edamam.com/search?q=${rname}&app_id=e2a2f7c1&app_key=544886289c16cc75d8b6144fbb7843b6&from=0&to=3&calories=591-722&health=vegan`)  
//   .then(reciepe => {
//               return reciepe.json();
//           }).then(data=>{
//                       console.log(data);

//                      const uri = data.hits[1].recipe.uri;
//                      console.log(uri);

//                   /*   var url = new URL(uri); 
//             //up.innerHTML = url; 
//             var down = document.getElementById('recipe'); 
//             console.log(down);
//             down.innerHTML = " <a href="url"></a> "; 
            
//            /* function GFG_Fun() { 
//                 url.searchParams.set('param_1', 'val_1'); 
//                 down.innerHTML = url; 
//             }*/ 
                    
//             });
            
  


})

}  
});














/*f.addEventListener('click',()=>{
    if(temperatureSpan.textContent==="C"){
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
    else{
        temperatureDegree.textContent= (1.8*(temp- 273) + 32).toFixed(2);

        temperatureSpan.textContent="F";
    
    }
})






<div>
   
    <input type="text" autocomplete="off" class="search-box" placeholder="Search for a reciepe..." />
     </div>  
    




*/
