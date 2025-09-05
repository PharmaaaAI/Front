import { Star, Award } from "lucide-react";

const SocialProof = () => {
    const testimonials = [
    {
      name: "Sarah Chen",
      title: "Verified Customer",
      text: "The AI quiz was a game-changer! It found the perfect products for my acne-prone skin in minutes. My complexion has never looked better.",
      rating: 5
    },
    {
      name: "Maria Rodriguez", 
      title: "Verified Customer",
      text: "I've tried so many products over the years. This AI actually understood my sensitive skin and recommended gentle products that work.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "Verified Customer", 
      text: "The personalized routine saved me so much time and money. No more guessing what to buy - everything just works perfectly together.",
      rating: 5
    }
  ];
  return (
    <div>
  <section id="reviews" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Real Results from Real People
          </h2>
          <p className="text-xl text-white">
            See how our AI-powered recommendations transformed their skin
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-sage to-soft-blue rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-800" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        


            {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-white">
          <div className="flex items-center">
            <Award className="text-yellow-500 mr-2 h-5 w-5" />
            <span>Featured in Vogue</span>
          </div>
          <div className="flex items-center">
            <Star className="text-yellow-400 mr-2 h-5 w-5 fill-current" />
            <span data-testid="text-rating">4.9/5 Stars (2,847 reviews)</span>
          </div>
          <div className="flex items-center">
            <svg className="text-green-500 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Dermatologist Tested</span>
          </div>
        </div>
      </div>
    </section>


   </div>
  )
}

export default SocialProof