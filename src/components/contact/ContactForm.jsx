import { useState } from 'react';
import Button from '../common/Button';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
          required
        ></textarea>
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}

export default ContactForm;