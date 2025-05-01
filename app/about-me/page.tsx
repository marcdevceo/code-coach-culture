import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-gray-700 text-gray-00 px-6 py-20 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          Meet Marcus Kimber
        </h1>

        <p className="text-lg md:text-xl mb-6">
          I’m Marcus Kimber—The People Developer. With over 20 years in customer
          service and 10+ years in leadership, I’ve coached teams, managed
          operations, and developed people across all levels. From high-volume
          call centers to strategic performance coaching, I’ve led with empathy,
          driven with data, and delivered results.
        </p>

        <p className="text-lg md:text-xl mb-6">
          I specialize in developing frontline leaders and operational systems
          that scale. At AppleCare and other organizations, I’ve trained
          advisors across multiple lines of business, coached new leaders into
          confidence, and built Excel-based performance dashboards that made
          KPIs simple, visual, and actionable. I’ve also overseen quality,
          staffing workflows, and service level performance using real-time
          queue monitoring tools.
        </p>

        <p className="text-lg md:text-xl mb-6">
          As a software developer, I bring that same operational mindset into
          tech. I build full-stack web apps using Next.js, Django, and
          FastAPI—focused on solving real business problems. My projects often
          blend frontend design with backend logic, and I care deeply about user
          experience, accessibility, and clean architecture.
        </p>

        <p className="text-lg md:text-xl mb-6">
          I’m also passionate about leadership development, emotional
          intelligence, and cultural transformation. I believe that empowered
          people create exceptional customer experiences—and that leadership is
          about service, clarity, and follow-through. I’ve led teams through
          high-stress, high-change environments while keeping morale strong and
          results high.
        </p>

        <p className="text-lg md:text-xl mb-6">
          Through Code.Coach.Culture., I share what I’ve learned, what I’m still
          learning, and what I wish someone had shown me earlier. Whether you are
          just starting in customer service, exploring leadership, or building
          systems for scale—I’m here to help you grow with intention.
        </p>

        <p className="text-lg md:text-xl mb-6">
          And if you’re an employer or business looking for a leader who can
          bridge strategy, tech, and team culture—I bring hands-on experience, a
          heart for people, and the skills to build what matters.
        </p>

        <div className="text-center mt-10 space-y-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-lg font-semibold bg-slate-900 hover:bg-slate-900 text-gray-200 rounded-2xl shadow-md transition-all"
          >
            Let’s Connect
          </Link>
          <br />
          <a
            href="https://www.linkedin.com/in/marcus-k-a6800995/"
            className="inline-block px-6 py-3 text-lg font-semibold border-2 border-slate-900 text-gray-200 rounded-2xl shadow-md hover:bg-green-600 hover:text-white transition-all"
          >
            View My LinkedIn Profile
          </a>
        </div>
      </section>
    </main>
  );
}
