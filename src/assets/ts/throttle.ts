/**
 * 节流函数. 在指定时间间隔内, 函数只会执行一次.
 * @param func Function
 * @param delay millisecond
 * @returns Function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number = 1000
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  let lastExecTime = 0;

  return function (this: any, ...args: Parameters<T>) {
    let current = Date.now();

    if (current - lastExecTime > delay) {
      func.apply(this, args);
      lastExecTime = current;
    } else {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
}

/**
 * 节流 Ref.
 * @param value any
 * @param delay millisecond
 * @returns customRef
 */
export function throttleRef<T>(value: T, delay: number = 1000) {
  let timer: ReturnType<typeof setTimeout>;
  let lastExecTime = 0;

  return customRef<T>((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(val: T) {
        let current = Date.now();

        if (current - lastExecTime > delay) {
          value = val;
          trigger();
          lastExecTime = current;
        } else {
          clearTimeout(timer);
          timer = setTimeout(() => {
            value = val;
            trigger();
          }, delay);
        }
      },
    };
  });
}
