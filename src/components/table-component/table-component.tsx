import React, { useState, Dispatch } from 'react';
import Table from 'react-bootstrap/Table';

import { CellComponent } from '../cell-component/cell-component';
import { ElemType, DataType } from '../../types';


type TableComponentType = {
    data: DataType, 
    setData: Dispatch<DataType>
};

export const TableComponent: React.FC<TableComponentType> = ({ data, setData }) => {  
    const { header, body } = data;      
    
    const [editMode, setEditMode] = useState<string>(`hidden`);

    const handleClick = (elem: ElemType) => {
        setData({header: elem[0].subDep.header, body: elem[0].subDep.body});
    };

    const createString = () => {
        let newArr = new Array(header.length).fill(``);
        body.push(newArr);

        setData({header: header, body: body});
    };

    const deleteHandler = (e, el: string[]) => {
        if (e.button === 1) {
            e.preventDefault();

            let index = body.indexOf(el);
            body.splice(index, 1);
            
            setData({header: header, body: body});
        }
    };

    const handleSubmit = (e, el: string, i: number, j: number) => {
        e.preventDefault();

        setEditMode(`hidden`);

        body[i][j] = el;

        setData({header: header, body: body})
    };

    const editHandler = () => {
        setEditMode(`visible`);
    };

    if (header && body) {
        return (
            <div className="wrapper-table">
                <Table striped bordered hover className="table">
                    <thead>
                        <tr>
                            { header.map((el, i) => {
                                return <td className="table-td" key={`${el}-${i}`}>{ el }</td>
                            }) }
                        </tr>
                    </thead>
                    <tbody>
                        { body.map((el, i) => {
                            return (    
                                <tr 
                                    key={`${el}-${i}-1`} 
                                    onDoubleClick={editHandler}
                                    onMouseDown={(e) => deleteHandler(e, el)}                                    
                                >
                                    { el.map((elem, j) => {
                                        if (Array.isArray(elem)) {
                                            return (
                                                <CellComponent 
                                                    j={j}
                                                    i={i}
                                                    elem={elem[0].name}
                                                    handleSubmit={handleSubmit}
                                                    editMode={editMode}
                                                    key={`${elem}-${i}-${j}`}
                                                    clickProp={handleClick.bind(this, elem)}
                                                />
                                            )                                        
                                        } else {
                                            return (
                                                <CellComponent 
                                                    j={j}
                                                    i={i}
                                                    elem={elem}
                                                    handleSubmit={handleSubmit}
                                                    editMode={editMode}
                                                    key={`${elem}-${i}-${j}`}
                                                    clickProp={null}
                                                />
                                            );
                                        }
                                    }) }
                                </tr>
                            )                                                       
                        }) }
                        <tr><td onClick={createString.bind(this)} className="table-tr_create" colSpan={header.length}>Создать</td></tr>
                    </tbody>
                </Table>
            </div>
        );
    } else {
        return null;
    }
};