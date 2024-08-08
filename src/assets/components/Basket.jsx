import React from "react";
import { useGetCategoriesApiQuery } from "../redux/categoriesApi";
import Table from "react-bootstrap/esm/Table";
import { useParams } from "react-router-dom";

function Basket() {
  const { categoryId } = useParams();
  const { data: products, isLoading } = useGetCategoriesApiQuery(categoryId);

  console.log(useParams())

  console.log(products);
  return (
    <div>
      <h1>Basket Page</h1>
      {isLoading && <h3>Loading...</h3>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Basket;
