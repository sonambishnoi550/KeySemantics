import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const faqs = [
    {
        question: "Is coding knowledge required to customize For:Human?",
        answer:
            "No. You can modify layouts, colors, and fonts using Webflow’s visual Designer. However, advanced tweaks remain possible for those with coding skills.",
    },
    {
        question: "Does For:Human support e-commerce functionality?",
        answer:
            "No. You can modify layouts, colors, and fonts using Webflow’s visual Designer. However, advanced tweaks remain possible for those with coding skills.",
    },
    {
        question: "Can I import my own fonts and branding?",
        answer: "Yes. You can upload your own fonts and style everything as per your branding.",
    },
    {
        question: "How do I get support if I need help?",
        answer: "Reach out through support channels or Webflow University for tutorials and help guides.",
    },
    {
        question: "Is the website responsive?",
        answer: "Yes. The template adapts to mobile, tablet, and desktop screen sizes.",
    },
    {
        question: "How do I optimize SEO?",
        answer:
            "Use clean structure, add meta tags, and descriptive alt text to help SEO rankings.",
    },
];

export default function SecondFaq() {
    const [openIndex, setOpenIndex] = useState(null);
    const answerRefs = useRef([]);
    const verticalLineRefs = useRef([]);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        faqs.forEach((_, i) => {
            const content = answerRefs.current[i];
            const vertical = verticalLineRefs.current[i];
            if (!content || !vertical) return;

            gsap.killTweensOf(content);
            gsap.killTweensOf(vertical);

            if (openIndex === i) {
                gsap.set(content, { display: "block" });
                gsap.fromTo(
                    content,
                    { height: 0, autoAlpha: 0 },
                    {
                        height: content.scrollHeight,
                        autoAlpha: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.set(content, { height: "auto" });
                        },
                    }
                );
                gsap.to(vertical, { rotate: 90, duration: 0.3 });
            } else {
                gsap.to(content, {
                    height: 0,
                    autoAlpha: 0,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => {
                        gsap.set(content, { display: "none" });
                    },
                });
                gsap.to(vertical, { rotate: 0, duration: 0.3 });
            }
        });
    }, [openIndex]);

    return (
        <div className="bg-neutral-100 text-neutral-900 px-4 pb-[120px] pt-8">
            <div className="max-w-[1392px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                    <div>
                        <span className="inline-block border-2 border-[#12121252] text-xs font-semibold rounded-[24px] px-4 py-2 mb-4">
                            FAQ
                        </span>
                        <h1 className="text-5xl font-bold mb-8">
                            You ask,
                            <br />
                            we answer
                        </h1>
                    </div>

                    <div className="space-y-4 w-full max-w-[690px]">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl cursor-pointer md:p-6 p-3"
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="md:text-lg text-base font-medium max-sm:max-w-[250px]">
                                        {faq.question}
                                    </h3>
                                    <div className="relative size-[14px]">
                                        <span className="absolute top-1/2 left-0 right-0 h-[2px] bg-black transform -translate-y-1/2" />
                                        <span
                                            ref={(el) => (verticalLineRefs.current[index] = el)}
                                            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-black transform -translate-x-1/2 origin-center"
                                        />
                                    </div>
                                </div>

                                <div
                                    ref={(el) => (answerRefs.current[index] = el)}
                                    className="overflow-hidden text-sm text-neutral-600 mt-3"
                                >
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
