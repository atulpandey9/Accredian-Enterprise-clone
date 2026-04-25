export default function CourseSegmentation() {
  const courses = [
    {
      title: "Program Specific",
      desc: "Certificate, Executive, Post Graduate Certificate",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Industry Specific",
      desc: "IT, Healthcare, Retail, Finance, Manufacturing",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Topic Specific",
      desc: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Level Specific",
      desc: "Senior Leadership, Mid-Career Professionals, Freshers",
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-20 pt-5 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Tailored <span className="text-primary">Course Segmentation</span>
        </h2>
        <p className="text-gray-700 mb-16">
          Explore <span className="text-primary/80">Custom-fit Courses</span> Designed to Address Every Professional Focus
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 group cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start items-center text-center">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{course.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{course.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
