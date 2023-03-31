import { useCallback } from "react";

/**
 * A hook that enables you to log items out to the console.
 * at certain levels
 */
export const useLog = ({
  label,
  level,
}: {
  label: string;
  level: "DEBUG" | "TRACE"; // you get the idea
}) => {
  return useCallback<(message: string, ...args: any) => void>(
    (message, ...args) => {
      if (!args) {
        return console.log(`${label}:${level} - ${message}`);
      }
      console.log(`${label}:${level} - ${message}`, args);
    },
    []
  );
};
