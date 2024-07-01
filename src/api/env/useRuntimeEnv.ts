import { createAxios } from "@/api/base/createAxios";

const useRuntimeEnv = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  return async () => {
    try {
      const response = await createAxios().get<{ stripePublishableKey: string }>(`/envs`);

      return response.data;
    } catch (error) {
      console.error("Failed to create checkout session", error);
      throw error;
    }
  };
};

export default useRuntimeEnv;