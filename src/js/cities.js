//import citiesInfo from './city.list'

/*let cities = {};
async function loadCities(){
    for(let i = 0; i < citiesInfo.length; i++)
    {
        if (citiesInfo[i].name.match(/\w/g)) {
            if (cities['key'+citiesInfo[i].name[0]]){
                    if(cities['key'+citiesInfo[i].name[0]].length < 500){
                    cities['key'+citiesInfo[i].name[0]].push(citiesInfo[i].name);}
            
            } else{
                cities['key'+citiesInfo[i].name[0]] = [];
                cities['key'+citiesInfo[i].name[0]].push(citiesInfo[i].name);
            }
        }
    }
    for (let key in cities){
        console.log(key)
        cities[key].sort();
        console.log(cities[key]);
    }
    console.log(cities);
    
    var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }

    textFile = window.URL.createObjectURL(data);

    // returns a URL you can use as a href
    return textFile;
  };
  var create = document.getElementById('create');

create.addEventListener('click', function () {
  var link = document.createElement('a');
  link.setAttribute('download', 'cities.txt');
  link.href = makeTextFile(cities);
  document.body.appendChild(link);

  // wait for the link to be added to the document
  window.requestAnimationFrame(function () {
    var event = new MouseEvent('click');
    link.dispatchEvent(event);
    document.body.removeChild(link);
  });

}, false);
}*/





const isCityExist = () => {
    let city = cityInput.value;
    /* cities = cities.filter((town)=>{
        console.log(city);
        console.log(town);
        return town.match(city)});
        console.log(cities);
        }*/
   }

 // loadCities().then((resolve)=>{// })