import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const CustomSelect = ({
  listItems,
  onChange,
  fieldValue,
  fieldDescription,
}) => {
  const { Option } = Select;
  return (
    <>
      <Select style={{ width: 200 }} allowClear onChange={onChange}>
        {listItems &&
          listItems.map((item) => {
            return <Option value={item[fieldValue]}>{item[fieldDescription]}</Option>;
          })}
      </Select>
    </>
  );
};

CustomSelect.propTypes = {
  listItems: PropTypes.oneOfType([PropTypes.array]),
  onChange: PropTypes.func,
  fieldValue: PropTypes.string,
  fieldDescription: PropTypes.string,
};

CustomSelect.defaultProps = {
  listItems: [],
  onChange: () => {},
  fieldValue: "",
  fieldDescription: "",
};

export default CustomSelect;
