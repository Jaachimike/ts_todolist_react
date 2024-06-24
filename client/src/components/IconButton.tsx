interface IconButtonProps {
  icon: string;
  className?: string;
}

export const IconButton = ({icon, className}: IconButtonProps) => (
  <button className={className}>
    <img src={icon} alt="" />
  </button>
);
