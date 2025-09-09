import Avatar from "./Avatar";
import Videoskin from "../assets/Clear Skin Journey Quiz-VEED.mp4";

const HeroComponent = () => {
  return (
    <div>
      <div className=" bg-gray-50">
        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <section className="relative py-12 overflow-hidden sm:pb-16 lg:pb-20 xl:pb-24">
              <div className="px-4 mx-auto relative sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-2 gap-y-24 lg:grid-cols-2 gap-x-24">
                  <div>
                    <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                      Tired of Guessing Your
                      <span className="text-sage">Skincare Routine?</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                      Our AI-powered quiz analyzes your skin's unique needs to
                      recommend a personalized regimen that actually works for
                      you.
                    </p>
                    <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                        role="button"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          viewBox="0 0 18 18"
                          fill="none"
                          stroke="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Start My Free Skin Quiz
                      </a>
                    </div>
                    <Avatar />{" "}
                    <span data-testid="text-social-proof">
                      Over 50,000 AI-powered routines created
                    </span>
                  </div>
                  <div className="relative">
                    <div className="features-video-container">
                      <video
                        className="FeatureVideo"
                        autoPlay
                        loop
                        muted
                        preload="true"
                        loading="lazy"
                        playsInline
                      >
                        <source src={Videoskin} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
};
export default HeroComponent;
