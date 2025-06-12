"use client";

export const Footer = () => {
  const now = new Date();
  return (
    <footer className="flex w-full h-footer border-t-4 bg-accent-foreground/70 justify-center items-center">
      {`MyDAOgs ecosystem ${now.getFullYear()}. Rights reserved.`}
    </footer>
  );
};
