import React, { useState } from 'react';
import { Play, Star, MapPin, Phone, Mail, Clock, Users, Dumbbell, Heart, Award } from 'lucide-react';

// ========== CONFIGURATION SECTION ==========
// Modify these values to customize your gym's landing page
export const SITE_CONFIG = {
  // Brand & Colors
  brandName: "FitZone Gym",
  primaryColor: "from-red-600 to-orange-600",
  secondaryColor: "from-blue-600 to-purple-600",
  accentColor: "bg-yellow-400",
  textPrimary: "text-white",
  textSecondary: "text-gray-300",
  textDark: "text-gray-900",
  
  // Typography
  fontFamily: "font-sans", // Options: font-sans, font-serif, font-mono
  
  // Media
  heroVideo: "https://example.com/gym-hero-video.mp4", // Replace with your video URL
  heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  aboutImage: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  trainerImages: [
    "https://images.unsplash.com/photo-1594736797933-d0a9ba28fcfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ],
  
  // Content
  heroTitle: "Transform Your Body, Transform Your Life",
  heroSubtitle: "Join the premier fitness destination in your city. State-of-the-art equipment, expert trainers, and a community that motivates you every step of the way.",
  ctaButtonText: "Start Your Journey",
  secondaryCtaText: "Watch Our Story",
  
  // About Section
  aboutTitle: "Why Choose FitZone?",
  aboutText: "With over 15 years of experience, we've helped thousands achieve their fitness goals. Our modern facility features the latest equipment, diverse classes, and certified trainers dedicated to your success.",
  
  // Features
  features: [
    {
      icon: Dumbbell,
      title: "Premium Equipment",
      description: "State-of-the-art machines and free weights from leading brands"
    },
    {
      icon: Users,
      title: "Expert Trainers",
      description: "Certified professionals with years of experience in fitness"
    },
    {
      icon: Heart,
      title: "Group Classes",
      description: "Dynamic classes including yoga, HIIT, spinning, and more"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of helping members achieve their fitness goals"
    }
  ],
  
  // Pricing Plans
  pricingPlans: [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      features: ["Gym Access", "Locker Room", "Basic Classes", "Equipment Usage"],
      popular: false
    },
    {
      name: "Premium",
      price: "$59",
      period: "per month",
      features: ["All Basic Features", "Personal Training", "Nutrition Consultation", "Premium Classes", "Guest Passes"],
      popular: true
    },
    {
      name: "Elite",
      price: "$89",
      period: "per month",
      features: ["All Premium Features", "24/7 Access", "Massage Therapy", "Meal Planning", "VIP Support"],
      popular: false
    }
  ],
  
  // Trainers
  trainers: [
    {
      name: "Sarah Johnson",
      specialty: "Strength Training",
      experience: "8 Years Experience",
      image: 0 // Index of trainerImages array
    },
    {
      name: "Mike Rodriguez",
      specialty: "HIIT & Cardio",
      experience: "6 Years Experience", 
      image: 1
    },
    {
      name: "Emma Chen",
      specialty: "Yoga & Wellness",
      experience: "10 Years Experience",
      image: 2
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Alex Thompson",
      text: "FitZone completely transformed my fitness journey. The trainers are incredible and the community is so supportive!",
      rating: 5
    },
    {
      name: "Maria Garcia", 
      text: "Best gym in the city! Clean facilities, modern equipment, and amazing classes. Highly recommended!",
      rating: 5
    },
    {
      name: "David Kim",
      text: "Lost 30 pounds and gained so much confidence. The personal training program here is worth every penny.",
      rating: 5
    }
  ],
  
  // Contact Information
  contact: {
    address: "123 Fitness Street, Your City, ST 12345",
    phone: "(555) 123-4567",
    email: "info@fitzonegym.com",
    hours: "Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM"
  },
  
  // Social Media (add your handles)
  social: {
    instagram: "@fitzonegym",
    facebook: "FitZoneGym",
    twitter: "@fitzonegym"
  }
};

