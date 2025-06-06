import { postJson } from './requests';

interface ApiResponse {
    status: string;
    message?: string;
}

class API {
    static customerSignupCode(data: {
        firstName: string;
        lastName: string;
        email: string;
    }) {
        return postJson<
            { firstName: string; lastName: string; email: string },
            ApiResponse
        >('/api/customer/signup/code', data);
    }

    static customerSignupVerify(data: { email: string; code: string }) {
        return postJson<{ email: string; code: string }, ApiResponse>(
            '/api/customer/signup/verify',
            data
        );
    }
}

export default API;