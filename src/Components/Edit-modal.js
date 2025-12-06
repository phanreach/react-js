import React, { useState } from "react";

export default function EditModal({ employeeData, onSave }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(employeeData.name);
  const [position, setPosition] = useState(employeeData.position);

  const handleSave = () => {
    const updatedEmployee = {
      ...employeeData,
      name,
      position,
    };

    fetch(`http://localhost:3001/employees/${employeeData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedEmployee),
    })
      .then((res) => res.json())
      .then((updated) => {
        onSave(updated);
        setOpen(false);
      });
  };

  return (
    <div>
      <button onClick={() => setOpen(true)}>Edit</button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
            <h2 className="text-xl font-bold mb-4">Edit Employee</h2>

            <label>Name:</label>
            <input
              type="text"
              className="border p-2 w-full mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Position:</label>
            <input
              type="text"
              className="border p-2 w-full mb-4"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 border rounded-lg"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>

              <button
                className="bg-blue-700 px-4 py-2 text-white rounded-lg"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
