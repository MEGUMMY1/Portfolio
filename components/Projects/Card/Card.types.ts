export interface CardProps {
  title: string;
  description: string;
  image: string;
  github?: string;
  link?: string;
  figma?: string;
  onClick?: () => void;
}
