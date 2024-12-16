import WorkOne from "../lottie/work-one.json"
import WorkTwo from "../lottie/work-two.json"
import WorkThree from "../lottie/work-three.json"
export const WORK_ITEMS = [
    {
       src: WorkOne,
        alt: 'Animation-One',
        description: "Websites, documents and images are pushed into our Analysis API."
    },
    {
        src: WorkTwo,
        alt: 'Animation-two',
        description: "Using highly optimized and trained AI models, we analyze, vectorize and extract semantic information and relations from your content."
    },
    {
        src: WorkThree,
        alt: 'Animation-three',
        description: "Our enterprise-grade semantic search engine allows you to query your content in many ways. You’ll be amazed by the speed, precision and relevance of the results!"
    }
];

export const LIST_ITEMS = [
    "API-First / Headless => integrate seamlessly with your applications",
    "Combine data from multiple sources",
    "Push / Crawl => Your choice: Push your data to our APIs or let our crawlers crawl your content",
];

export const SECURITY_ITEMS = [
   " SaaS => we provide the search infrastructure so you can focus on your applications",
    "Hosted in a Swiss datacenter by Microsoft",
];

export const FAQ_ITEMS = [
    "Let customers discover your content using AI-generated questions and answers",
    "Seamlessly integrated into the Semantic Search experience",
    "LLM-powered Question Answering",
];

export const ACCORDION_DATA = [
    {
        heading: 'Accordion Heading #one',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        tittle:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        images: ['./assets/webp/faq-one.webp',
            './assets/webp/faq-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        heading: 'Accordion Heading #two',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        tittle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        images: ['./assets/webp/faq-one.webp',
            './assets/webp/faq-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        heading: 'Accordion Heading #three',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        tittle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        images: ['./assets/webp/faq-one.webp',
            './assets/webp/faq-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
    {
        heading: 'Accordion Heading #four',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        tittle: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
        images: ['./assets/webp/faq-one.webp',
            './assets/webp/faq-two.webp',],
        content: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    },
];
export const FORM_FIELD = [
    { id: 'name', label: 'Name', placeholder: 'Name', required: true },
    { id: 'email', label: 'Email', placeholder: 'Email', required: true },
    { id: 'company', label: 'Company', placeholder: 'Company', required: true },
    { id: 'phone', label: 'Phone (optional)', placeholder: 'Phone (optional)', required: false },
];