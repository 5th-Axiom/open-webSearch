export interface SearchResult {
    title: string;
    url: string;
    description: string;
    source: string;
    engine: string;
    engines?: string[];
    score?: number;
}
