import S7_Image from "@/assets/images/S7.png";
import InnerPageLayout from "@/components/layouts/InnerPageLayout";
import BusinessmanContentSection from "@/components/sections/BusinessmanContentSection";
import BusinessImageSlider from "@/components/sections/BusinessImageSlider";

export default function BusinessMan() {
    return (<InnerPageLayout 
        title="Business Man" 
    content="SLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    image={S7_Image}
    >
         <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <BusinessImageSlider />
        </section>
        <section className="relative my-8 md:my-16 lg:my-24 px-4 md:px-6">
            <BusinessmanContentSection />
        </section>

    </InnerPageLayout>)
}
