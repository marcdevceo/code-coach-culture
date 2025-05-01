import React from 'react';

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-gray-700 text-gray-200 px-6 py-20 font-sans">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Marcus Kimber</h1>

        <div className="text-center mb-10">
          <p className="text-lg">Charlotte, NC · <a href="mailto:marcdevceo@gmail.com" className="text-blue-300 hover:underline">marcdevceo@gmail.com</a> </p>
          <p className="text-md mt-2 font-semibold text-gray-300">Customer Experience Leader | Team Development | Client Retention | Operational Excellence</p>
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p className="text-lg">
            Dynamic and people-first Customer Experience Leader with over 20 years of customer service experience and 10+ years of progressive leadership experience in technical support, quality assurance, and team development. Proven track record of leading high-performing teams, managing support operations across complex systems, and elevating service delivery in remote, high-volume environments. Known for driving continuous improvement, resolving escalations with empathy and precision, and fostering a culture of accountability and collaboration.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Core Competencies</h2>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li>Team Leadership & Coaching</li>
            <li>Call Center Operations & SLA Management</li>
            <li>Quality Assurance & Call Monitoring</li>
            <li>Employee Engagement & Development</li>
            <li>Conflict Resolution & Performance Improvement</li>
            <li>Client Retention & Satisfaction</li>
            <li>Onboarding, Training & Documentation</li>
            <li>Maestro, WFM tools, Salesforce</li>
            <li>Remote Team Management</li>
            <li>Cross-LOB Experience (Billing, Tech, Admin)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-xl">Technical Team Manager</h3>
              <p className="italic">Kelly Connect / Apple (Remote) – Charlotte, NC | April 2019 – March 2025</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Led a high-performing team supporting AppleCare customers across multiple lines of business.</li>
                <li>Drove real-time service level management using Monsterboard and agent AUX code analysis.</li>
                <li>Owned end-to-end queue management; dynamically adjusted off-phone activities during spikes.</li>
                <li>Coached through QA insights, 1:1 sessions, and custom dashboards for performance visibility.</li>
                <li>Mentored Team Leads, Senior Advisors, and agents for upward mobility.</li>
                <li>Created Excel dashboards for CSAT, AHT, FCR, and feedback pattern tracking.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Quality Assurance Analyst / Coach</h3>
              <p className="italic">Kelly Connect / Apple – Charlotte, NC | June 2017 – March 2019</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Monitored and scored calls, delivered trend-based coaching, and supported KPI attainment.</li>
                <li>Led calibration sessions and created support documentation and development tools.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Tech Support Advisor</h3>
              <p className="italic">Kelly Connect / Apple – Charlotte, NC | Aug 2016 – May 2017</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Provided Tier 1 tech support and billing resolution for AppleCare customers.</li>
                <li>Maintained high CSAT through strong soft skills and troubleshooting.</li>
                <li>Promoted twice due to performance and leadership potential.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Reservation Specialist</h3>
              <p className="italic">Enterprise Holdings, Inc – Charlotte, NC | November 2015 – June 2016</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Supported reservations and resolved service inquiries via phone and email.</li>
                <li>Improved service processes through detailed documentation of customer cases.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Store Manager</h3>
              <p className="italic">United Cellular / Sprint – Charlotte, NC | March 2015 – November 2015</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Managed store ops, sales goals, team performance, and daily compliance.</li>
                <li>Resolved escalations and led by example in sales floor success.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-xl">Sales Associate</h3>
              <p className="italic">United Cellular / Sprint – Charlotte, NC | Aug 2014 – March 2015</p>
              <ul className="list-disc list-inside text-lg ml-4">
                <li>Delivered custom wireless solutions and exceeded monthly sales targets.</li>
                <li>Provided device support and assisted in store operations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Education & Certifications</h2>
          <ul className="list-disc list-inside text-lg ml-4">
            <li>Pursuing Certified Associate in Project Management (CAPM) – Project Management Institute</li>
            <li>Computer Science (incomplete) – Auburn University</li>
          </ul>
        </section>
      </section>
    </main>
  );
}