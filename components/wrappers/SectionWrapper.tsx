const SectionWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={`${className} p-10 flex items-center justify-center`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
