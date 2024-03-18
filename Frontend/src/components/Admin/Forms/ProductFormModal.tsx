import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Row, Col } from "react-bootstrap";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Spinner from "../../Loader/Spinner";


const ProductFormModal = ({ open, handleClose, categories, handleChange, handleSubmit, isSpinning }: any) => {
   
   
    
  return (
    <div>
      <React.Fragment>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Product</DialogTitle>
          <DialogContent>
            <Row>
              <Col>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="name"
                  name="name"
                  label="Product Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Col>

              <Col>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="brand"
                  name="brand"
                  label="Brand"
                  type="text"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  
                />
              </Col>

              <Col>
                <TextField
                  autoFocus
                  required
                  margin="dense"
                  id="countInStock"
                  name="countInStock"
                  label="Stock"
                  type="number"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <FormControl fullWidth variant="standard">
                  <InputLabel>Category</InputLabel>
                  <Select label="Category" name="category"  onChange={handleChange}>
                    {categories.map((category: any) => {
                      return (
                        <MenuItem id={category} value={category}>
                          {category}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Col>

              <Col>
              <TextField
              label="Description"
              name="description"
              type="text"
              id="description"
              fullWidth
              variant="standard"
              onChange={handleChange}>
                
              </TextField>
              </Col>
            </Row>

            <Row className="mt-4">
                <TextField
                type="file"
                onChange={handleChange}
                name="productImage"
                id="productImage"
                >

                </TextField>
            </Row>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" disabled={isSpinning} onClick={handleSubmit}>{isSpinning? <Spinner/> : "Submit"}</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>
  );
};

export default ProductFormModal;
