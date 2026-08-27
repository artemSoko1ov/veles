import "@/app/styles"
import Header from "@/widgets/Header";
import Home from "@/pages/home";
import Footer from "@/widgets/Footer";
import DemoBanner from "@/shared/ui/DemoBanner";


function App() {
  return (
    <>
      <DemoBanner />
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>

  )
}

export default App
