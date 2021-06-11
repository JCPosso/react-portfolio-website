import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './ContactElements.css';
import SocialMedia from '../SocialMedia';

const ContactForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content'>
      <form onSubmit={handleSubmit} className='form' noValidate>
      <SocialMedia/>
        <h1>
          I will be glad to answer your questions.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Name</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <textarea
            className='form-textarea'
            type='text'
            name='message'
            placeholder='Type your message'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button className='form-input-btn' type='submit' disabled>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;