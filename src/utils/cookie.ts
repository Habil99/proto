class CookieManager {
  // Get a cookie by name
  get(name: string): string | null {
    const cookies = document.cookie.split(";");
    console.log(cookies);
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }

  // Set a cookie
  set(
    name: string,
    value: string,
    options: {
      expires?: number;
      path?: string;
    } = {},
  ) {
    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (options.expires) {
      const expires = new Date();
      expires.setTime(
        expires.getTime() + options.expires * 24 * 60 * 60 * 1000,
      );
      cookie += `; expires=${expires.toUTCString()}`;
    }

    if (options.path) {
      cookie += `; path=${options.path}`;
    }

    document.cookie = cookie;
  }

  // Delete a cookie
  delete(name: string, path: string = "/") {
    this.set(name, "", { expires: -1, path });
  }
}

export const appCookies = new CookieManager();
