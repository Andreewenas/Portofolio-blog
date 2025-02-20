import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Andree Agustian Wenas",
  initials: "",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "A Student who is on his way to becoming a skilled Front-end Dev.",
  summary:
    "Currently attending SMK Negeri 2 Yogyakarta, majoring in Network Information Systems and Application, with a strong focus on Frontend development. Proficient in building modern, responsive, and interactive user interfaces using HTML, CSS, JavaScript, and frameworks like React and Next.js. Experienced in utilizing Tailwind CSS for efficient styling and UI design. Passionate about crafting seamless user experiences and staying up-to-date with the latest web development trends.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Kotlin",
    "Tailwind",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Andreewenas",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andree-wenas-90b10b336/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/andreewenas/",
        icon: Icons.instagram,

        navbar: true,
      },
  
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "SMK Negeri 2 Yogyakarta",
      href: "https://www.smk2-yk.sch.id/",
      degree: "Jurusan Sistem Informasi Jaringan dan Aplikasi",
      logoUrl: "smk.jpeg",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "Wenz Joki",
      href: "https://wenz-joki.vercel.app/",
      dates: "Nov 2024",
      active: true,
      description:
        "Jockey service website for jockeying Efootball games to help players reach the desired division",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
        "TailwindCSS",
        "uiverse",
      ],
      links: [
        {
          type: "Website",
          href: "https://wenz-joki.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Andreewenas/wenz-joki",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/wenz.png",
      video:
        "",
    },
    {
      title: "JRV",
      href: "",
      dates: "Feb 2025 - Present",
      active: true,
      description:
        "Wheel repair shop website",
      technologies: [
        "Typescript",
        "TailwindCSS",
        "Magic UI",
        "Acertinity UI",
      ],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/jrv.png",
      video: "",
    },
    {
      title: "Wenz APK",
      href: "",
      dates: "Sep 2024",
      active: true,
      description:
        "Application that has maps, calculator, barcode scanning, tourist attractions features",
      technologies: [
        "Kotlin",
      ],
      links: [
        {
          type: "Application",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Andreewenas/wenz-apk-kotlin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/apk.jpeg",
      video: "",
    },
    {
      title: "Coming Soon",
      href: "",
      dates: "",
      active: true,
      description:
        "Coming Soon",
      technologies: [
        
      ],
      links: [
      ],
      image: "/cs.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Amikom HMIF Dedicated to School",
      dates: "July 25 - 26, 2024",
      location: "",
      description:
        "HMIF is working with UKM AMCC to provide students with material on web programming using ReactJS technology.",
      image:
        "/hmif.webp",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "HMIF",
          href: "https://www.hmifamikom.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

  ],
} as const;
