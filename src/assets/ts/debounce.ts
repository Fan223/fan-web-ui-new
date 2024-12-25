/**
 * 防抖函数. 高频、耗时、以最后一次调用为准.
 * @param func Function
 * @param delay millisecond
 * @returns Function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 200
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/**
 * 防抖 Ref.
 * @param value any
 * @param delay millisecond
 * @returns customRef
 */
export function debounceRef<T>(value: T, delay: number = 200) {
  let timer: ReturnType<typeof setTimeout>;

  return customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val: T) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = val;
          trigger();
        }, delay);
      },
    };
  });
}
