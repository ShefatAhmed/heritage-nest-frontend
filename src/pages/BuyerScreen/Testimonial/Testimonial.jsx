import { useEffect, useState } from "react";
const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/testimonial")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  });
  return (
    <div>
      <h1 className="text-[#181818] text-2xl font-bold text-center">
        Testimonials
      </h1>
      <div className="max-w-5xl mx-auto px-4 pt-16">
        <div className="flex flex-wrap -mx-2">
          {testimonials
            .slice(currentSlide, currentSlide + 2)
            .map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/2 px-2 ">
                <div className="bg-[#ECF5FF] p-10 rounded-lg shadow-md">
                  <div className="flex justify-center items-center mb-4 gap-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-6 h-6 ${
                          i < testimonial.rating
                            ? "text-[#FEC84B]"
                            : "text-[#F4E6C5]"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049.797l2.59 5.25 5.808.848c.744.109 1.041 1.021.502 1.54l-4.2 4.09.991 5.782c.127.743-.646 1.31-1.31.959l-5.195-2.732-5.195 2.732c-.665.351-1.437-.216-1.31-.959l.99-5.782-4.2-4.09c-.54-.519-.242-1.431.502-1.54l5.807-.848L9.049.797z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-[#818181] my-8 text-center px-5">
                    {testimonial.message}
                  </p>
                  <div className="flex flex-col justify-center items-center text-center gap-5">
                    <img
                      src={testimonial.authorImage}
                      alt={testimonial.authorName}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.authorName}</p>
                      <p className="text-gray-600 text-sm">
                        {testimonial.authorPosition}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
            (_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentSlide / 2 === index ? "bg-[#EE6611]" : "bg-[#FDF0E7]"
                }`}
                onClick={() => setCurrentSlide(index * 2)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
