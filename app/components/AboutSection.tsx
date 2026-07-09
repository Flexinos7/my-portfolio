import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Delivering Meaningful Interactions
            </h2>

            <div className="prose prose-lg text-white space-y-4">
              <p>
                I&apos;m an Information Systems Analyst and product-minded
                technology professional with a strong foundation in business
                systems, user experience, and technical problem-solving. My work
                is driven by a passion for building solutions that connect
                people, processes, and technology in a meaningful way.
              </p>

              <p>
                Through my experience in product management, business analysis,
                and software-focused projects, I&apos;ve developed a strong
                ability to translate business needs into clear requirements,
                collaborate with technical teams, and support systems that
                improve how organizations operate. I&apos;m especially interested
                in the intersection of technology, operations, and user-centered
                design.
              </p>

              <p>
                I recently accepted an offer to work as an Information Systems
                Analyst at Lockheed Martin, where I&apos;m excited to continue
                growing in a technical business role and contribute to impactful,
                mission-driven work. Outside of work, you can usually find me at
                the gym, exploring new places, playing sports, or spending time
                with friends and family.
              </p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end lg:pr-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-primary/20 blur-xl" />

              <div className="relative z-10 w-80 h-80 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/profile-new.jpg"
                  alt="Felix Cherian"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 320px, 320px"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}