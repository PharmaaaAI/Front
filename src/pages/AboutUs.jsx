import React from 'react'

// You can replace these with your actual image paths
const heroImage = 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D%D'
const sectionImage = 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%D'

const AboutUs = () => {
  return (
    <div className="text-gray-700">

      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={heroImage}
          alt="Team of scientists collaborating in a modern lab"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white p-8 bg-opacity-20 rounded-lg backdrop-blur-xs">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Pioneering the intersection of artificial intelligence and pharmacology to create a new era of personalized medicine.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 md:py-24 max-w-5xl">

        <div className="text-center mb-16 md:mb-24">
          <p className="text-lg leading-relaxed">
            PharmaAI was founded on a simple, yet powerful belief: healthcare should be as unique as the individual. We saw a world of one-size-fits-all treatments and knew that technology held the key to a more precise, effective, and compassionate approach to medicine. Our journey began by uniting leading experts in data science, pharmacology, and clinical research to build a future where every treatment is tailored to the patient.
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Vision for a Healthier Future</h2>
          <p className="text-lg mb-12 leading-relaxed">
            We envision a future where chronic illness is managed with precision, where adverse drug reactions are a rarity, and where every patient has access to the most effective therapy from day one. This vision drives our relentless pursuit of innovation, pushing the boundaries of what's possible in medical science and technology.
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <div>
              <img
                src={sectionImage}
                alt="Scientist pouring chemicals"
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col space-y-6 text-base leading-relaxed">
              <p>
                Our core philosophy is rooted in data-driven discovery. We believe that within each person's unique biological data lies the answer to their optimal health. By applying sophisticated machine learning algorithms, we unlock these insights to guide treatment decisions.
              </p>
              <p>
                Collaboration is at the heart of our success. We partner with leading academic institutions, pharmaceutical companies, and healthcare providers to ensure our technology is grounded in rigorous scientific validation and meets the real-world needs of clinicians and their patients.
              </p>
              <p>
                Our team is our greatest asset. Comprised of dedicated scientists, engineers, and medical professionals, we share a collective passion for solving healthcare's most complex challenges and improving the lives of millions worldwide.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The Technology Behind the Breakthrough</h2>
          <div className="text-lg">
            <p>
              Our approach is powered by state-of-the-art large language models, which serve as the core of our analytical capabilities. These advanced AI systems are trained to read, synthesize, and understand immense volumes of complex biomedical data—from the latest clinical research and scientific literature to anonymized patient records. By leveraging this technology, we can uncover critical insights and connections that accelerate the path to personalized treatment strategies, bringing new hope to patients faster than ever before.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs