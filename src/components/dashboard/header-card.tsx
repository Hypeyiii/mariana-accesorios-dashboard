interface CardProps {
  title: string;
  sign?: string;
  stat: number;
  icon: JSX.Element;
}

export default function HeaderCard({ title, sign, stat, icon }: CardProps) {
  return (
    <span className="w-full col-span-2 md:col-span-1 p-3 md:p-6 rounded-lg flex flex-col gap-2 bg-[#1a1e26] border-[0.1px] border-white/30">
      <div className="flex flex-row gap-2 items-center">
        {icon}
        <h1 className="text-white/70 text-sm md:text-base">{title}</h1>
      </div>
      <p className="text-white/70 py-2 md:py-5 px-1 md:px-3 bg-[#424a52] w-full text-center m-auto rounded-lg">
        {sign}
        {stat}
      </p>
    </span>
  );
}
