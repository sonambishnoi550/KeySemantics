import React from 'react'
import { FAQ_ITEMS } from '../utils/helper'
import { ACCORDION_DATA } from '../utils/helper';
import { useState } from 'react';
import CustomButton from '../common/CustomButton';
import CustomHeading from '../common/CustomHeading';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className='xl:pt-[458px] max-xl:pt-24 max-lg:pt-16 max-sm:pt-12 bg-pink'>
            <div className='container'>
                <div className="flex max-lg:flex-wrap justify-between">
                    <div className="lg:w-5/12 w-full max-lg:pb-7 max-lg:mx-auto lg:sticky top-4 h-fit">
                        <img
                            className='max-w-[500px] max-xl:max-w-[448px] max-sm:max-w-[332px] mx-auto'
                            src="./assets/webp/faq-girl.webp"
                            alt="girl"
                        />
                    </div>
                    <div className="lg:w-6/12 w-full">
                        <CustomHeading text="Key Q&A" className="max-lg:pb-5 max-lg:text-center"/>
                        <ul className="pb-6 max-w-[552px] max-lg:mx-auto !ml-4">
                            {FAQ_ITEMS.map((item, index) => (
                                <li
                                    key={index}
                                    className="list-disc text-darkblue text-base font-normal leading-custom-xl opacity-60"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className='border-b border-lightgray'></div>
                        {ACCORDION_DATA.map((item, index) => (
                            <div key={index} className="border-b border-lightgray">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex justify-between items-center py-4 text-left opacity-70 text-lg font-medium text-darkblue hover:bg-gray-100"
                                >
                                    <span>{item.heading}</span>
                                    <svg className={`transform transition-transform duration-500 size-6 max-sm:size-4 ${activeIndex === index ? 'rotate-0' : 'rotate-180'
                                        }`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.25178 6.27599C1.33158 6.18849 1.42633 6.11908 1.53061 6.07173C1.63488 6.02437 1.74665 6 1.85952 6C1.9724 6 2.08416 6.02437 2.18844 6.07173C2.29272 6.11908 2.38746 6.18849 2.46727 6.27599L12 16.7255L21.5328 6.276C21.6126 6.18851 21.7073 6.11911 21.8116 6.07177C21.9159 6.02442 22.0277 6.00005 22.1405 6.00005C22.2534 6.00005 22.3652 6.02442 22.4694 6.07177C22.5737 6.11911 22.6685 6.18851 22.7483 6.276C22.8281 6.36348 22.8914 6.46734 22.9346 6.58165C22.9778 6.69595 23 6.81846 23 6.94218C23 7.0659 22.9778 7.18841 22.9346 7.30272C22.8914 7.41702 22.8281 7.52088 22.7483 7.60837L12.6078 18.724C12.528 18.8115 12.4332 18.8809 12.3289 18.9283C12.2247 18.9756 12.1129 19 12 19C11.8871 19 11.7754 18.9756 11.6711 18.9283C11.5668 18.8809 11.4721 18.8115 11.3923 18.724L1.25178 7.60836C1.17196 7.52089 1.10864 7.41703 1.06543 7.30272C1.02223 7.18842 0.999999 7.06591 0.999999 6.94218C0.999999 6.81845 1.02223 6.69594 1.06543 6.58163C1.10864 6.46733 1.17196 6.36347 1.25178 6.27599Z" fill="#191A42" />
                                    </svg>
                                </button>
                                {activeIndex === index && (
                                    <div className="bg-gray-50 pb-4 text-darkblue text-base max-md:text-sm opacity-65">
                                        {item.description && <p className="mb-4">{item.description}</p>}
                                        {item.tittle && <p className="mb-4">{item.tittle}</p>}
                                        {item.images.length > 0 && (
                                            <div className="flex space-x-4">
                                                {item.images.map((imgSrc, imgIndex) => (
                                                    <img
                                                        key={imgIndex}
                                                        src={imgSrc}
                                                        alt={`Accordion ${index + 1} Image ${imgIndex + 1}`}
                                                        className="w-1/2 h-auto object-cover rounded-md"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                        {item.content && <p className="pt-4">{item.content}</p>}
                                    </div>
                                )}
                            </div>
                        ))}
                        <CustomButton text="Get a demo" className="max-lg:mx-auto flex"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq;
