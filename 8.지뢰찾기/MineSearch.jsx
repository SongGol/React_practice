import React, { useReducer, createContext, useMemo } from 'react';
import Table from './Table';
import { CODE, START_GAME } from './values';

export const TableContext = createContext({
    tableData: [],
    dispatch: () => {},
});

const initialState = {
    timer: "",
    result: "",
};

const plantMine = (row, col, mine) => {
    console.log(row, col, mine);
    const candidate = Array(row * col).fill().map((arr, i) => {
        return i;
    });
    const shuffle = [];
    while (candidate.length > row * cell - mine) {
        const chosen = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
        shuffle.push(chosen);
    }
    //초기화
    const data = [];
    for (let i = 0; i < row; ++i) {
        const rowData = [];
        data.push(rowData);
        for (let k = 0; k < col; ++k) {
            rowData.push(CODE.NORMAL);
        }
    }
    //마인 심기
    for (let i = 0; i < shuffle.length; ++i) {
        const ver = Math.floor(shuffle[k] / cell);
        const hor = shuffle[k] % col;
        data[ver][hor] = CODE.MINE;
    }

    console.log(data);
    return data;
};

const reducer = (state, action) => {
    switch(action.type) {
        case START_GAME:
            return {
                ...state,
                tableData: plantMine(action.row, action.col, action.mine),
            };
        default:
            return state;
    }
};

const MineSearch = () => {
    const [state, setState] = useReducer(reducer, initialState);
    const value = useMemo(() => { tableData: state.tableData, dispatch }, [state.tableData]);

    return (
        <TableContext.Provider value={value}>
            <Form />
            <div>{state.timer}</div>
            <Table />
            <div>{state.result}</div>
        </TableContext.Provider>
    )
};

export default MineSearch;