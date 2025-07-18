import React, { useEffect, useRef } from 'react';
import { education, experiences, certifications, scrollAnimationStyles, config } from '../Shared'

const About = () => {
  const experienceRefs = useRef([]);
  const educationRefs = useRef([]);
  const certificationRefs = useRef([]);
  
  useEffect(() => {
    // Set up intersection observer to detect when elements come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of element is visible
    
    // Check which elements are initially visible and observe the rest
    experienceRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const isInitiallyVisible = rect.top < window.innerHeight;
        
        if (isInitiallyVisible) {
          ref.classList.add('initial-visible');
        } else {
          observer.observe(ref);
        }
      }
    });
    
    educationRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const isInitiallyVisible = rect.top < window.innerHeight;
        
        if (isInitiallyVisible) {
          ref.classList.add('initial-visible');
        } else {
          observer.observe(ref);
        }
      }
    });

    certificationRefs.current.forEach((ref, index) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const isInitiallyVisible = rect.top < window.innerHeight;
        
        if (isInitiallyVisible) {
          ref.classList.add('initial-visible');
        } else {
          observer.observe(ref);
        }
      }
    });
    
    return () => {
      experienceRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
      educationRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <style>{scrollAnimationStyles}</style>
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
        About <span className="text-blue-400">Me</span>
      </h2>
      <p className="text-center text-gray-400 mb-12">A little about my professional career.</p>
      
      <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-2">
              <img 
                  src={config.imageProfile} 
                  alt="Retrato de Ricardo Manzanares Camargo" 
                  className="rounded-lg shadow-lg w-full"
              />
          </div>
          <div className="md:col-span-3">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Who I Am</h3>
              <p className="text-gray-300 mb-6 text-justify">
                  I'm a passionate and creative developer living in Spain. I'm passionate about technological challenges and solving complex problems for clients. I'm passionate about creating clean and efficient code and specialize in creating attractive and functional web applications.
              </p>
              <p className="text-gray-300 mb-6 text-justify">
                  My goal is to leverage technology to create products that make a difference.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Hobbies</h3>              
              <p className="text-gray-300 mb-6 text-justify">
                I have other technology-related hobbies, such as programming Arduino IoT devices with the Arduino IDE, programmed in C++.
              </p>
              <p className="text-gray-300 mb-6 text-justify">
                I've recently been specializing in the design of 3D printer parts, sometimes used for my personal home automation project automated-life.com, and other times to replace broken parts or create necessary accessories for cabinets, work tools, and more for my personal and family use. To do this, I design parts with Blender IDE.
              </p>
              <p className="text-gray-300 mb-6 text-justify">
                Finally, I often relax by learning how to create images or image montages with surprising effects using Photoshop, but I still have a lot to learn in this field.
              </p>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Skills</h3>
              <div className="flex flex-wrap gap-3">
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">.NET</span>
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">Dynamics 365</span>
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">Power Platform</span>
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">PowerShell</span>
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">React JS</span>
                  <span className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">API Rest</span>
              </div>
          </div>
      </div>

      <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Experience</h3>
          <div className="relative border-l-2 border-gray-700 pl-8">
              {experiences.map((exp, index) => (
                  <div 
                      key={index} 
                      ref={el => experienceRefs.current[index] = el}
                      className="scroll-animated mb-10 ml-4"
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                      <div className="absolute w-4 h-4 bg-blue-400 rounded-full mt-1.5 border border-gray-900" style={{left:-57}}></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">{exp.duration}</time>
                      <h4 className="text-xl font-semibold text-white">{exp.role} at <span className="text-blue-400">{exp.company}</span></h4>
                      <p className="text-base font-normal text-gray-400">{exp.description}</p>
                  </div>
              ))}
          </div>
      </div>
      <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Certification</h3>
          <div className="relative border-l-2 border-gray-700 pl-8">
              {certifications.map((cert, index) => (
                  <div 
                      key={index}
                      ref={el => certificationRefs.current[index] = el}
                      className="scroll-animated mb-10 ml-4"
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                      <div className="absolute w-4 h-4 bg-blue-400 rounded-full mt-1.5 border border-gray-900" style={{left:-57}}></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">{cert.date}</time>
                      <h4 className="text-xl font-semibold text-white">{cert.title}</h4>
                      <p className="text-base font-normal text-gray-400">{cert.institution}</p>
                  </div>
              ))}
          </div>
      </div>
      <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-blue-400">Education</h3>
          <div className="relative border-l-2 border-gray-700 pl-8">
              {education.map((edu, index) => (
                  <div 
                      key={index}
                      ref={el => educationRefs.current[index] = el}
                      className="scroll-animated mb-10 ml-4"
                      style={{ transitionDelay: `${index * 100}ms` }}
                  >
                      <div className="absolute w-4 h-4 bg-blue-400 rounded-full mt-1.5 border border-gray-900" style={{left:-57}}></div>
                      <time className="mb-1 text-sm font-normal leading-none text-gray-400">{edu.duration}</time>
                      <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-base font-normal text-gray-400">{edu.institution}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default About;