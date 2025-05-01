import React from "react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-900 to-gray-700 text-gray-200 px-6 py-20 font-sans">
      <section className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          Let’s Connect
        </h1>

        <p className="text-lg md:text-xl mb-10 text-center">
          Whether you are looking to grow as a leader or bring one onto your
          team, I’d love to connect. I offer personalized coaching for
          individuals and experienced leadership for teams. Let’s start the
          conversation.
        </p>
        <div className="space-y-10">
          <div className="bg-slate-900 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              🧑🏽‍💼 Coaching & Career Growth
            </h2>
            <p className="text-lg">
              Ready for 1:1 coaching or support in stepping into your next
              leadership role? Reach out to start building with clarity and
              confidence:
            </p>
            <a
              href="mailto:mkimber@managedenterprises.net?subject=Leadership Coaching Inquiry"
              className="text-blue-300 font-semibold text-lg mt-2 block"
            >
              mkimber@managedenterprises.net
            </a>{" "}
          </div>

          <div className="bg-slate-900 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-2">
              🏢 Employers & Partnerships
            </h2>
            <p className="text-lg">
              Want to connect about a leadership opportunity, collaboration, or
              strategic role? Let’s talk about how I can bring value to your
              team:
            </p>
            <a
              href="mailto:marcdevceo@gmail.com?subject=Leadership Coaching Inquiry"
              className="text-blue-300 font-semibold text-lg mt-2 block"
            >
              marcdevceo@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
