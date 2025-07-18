

const Contact = () => (
    <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Contact <span className="text-blue-400">Me</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">Get in touch, let's talk!</p>
        
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <form>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                        <input type="text" id="name" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Name" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                        <input type="email" id="email" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Email" />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <textarea id="message" rows="5" className="w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your Message"></textarea>
                </div>
                <div className="mt-8 text-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
                        Send Message
                    </button>
                </div>
            </form>
        </div>

        <div className="text-center mt-12">
            <p className="text-gray-400">Or reach me via email:</p>
            <a href="mailto:hello@nafis.com" className="text-lg text-blue-400 hover:underline">hello@nafis.com</a>
        </div>
    </div>
);

export default Contact;