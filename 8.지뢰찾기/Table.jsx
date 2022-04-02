import React, { useContext } from 'react';
import Tr from './Tr'
import { TableContext } from './MineSearch';

const Table = () => {
    const { tableData } = useContext(TableContext);
    return (
        <>
            <Table>
                <Tr />
            </Table>
        </>
    )
};

export default Table;