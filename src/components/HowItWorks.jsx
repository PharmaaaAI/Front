import { MessageCircle, Brain, ShoppingBag, ArrowRight } from "lucide-react";


const HowItWorks = () => {
     const steps = [
    {
      number: 1,
      icon: MessageCircle,
      title: "Tell Us About You",
      description: "Answer a few quick questions about your skin type, concerns, and lifestyle preferences.",
      bgColor: "bg-sage",
      badgeColor: "bg-coral"
    },
    {
      number: 2,
      icon: Brain,
      title: "Get Your Analysis",
      description: "Our AI analyzes your answers and identifies your unique skin profile and needs.",
      bgColor: "bg-soft-blue",
      badgeColor: "bg-coral"
    },
    {
      number: 3,
      icon: ShoppingBag,
      title: "See Your Routine",
      description: "Instantly get your personalized regimen and shop your recommended products.",
      bgColor: "bg-coral",
      badgeColor: "bg-sage"
    }
  ];

  return (
    <div>
  <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple Steps to Success
          </h2>
          <p className="text-xl text-gray-600">
            Get your personalized routine in just 3 easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="text-center relative"
              data-testid={`step-${index + 1}`}
            >
              <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 relative`}>
                <step.icon className="text-white w-8 h-8" />
                <div className={`absolute -top-2 -right-2 ${step.badgeColor} text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center`}>
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-6 text-coral">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default HowItWorks