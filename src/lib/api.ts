import axios from "axios";

export const getImageURL: () => Promise<string> = async () => {
  const options = {
    method: "GET",
    url: "https://picsum.photos/1000",
  };

  const response = await axios.request(options);
  return response.request.responseURL;
};

export const getQuote: (tag?: string) => Promise<Quote> = async (tag) => {
  const options = {
    method: "GET",
    url: `https://api.quotable.io/random${tag ? `?tags=${tag}` : ""}`,
  };

  const response = await axios.request(options);
  return response.data;
};
