import { useState, useEffect } from 'react';
import db from './../../firebase/firebaseConfig';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        
    db.collection('contacts')
    .add({
      name: values.username,
      email: values.email,
      message:values.message
    })
    .then(()=>{
      
    })
    .catch((error)=>{
      alert(error.message);
    })
    ;
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;