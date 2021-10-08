import { useState } from 'react'
import { Route } from 'react-router-dom';

export default function SneakerCreate(props) {
  const [formData, setFormData] = useState({
    name: ''
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
          value={formData.description}
          onChange={handleChange}
          />
        
      </label>
<br />
      <label>
        Price: 
        <input
          type='integer'
          value={formData.price}
          onChange={handleChange}
          />
        
      </label>
      <br />
      
      <label>
        Size: 
        <input
          type='text'
          value={formData.size}
          onChange={handleChange}
          />
        
      </label>
      <br />

      <label>
        Image (URL): 
        <input
          type='text'
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