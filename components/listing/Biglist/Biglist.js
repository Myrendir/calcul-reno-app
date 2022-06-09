import {DataGrid} from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import Box from "@mui/material/Box";

export default function Biglist(props) {

    const columns = [];
    const rows = [];
    let keys = [];
    if (!props.data.loading) {
        for (const [key] of Object.entries(props.data.data[0])) {
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
        <div>
            {
                props.data.loading ?
                    <div>
                        <Box sx={{width: '100%'}}>
                            <LinearProgress/>
                        </Box>
                    </div>
                    :
                    <div style={{height: 900, width: '80%', margin: '0 auto'}}>
                        <DataGrid
                            getRowId={(finalRows) => props.id ? finalRows.id : finalRows.id_article}
                            columns={columns}
                            rows={finalRows}
                            rowsPerPageOptions={[5]}
                            pageSize={20}
                            checkboxSelection

                        />
                    </div>
            }
        </div>
    )
}
