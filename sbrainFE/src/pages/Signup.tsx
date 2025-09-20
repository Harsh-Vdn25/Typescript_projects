import { useState } from "react";
import type { FormEvent } from "react";
import { Input } from "../components/ContentModal";
import Button from "../components/Button";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  return (
    <div className="w-screen h-screen  bg-gray-200 flex justify-center items-center">
      <form
        onSubmit={(e: FormEvent) => e.preventDefault()}
        className="flex flex-col items-center gap-4 
        p-6 bg-white border border-black rounded-xl"
      >
        <h1 className="text-purple-600 text-xl font-bold ">SignUp</h1>
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
        <div className="flex">
          <Input
            type="text"
            value={firstName}
            placeholder="LastName"
            className=""
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div className="flex">
          <Input
            type="text"
            value={lastName}
            placeholder="firstName"
            className=""
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          text="Signup"
          variant="primary"
          size="md"
          loading={false}
          onClick={() => {}}
        />
      </form>
    </div>
  );
};
