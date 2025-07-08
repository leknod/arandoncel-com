export default function Contact() {
  return(
    <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Me</h2>
      <p className="mb-2 lg:mb-2 font-light text-center sm:text-xl">If you have any questions I can help you with, feel free to do it.</p>
      <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Thank you!</p>
      <form action="#" className="space-y-8">
        <div>
          <label for="email" className="block mb-2 text-sm font-medium">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <label for="subject" className="block mb-2 text-sm font-medium">Subject</label>
          <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required />
        </div>
        <div className="sm:col-span-2">
          <label for="message" className="block mb-2 text-sm font-medium">Your message</label>
          <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-5007" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-lg sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
    </section>
  );
}
