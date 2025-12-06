import { useState, useEffect } from "react";
import EditModal from "./Edit-modal";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleAddEmployees = () => {
    if (employee.trim() === "" || position.trim() === "") return;

    const newEmployee = {
      name: employee,
      position: position,
      image: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    };

    fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmployee),
    })
      .then((res) => res.json())
      .then((data) => {
        setEmployees([...employees, data]);
        setEmployee("");
        setPosition("");
      });
  };

  const handleRemoveEmployee = (id) => {
    fetch(`http://localhost:3001/employees/${id}`, {
      method: "DELETE",
    }).then(() => {
      setEmployees(employees.filter((emp) => emp.id !== id));
    });
  };

  return (
    <div>
      <div className="flex p-8">
        <h1 className="font-bold text-xl mr-4">List of Employees</h1>
      </div>

      <div className="p-8">
        <label>Employee Name:</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 ml-2"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        />

        <label className="ml-4">Position:</label>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 ml-2"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <button
          className="bg-blue-700 px-4 py-2 text-white ml-4 rounded-lg hover:bg-blue-800"
          onClick={handleAddEmployees}
        >
          Add Employee
        </button>
      </div>

      <div className="grid lg:grid-cols-4 p-8 items-center gap-6">
        {employees.map((employee) => (
          <div
            key={employee.id}
            className="max-w-xs w-full p-6 border rounded-xl shadow-md items-center"
          >
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24 mb-6 rounded-full"
                src={employee.image}
                alt={employee.name}
              />

              <h5 className="text-xl font-semibold">{employee.name}</h5>
              <span className="text-sm text-gray-700">{employee.position}</span>

              <div className="flex mt-4 gap-4">
                <button className="border border-blue-700 px-4 py-2 rounded-lg hover:bg-blue-100">
                  <EditModal
                    employeeData={employee}
                    onSave={(updated) => {
                      setEmployees(
                        employees.map((e) =>
                          e.id === updated.id ? updated : e
                        )
                      );
                    }}
                  />
                </button>
                <button
                  className="bg-red-700 px-4 py-2 text-white rounded-lg hover:bg-red-800"
                  onClick={() => handleRemoveEmployee(employee.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
