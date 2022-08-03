import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageClient {
  get<Data>(key: string): Data | null {
    const value = localStorage.getItem(key);
    if (!value) return null;
    try {
      const data: Data = JSON.parse(value);
      return data ?? null;
    } catch (error) {
      return null;
    }
  }

  set<Data>(key: string, value: Data) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
