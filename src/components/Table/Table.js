import React, { useState } from 'react';
import './Table.css'
import { v4 as uuidv4 } from 'uuid';

const Table = () => {

    const [item, setItem] = useState([])
    const [amount,setAmount] = useState('')
    const createRow = () => {
        let newItem = {
            id: uuidv4(),
            amount: ""
        }
        setItem([...item, newItem])
    }

    const handleClear = () => {
        setItem([])
    }

    const handleDelete = (id) => {
        let restItem = item.filter(item=> item.id !== id)
        setItem(restItem)
    }

    const setAmountHandler = (e) => {
        setAmount(e.target.value)
    }

    const click = (id) => {
        setAmount('')
        const updated = item?.map((item) => {
           return item.id === id ? { id, amount: amount } : item;
       })
        setItem(updated) 
    }

    const submitHandler = () => {
        item.map(i=> console.log(i))
    }
    

    return (
        <div className="container">
            <div className='btnBox'>
                <button className='newRowBtn' onClick={createRow}>Insert New Row</button>
                <button className={item.length<1 ? 'clrBtn1' :'clrBtn'} onClick={handleClear}>Clear Row</button>
               {item.length > 0 && <button className='submitBtn' onClick={submitHandler}>Submit</button>}
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
                                    { item.amount === '' ?
                                        <input onBlur={() => click(item.id)} onChange={setAmountHandler} type="text" />
                                        :
                                        <p>{ item.amount}</p>
                                    }
                                </td>
                                <td>
                                    <button className='dltBtn' onClick={() => handleDelete(item.id)}>Delete</button>
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
