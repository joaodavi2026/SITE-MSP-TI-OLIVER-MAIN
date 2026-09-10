import ChatWidget from "@/components/chatbot/chat-widget";
import PageTransition from "@/components/global/page-transition";
import ScrollProgress from "@/components/global/scroll-progress";
import Footer from "@/components/marketing/footer";
import Navbar from "@/components/marketing/navbar";
import { WhatsAppFloat } from "@/components/marketing/whatsapp-button";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <>
            <ScrollProgress />
            <Navbar />
            <main className="relative z-40 mx-auto w-full">
                <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppFloat />
            <ChatWidget />
        </>
    );
};

export default MarketingLayout;
