import React from 'react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-gray-700 text-gray-200 px-6 py-20 font-sans">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">Let’s Connect</h1>

        <p className="text-lg md:text-xl mb-10 text-center">
          Whether you’re looking to grow your leadership skills or hire one, I’d love to hear from you.
          I offer both coaching for individuals and leadership for teams—so let’s start the conversation.
        </p>

        <div className="space-y-10">
          <div className="bg-slate-900 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">🧑🏽‍💼 For Coaching & Career Growth</h2>
            <p className="text-lg">
              Interested in 1:1 coaching or leadership development support?
              Email me at:
            </p>
            <p className="text-blue-300  font-semibold text-lg mt-2">
              mkimber@managedenterprises.net
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">🏢 For Employers & Partnerships</h2>
            <p className="text-lg">
              Want to interview or connect about a leadership opportunity?
              Reach me directly at:
            </p>
            <p className="text-blue-300  font-semibold text-lg mt-2">
              marcdevceo@gmail.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}