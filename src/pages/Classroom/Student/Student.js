import { DatePicker, Input, Select } from "antd";
import React from "react";
import { CustomSelect } from "../../../components";

const Student = () => {
  const { Option } = Select;
  const genders = [
    { value: "M", description: "Male" },
    { value: "F", description: "Female" },
    { value: "O", description: "Other" },
  ];
  return (
    <div className="row d-flex">
      <div className="col-md-12">
        <Input id="name" placeholder="Name" allowClear />
      </div>
      <div className="col-md-12 pt-2">
        <CustomSelect
          listItems={genders}
          fieldValue={"value"}
          fieldDescription={"description"}
        />
      </div>
      <div className="col-md-12 pt-2">
        <DatePicker placeholder="Birth date" allowClear />
      </div>
    </div>
  );
};

export default Student;
