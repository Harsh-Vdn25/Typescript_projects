import { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "../components/ContentModal";
import Button from "../components/Button";
import { api } from "../lib/api";
import  { type ResponseType } from "./Signup";
import { useNavigate } from "react-router-dom";
export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const handleSignin=async ()=>{
      console.log(username,password);
      if(!username||!password){
          alert('Please fill all the fields')
          return ;
      }
      try{
          const response=await api.post<ResponseType>('/user/signin',{
          username,
          password
      })
      if (!response.data?.Token) {
          alert("Signup failed, please try again.");
          return;
        }
      localStorage.setItem('BrainlyToken',response.data?.Token);
      navigate('/home');
      }catch(err){
          console.log(err);
      }
    }

  return (
    
    <div className="w-screen h-screen  bg-gray-200 flex justify-center items-center">
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className="flex flex-col items-center gap-4 
        p-6 bg-white border border-black rounded-xl"
      >
        <h1 className="text-purple-600 text-xl font-bold ">Signin</h1>
        <div className="flex">
          <Input
            type="text"
            value={username}
            placeholder="Username"
            className=""
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex">
          <Input
            type="password"
            value={password}
            placeholder="Password"
            className=""
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          text="Signup"
          variant="primary"
          size="md"
          loading={false}
          onClick={() => {handleSignin()}}
        />
      </form>
    </div>
  );
};
