import Header from "@/components/mainPage/header";
import FoodSection from "@/components/mainPage/foodSection";
import Footer from "@/components/mainPage/footer";

export default function Home() {
  return (
    <div className="home font-vazir">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');
          .font-vazir {
            font-family: 'Vazirmatn', sans-serif;
          }
          .home {
            background: linear-gradient(180deg, #F8FAFC 0%, #E5E7EB 100%);
            min-height: 100vh;
          }
          @media (max-width: 768px) {
            .home {
              padding-top: 120px; /* Adjusted for header in column layout */
            }
          }
          @media (max-width: 480px) {
            .home {
              padding-top: 140px; /* Adjusted for smaller screens */
            }
          }
        `}
      </style>
      <Header />
      <FoodSection />
      <Footer />
    </div>
  );
}