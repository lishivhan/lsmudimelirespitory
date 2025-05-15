import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'venda-pattern': 'url("data:image/svg+xml,%3Csvg width="100" height="20" viewBox="0 0 100 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M21.184 20c.357-.13.72-.264.888-.14 1.655-1.44 2.505-3.075 2.505-5.05 0-2.747-2.423-5.155-5.48-5.155-3.06 0-5.48 2.408-5.48 5.155 0 1.975.85 3.61 2.506 5.05.17.123.53.262.887.39L21.184 20zm19.05-5.05c0 .984-.177 1.832-.573 2.627-.396.79-1.127 1.765-2.207 2.423h3.53c.743-.858 1.25-1.684 1.61-2.48.36-.795.542-1.633.542-2.57 0-2.747-2.424-5.155-5.48-5.155-3.06 0-5.48 2.408-5.48 5.155 0 .938.18 1.775.54 2.57.36.797.868 1.623 1.61 2.48h3.53c-1.08-.658-1.81-1.634-2.208-2.422-.395-.795-.573-1.643-.573-2.627 0-1.52.573-2.748 1.593-3.608 1.02-.86 2.207-1.315 3.428-1.315 1.22 0 2.408.455 3.428 1.315 1.02.86 1.593 2.09 1.593 3.608zm-42.778 0c0 .984-.176 1.832-.572 2.627-.396.79-1.127 1.765-2.207 2.423h3.53c.743-.858 1.25-1.684 1.61-2.48.36-.795.542-1.633.542-2.57 0-2.747-2.424-5.155-5.48-5.155-3.06 0-5.48 2.408-5.48 5.155 0 .938.18 1.775.54 2.57.36.797.868 1.623 1.61 2.48h3.53c-1.08-.658-1.81-1.634-2.208-2.422-.395-.795-.573-1.643-.573-2.627 0-1.52.573-2.748 1.593-3.608 1.02-.86 2.207-1.315 3.428-1.315 1.22 0 2.408.455 3.428 1.315 1.02.86 1.593 2.09 1.593 3.608zm62.223 0c0 .984-.177 1.832-.573 2.627-.396.79-1.127 1.765-2.207 2.423h3.53c.743-.858 1.25-1.684 1.61-2.48.36-.795.542-1.633.542-2.57 0-2.747-2.424-5.155-5.48-5.155-3.06 0-5.48 2.408-5.48 5.155 0 .938.18 1.775.54 2.57.36.797.868 1.623 1.61 2.48h3.53c-1.08-.658-1.81-1.634-2.208-2.422-.395-.795-.573-1.643-.573-2.627 0-1.52.573-2.748 1.593-3.608 1.02-.86 2.207-1.315 3.428-1.315 1.22 0 2.408.455 3.428 1.315 1.02.86 1.593 2.09 1.593 3.608zm-45.9-9.745c1.395-.003 3.07.68 4.56 1.974l-2.636 2.113c-.473-.412-1.334-.878-1.923-.878-1.653 0-2.987 1.326-2.987 2.962 0 1.636 1.334 2.96 2.987 2.96.597 0 1.467-.466 1.934-.874l2.636 2.112c-1.488 1.276-3.157 1.946-4.56 1.948-.16.004-3.024.102-4.96-1.824-1.936-1.924-1.846-4.746-1.84-4.914-.004-.168-.1-2.986 1.84-4.91 1.936-1.926 4.795-1.83 4.956-1.83l-.006.4-.003.002zm-20.863.4c1.246-.002 2.766.615 3.983 1.76l-2.24 2.15c-.31-.286-.983-.68-1.74-.68-1.404 0-2.54 1.134-2.54 2.53 0 1.4 1.136 2.532 2.54 2.532.763 0 1.442-.395 1.753-.68l2.238 2.15c-1.22 1.137-2.738 1.752-3.992 1.754-.13.004-2.493.086-4.056-1.47-1.565-1.553-1.49-3.848-1.487-3.994 0-.15-.074-2.442 1.487-3.997 1.564-1.554 3.923-1.474 4.055-1.47v.004l.003.003zm55.144.003c1.248-.002 2.768.615 3.985 1.76l-2.24 2.15c-.31-.287-.983-.682-1.74-.682-1.405 0-2.54 1.135-2.54 2.53 0 1.4 1.135 2.533 2.54 2.533.756 0 1.43-.395 1.74-.68l2.24 2.15c-1.217 1.136-2.737 1.75-3.992 1.754-.127.003-2.493.085-4.055-1.47-1.563-1.554-1.49-3.848-1.487-3.994 0-.15-.076-2.443 1.487-3.998 1.562-1.554 3.923-1.473 4.054-1.47v.004l.003.004zM95 14.95v3H5v-3" fill="%23BE9B7B" fill-opacity="0.4" fill-rule="evenodd"/%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
