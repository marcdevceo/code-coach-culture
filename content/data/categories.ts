import { CategoryProps } from "@/types/categories";



export const categoryProps: { [key: string]: CategoryProps} =
    {
          "dev-diaries": {
            formattedTitle: "Dev Diaries",
              emoji: "🧑🏽‍💻",
              color: "bg-gradient-to-br from-emerald-300 to-emerald-500",
              link: "/dev-diaries",
              subHeadline: "Dive into my development journey—app builds, bug fixes, code lessons, and the mindset behind clean, purposeful software."
          },
          "leadership-logs": {
            formattedTitle: "Leadership Logs",
              emoji: "🧭",
              color: "bg-gradient-to-br from-yellow-200 to-yellow-400",
              link: "/leadership-logs",
              subHeadline: "Explore insights on team dynamics, coaching moments, and leadership growth—written from the perspective of someone who has led, developed, and walked the journey with their team."
          },
          "ops-strategy": {
            formattedTitle: "Ops & Strategy",
              emoji: "⚙️",
              color: "bg-gradient-to-br from-blue-200 to-blue-400",
              link: "/ops-strategy",
              subHeadline: "Explore workflows, systems, and strategies that drive clarity and scalability—from backend structure to operational excellence."
          },
          "mindset-motivation": {
            formattedTitle: "Mindset & Motivation",
              emoji: "🧠",
              color: "bg-gradient-to-br from-pink-200 to-pink-400",
              link: "/mindset-motivation",
              subHeadline: "Personal power. Purpose. Resilience. This is where we talk about showing up for yourself, staying grounded, and leading with intention from the inside out."
          }
    };