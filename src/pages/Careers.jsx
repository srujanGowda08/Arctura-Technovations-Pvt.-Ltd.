import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const jobs = [
  {
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Hybrid',
    type: 'Full-time',
  },
  {
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'On-site',
    type: 'Full-time',
  },
];

function Careers() {
  return (
    <>
      <Section className="bg-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300">
            Build the future of technology with us
          </p>
        </motion.div>
      </Section>

      <Section className="bg-secondary">
        <div className="space-y-12">
          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="space-x-4 text-gray-400">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0">Apply Now</Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-primary p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Don't see the right position?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our team.
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="primary">Submit Open Application</Button>
          </div>
        </div>
      </Section>
    </>
  );
}

export default Careers;