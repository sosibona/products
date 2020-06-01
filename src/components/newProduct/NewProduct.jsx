import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage, Field } from "formik";
import defaultImg from "../../img/default.png";
import * as Yup from "yup";
import "./newProduct.scss";
import ErrorField from "../error/Error";
import { connect } from "react-redux";
import { addProduct } from "../../product/product.actions";
import Textarea from "../textarea/Textarea";

const initialValues = {
  name: "",
  description: "",
  price: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  price: Yup.number().min(1, "Invalid price"),
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

    const reader = new FileReader();
    const file = event.target.files[0];

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
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="container__form">
            <div className="container__product-info">
              <div className="container__photo">
                <div className="container__img">
                  <img
                    className="container__photo-products"
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
              <div className="container__description">
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
                  as={Textarea}
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

const mapDispatch = {
  addProduct: addProduct,
};

NewProduct.propTypes = {
  closeModal: PropTypes.func.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(NewProduct);
