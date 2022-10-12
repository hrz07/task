import React, { useState } from 'react';
import './Table.css'
import { v4 as uuidv4 } from 'uuid';

const Table = () => {

    const [item, setItem] = useState([])
    const createRow = () => {
        let newItem = {
            id: uuidv4(),
            amount: ""
        }

        setItem([...item, newItem])

    }

    return (
        <div className="container">
            <div className='btnBox'>
                <button onClick={createRow}>Insert New Row</button>
                <button>Clear Row</button>
                <button>Submit</button>
            </div>
            <div className="tableContainer">
                <table border={1} cellPadding={10}>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {item.map((item, index) => {

                            return <tr key={item.id}>
                                <td>Item {index+1}</td>
                                <td>
                                    <input type="text" />
                                </td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;
