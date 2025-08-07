import React from 'react';
import { Star } from 'lucide-react';
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: "Sarah J.", rating: 5, comment: "Best dining experience ever! The ambiance and food were perfect." },
        { id: 2, name: "Michael T.", rating: 4, comment: "Great service and delicious food. Will definitely come back." },
        { id: 3, name: "Emily R.", rating: 5, comment: "The truffle pasta is to die for! Highly recommend this place." },
        { id: 4, name: "David L.", rating: 5, comment: "Exceptional wine pairing with our meals. Perfect anniversary dinner!" },
        { id: 5, name: "Jessica K.", rating: 4, comment: "Loved the dessert menu. Service was attentive without being intrusive." }
    ];

    return (
        <section className="py-16 bg-amber-50 px-4 sm:px-6">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Customer Testimonials</h2>

                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    className="max-w-6xl mx-auto"
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div className="bg-white rounded-xl shadow-md p-6 h-full mx-2 mb-10">
                                <div className="flex items-center mb-4">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={20}
                                                className={i < testimonial.rating
                                                    ? "text-amber-500 fill-amber-500"
                                                    : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                                <p className="font-bold">{testimonial.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;