const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

class API {
    static async post(endpoint: string, data: any) {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        return response.json();
    }

    static customerSignupCode(data: {
        firstName: string;
        lastName: string;
        email: string;
    }) {
        return this.post('/api/customer/signup/code', data);
    }

    static customerSignupVerify(data: {
        email: string;
        code: string;
    }) {
        return this.post('/api/customer/signup/verify', data);
    }
}

export default API;
