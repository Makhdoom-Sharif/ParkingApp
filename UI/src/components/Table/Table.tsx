import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

type props = {
  Data: {
    contactNo?: string;
    createdAt?: string;
    email?: string;
    updatedAt?: string;
    username?: string;
    from?: number;
    to?: number;
    _id?: string;
    TotalPlaces?: string;
  }[];
  columns: {
    id:
      | "username"
      | "email"
      | "contactNo"
      | "createdAt"
      | "_id"
      | "from"
      | "to"
      | "AreaName"
      | "placeName"
      | "slotNo"
      | "TotalPlaces"
      | "Action";
    label: string;
    minWidth?: number;
    align?: "right";
    format?: (value: number) => string;
  }[];
};

// const columns: Column[] = [
//   { id: "username", label: "User Name", minWidth: 170 },
//   { id: "email", label: "Email", minWidth: 100 },
//   {
//     id: "contactNo",
//     label: "Contact No",
//     minWidth: 170,
//   },
//   {
//     id: "createdAt",
//     label: "Created At",
//     minWidth: 170,
//   },
// ];

export default function DataTable(props: props) {
  // console.log("Table==>", props.Data);
  const { Data, columns } = props;
  console.log("==>", columns);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  console.log("==>", page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Paper
      sx={{
        width: "100%",
        ".css-u06erh-MuiPaper-root": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
        ".css-41abqd-MuiTableContainer-root": {
          flexGrow: 1,
          minHeight: "77vh",
          maxHeight: "100%",
        },
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            {/* <TableRow>
              <TableCell align="center" colSpan={2}>
                Country
              </TableCell>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
            </TableRow> */}
            <TableRow>
              {columns.map((column) => (
                <>
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                  {/* <TableCell>Action</TableCell> */}
                </>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Data &&
              Data?.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              ).map((row: any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "Action" ? (
                            <Button size="small">View</Button>
                          ) : (
                            value
                          )}
                        </TableCell>
                      );
                    })}
                    {/* <TableCell>
                      <Button size="small" key={row._id}>
                        View
                      </Button>
                    </TableCell> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={Data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
