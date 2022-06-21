import { useState, useEffect } from "react";

export const SearchField = () => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setTimeout(() => {
      console.log("SearchField value changed", value);
    }, 700);
  }, [value]);

  return (
    <div>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Search"
      />
    </div>
  );
};
