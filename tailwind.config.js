/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        "cust-darkblue": "#348AC9",
        "cust-blue": "#3E9ADD",
        "cust-softblue": "#ECF5FF",
        "cust-gray" : "#929292",
        "black" : "#252525",
      },
    },
  },
  plugins: [],
}
