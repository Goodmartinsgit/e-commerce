import { NavLink } from "react-router-dom";
import Layout from "../shared/Layout/Layout";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const Home = () => {
  return (
    <Layout>
      <div className="w-full h-screen bg-primary flex justify-center items-center">
        <NavLink
          to={""}
          className="inline-block rounded-full p-[2px] bg-gradient-to-r from-white to-bg-primary mb-8 text-sm"
        >
          <div className="rounded-full bg-primary p-2 text-white">
            New collection 2025
          </div>
        </NavLink>

        
      </div>
    </Layout>
  );
};

export default Home;
