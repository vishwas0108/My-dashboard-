import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => { setUsers(res.data); setLoading(false); })
            .catch(err => { setError(err.message); setLoading(false); });
    }, []);

    return (
        <div className="app">
            <header><h1>User Dashboard</h1></header>
            <main>
                {loading && <p>Loading...</p>}
                {error && <p className="error">Error: {error}</p>}
                {!loading && !error && (
                    <table>
                        <thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id}>
                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
}

export default App;