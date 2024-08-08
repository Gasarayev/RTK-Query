import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { IoMdInformationCircle } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useGetCategoriesApiQuery } from "../redux/categoriesApi";
import Basket from "./Basket";

function CategoriesList() {
  const data = useGetCategoriesApiQuery();
  const { data: categories, refetch, isLoading } = useGetCategoriesApiQuery();
  const [selectProduct, setSelectProduct] = useState(null)

  const handleBasket = (categoryId) =>{
    setSelectProduct(categoryId)
  }

  return (
    <div className="containe">
      <h1>Categories List</h1>

      {isLoading && <h3>Loading...</h3>}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((category) => (

              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>
                  <IoMdInformationCircle className="text-info mr-2" />
                </td>
                <td>
                  <ImBin className="text-danger mr-2" />
                </td>
                <td>
                  <FaRegEdit className="text-success mr-2" />
                </td>
                <td>
                  <SlBasket onClick={()=> handleBasket(category.id)} className="text-primary mr-2" />
                </td>
                <td>
                  <FaRegHeart className="text-danger mr-2" />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      {selectProduct && <Basket categoryId={selectProduct} />}
    </div>
  );
}

export default CategoriesList;
