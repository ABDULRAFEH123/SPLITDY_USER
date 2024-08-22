import React from 'react'
const formFields = [
    { id: 'name', label: 'Your Name', type: 'text', required: true },
    { id: 'email', label: 'Email address', type: 'email', required: true },
    { id: 'os', label: 'Operating system (e.g. Windows 10)', type: 'text', required: true },
    { id: 'browser', label: 'Browser (e.g. Internet Explorer 11)', type: 'text', required: true },
    { id: 'feedback', label: 'Feedback (Please include relevant page URL if applicable)', type: 'text', required: true, rows: 4 },
  ];
export default function SiteFeedBackForm() {
  return (
    <div>
      <form>
        {formFields.map((field) => (
          <div className="mb-4" key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-bold text-gray-700"
            >
              {field.label} {field.required && '*'}
            </label>
            
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                required={field.required}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />     
          </div>
        ))}

        <button
          type="submit"
          className="w-24 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  ) 
}