// ========== MAIN COMPONENT ==========
export default function GymLandingPage() {
  const [showVideo, setShowVideo] = useState(false);

  const StarRating = ({ rating }) => (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );

  return (
    <div className={`min-h-screen ${SITE_CONFIG.fontFamily} bg-gray-900`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`text-2xl font-bold bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent`}>
              {SITE_CONFIG.brandName}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>Home</a>
              <a href="#about" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>About</a>
              <a href="#classes" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>Classes</a>
              <a href="#trainers" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>Trainers</a>
              <a href="#pricing" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>Pricing</a>
              <a href="#contact" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>Contact</a>
            </div>
            <button className={`bg-gradient-to-r ${SITE_CONFIG.primaryColor} px-6 py-2 rounded-full ${SITE_CONFIG.textPrimary} font-semibold hover:opacity-90 transition-opacity`}>
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${SITE_CONFIG.heroImage})` }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold ${SITE_CONFIG.textPrimary} mb-6 leading-tight`}>
            {SITE_CONFIG.heroTitle}
          </h1>
          <p className={`text-xl md:text-2xl ${SITE_CONFIG.textSecondary} mb-8 max-w-3xl mx-auto`}>
            {SITE_CONFIG.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className={`bg-gradient-to-r ${SITE_CONFIG.primaryColor} px-8 py-4 rounded-full ${SITE_CONFIG.textPrimary} font-bold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-2xl`}>
              {SITE_CONFIG.ctaButtonText}
            </button>
            <button 
              onClick={() => setShowVideo(true)}
              className={`flex items-center space-x-2 ${SITE_CONFIG.textPrimary} bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full hover:bg-white/20 transition-colors border border-white/20`}
            >
              <Play className="w-5 h-5" />
              <span>{SITE_CONFIG.secondaryCtaText}</span>
            </button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-8 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
            <div className="text-center">
              <div className={`text-2xl font-bold ${SITE_CONFIG.textPrimary}`}>500+</div>
              <div className={`text-sm ${SITE_CONFIG.textSecondary}`}>Members</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${SITE_CONFIG.textPrimary}`}>15+</div>
              <div className={`text-sm ${SITE_CONFIG.textSecondary}`}>Years</div>
            </div>
            <div className="text-center">
              <div className={`text-2xl font-bold ${SITE_CONFIG.textPrimary}`}>20+</div>
              <div className={`text-sm ${SITE_CONFIG.textSecondary}`}>Classes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_CONFIG.features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${SITE_CONFIG.primaryColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-8 h-8 ${SITE_CONFIG.textPrimary}`} />
                </div>
                <h3 className={`text-xl font-bold ${SITE_CONFIG.textPrimary} mb-2`}>{feature.title}</h3>
                <p className={SITE_CONFIG.textSecondary}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold ${SITE_CONFIG.textPrimary} mb-6`}>
                {SITE_CONFIG.aboutTitle}
              </h2>
              <p className={`text-lg ${SITE_CONFIG.textSecondary} mb-8 leading-relaxed`}>
                {SITE_CONFIG.aboutText}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent`}>
                    5000+
                  </div>
                  <div className={`text-sm ${SITE_CONFIG.textSecondary}`}>Success Stories</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent`}>
                    50+
                  </div>
                  <div className={`text-sm ${SITE_CONFIG.textSecondary}`}>Expert Trainers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={SITE_CONFIG.aboutImage} 
                alt="About FitZone"
                className="rounded-3xl shadow-2xl"
              />
              <div className={`absolute -top-6 -right-6 w-24 h-24 ${SITE_CONFIG.accentColor} rounded-2xl flex items-center justify-center shadow-xl`}>
                <Award className={`w-12 h-12 ${SITE_CONFIG.textDark}`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${SITE_CONFIG.textPrimary} mb-4`}>
              Meet Our Expert Trainers
            </h2>
            <p className={`text-lg ${SITE_CONFIG.textSecondary}`}>
              Certified professionals dedicated to helping you achieve your goals
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.trainers.map((trainer, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-6 text-center hover:transform hover:scale-105 transition-all">
                <img 
                  src={SITE_CONFIG.trainerImages[trainer.image]}
                  alt={trainer.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-transparent bg-gradient-to-r from-red-500 to-orange-500 p-1"
                />
                <h3 className={`text-xl font-bold ${SITE_CONFIG.textPrimary} mb-2`}>{trainer.name}</h3>
                <p className={`${SITE_CONFIG.textSecondary} mb-2`}>{trainer.specialty}</p>
                <p className={`text-sm bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent font-semibold`}>
                  {trainer.experience}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${SITE_CONFIG.textPrimary} mb-4`}>
              Choose Your Plan
            </h2>
            <p className={`text-lg ${SITE_CONFIG.textSecondary}`}>
              Flexible membership options to fit your lifestyle and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-3xl p-8 relative ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-red-600/20 to-orange-600/20 border-2 border-red-500' 
                    : 'bg-gray-900 border border-gray-700'
                } hover:transform hover:scale-105 transition-all`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 ${SITE_CONFIG.accentColor} px-4 py-2 rounded-full text-sm font-bold ${SITE_CONFIG.textDark}`}>
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold ${SITE_CONFIG.textPrimary} mb-2`}>{plan.name}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent mb-2`}>
                    {plan.price}
                  </div>
                  <p className={SITE_CONFIG.textSecondary}>{plan.period}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`${SITE_CONFIG.textSecondary} flex items-center`}>
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full font-bold transition-all ${
                  plan.popular 
                    ? `bg-gradient-to-r ${SITE_CONFIG.primaryColor} ${SITE_CONFIG.textPrimary} hover:opacity-90` 
                    : `border border-gray-600 ${SITE_CONFIG.textPrimary} hover:bg-gray-700`
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${SITE_CONFIG.textPrimary} mb-4`}>
              What Our Members Say
            </h2>
            <p className={`text-lg ${SITE_CONFIG.textSecondary}`}>
              Real stories from real people who transformed their lives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_CONFIG.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-3xl p-6">
                <StarRating rating={testimonial.rating} />
                <p className={`${SITE_CONFIG.textSecondary} my-4 italic`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold ${SITE_CONFIG.textPrimary}`}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold ${SITE_CONFIG.textPrimary} mb-4`}>
              Visit Us Today
            </h2>
            <p className={`text-lg ${SITE_CONFIG.textSecondary}`}>
              Ready to start your fitness journey? Come check out our facility!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${SITE_CONFIG.primaryColor} rounded-2xl flex items-center justify-center`}>
                <MapPin className={`w-8 h-8 ${SITE_CONFIG.textPrimary}`} />
              </div>
              <h3 className={`text-lg font-bold ${SITE_CONFIG.textPrimary} mb-2`}>Address</h3>
              <p className={SITE_CONFIG.textSecondary}>{SITE_CONFIG.contact.address}</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${SITE_CONFIG.primaryColor} rounded-2xl flex items-center justify-center`}>
                <Phone className={`w-8 h-8 ${SITE_CONFIG.textPrimary}`} />
              </div>
              <h3 className={`text-lg font-bold ${SITE_CONFIG.textPrimary} mb-2`}>Phone</h3>
              <p className={SITE_CONFIG.textSecondary}>{SITE_CONFIG.contact.phone}</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${SITE_CONFIG.primaryColor} rounded-2xl flex items-center justify-center`}>
                <Mail className={`w-8 h-8 ${SITE_CONFIG.textPrimary}`} />
              </div>
              <h3 className={`text-lg font-bold ${SITE_CONFIG.textPrimary} mb-2`}>Email</h3>
              <p className={SITE_CONFIG.textSecondary}>{SITE_CONFIG.contact.email}</p>
            </div>
            <div className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${SITE_CONFIG.primaryColor} rounded-2xl flex items-center justify-center`}>
                <Clock className={`w-8 h-8 ${SITE_CONFIG.textPrimary}`} />
              </div>
              <h3 className={`text-lg font-bold ${SITE_CONFIG.textPrimary} mb-2`}>Hours</h3>
              <p className={SITE_CONFIG.textSecondary}>{SITE_CONFIG.contact.hours}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className={`text-3xl font-bold bg-gradient-to-r ${SITE_CONFIG.primaryColor} bg-clip-text text-transparent mb-4`}>
              {SITE_CONFIG.brandName}
            </div>
            <p className={`${SITE_CONFIG.textSecondary} mb-6`}>
              Transform your body, transform your life. Join us today!
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>
                {SITE_CONFIG.social.instagram}
              </a>
              <a href="#" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>
                {SITE_CONFIG.social.facebook}
              </a>
              <a href="#" className={`${SITE_CONFIG.textSecondary} hover:text-white transition-colors`}>
                {SITE_CONFIG.social.twitter}
              </a>
            </div>
            <p className={`text-sm ${SITE_CONFIG.textSecondary}`}>
              © 2025 {SITE_CONFIG.brandName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setShowVideo(false)}>
          <div className="max-w-4xl w-full relative">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white text-xl hover:text-gray-300"
            >
              ✕ Close
            </button>
            <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-white">Video would play here: {SITE_CONFIG.heroVideo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}