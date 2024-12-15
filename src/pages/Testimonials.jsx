import { motion } from "framer-motion";
import Section from "../components/common/Section";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    position: "CTO, TechCorp",
    content:
      "Arctura has transformed our business operations with their innovative solutions. Their teams expertise and dedication are unmatched.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "CEO, InnovateCo",
    content:
      "Working with Arctura has been a game-changer for our company. Their solutions have helped us scale efficiently.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    position: "Director, DataTech",
    content:
      "The level of professionalism and technical expertise at Arctura is exceptional. They delivered beyond our expectations.",
    rating: 5,
  },
];

function Testimonials() {
  return (
    <>
      <Section className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300">
            What our clients say about working with us
          </p>
        </motion.div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-primary p-6 rounded-lg"
            >
              <div className="flex text-accent mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}

export default Testimonials;
