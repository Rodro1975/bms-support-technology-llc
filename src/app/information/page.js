import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function InformationPage() {
    return (
        <div className="relative flex flex-col min-h-screen">
            <NavBar />
            <div className="flex-grow flex items-center justify-center mt-16">
                <h1>Hello, Im the InformationPage</h1>
            </div>
            <Footer />
        </div>
    );
}
