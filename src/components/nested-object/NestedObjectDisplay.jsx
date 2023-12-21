import { useEffect, useState } from "react";
import data from "../../data.json";

const Nested = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, value]) => {
        return (
          <li key={key}>
            <strong>{key}:</strong>
            {typeof value === "object" ? (
              <Nested data={value} />
            ) : (
              <span>{JSON.stringify(value)}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const NestedObjectDisplay = () => {
  const [packageList, setPackageList] = useState({});

  useEffect(() => {
    setPackageList({ ...data.response[0].dependencies });
  }, []);
  return <Nested data={packageList} />;
};

export default NestedObjectDisplay;
