import { Input } from "antd";
import { Field } from "formik";
import React from "react";
import { TextFieldContainer } from "./Style";
import PropTypes from "prop-types";
import { ErrorMessageForm } from "..";

const TextField = React.forwardRef((props, ref) => {
  const {
    name,
    id,
    form,
    className,
    classNameField,
    type,
    maskType,
    placeholder,
    onChange,
    onKeyDown,
    value,
    disabled,
    maxLength,
    style,
    prefixIcon,
    allowClear,
    minRowsTextArea,
    height,
  } = props;

  const hasErrors = () => {
    return form && form.errors[name] && form.touched[name];
  };

  const doOnBlur = (event) => {
    const { relatedTarget } = event;
    if (relatedTarget && relatedTarget.getAttribute("type") === "button") {
      event.preventDefault();
    }
  };

  const onChangeField = (e) => {
    form.setFieldValue(name, e.target.value);
    form.setFieldTouched(name, true, true);
    onChange(e);
  };

  return (
    <TextFieldContainer className={classNameField} height={height}>
      {form ? (
        <>
          {" "}
          <Field
            name={name}
            id={id || name}
            className={`form-control campo ${hasErrors() ? "is-invalid" : ""} ${
              className || ""
            } ${disabled ? "desabilitado" : ""}`}
            component={type || Input}
            type={maskType}
            readOnly={disabled}
            disabled={disabled}
            onBlur={doOnBlur}
            maxLength={maxLength || ""}
            innerRef={ref}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            onChange={onChangeField}
            style={style}
            prefix={prefixIcon ? <i className={prefixIcon} /> : ""}
            value={value || form.values[name]}
            rows={minRowsTextArea}
          />
          <ErrorMessageForm form={form} name={name} />
        </>
      ) : (
        <Input
          ref={ref}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          onKeyDown={onKeyDown}
          value={value}
          prefix={prefixIcon ? <i className={prefixIcon} /> : ""}
          allowClear={allowClear}
        />
      )}
    </TextFieldContainer>
  );
});

TextField.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  form: PropTypes.oneOfType([PropTypes.any]),
  className: PropTypes.string,
  classNameField: PropTypes.string,
  type: PropTypes.string,
  maskType: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.oneOfType([PropTypes.func]),
  onKeyDown: PropTypes.oneOfType([PropTypes.func]),
  value: PropTypes.oneOfType([PropTypes.any]),
  disabled: PropTypes.bool,
  maxLength: PropTypes.oneOfType([PropTypes.number]),
  label: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.any]),
  prefixIcon: PropTypes.bool,
  allowClear: PropTypes.bool,
  minRowsTextArea: PropTypes.string,
  height: PropTypes.string,
};

TextField.defaultProps = {
  name: "",
  id: "",
  form: null,
  className: "",
  classNameField: "",
  type: "",
  maskType: "",
  placeholder: "",
  onChange: () => {},
  onKeyDown: () => {},
  value: "",
  disabled: false,
  maxLength: 100,
  label: "",
  style: {},
  prefixIcon: false,
  allowClear: true,
  minRowsTextArea: "2",
  height: "26",
};

export default TextField;
