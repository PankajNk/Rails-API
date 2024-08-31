import { DOMAIN } from "./config";

export const registerApi = async (bodyObject) => {
    // Set up options for the fetch request
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set content type to JSON
        },
        body: JSON.stringify(bodyObject) // Convert JSON data to a string and set it as the request body
    };

    try {
        // const backendUrl = 'https://psychic-space-carnival-pqwqv9j9gr3q9q-3005.app.github.dev';
        const backendUrl = 'https:127.0.0.1:3005';
        const response =  await fetch(`/users`,options);
        console.log(response)
        if (response.ok) {
            const result = await response.json(); // Parse the successful response JSON
            console.log("Response", result);
            return [result, '']; // Return the result and an empty error message
        } else {
            
            return ['','Server side error']; // Return the error message
        }
    } catch (error) {
        console.log('Error', error);
        return ['', `Server down: ${error.message}`]; // Return the error message
    }
};








// export const registerApi = async (bodyObject) => {
    

//     // Set up options for the fetch request
//     const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json' // Set content type to JSON
//     },
//     body: JSON.stringify(bodyObject) // Convert JSON data to a string and set it as the request body
//     };


//     try{
//         const response =  await fetch('https://psychic-space-carnival-pqwqv9j9gr3q9q-3000.app.github.dev/users',options);
//         if(response.ok){
//             const result = await response.json();
//             console.log("Response",result)
//             return [result,'']
//         }
//         return ['', 'server side error']

//     }catch(error){
//         console.log('Eroor',error )
//         return ['',`Server down ${error}`]
//     }

//     // Make the fetch request with the provided options
   
// }