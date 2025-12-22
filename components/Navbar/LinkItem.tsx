type Props = {
  url?: string;
  text: string;
};
export const LinkItem = ({ text, url }: Props) => {
  return (
    <a
      href={url}
      className="uppercase hover:cursor-pointer text-sm font-medium"
    >
      {text}
    </a>
  );
};
