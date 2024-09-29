import React, { useState } from "react";
import CustomerView from "./CustomerView"; // Ensure the path is correct

export default function CustomerAdd() {
    const [input, setInput] = useState("");
    const [customers, setCustomers] = useState([]);

    function addCustomer() {
        if (input) {
            setCustomers((previousState) => [...previousState, input]);
            setInput(""); // Clear the input field after adding
            console.log([...customers, input]); // Log the new customer list
        }
    }

    return (
        <>
            <div>
                <h3>Add New Customer</h3>
                <input
                    type="text"
                    value={input} // Controlled input
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addCustomer}>Add</button>
            </div>
            <CustomerView customers={customers} />
        </>
    );
}
