/*
Assignment 1: User Profile Type System
=======================================
- Concepts: Interfaces, optional properties, readonly
- Create a type system for a user profile in a social media app. 
- Define an interface UserProfile with properties like id (readonly), username, email, bio (optional), avatarUrl (optional), and createdAt (Date). 
- Then create a function createUserProfile that takes necessary parameters and returns a UserProfile object. 
- The id should be auto-generated and createdAt should default to the current date.
 */

let userId = 0;

interface UserProfileInput{
    username: string;
    email: string;
    bio?: string;
    avatarUrl?: string;
}

interface UserProfile{
    readonly id: number,
    username: string,
    email: string,
    bio: string|undefined,
    avatarUrl: string|undefined,
    readonly createdAt: Date
}

function createUserProfile(userData: UserProfileInput){
    const userProfile: UserProfile = {
        id: ++userId,
        username: userData.username,
        email: userData.email,
        bio: userData.bio,
        avatarUrl: userData.avatarUrl,
        createdAt: new Date()
    }
    
    return userProfile;
}


console.log(
    createUserProfile({
        username: "gaurav",
        email: "gaurav@gmail.com",
    })
);

console.log(
    createUserProfile({
        username: "ayush",
        email: "ayush@gmail.com"
    })
)

console.log(
    createUserProfile({
        username: "nitish",
        email: "nitish@gmail.com",
        bio: "Nitish Kumar"
    })
)

console.log(
    createUserProfile({
        username: "akshay",
        email: "akshay@gmail.com",
        bio: "Akshay Yadav",
        avatarUrl: "lskfjlskj"
    })
)