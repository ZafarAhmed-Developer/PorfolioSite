import { ArrowRight } from 'lucide-react';

/**
 * Design Philosophy: Minimalist Modern Professional
 * - Bold typography hierarchy with generous whitespace
 * - Asymmetric layout with left-aligned content
 * - Subtle teal accent for CTA buttons
 */

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-teal-600 font-semibold tracking-wide uppercase text-sm">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm a Developer
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, user experience, and solving complex problems.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
              >
                View My Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors duration-200"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Side - Decorative Element */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-64 h-64">
              {/* Gradient Circle Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-full"></div>
              
              {/* Centered Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-teal-600">5+</p>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
