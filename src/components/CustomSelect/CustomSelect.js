import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";

const CustomSelect = ({
  listItems,
  onChange,
  fieldValue,
  fieldDescription,
  placeholder,
}) => {
  const { Option } = Select;
  return (
    <>
      <Select
        style={{ width: 200 }}
        allowClear
        onChange={onChange}
        placeholder={placeholder}
      >
        {listItems &&
          listItems.map((item) => {
            return (
              <Option value={item[fieldValue]}>{item[fieldDescription]}</Option>
            );
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
  placeholder: PropTypes.string,
};

CustomSelect.defaultProps = {
  listItems: [],
  onChange: () => {},
  fieldValue: "",
  fieldDescription: "",
  placeholder: "",
};

export default CustomSelect;
