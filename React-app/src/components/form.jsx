import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components.css";

function Form({ submitQuery }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    submitQuery(data);
  };

  const textInputs = ["Position", "Reference", "Alternate"];

  return (
    <>
      <div className="container" key="search-container">
        <div className="row mt-4" key="search-form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row" key="form-content">
              <div className="col-md-2 mb-2">
                <select
                  className="form-select"
                  {...register("chromosome", { required: true })}
                >
                  {Array.from({ length: 22 }, (_, index) => (
                    <option value={`chr${index + 1}`}>chr{index + 1}</option>
                  ))}
                  <option value="chrX">chrX</option>
                  <option value="chrY">chrY</option>
                </select>
              </div>

              {textInputs.map((input) => (
                <div className="col-md-2 mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder={input}
                    {...register(input, { required: true })}
                  />
                </div>
              ))}

              <div className="col-md-2 mb-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
