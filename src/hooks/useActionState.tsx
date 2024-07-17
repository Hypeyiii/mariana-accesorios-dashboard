import { useState, useCallback, FormEvent } from "react";

type ActionFunction<T> = (formData: T) => Promise<{ error?: string }>;

export function useActionState<T extends FormData>(action: ActionFunction<T>) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const formAction = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsPending(true);
      setErrorMessage("");
      setSuccessMessage("");

      const formData = new FormData(e.currentTarget);

      try {
        const result = await action(formData as unknown as T);

        if (result.error) {
          setErrorMessage(result.error);
        } else {
          setSuccessMessage("Operación exitosa");
        }
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message);
        } else {
          setErrorMessage("An unexpected error occurred.");
        }
      } finally {
        setIsPending(false);
      }
    },
    [action]
  );

  return [errorMessage, formAction, isPending, successMessage] as const;
}
