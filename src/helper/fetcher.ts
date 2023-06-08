export const fetchHandler = async (url: string, requestType: string) => {
  const result = await fetch(url, {
    method: requestType,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result;
};
