const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export async function postJson<T extends Record<string, unknown>, R>(
    endpoint: string,
    data: T
): Promise<R> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return response.json();
}

export async function postFormData<R>(
    endpoint: string,
    data: FormData
): Promise<R> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        body: data,
    });
    return response.json();
}

export async function get<R>(endpoint: string): Promise<R> {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
    });
    return response.json();
}