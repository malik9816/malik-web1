import React, { useState } from 'react';
import './Editprofile.css';

function EditProfile() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    organization: '',
    mobile: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSave = () => {
    console.log('Saved data:', formData);
    // Add functionality to save data, such as an API call.
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      title: '',
      organization: '',
      mobile: '',
      email: ''
    });
  };

  return (
    <div className="edit-profile-container">
      <h2>Edit Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          
          <button type="button" className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
