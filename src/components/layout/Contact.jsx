export default function Contact() {
  return(
    <section id="contact" className="flex flex-col justify-center mx-auto py-20 px-4 max-w-screen-md">
      <p className="text-center">If you have any questions I can help you with, feel free to do it.</p>
      <p className="mb-16 text-center">Thank you!</p>
      <form name="contact" action="#" className="flex flex-col gap-8" netlify>
        <div>
          <label htmlFor="email" className="block mb-2">Your email</label>
          <input type="email" id="email" className="block p-2.5 w-full text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="your@email.com" required />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2">Subject</label>
          <input type="text" id="subject" className="block p-3 w-full text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2">Your message</label>
          <textarea id="message" rows="6" className="block p-2.5 w-full text-sm bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
        </div>
        <button type="submit" className="py-3 px-5 sm:w-fit text-center text-gray-100 bg-neutral-900 rounded-lg cursor-pointer hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
      </form>
    </section>
  );
}
