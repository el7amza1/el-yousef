export interface User {
    email : string,
    id   : string ,
    firstName :  string,
    phone : string,
    lastName : string,
    image :string,
    password : string,
    type: string
  
  }
export interface Project{
    id? : number ,
    name : string,
    location : string
}
  export interface Data {
    user:User
  }
