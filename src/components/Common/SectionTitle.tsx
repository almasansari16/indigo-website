const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center = false,
  mb = "100px",
}: {
  title: React.ReactNode; // ReactNode for better type coverage
  paragraph: React.ReactNode;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? "mx-auto text-center" : ""}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      {/* Title */}
      <h2 className="font-ClashGrotesk mb-4 text-3xl font-bold leading-snug text-black dark:text-white sm:text-4xl md:text-[40px]">
        {title}
      </h2>

      {/* Paragraph */}
      {paragraph && (
        <p
          className={`raleway text-base leading-relaxed text-body-color md:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {paragraph}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
