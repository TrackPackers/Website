export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_GATEWAY_URL: string;
         }
    }
}