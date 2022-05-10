import {DataGrid} from '@mui/x-data-grid';


export default function Biglist(props) {

    const columns = [];
    const rows = [];
    let keys = [];
    if (!props.data.loading) {
        for (const [key] of Object.entries(props.data.data[1])) {
            keys.push(key);
        }

        keys.map(k => {
            columns.push({
                field: k,
                headerName: k,
                sortable: true,
                width: k === 'id' ? 90 : 200

            })
        })
        props.data.data.map(r => {
            rows.push(r)
        })
    }
    const finalRows = Array.from(new Set(rows.map(JSON.stringify))).map(JSON.parse);
    return (
        <div style={{height: 600, width: '80%', margin: '0 auto'}}>
            <DataGrid
                getRowId={(finalRows) => props.id ? finalRows.id : finalRows.id_article}
                columns={columns}
                rows={finalRows}
                rowsPerPageOptions={[5]}
                pageSize={10}
                checkboxSelection
            />
        </div>
    )
}
