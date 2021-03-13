import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import shortid from "shortid";
import { ErrorMessageForm } from "..";

const CustomSelect = ({
  listItems,
  onChange,
  fieldValue,
  fieldDescription,
  placeholder,
  form,
  multiple,
  className,
  name,
  id,
  valueSelect,
  alt,
  allowClear,
  disabled,
  ref,
  size,
  defaultValue,
  style,
}) => {
  const { Option } = Select;

  const optionsList = () => {
    return (
      listItems &&
      listItems.length > 0 &&
      listItems.map((item) => {
        return (
          <Option Key={shortid.generate()} value={item[fieldValue]}>
            {item[fieldDescription]}
          </Option>
        );
      })
    );
  };

  const selectWithForm = () => {
    return (
      <Select
        mode={multiple && "multiple"}
        className={`overflow-hidden ${className}`}
        name={name}
        id={id}
        onChange={onChange}
        value={valueSelect}
        placeholder={placeholder}
        notFoundContent="Sem dados"
        alt={alt}
        optionFilterProp="children"
        allowClear={allowClear}
        disabled={disabled}
        ref={ref}
        size={size || "default"}
        defaultValue={defaultValue}
        style={style}
      >
        {optionsList()}
      </Select>
    );
  };

  const simpleSelect = () => {
    return (
      <Select
        style={{ width: 200 }}
        allowClear
        onChange={onChange}
        placeholder={placeholder}
      >
        {optionsList()}
      </Select>
    );
  };
  return (
    <>
      {form ? selectWithForm() : simpleSelect()}
      <ErrorMessageForm form={form} name={name} />
    </>
  );
};

CustomSelect.propTypes = {
  listItems: PropTypes.oneOfType([PropTypes.array]),
  form: PropTypes.oneOfType([PropTypes.any]),
  onChange: PropTypes.func,
  fieldValue: PropTypes.string,
  fieldDescription: PropTypes.string,
  placeholder: PropTypes.string,
  multiple: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  valueSelect: PropTypes.oneOfType([PropTypes.any]),
  alt: PropTypes.string,
  allowClear: PropTypes.bool,
  disabled: PropTypes.bool,
  ref: PropTypes.oneOfType([PropTypes.object]),
  size: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.any]),
  style: PropTypes.oneOfType([PropTypes.object]),
};

CustomSelect.defaultProps = {
  listItems: [],
  onChange: () => {},
  fieldValue: "",
  fieldDescription: "",
  placeholder: "",
  form: null,
};

export default CustomSelect;
