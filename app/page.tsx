import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Features from "./components/Features";
import Newsletter from "./components/Newsletter/Newsletter";
import Students from "./components/Students/Students";
import Tabs from "./components/Courses/Courses";

// import Mentor from './components/Mentor/Mentor';

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Students />
      <Newsletter />
    </main>
  )
}
