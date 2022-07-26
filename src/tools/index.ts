export const objectToQueryString = (obj: any) => {
  return (
    '?' +
    Object.keys(obj)
      .map((key) => `${key}=${obj[key]}`)
      .join('&')
  );
};

export const fixIconUrl = (url: string) => {
  return url.replace('&amp;', '&');
};

export const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};
