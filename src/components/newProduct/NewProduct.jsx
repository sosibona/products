import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage, Field } from "formik";
import defaultImg from "../../img/default.png";
import * as Yup from "yup";
import "./newProduct.scss";
import ErrorField from "../error/Error";

const initialValues = {
  name: "",
  description: "",
  price: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.number("Invalid type").required("Required"),
});

const NewProduct = ({ closeModal, addProduct }) => {
  const [image, setImage] = useState("");
  const [ImagePreview, setImagePreview] = useState("");

  const onSubmit = useCallback(
    (values) => {
      const id = Math.random().toString();
      const userData = {
        ...values,
        id,
        image,
      };
      addProduct(userData);
      closeModal();
    },
    [image]
  );

  const handleImageChange = useCallback((event) => {
    event.preventDefault();

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      setImage(URL.createObjectURL(file));
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  }, []);

  return (
    <div className="modal-add-product">
      <button className="modal-add-product__close" onClick={closeModal}>
        <i className="far fa-times-circle"></i>
      </button>
      <div className="conatainer">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="conatainer__form">
            <div className="conatainer__product-info">
              <div className="conatainer__photo">
                <div className="conatainer__img">
                  <img
                    className="conatainer__photo-products"
                    src={ImagePreview || defaultImg}
                    alt="user_avatar"
                  />
                </div>
                <input
                  accept="image/*"
                  name="image"
                  type="file"
                  onChange={(event) => handleImageChange(event)}
                />
              </div>
              <div className="conatainer__description">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  id="name"
                  className="modal-input input"
                />
                <ErrorMessage name="name" component={ErrorField} />
                <label className="label" htmlFor="name">
                  Price
                </label>
                <Field
                  name="price"
                  type="number"
                  className="modal-input input"
                />
                <ErrorMessage name="name" component={ErrorField} />
                <label className="label" htmlFor="name">
                  Description
                </label>
                <Field
                  name="description"
                  type="text"
                  className="modal-input input"
                />
              </div>
            </div>
            <button className="btn-submit btn" type="submit">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

NewProduct.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default NewProduct;
