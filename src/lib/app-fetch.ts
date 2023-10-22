import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { ObjectUtils } from "@/lib/utils";

/**
 * @class AppFetch - that extends fetch to add a base url and headers with singletons
 */
class AppFetch {
  private static instance: AppFetch;
  private cookies: RequestCookie[];

  private readonly baseUrl: string;
  private readonly headers: HeadersInit;
  private readonly fetch: typeof fetch;

  constructor(cookies?: RequestCookie[]) {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL!;
    this.cookies = cookies || [];
    this.headers = {
      "Content-Type": "application/json",
      Cookie: this.cookies
        .map((cookie) => `${cookie.name}=${cookie.value}`)
        .join(";"),
    };
    this.fetch =
      typeof window !== "undefined"
        ? fetch.bind(window)
        : fetch.bind(globalThis);
  }

  static getInstance(cookies?: RequestCookie[]): AppFetch {
    if (cookies) {
      AppFetch.instance = new AppFetch(cookies);
    }

    if (!AppFetch.instance) {
      AppFetch.instance = new AppFetch(cookies);
    }

    return AppFetch.instance;
  }

  getCookies(): RequestCookie[] {
    return this.cookies;
  }

  public async request(
    url: string,
    options?: RequestInit & {
      sendContentType?: boolean;
    },
  ) {
    const headers = options?.sendContentType
      ? this.headers
      : ObjectUtils.omit(this.headers, ["Content-Type"]);

    return await this.fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        ...headers,
        ...options?.headers,
        Cookie: this.cookies
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join(";"),
      },
    }).then(async (res) => {
      if (res.ok) return await res.json();
      throw new Error(JSON.stringify(await res.json()));
    });
  }

  public revalidateCookies(cookies: RequestCookie[]): void {
    this.cookies = cookies;
  }
}

export default AppFetch;
