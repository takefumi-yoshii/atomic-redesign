export function fetcher<T>(
  input: RequestInfo,
  requestInit?: RequestInit
): Promise<T> {
  return fetch(input, requestInit)
    .catch((err) => {
      throw err;
    })
    .then((res: Response) => {
      if (res.ok) return res;
      throw res;
    })
    .then((res) => res.json());
}
