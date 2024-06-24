import React from "react";
import axios from "axios";
import {useUser} from "../contexts/UserContext";
import {useNavigate} from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const {username, setUsername} = useUser();

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/users", {
        username,
      });
      // console.log("User created:", response.data);
      if (response.data) {
        navigate("/home");
      }
      // Optionally handle success (e.g., show a success message)
    } catch (error) {
      console.error("Failed to create user:", error);
      // Optionally handle error (e.g., show an error message)
    }

    console.log("Form submitted with username:", username);
  };

  return (
    <div>
      <div className=" bg-black h-screen flex justify-center items-center">
        <div className=" bg-white flex flex-col px-10 py-20">
          <h1 className=" font-bold text-4xl mb-16 italic">
            WELCOME TO THE NOTE APP
          </h1>
          <div className="flex justify-center space-x-5 mb-10">
            <label htmlFor="">Kindly enter your name :</label>
            <input
              type="text"
              placeholder="Enter name here ..."
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <button
            className="bg-black text-white hover:bg-green-950 py-5 font-bold"
            onClick={submitForm}
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
