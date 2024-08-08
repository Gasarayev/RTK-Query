import React from "react";
import Table from "react-bootstrap/Table";
import { IoMdInformationCircle } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import { ImBin } from "react-icons/im";
import { FaRegEdit } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDeleteItemMutation, useGetCategoriesApiQuery } from "../redux/categoriesApi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function CategoriesList() {
  // const data = useGetCategoriesApiQuery();
  
  const { data: categories, refetch, isLoading } = useGetCategoriesApiQuery();
  const dispatch = useDispatch()

  const [deleteItems] = useDeleteItemMutation();

  const removeCategory  = async (id)=>{

   await deleteItems(id) ;
    console.log(id)
    refetch();
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
                  <Link to={`/Detail/${category.id}`}> <IoMdInformationCircle className="text-info mr-2" /> </Link>
                </td>
                <td>
                  <ImBin style={{ cursor: 'pointer' }} onClick={()=>removeCategory(category.id)} className="text-danger mr-2" />
                    
                </td>
                <td>
                  <FaRegEdit className="text-success mr-2" />
                </td>
                <td>
                  <SlBasket  onClick={() => handleBasket(category)} className="text-primary mr-2" />
                 
                </td>
                <td>
                  <FaRegHeart className="text-danger mr-2" />
                </td>
              </tr>
            ))}
        </tbody>
      </Table>

      
    </div>
  );
}

export default CategoriesList;
