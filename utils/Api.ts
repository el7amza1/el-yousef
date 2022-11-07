import { User } from "@prisma/client";
import { SupabaseClient } from "@supabase/auth-helpers-react";
import axios from "axios";
import { NextRouter } from "next/router";
// import { Dispatch } from "react";


export const createUSer = async (
  user: User,
  supabaseClient: SupabaseClient<any, "public", any>
) => {
  const supabaseAuthRes = await supabaseClient.auth.signUp({
    email: user.email,
    password: user.password,
  });
  const res = await axios.post("/api/user", {
    ...user,
    id: supabaseAuthRes?.data?.user?.id,
  });
};
export const addPhoto = async (userId: string, file: File,supabase:SupabaseClient<any, "public", any>) => {
  try {
   const {data,error}= await supabase.storage.from("images").upload(`${file.name}`,file,{
    cacheControl:'3600',
    upsert: false
   })
  if (data ){
    const {data: data1}=  supabase.storage.from("images").getPublicUrl(data.path)
    const res = await axios.post(`/api/user/${userId}`,{ image:data1.publicUrl} );
    
  }   
  
  } catch (e) {
    console.log(e);
  }
};
export const uploadPhoto = async (userId: string, file: File,supabase:SupabaseClient<any, "public", any>) => {
  try {
   const {data,error}= await supabase.storage.from("images").upload(`${file.name}`,file,{
    cacheControl:'3600',
    upsert: false
   })
  if (data ){
    const {data: data1}=  supabase.storage.from("images").getPublicUrl(data.path)
    const res = await axios.post(`/api/user/${userId}`,{ image:data1.publicUrl} );
    
  }   
  
  } catch (e) {
    console.log(e);
  }
};
// export const signInUser = async (
//   userr: { email: string; password: string },
//   router: NextRouter
// ) => {
//   try {
//     const { user, error } = await supabaseClient.auth.signIn({
//       email: userr.email,
//       password: userr.password,
//     });
//     const res = await axios.post("/api/users/signin", userr);

//     if (res.status === 200 && user !== null) router.push("/");
//     else {
//       router.push("/signin");
//     }
//   } catch (e: any) {
//     if (e.status !== 500) {
//       if (e.response.status === 404) {
//         alert("user not found!");
//       } else {
//         alert(e.response.data.errors[0].error);
//       }
//     } else {
//       console.log(e);
//     }
//   }
// };
