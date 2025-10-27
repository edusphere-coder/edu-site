import Banner from "./components/Banner/Banner";
import Courses from "./components/Courses/Courses";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";

export default function Home() {
  return (
    <main>
      <Banner />
      <Courses/>
      <Features />
      <Students />
      <Newsletter />
      
    </main>
  )
}
