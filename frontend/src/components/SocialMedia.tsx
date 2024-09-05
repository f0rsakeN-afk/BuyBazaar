import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

interface SocialMediaItem {
    Icon: React.ElementType;
    name: string;
    url: string;
}

const socialMediaData: SocialMediaItem[] = [
    {
        Icon: FaFacebook,
        name: "Facebook",
        url: "https://facebook.com/",
    },
    {
        Icon: FaInstagram,
        name: "Instagram",
        url: "https://instagram.com/",
    },
    {
        Icon: FaTwitter,
        name: "Twitter",
        url: "https://twitter.com/",
    },
    {
        Icon: FaPinterest,
        name: "Pinterest",
        url: "https://pinterest.com/",
    },
];

const SocialMedia: React.FC = () => {
    return (
        <div className="flex items-center space-x-6">
            {socialMediaData.map((item) => (
                <SocialIcon key={item.name} {...item} />
            ))}
        </div>
    );
};

const SocialIcon: React.FC<SocialMediaItem> = ({ Icon, name, url }) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-yellow-500 transition-colors duration-300 ease-in-out"
            title={`Visit our ${name} page`}
        >
            <Icon className="text-2xl" />
            <span className="sr-only">{name}</span>
        </a>
    );
};

export default SocialMedia;