// Importing testimonials data from the constants file
import { testimonials } from '../constants';

// Clients component for displaying client testimonials
const Clients = () => {
  return (
    // Main section container for testimonials
    <section className="c-space my-20">
      {/* Heading for the testimonials section */}
      <h3 className="head-text">Testimonials </h3>

      {/* Container for client reviews */}
      <div className="client-container">
        {/* Mapping through each testimonial to render client reviews */}
        {testimonials.map(({ id, name, position, img, review, profile }) => (
          <div key={`review-${id}`} className="client-review shadow-lg hover:shadow-black-200">
            <div>
              {/* Displaying the review text */}
              <p className="font-light text-white-800">{review}</p>

              {/* Container for client content */}
              <div className="client-content">
                {/* Flex container for client image and details */}
                <div className="flex gap-4">
                  {/* Link to client's profile */}
                  <a href={profile} target="_blank" rel="noreferrer">
                    {/* Client's image with hover effect */}
                    <img
                      src={img}
                      alt="reviewer"
                      className="h-12 w-12 cursor-pointer rounded-full transition duration-300 ease-in-out hover:scale-125"
                    />
                  </a>
                  <div className="flex flex-col">
                    {/* Client's name with a link to their profile */}
                    <p className="cursor-pointer font-semibold text-white-800 transition duration-300 ease-in-out hover:scale-105">
                      <a href={profile} target="_blank" rel="noreferrer ">
                        {name}
                      </a>
                    </p>
                    {/* Client's position */}
                    <p className="text-sm font-light text-white-500 md:text-base">{position}</p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-2 self-end">
                  {/* Displaying 5 star images */}
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/assets/star.png" alt="star" className="h-5 w-5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Exporting the Clients component as the default export
export default Clients;
