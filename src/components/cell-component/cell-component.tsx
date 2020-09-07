import React, { useState } from 'react';

type CellComponentType = {
    handleSubmit: (e, el: string, i: number, j: number) => any, 
    editMode: string, 
    elem: any, 
    j: number, 
    i: number, 
    clickProp: any
};

export const CellComponent: React.FC<CellComponentType> = ({ handleSubmit, editMode, elem, j, i, clickProp }) => {
    const [value, setValue] = useState<string>(elem);

    return (
        <>
            <td key={`${elem}--${j}`} onClick={clickProp ? clickProp : null} className="table-td">
                { editMode === 'hidden' ? elem : null }

                <form 
                    onSubmit={(e) => {
                        elem = value;
                        handleSubmit(e, elem, i, j);
                    }}
                    className={`edit-mode-${editMode}`}  
                    key={`${elem}-${j}-form`}
                >
                    <input 
                        type="text"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                    />
                </form>
            </td>
        </>
    )
}