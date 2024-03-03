import React, { useState } from 'react';
import Select from 'react-select';
import { debounce } from 'lodash';

import countries from './Countries';
import governorates from './Governorates'; // Assuming you have a file with governorates data

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    country: null,
    city: null,
  });

  const [cityOptions, setCityOptions] = useState([]);

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleCountryChange = (selectedOption) => {
    const selectedCountry = selectedOption.value;
    const cities = governorates
      .filter(governorate => governorate.country === selectedCountry)
      .flatMap(governorate => governorate.cities)
      .map(city => ({ label: city, value: city }));
    setFormData({
      ...formData,
      country: selectedOption,
      city: null, // Reset city selection when country changes
    });
    setCityOptions(cities);
  };

  const handleCityChange = (selectedOption) => {
    handleChange('city', selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Perform form submission logic here
      console.log(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle the error, such as showing an error message to the user
    }
  };

  const handleSearchChange = debounce((inputValue) => {
    console.log('Searching for:', inputValue);
  }, 300);

  const customSelectStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: '#3B494E',
      color: '#BEBEBE',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: '#888',
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: '#BEBEBE',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#405de6' : '#3B494E',
      color: state.isSelected ? '#fff' : '#BEBEBE',
      '&:hover': {
        backgroundColor: state.isSelected ? '#3b55c4' : '#2A3538',
        color: '#BEBEBE',
      },
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: '#3B494E', // Change background color of the select search list
    }),
    input: (provided, state) => ({
      ...provided,
      color: '#BEBEBE', // Change the text color of the search input
    }),
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#2A3538',
    },
    form: {
      width: '100%',
      maxWidth: '500px',
      padding: '40px',
      backgroundColor: '#3B494E',
      borderRadius: '10px',
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      color: '#BEBEBE',
    },
    title: {
      textAlign: 'center',
      marginBottom: '30px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    inputGroup: {
      marginBottom: '20px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    input: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      backgroundColor: '#2A3538',
      color: '#BEBEBE',
    },
    submitButton: {
      width: '100%',
      padding: '12px',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: '#405de6',
      color: '#fff',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.title}>Edit Profile</h2>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="country" style={styles.label}>Country:</label>
          <Select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            options={countries}
            placeholder="Select Country"
            isSearchable
            onInputChange={handleSearchChange}
            styles={customSelectStyles}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="city" style={styles.label}>City:</label>
          <Select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleCityChange}
            options={cityOptions}
            placeholder="Select City"
            isSearchable
            onInputChange={handleSearchChange}
            styles={customSelectStyles}
            required
          />
        </div>
        <button type="submit" style={styles.submitButton}>Save Changes</button>
      </form>
    </div>
  );
};

export default SignUpForm;
