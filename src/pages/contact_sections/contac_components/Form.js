import React from "react";
import { useForm } from "react-hook-form";

const Form = ({ defaultValues, children, onSubmit }) =>{
  const methods = useForm({ defaultValues });
  const { handleSubmit } = methods;




  return (
    <form className="contact100-form validate-form" onSubmit={handleSubmit(onSubmit)}>
      {Array.isArray(children)
        ? children.map(child => {
            return child.props.name
              ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register: methods.register,
                    key: child.props.name
                  }
                })
              : child;
          })
        : children}
    </form>
  );
}

export {Form}