type ElemType = {
    elem: {
        name: string,
        subDep: {
            header: string[],
            body: string[][]
        }
    }
};

type DataType = {
    header: string[],
    body: string[][]
}

export {
    ElemType, 
    DataType
};