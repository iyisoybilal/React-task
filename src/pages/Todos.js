import React, { useEffect, useState } from "react";
import CustomButton from "../components/button";


const Todos = () => {

    const [data, setData] = useState([]);
    const [modalState, setModalState] = useState([]);
    const [customButtonName, setCustomButtonName] = useState('Deneme');

    useEffect(() => {
        if (data.length > 0)
            getSecondData();
    }, [data])

    const getData = () => {
        var data = fetch("https://jsonplaceholder.typicode.com/todos")
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
                                <th>UserId</th>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Completed</th>
                            </tr>
                        </thead>

                        <tbody className="table">
                            {
                                data.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.completed}</td>
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
                            <h5 className="modal-title">{modalState?.name}</h5>
                            <button type="button" className="btn-close" onClick={() => { document.querySelector('.modal').style.display = 'none'; }} aria-label="Close">X</button>
                        </div>
                        <div className="modal-body">
                            <p>{"Id :" + modalState?.id}</p>
                            <br />
                            <p>{"Title :" + modalState?.title}</p>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Todos;