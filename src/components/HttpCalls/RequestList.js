import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import RequestButton from "./RequestButton";
import TablePagination from "@mui/material/TablePagination";
import RefreshIcon from "@mui/icons-material/Refresh";
import { IconButton } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Grid";
const RequestList = ({ requests, refreshList }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="body-content--http">
      <Card
        style={{
          width: "fit-content",
          background: "#191c26",
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      >
        <CardContent>
          <Grid container spacing={25}>
            <Grid item>
              <Typography variant="h4" style={{ color: "white" }}>
                Trace of Http requst
              </Typography>
            </Grid>
            <Grid item>
              <IconButton size="medium" style={{boxShadow: "0 0px 10px white"}} onClick={refreshList}>
                <RefreshIcon style={{ color: "white", }} />
              </IconButton>
            </Grid>
          </Grid>
          <TableContainer component={Paper} sx={{minWidth: 600}}>
            <Table>
              <TableHead>
                <TableCell style={{ color: "white" }} align="center">
                  <Typography variant="h6">Date</Typography>
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  <Typography variant="h6">Time</Typography>
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  <Typography variant="h6">Method</Typography>
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  <Typography variant="h6">Endpoint</Typography>
                </TableCell>
                <TableCell style={{ color: "white" }} align="center">
                  <Typography variant="h6">Status</Typography>
                </TableCell>
              </TableHead>
              <TableBody>
                {requests.length > 0 ? (
                  requests
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((req) => (
                      <TableRow>
                        <TableCell style={{ color: "white" }} align="center">
                          {req["date"]}
                        </TableCell>
                        <TableCell style={{ color: "white" }} align="center">
                          {req["time"]}
                        </TableCell>
                        <TableCell style={{ color: "white" }} align="center">
                          <RequestButton method={req["method"]} />
                        </TableCell>
                        <TableCell style={{ color: "white" }} align="center">
                          {req["url"]}
                        </TableCell>
                        <TableCell style={{ color: "white" }} align="center">
                          {req["status"]}
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <Typography style={{ color: "white" }} variant="subtitle2">
                    There is nothing to show
                  </Typography>
                )}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[10, 20]}
              rowsPerPage={rowsPerPage}
              page={page}
              count={requests.length}
              onRowsPerPageChange={handleChangeRowsPerPage}
              onPageChange={handleChangePage}
              style={{ color: "white" }}
            />
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RequestList;
