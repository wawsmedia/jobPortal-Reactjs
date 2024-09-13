import { useState, useMemo } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const [formData, setFormData] = useState({
    title: job.title,
    type: job.type,
    location: job.location,
    description: job.description,
    salary: job.salary,
    companyName: job.company.name,
    companyDescription: job.company.description,
    contactEmail: job.company.contactEmail,
    contactPhone: job.company.contactPhone,
  });

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    const updatedJob = {
      id,
      title: formData.title,
      type: formData.type,
      location: formData.location,
      description: formData.description,
      salary: formData.salary,
      company: {
        name: formData.companyName,
        description: formData.companyDescription,
        contactEmail: formData.contactEmail,
        contactPhone: formData.contactPhone,
      },
    };

    updateJobSubmit(updatedJob);
    toast.success('Job Updated Successfully');
    navigate(`/jobs/${id}`);
  };

  const jobTypes = useMemo(
    () => ['Full-Time', 'Part-Time', 'Remote', 'Internship'],
    []
  );

  const salaryRanges = useMemo(
    () => [
      'Under $50K',
      '$50K - $60K',
      '$60K - $70K',
      '$70K - $80K',
      '$80K - $90K',
      '$90K - $100K',
      '$100K - $125K',
      '$125K - $150K',
      '$150K - $175K',
      '$175K - $200K',
      'Over $200K',
    ],
    []
  );

  return (
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={submitForm}>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Update Job
            </h2>

            {/* Job Type */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Type
              </label>
              <select
                name='type'
                className='border rounded w-full py-2 px-3'
                required
                value={formData.type}
                onChange={handleChange}
              >
                {jobTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Title */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Job Listing Name
              </label>
              <input
                type='text'
                name='title'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='e.g., Beautiful Apartment In Miami'
                required
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            {/* Description */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Description
              </label>
              <textarea
                name='description'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='Job duties, expectations, etc.'
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Salary */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Salary
              </label>
              <select
                name='salary'
                className='border rounded w-full py-2 px-3'
                required
                value={formData.salary}
                onChange={handleChange}
              >
                {salaryRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {/* Location */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            {/* Company Info */}
            <h3 className='text-2xl mb-5'>Company Info</h3>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Company Name
              </label>
              <input
                type='text'
                name='companyName'
                className='border rounded w-full py-2 px-3'
                placeholder='Company Name'
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Company Description
              </label>
              <textarea
                name='companyDescription'
                className='border rounded w-full py-2 px-3'
                rows='4'
                placeholder='What does your company do?'
                value={formData.companyDescription}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Contact Info */}
            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Contact Email
              </label>
              <input
                type='email'
                name='contactEmail'
                className='border rounded w-full py-2 px-3'
                placeholder='Email address for applicants'
                required
                value={formData.contactEmail}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Contact Phone
              </label>
              <input
                type='tel'
                name='contactPhone'
                className='border rounded w-full py-2 px-3'
                placeholder='Optional phone for applicants'
                value={formData.contactPhone}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Update Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
