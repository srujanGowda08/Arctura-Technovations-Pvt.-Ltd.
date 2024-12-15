import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Section className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team of experts
          </p>
        </motion.div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  rows="4"
                  className="w-full px-4 py-2 bg-primary border border-gray-700 rounded-lg focus:outline-none focus:border-accent"
                  required
                ></textarea>
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>
              <p className="text-gray-300">123 Tech Street</p>
              <p className="text-gray-300">Innovation City, IC 12345</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
              <p className="text-gray-300">Email: info@arctura.com</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-300">Saturday - Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

export default Contact;