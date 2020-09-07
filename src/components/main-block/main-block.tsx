import React, { useState } from 'react';

import { mockList } from '../../mock-data';
import { TableComponent } from '../table-component/table-component';
import { DataType } from '../../types';

export const MainBlock: React.FC = () => {
    const [data, setData] = useState(null);
    let obj: DataType;

    const clickHandler = (el: DataType) => {
        obj = {
            header: el.header,
            body: el.body
        };
        setData(obj);
    };

    return (
        <div className="main-block">
            <div className="list-block">
                { mockList.map((el, i) => {
                    return <div key={`${el}-${i}`} className="button-in-list" onClick={clickHandler.bind(this, el)}>{ el.name }</div>
                }) }
            </div>
            { data ? <TableComponent data={data} setData={setData} /> : null}
        </div>
    )
};