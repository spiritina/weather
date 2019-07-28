import citiesInfo from './city.list'

async function loadCities(){
  let cities = {};
  for(let i = 0; i < citiesInfo.length; i++){ 
      if(citiesInfo[i].name.substring([,4])&&citiesInfo[i].name.match(/\w/g)){
          if (cities[citiesInfo[i].name.substring([,4])]){
                  cities[citiesInfo[i].name.substring([,4])].push(citiesInfo[i].name)
          
          } else{
              cities[citiesInfo[i].name.substring([,4])] = [];
              cities[citiesInfo[i].name.substring([,4])].push(citiesInfo[i].name);
          }
        } else {
          if (cities['key'+citiesInfo[i].name[0]]){
            cities['key'+citiesInfo[i].name[0]].push(citiesInfo[i].name)
    
        } else{
            cities['key'+citiesInfo[i].name[0]] = [];
            cities['key'+citiesInfo[i].name[0]].push(citiesInfo[i].name);
              }
          }
      }
  for (let key in cities){
      cities[key].sort();
  }
  console.dir(cities);
}
//loadCities();