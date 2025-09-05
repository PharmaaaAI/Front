import { UserCog, GraduationCap, Star, BookOpen } from "lucide-react";

const ValuePreposition = () => {
    const valueProps = [
    {
      icon: UserCog,
      title: "Personalization",
      description: "No more one-size-fits-all. Our AI learns about your specific skin type, concerns, and lifestyle.",
      bgColor: "bg-green-100",
      iconColor: "text-sage"
    },
    {
      icon: GraduationCap,
      title: "Expertise on Demand",
      description: "Get instant, expert-backed recommendations without the confusion of a crowded aisle.",
      bgColor: "bg-blue-100",
      iconColor: "text-soft-blue"
    },
    {
      icon: Star,
      title: "Curated Products",
      description: "We recommend only the best products from our curated collection, so you can trust every suggestion.",
      bgColor: "bg-red-100",
      iconColor: "text-coral"
    },
    {
      icon: BookOpen,
      title: "Education",
      description: "Learn about ingredients and why they work for your skin as you go.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-500"
    }
  ];
  return (
    <div>
 <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Guess When You Can Know?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop wasting money on products that don't work. Our AI-powered approach takes the guesswork out of skincare.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueProps.map(function(prop, index) {
            return (
              <div 
                key={prop.title}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
                data-testid={`value-prop-${index}`}
              >
                <div className={`w-16 h-16 ${prop.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <prop.icon className={`${prop.iconColor} w-8 h-8`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
  )
}

export default ValuePreposition