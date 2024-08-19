'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  message: string;
  email: string;
}

const EmailForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    message: '',
    email: '',
  });
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError('All fields are required.');
      return;
    }

    try {
      setSuccess('Email sent successfully!');
      setError('');
    } catch (err) {
      setError('Failed to send email.');
      setSuccess('');
      console.error('Error sending email:', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type='submit'>Send Email</button>
      </form>
      <p>
        If you encounter any issues, please contact our support at{' '}
        <a href='mailto:support@example.com'>support@example.com</a>.
      </p>
    </div>
  );
};

export default EmailForm;
