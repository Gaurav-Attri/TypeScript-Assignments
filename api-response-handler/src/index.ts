/*
- Assignment 3: API Response Handler
- Concepts: Generics, type inference
- Create a generic ApiResponse<T> interface that represents API responses with properties: success(boolean), data (type T), error (optional string), and timestamp.
- Write a generic function handleApiResponse<T> that takes an ApiResponse<T> and returns the data if successful, or throws an error if not.
- Test it with different data types (user data, product lists, etc.).
*/
//---------------------------------------------------------------------------------------------------
interface ApiResponse<T>{
    success: boolean;
    data: T;
    error?: string;
    timestamp: Date;
}

function handleApiResponse<T>(apiResponse: ApiResponse<T>): T{
    const {success, data, error} = apiResponse;
    if(!success) throw new Error(error || 'API request failed');
    return data;
}

const userData = {
    username: "gaurav",
    age: 99
}

const productData = {
    productName: "Nike Shoes",
    category: "Lifestyle"
}

try{
    console.log(
        handleApiResponse({
            success: true,
            data: userData,
            timestamp: new Date()
        })
    )
    console.log(
        handleApiResponse({
            success: false,
            data: productData,
            error: "Couldn't connect to the server",
            timestamp: new Date()
        })
    )

}
catch(err){
    console.error(err);
}