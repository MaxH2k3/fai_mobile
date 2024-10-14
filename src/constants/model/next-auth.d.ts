import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        accessToken?: any;
        user?: any;
        account?: any;
        profile?: any;
        role?: any;
    }

    interface JWT {
        accessToken?: string;
        role?: string;
    }
}