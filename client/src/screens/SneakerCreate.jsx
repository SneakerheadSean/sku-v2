import { useState } from 'react'
import { Route } from 'react-router-dom';

export default function SneakerCreate(props) {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    description: '',
    price: '',
    size: '',
    image: '',
  })

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

  return (
    <Route path="/sneakers/new" exact>
      
    <form onSubmit={(e)=> {
      e.preventDefault()
      props.handleSneakerCreate(formData);
    }}>
      <h3>Add to Collection!</h3>
      <label>
        Brand: 
        <input
          type='text'
          name='brand'
          value={formData.brand}
          onChange={handleChange}
          />
        </label>
        <br />
      <label>
        Name:
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          />
        
      </label>
        <br />

        <label>
        Description: 
        <input
            type='text'
            name='description'
          value={formData.description}
          onChange={handleChange}
          />
        
      </label>
<br />
      <label>
        Price: 
        <input
            type='integer'
            name="price"
          value={formData.price}
          onChange={handleChange}
          />
        
      </label>
      <br />
      
      <label>
        Size: 
        <input
            type='text'
            name="size"
          value={formData.size}
          onChange={handleChange}
          />
        
      </label>
      <br />

      <label>
        Image (URL): 
        <input
            type='text'
            name='image'
          value={formData.image}
          onChange={handleChange}
          />
        
      </label>
      <br />
      <button>Submit</button>
    </form>
           </Route>
  );
}