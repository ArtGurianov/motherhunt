export type AppLocale = "en-US" | "ru-RU";

export const getAppLocale = () => {
  const locale = process.env.NEXT_PUBLIC_APP_LOCALE;
  if (!locale?.length) {
    throw new Error("Locale not provided in Env vars");
  }
  if (!["en-US", "ru-RU"].includes(locale)) {
    throw new Error("Unsupported locale");
  }

  return locale as AppLocale;
};
