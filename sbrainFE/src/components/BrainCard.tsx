import ShareIcon from "../icons/ShareIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "notes";
}

export const BrainCard = ({ title, link, type }: CardProps) => {
  return (
    <div
      className="p-8 bg-white rounded-md shadow-md border-gray-200
    max-w-72 border flex flex-col gap-3"
    >
      <div className="flex justify-between text-md">
        <div className="flex items-center gap-2">
          <ShareIcon size="md" />
          {title}
        </div>
        <div className="flex text-gray-500">
          <a href="">
            <ShareIcon size="md" />
          </a>
        </div>
      </div>
      <div>
        {type === "youtube" && (
          <iframe
            className="w-full h-auto"
            width="560"
            height="315"
            src={link.replace('watch','embed')}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote  className="twitter-tweet">
            <a href={link.replace("x.com","twitter.com").replace("?v=","/")}></a>
          </blockquote>
        )}
      </div>
      <div className="">Tags</div>
    </div>
  );
};
