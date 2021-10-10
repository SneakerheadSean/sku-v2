import { useState } from "react";
import { Route } from "react-router-dom";

export default function SneakerCreate(props) {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    description: "",
    price: "",
    size: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Route path="/sneakers/new" exact>
      <h3>Add to Collection!</h3>
      <form
        class="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSneakerCreate(formData);
        }}
      >
        <div class="field">
          <label>
            Brand:
            <input
              placeholder="Brand"
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </label>

          <label>
            Name:
            <input
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Description:
            <input
              placeholder="Description"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>

          <label>
          Price:
            <input
            placeholder="Price"
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </label>

          <label>
            Size:
            <input
              placeholder="Size"
              type="text"
              name="size"
              value={formData.size}
              onChange={handleChange}
            />
          </label>

          <label>
            Image (URL):
            <input
              placeholder="Image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
        </div>
       
        
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>

      
    </Route>
  );
}
