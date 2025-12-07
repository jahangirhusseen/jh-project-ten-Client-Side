import React, { use, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleFormModal = () => {
    setIsOpen(!isOpen);
  };
  const handleUpdateUser = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        setIsOpen(!isOpen);
        toast.success("User Data Update Successfully");
      })
      .catch((error) => {
        toast.warning(error.message);
        setUser(user);
      });
  };

  return (
    <>
      <div className="container mx-auto py-10">
        <div className="flex justify-center flex-col items-center gap-4">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
          <h2>{user?.displayName}</h2>
          <h2>{user?.email}</h2>

          <button
            onClick={handleFormModal}
            className="btn btn-secondary hover:bg-white hover:text-secondary mt-4"
          >
            Update User
          </button>
        </div>

        {/* Update user Form */}
        {isOpen && (
          <>
            <div className="card mx-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-5">
              <div className="card-body">
                <form className="mt-3 " onSubmit={handleUpdateUser}>
                  <fieldset className="fieldset gap-4">
                    <label className="label">Name</label>
                    <input
                      name="name"
                      defaultValue={user?.displayName}
                      type="text"
                      className="input"
                      placeholder="Name"
                    />
                    <label className="label">Photo URL</label>
                    <input
                      name="photo"
                      defaultValue={user?.photoURL}
                      type="text"
                      className="input"
                      placeholder="Photo Url"
                    />

                    <button className="btn btn-secondary hover:bg-white hover:text-secondary mt-4">
                      Update
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
