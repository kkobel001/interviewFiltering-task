import { users } from "./data-mock";
import { useEffect, useState } from "react";

const List = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    users.then((items) => {
      setData(items);
      setFilteredData(items);
    });
  }, []);

  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredList = data.filter((item) =>
      item.lastName.toLowerCase().includes(searchTerm)
    );
    const newFilterData = searchTerm.length > 0 ? filteredList : data;
    setFilteredData(newFilterData);
  };

  return (
    <>
      <input
        onChange={handleChange}
        id="filter-input"
        placeholder="Filter..."
      />
      {filteredData.map((item) => (
        <ul>
          <li key={item.id}>
            {item.firstName}
            {item.lastName}
          </li>
        </ul>
      ))}
    </>
  );
};

export default List;
