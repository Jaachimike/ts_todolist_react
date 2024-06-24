import React from "react";
import {useUser} from "../contexts/UserContext";
import trashIcon from "../assets/svg/icons8-trash (1).svg";
import editIcon from "../assets/svg/icons8-edit.svg";
import {IconButton} from "../components/IconButton";

const NoteList = () => (
  <>
    <div>
      {/* list box  */}
      <div className="border-2 border-black flex space-x-6 p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          consectetur nisi qui iste facilis architecto quis quae voluptate quam,
          alias iure obcaecati officia, dolor sunt, nemo impedit eaque. Sit,
          quos.
        </p>
        {/* action buttons */}
        <div className="flex items-center justify-center w-4/12 space-x-7">
          <IconButton icon={editIcon} />
          <IconButton icon={trashIcon} />
        </div>
      </div>
    </div>
  </>
);

const Homepage: React.FC = () => {
  const {username} = useUser();

  return (
    <div>
      <div className=" bg-black h-screen flex justify-center items-center">
        <div className=" bg-white flex flex-col w-1/2 p-2">
          <div className=" border-2 m-8 border-black w-full px-2 py-6 mx-auto">
            <h1 className="text-right">Hello {username}</h1>
            <p className="mb-6">Here are some of your notes:</p>
            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
