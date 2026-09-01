interface UseClipboardInput {
  /** Time in ms after which the copied state will reset, `2000` by default. */
  timeout?: number;
}

interface UseClipboardReturnValue {
  /** Copies the given text to the clipboard. */
  copy: (value: string) => void;

  /** Clears the copied state, error state, and any pending reset timer. */
  reset: () => void;

  /** Error from the last failed copy attempt, if any. */
  error: Ref<Error | null>;

  /** True after a successful copy until the timeout elapses or reset() is called. */
  copied: Ref<boolean>;
}

export function useClipboard(options: UseClipboardInput = {}): UseClipboardReturnValue {
  const timeout = options.timeout ?? 2000;

  const copied = ref(false);
  const error = ref<Error | null>(null);
  let timer: ReturnType<typeof setTimeout> | undefined;

  function scheduleReset() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
    }, timeout);
  }

  function copy(value: string) {
    if (import.meta.client && "clipboard" in navigator) {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          error.value = null;
          copied.value = true;
          scheduleReset();
        })
        .catch((err: unknown) => {
          error.value = err instanceof Error ? err : new Error(String(err));
        });
    } else {
      error.value = new Error("useClipboard: navigator.clipboard is not supported");
    }
  }

  function reset() {
    copied.value = false;
    error.value = null;
    clearTimeout(timer);
  }

  onScopeDispose(() => clearTimeout(timer));

  return { copy, reset, error, copied };
}
