import fs  from 'fs';
import fetch from "node-fetch";

const getData=()=>{
    fetch('https://api.imgur.com/3/account/DarrellWagonerCreations/submissions',
    {
      headers : { 
        'Authorization': 'Client-ID 5c7c9cd823f9da7'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        fs.writeFile('photoData.json', JSON.stringify(myJson, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
      );      });
  }

export default getData;