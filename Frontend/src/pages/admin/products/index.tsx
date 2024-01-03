import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { deleteData, getData } from "../../../services/axios.service";
import moment from "moment";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Products = () => {
  useEffect(() => {
    getProducts();
  }, []);

  const [products, setProducts] = useState<any>({});
  const jwt = useSelector((state:any) => state.auth.jwt)
  const getProducts = async () => {
    const response = await getData("/product");
    setProducts(response.data);
    console.log(response.data.results);
  };

  const deleteHandler = async ( e:any, id:number) => {
    e.preventDefault()
    console.log("clicked", id)

    const deleteProduct = await deleteData("/product/", id, jwt)
    console.log(deleteProduct)

    

  //   const deleteProduct = products.results.filter((prod:any) => {
  //     // if(prod.id === id){
  //     //   console.log("matched")
  //     // }
  //     return  prod.id !== id
  //   })

  //  console.log(deleteProduct)

  }
  return (
    <TableContainer component={Paper}>
      {products.status === "success" && (
        <Table sx={{ minWidth: 100 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Image</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Description</StyledTableCell>
              <StyledTableCell align="left">Brand</StyledTableCell>
              <StyledTableCell align="left">Category</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">CountInStock</StyledTableCell>
              <StyledTableCell align="left">CreatedAt</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.results.map((prod: any) => (
              <StyledTableRow key={prod.id}>
                <StyledTableCell align="left" component="th" scope="row">
                  <img src={prod.productImage} width="100px" />
                </StyledTableCell>
                <StyledTableCell align="left">{prod.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {prod.description.length > 20
                    ? prod.description.slice(0, 19) + "..."
                    : prod.description}
                </StyledTableCell>

                <StyledTableCell align="left">{prod.brand}</StyledTableCell>
                <StyledTableCell align="left">{prod.category}</StyledTableCell>
                <StyledTableCell align="left">{prod.price}</StyledTableCell>
                <StyledTableCell align="center">
                  {prod.countInStock}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {moment(prod.createdAt).format("MMMM Do YYYY")}
                </StyledTableCell>

                <StyledTableCell align="left">
                <EditIcon/>
                  <IconButton aria-label="delete" size="large" onClick={(e) => deleteHandler(e, prod.id)}>
                    <DeleteIcon />
                  </IconButton>

                  
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
};
