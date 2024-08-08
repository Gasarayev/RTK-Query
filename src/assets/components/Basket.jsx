import React from "react";
import { useGetCategoriesApiQuery } from "../redux/categoriesApi";
import Table from "react-bootstrap/esm/Table";
// import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Basket() {


    // const { data: products = {}, isLoading } = useGetCategoriesApiQuery();
    // const dispatch = useDispatch();

    const basketItems = useSelector((state) => state.basket.itemsBasket);

  return (
    <div className="w-[100%] flex items-center justify-center">
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basketItems.map((category) => (
              <tr key={category.id}>
                <td className="border px-4 py-2">{category.id}</td>
                <td className="border px-4 py-2">{category.description}</td>
                <td className="border px-4 py-2">{category.name}</td>
                <td className="border px-4 py-2 flex items-center justify-start">
                  <button
                    onClick={() => handleRemoveFromBasket(category)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove from Basket
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Basket;
