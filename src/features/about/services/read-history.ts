import api from "@/lib/api";
import type { HistoryType } from "@/types/models/history-type";
import { handleApiError } from "@/utils/error/api-error-handler";

export const isHistoryArray = (
  data: HistoryType[] | { error: string }
): data is HistoryType[] => {
  return Array.isArray(data);
};

export const readHistoryService = async (): Promise<
  HistoryType[] | { error: string }
> => {
  try {
    const history = (await api.get("/sejarah")).data;

    return history;
  } catch (error) {
    const errorMessage = handleApiError(error, "data sejarah");

    return { error: errorMessage };
  }
};
