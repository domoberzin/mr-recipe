import axios from "axios"

export const getCocktails = async (searchTerm) => {
    
    const apiKey = 'emqJZiaBOWlMBit9AFNBvQ==zeGsiSpgXfF4D6Zo';
    
    const ingredients = searchTerm.toString();

    
    return await axios({
        method: 'GET',
        url: `https://api.api-ninjas.com/v1/cocktail?ingredients=${ingredients}`,
        headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json'
        }
    }).then(response => {
        console.log("response", response);
        return response.data;
    }).catch(error => {
        console.log(error);
    });
    // var config = {
    //   method: 'get',
    //   url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=vodka,orange juice,lime',
    //   headers: { 
    //     'X-Api-Key': 'emqJZiaBOWlMBit9AFNBvQ==zeGsiSpgXfF4D6Zo', 
    //     'Content-Type': 'application/json'
    //   }
    // };
    
    // axios(config)
    // .then(function (response) {
    //   console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    
    
    // var config = {
    //     // method: 'get',
    //     // url: 'https://api.api-ninjas.com/v1/cocktail?ingredients=' + searchTerm.toString(),
    //     // // params: {ingredients: 'vodka, lemon juice'},
    //     headers: { 
    //       'X-Api-Key': 'emqJZiaBOWlMBit9AFNBvQ==zeGsiSpgXfF4D6Zo', 
    //       'Content-Type': 'application/json'
    //     }
    //   };
    //   await axios.get('https://api.api-ninjas.com/v1/cocktail?ingredients=' + searchTerm.toString(), config) 
    //   .then(response => {
    //     // var arr = [];
    //     // Object.keys(response.data).forEach(key => arr.push(response.data[key]))c
    //     // return arr;
    //     // console.log(response)
    //     return response.data;
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })

    //   return arr;
};
//   try {
//     request.get({
//         url: 'https://api.api-ninjas.com/v1/cocktail?name=' + name,
//         headers: {
//           'X-Api-Key': 'YOUR_API_KEY'
//         },
//       }, function(error, response, body) {
//         if(error) return console.error('Request failed:', error);
//         else if(response.statusCode != 200) return console.error('Error:', response.statusCode, body.toString('utf8'));
//         else console.log(body)
//       });
//     const response = await axios.get(`https://your-api-endpoint.com/search?q=${searchTerm}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }