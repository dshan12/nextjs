import React from 'react'

const ContactUs = () => {
  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <form action="/about" method="POST" className="flex flex-col gap-4 font-bold">
        <div className="mb-4 flex-col">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input type="text mb-4" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
          <label htmlFor="message">Message</label>
          <input type="texarea" name="message" id="message" />
          <button type="submit" className="bg-blue-500">Submit</button>
        </div>
      </form>
    </div>

  )
}

export default ContactUs
