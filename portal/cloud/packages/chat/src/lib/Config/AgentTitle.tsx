interface Props {
  title: string;
  className?: string;
}
const AgentTitle: React.FC<Props> = ({ title, className }) => {
  return (
    <h1
      className={`${className} text-light-grey font-berkley-mono text-base md:text-lg  font-noraml leading-6 pb-1 uppercase sm:mt-1.5`}
    >
      {title}
    </h1>
  );
};

export default AgentTitle;
