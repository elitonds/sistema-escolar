import { Button } from "antd";
import React from "react";

const Class = () => {
  const onConfirm = () => {};

  const onCancel = () => {};
  return (
    <div>
      <div className="col-md-12 p-0 d-flex justify-content-end">
        <Button onClick={onCancel}>Cancelar</Button>
        <Button className="ml-2" type="primary" onClick={onConfirm}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default Class;
