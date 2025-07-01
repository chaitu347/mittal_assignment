import { useState } from 'react';
import { MapPin, Mail, Phone, Youtube, Linkedin, Instagram } from 'lucide-react';

export default function FlashGraphersComplete() {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    services: '',
    message: ''
  });

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'Our services', label: 'Our Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'productive gears', label: 'Productive Gears' },
    { id: 'contact us', label: 'Contact Us' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', services: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <img className='h-10 w-38' src="https://res.cloudinary.com/dnbnst2wn/image/upload/v1751377044/74d9cf8adc9b1156b514910532efa7592284d751_hqa1iq.png" alt="FlashGraphers Logo" />
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 relative">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-white bg-[#4B806F]'
                        : 'text-black hover:text-white hover:bg-[#4B806F]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dnbnst2wn/image/upload/v1751377046/717efeabb8eec05c14f914f3cd023991367ffa34_ywihzq.png')"
        }}
        id="contact"
      >
        <div className="absolute inset-0 bg-black bg-opacity-30 "></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
                  Contact <span className="text-[#4B806F]">Us</span>
                </h2>
                <p className="text-gray-100 text-lg drop-shadow-md">
                  Let's discuss on something cool together
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4B806F] rounded-sm flex items-center justify-center shadow-lg">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-100 drop-shadow-md">Indore, Madhya Pradesh</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4B806F] rounded-sm flex items-center justify-center shadow-lg">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-100 drop-shadow-md">flashgraphers@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-[#4B806F] rounded-sm flex items-center justify-center shadow-lg">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-100 drop-shadow-md">+91 6267695515</span>
                </div>
              </div>


              <div>
                <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-lg">
                  Follow <span className="text-[#4B806F]">Us</span>
                </h3>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                    <Youtube className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="relative mt-8">
                <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-[#4B806F] to-green-700 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>

       
            <div className="bg-gray-900 bg-opacity-90 p-8 rounded-lg backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4B806F] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4B806F] transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="services"
                    placeholder="Enter Your Services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-black bg-opacity-80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4B806F] transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Enter Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-black bg-opacity-80 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#4B806F] transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#4B806F] text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-8">
              <img className="h-12" src="https://res.cloudinary.com/dnbnst2wn/image/upload/v1751377044/74d9cf8adc9b1156b514910532efa7592284d751_hqa1iq.png" alt="FlashGraphers Logo" />
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">Portfolio</a>
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">Our Services</a>
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">Productive Gears</a>
              <a href="#" className="text-gray-600 hover:text-[#4B806F] transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-bold mb-6">Stay Connected</h3>
            <div className="flex justify-center space-x-4">
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-black rounded flex items-center justify-center hover:bg-[#4B806F] transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-gray-300">
            <p className="text-gray-500 text-sm">
              © 2025 FlashGraphers. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}