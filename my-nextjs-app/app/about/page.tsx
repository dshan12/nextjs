export default function Contact() {
  return (
    <div className="p-24">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="">
        <form action="/about" method="POST" className="flex flex-col gap-4 font-bold">
          <label htmlFor="name">Name</label>
          <input type="text mb-4" name="name" id="name"/>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email"/>
          <label htmlFor="message">Message</label>
          <input type="texarea" name="message" id="message"/>
          <button type="submit" className="bg-blue-500">Submit</button>
          </form>
      </div>
    </div>
  )
}
