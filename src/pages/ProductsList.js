import React, { useEffect, useState } from "react";
import SidebarSeller from "../scenes/global/SidebarSeller";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { BASE_URL } from "../env";
import "./AdminDashboard.css";

const ProductsList = () => {
  const [listitem, setlistitem] = useState([]);

  var sellerid = localStorage.getItem("sellerid");

  const AllProducts = async () => {
    await fetch(BASE_URL + `user/getsellerproducts/${sellerid}`, {
      method: "POST",
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Items found");
        console.log("Japlu ", data);
        if (data) {
          setlistitem(data);
        } else {
          setlistitem([{ message: "dont have any products" }]);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    AllProducts();
  }, []);

  const [spiner, setSpiner] = useState(false);

  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="create" className="btn btn-success">
          Add +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {listitem.length >= 1 ? (
              listitem.map((data, i) => (
                <tr key={i}>
                  <td>{data.name}</td>
                  <td>
                    <img src={data.imageUrl} width={50} height={50}></img>
                  </td>
                  <td>{data.price}</td>
                  <td>
                    <Link
                      to={`/product-list/update/${data._id}/${data.app_prod_id}`}
                      className="Hello"
                    >
                      <button
                        className="btn btn-success ms-2"
                        onClick={() => {}}
                      >
                        Update
                      </button>
                    </Link>
                    &nbsp;
                    <button
                      className="btn btn-danger ms-2"
                      onClick={async () => {
                        await fetch(
                          BASE_URL +
                            `user/deleteproduct/${data._id}/${data.app_prod_id}`,
                          { method: "DELETE" }
                        )
                          .then(response => response.json())
                          .then(data => {
                            console.log(data);
                            if (data) {
                              setSpiner(false);
                              alert("deleted Succeessfully");
                              AllProducts();
                            } else {
                              setSpiner(false);
                            }
                          })
                          .catch(error => {
                            console.log(error);
                            setSpiner(false);
                            alert(error);
                          });
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h2>No products</h2>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductsList;
