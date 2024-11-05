interface TitleProps {
  text: string;
  className?: string;
}

const Title = ({ text, className }: TitleProps) => {
  return (
    <div className={className}>
      <h3 className="text-3xl font-bold transition-all">{text}</h3>
      <div className="w-40 h-2 rounded-full bg-gradient-to-r to-[#89E3F1] from-[#29456D] dark:to-[#29456D] dark:from-[#89E3F1]" />
    </div>
  );
};

export default Title;
