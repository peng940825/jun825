import Image from "next/image";

const Education = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Education</h2>

      <div className="flex gap-8">
        <div className="relative size-14 shrink-0 overflow-hidden rounded-sm bg-white">
          <Image
            src="/images/resume/stust.webp"
            sizes="56px"
            fill
            alt="南台科技大學"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <h3 className="text-xl font-medium">南臺科技大學</h3>
          <p className="text-muted-foreground">資訊工程系</p>
          <p className="text-muted-foreground text-sm">2012 - 2016</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
