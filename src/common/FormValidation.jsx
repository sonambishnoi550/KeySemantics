import React from 'react'
import { FORM_FIELD } from '../utils/helper'
import { useState } from 'react'
import CustomButton from './CustomButton'
import CustomHeading from './CustomHeading'

const FormValidation = () => {
    const initialFormState = {
        name: '',
        email: '',
        company: '',
        phone: '',
    };

    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        setFormData(initialFormState);
    };
    return (
        <div className='lg:py-24 md:py-16 py-12 bg-darkblue relative max-sm:px-3'>
            <div className='absolute top-0 left-[12%] xl:block hidden'>
                <img className='max-w-[137px]' src="./assets/webp/footer-icon-one.png" alt="footer-icon" />
            </div>
            <div className='absolute bottom-0 right-[12%] xl:block hidden'>
                <img className='max-w-[137px]' src="./assets/webp/footer-icon-two.png" alt="footer-icon" />
            </div>
            <CustomHeading text="How does KeySemantics work?" className="text-white text-center"></CustomHeading>
            <p className='pt-3 font-normal text-base lg:pb-[64px] md:pb-14 pb-11 text-white text-center max-sm:text-sm'>Request a demo for your team and let us show you how KeySemantics can help your company</p>
            <div className="flex justify-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-transparent flex-col"
                >
                    {FORM_FIELD.map((field) => (
                        <div key={field.id} className="mb-2 max-w-[320px] mx-auto">
                            <input
                                id={field.id}
                                type="text"
                                placeholder={field.placeholder}
                                required={field.required}
                                value={formData[field.id]}
                                onChange={handleChange}
                                className="w-full py-4 pl-5 mx-auto text-purple bg-lightblue placeholder-purple rounded-full focus:outline-none"
                            />
                        </div>
                    ))}

                    <p className="text-custom-xxs text-center text-purple mt-4">
                        By submitting my contact information I agree to the KeySemantics Privacy Policy
                    </p>

                    <CustomButton text="Request a demo" className="!bg-sky text-white py-4 px-8 mx-auto flex border border-sky hover:!text-sky hover:!bg-white"></CustomButton>
                </form>
            </div>
        </div>
    )
}

export default FormValidation