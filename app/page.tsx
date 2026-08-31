import AccreditationSection from "@/components/home/Accreditationsection";
import AYMFullPage from "@/components/home/Aymfullpage";
import BlogSection from "@/components/home/BlogSection";
import ClassCampusAmenities from "@/components/home/Classcampusamenities";
import CoursesSection from "@/components/home/Coursessection";
import HomeaboutSection from "@/components/home/Homeaboutsection";
import HomepageSlider from "@/components/home/Homepageslider";
import HomeTestimonialsSection from "@/components/home/Hometestimonialssection";
import HowToReach from "@/components/home/Howtoreach";
import OurMission from "@/components/home/Ourmission";
import WhyAYMSection from "@/components/home/Whyaymsection";
import YogaCoursesTeachers from "@/components/home/Yogacoursesteachers";

interface Slide {
  _id: string;
  bannerName: string;
  link: string;
  image: string;
}

async function getBanners(): Promise<Slide[]> {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/banners`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Banner fetch failed:", res.status, res.statusText, url);
      return [];
    }

    const data = await res.json();
    return data.success ? data.data : [];
  } catch (error) {
    console.error("Server-side banner fetch error:", error, "URL:", url);
    return [];
  }
}

export default async function Home() {
  const initialSlides = await getBanners();

  return (
    <>
      <HomepageSlider initialSlides={initialSlides} />
      <HomeaboutSection />
      <CoursesSection />
      <AccreditationSection />
      <YogaCoursesTeachers />
      <ClassCampusAmenities />
      <WhyAYMSection />
      <OurMission />
      <AYMFullPage />
      <BlogSection />
      <HomeTestimonialsSection />
      <HowToReach />
    </>
  );
}