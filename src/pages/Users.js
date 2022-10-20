import React, { useEffect, useState } from "react";
import CustomButton from "../components/button";


const Users = () => {

    const [data, setData] = useState([]);
    const [modalState, setModalState] = useState([]);
    const [customButtonName, setCustomButtonName] = useState('Deneme');

    useEffect(() => {
        if (data.length > 0)
            getSecondData();
    }, [data])

    const getData = () => {
        var data = fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {
                setData(data);
            })

    };

    const getSecondData = () => {
        setCustomButtonName('Getirildi.')
    }

    const deleteData = () => {
        setData([]);
    }

    const customOnclick = () => {
        console.log('custom click')
    }
    const handleModal = (index) => {
        setModalState(data[index]);
        document.querySelector('.modal').style.display = 'block';

    }

    return (
        <>
            <div className="button">
                <CustomButton onClick={customOnclick} text={customButtonName} />
                <button onClick={getData}>Verileri Getir</button>
                <button onClick={deleteData}>Verileri Sil</button>
            </div>

            {
                data.length === 0 ? <div>Yüklemek için butona basın...</div> :
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Phone</th>
                            </tr>
                        </thead>

                        <tbody className="table">
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.website}</td>
                                        <td>{item.phone}</td>
                                        <td><button onClick={() => handleModal(index)}>Click</button></td>
                                    </tr>
                                })

                            }
                        </tbody>

                    </table>
            }
            <div className="modal" style={{
                transition: "display 2s ease-out", animation: "fade-in 1s"
            }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{"Name :" + modalState?.name}</h5>
                            <button type="button" className="btn-close" onClick={() => { document.querySelector('.modal').style.display = 'none'; }} aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <p>{"Username : " + modalState?.username}</p>
                            <br />
                            <p>{"Email :" + modalState?.email}</p>
                            <br />
                            <p>{"Website :" + modalState?.website}</p>
                            <br />
                            <p>{"Phone :" + modalState?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Users;