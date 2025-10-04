import Layout from "../shared/Layout/Layout";
import {
    FacebookShareButton, FacebookIcon,
    TwitterShareButton, TwitterIcon,
    WhatsappShareButton, WhatsappIcon,
    TelegramShareButton, TelegramIcon,
    LinkedinShareButton, LinkedinIcon,
    PinterestShareButton, PinterestIcon,
    RedditShareButton, RedditIcon,
    EmailShareButton, EmailIcon,
    }   from "react-share";


const Home = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-red-500 flex justify-center items-center">
        <p>Welcome to Home</p>
      </div>
    </Layout>
  );
};

export default Home;
