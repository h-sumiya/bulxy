export interface Config {
    hostname: string;
    description?: string;
    dir?: string;
    auth_key?: string;
    ephemeral?: boolean;
    dashboard?: number;
    proxy?: Record<string, Proxy>;
    file?: Record<string, File>;
}

export interface Proxy {
    display_name?: string;
    description?: string;
    from: number;
    to: number;
    mode: string;
}

export interface File {
    display_name?: string;
    description?: string;
    dir: string;
    from: number;
}


const endPoint = 'api/';

export const fetchConfig = async (): Promise<Config> => {
    const response = await fetch(endPoint + 'config');
    return response.json();
};


export interface SystemState {
    mem_total: number;
    mem_used: number;
    mem_used_percent: number;
    cpu_model: string;
    cpu_cores: number;
    cpu_usage_percent: number;
    num_goroutine: number;
    go_version: string;
}

export const fetchSystemState = async (): Promise<SystemState> => {
    const response = await fetch(endPoint + 'state');
    return response.json();
};