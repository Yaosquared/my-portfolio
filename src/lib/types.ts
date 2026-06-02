import { IconType as ReactIconType } from "react-icons";
import { IconType as SimpleIconType } from "@icons-pack/react-simple-icons";

export type CombinedIconType = ReactIconType | SimpleIconType;

export interface NavLinkProps {
  url: string;
  label: string;
  target: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  lightImg: string;
  darkImg: string;
  desc: string;
  logo: string;
  tech: string[];
  siteLink?: string;
  repoLinks: {
    fe?: string;
    be?: string;
  };
  target: string;
}

export interface ProjectCardProps {
  project: ProjectProps;
  index: number;
  getImagePath: (lightImg: string, darkImg: string) => string;
}

export type CategoryProps =
  | "core"
  | "frontend"
  | "backend"
  | "tool"
  | "platform";

export type DisplayCategoryProps =
  | "core"
  | "frontend"
  | "backend"
  | "tool-platform";

export interface SkillProps {
  id: number;
  text: string;
  icon: CombinedIconType;
  category: CategoryProps[];
  displayCategory: DisplayCategoryProps;
}

export interface CertificateProps {
  id: number;
  img: string;
  alt: string;
  width: number;
  height: number;
}

export interface ExperienceProps {
  id: number;
  title: string;
  location: string;
  description: string;
  date: string;
  img?: string;
  tech: string[];
}

export interface SocialProps {
  id: number;
  label: string;
  icon: CombinedIconType;
  link: string;
}
