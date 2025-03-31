import { useState } from "react";
import { api } from "./config";
import { AxiosError, AxiosRequestConfig } from "axios";

export type MutationState<T> = {
  mutate: (body?: T) => Promise<void>;
  error: string | null;
  loading: boolean;
  data: T | null;
};

const useMutation = <T,>(
  config: AxiosRequestConfig<T>,
  onSuccess?: () => void
): MutationState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api<T>(config);
      setData(response.data);
      onSuccess?.();
    } catch (err) {
      let errorMessage = "Something went wrong. Please try again.";

      if (err instanceof AxiosError) {
        errorMessage =
          err.response?.data?.data?.message ||
          err.response?.data?.error ||
          errorMessage;
      }

      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return { mutate, error, loading, data };
};

export default useMutation;
