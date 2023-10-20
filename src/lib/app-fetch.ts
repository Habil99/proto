import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

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
    this.fetch = fetch;
  }

  static getInstance(cookies?: RequestCookie[]): AppFetch {
    if (!AppFetch.instance) {
      AppFetch.instance = new AppFetch(cookies);
    }

    return AppFetch.instance;
  }

  getCookies(): RequestCookie[] {
    return this.cookies;
  }

  public async request(url: string, options?: RequestInit): Promise<Response> {
    return await this.fetch(`${this.baseUrl}${url}`, {
      ...options,
      headers: {
        ...this.headers,
        ...options?.headers,
        Cookie: this.cookies
          .map((cookie) => `${cookie.name}=${cookie.value}`)
          .join(";"),
      },
    });
  }

  public revalidateCookies(cookies: RequestCookie[]): void {
    this.cookies = cookies;
  }
}

export default AppFetch;
