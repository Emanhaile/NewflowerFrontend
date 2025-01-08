import EditUserForm from "../EditUser/EditUserForm.jsx";
import AdminMenu from "../AdminMenu/AdminMenu.jsx";
import { useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams(); // Get the user ID from the URL

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-md p-4">
            <AdminMenu />
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 bg-white shadow-md p-4 mt-6 md:mt-0">
            <EditUserForm id={id} /> {/* Pass the ID to EditUserForm */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
