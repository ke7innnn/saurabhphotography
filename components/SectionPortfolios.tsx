'use client';

import { motion } from 'framer-motion';

const portfolios = [
  {
    id: "nayan",
    title: "नयन",
    image: "/nayan/thumbnail.png",
    link: "/nayan"
  },
  {
    id: "janani",
    title: "जननी",
    image: "/janani/thumbnail.png",
    link: "/janani"
  },
  {
    id: "darpan",
    title: "दर्पण",
    image: "/darpan/thumbnail.png",
    link: "/darpan"
  }
];

export function SectionPortfolios() {
  return (
    <section className="w-full bg-[#FAF8F5] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col space-y-24 md:space-y-40">
        {portfolios.map((portfolio, idx) => (
          <motion.a 
            key={portfolio.id} 
            href={portfolio.link}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="group block"
          >
            <div className="p-4 md:p-8 bg-white border border-[#E8E3DF] shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2">
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-gray-100">
                <motion.img 
                  initial={{ scale: 1.05 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={portfolio.image} 
                  alt={portfolio.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
