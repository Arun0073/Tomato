import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";

const List = ({url}) => {
  const [list, setList] = useState([]);
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  const remFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    await fetchList();
  };
  return (
    <div className="list add flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, i) => {
          return (
            <div key={i} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="curator" onClick={() => remFood(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
