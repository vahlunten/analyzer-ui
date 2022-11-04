export class ScrapedDataClass {
   
    public initialResponseBody: string | null = null;
    public responseStatus: number | null = null;
    public domContent: string | null = null;

    public jsonLDData: any | null = null;
    public jsonLDDataInitial: any | null = null;

    public schemaOrgData: any | null = null;
    public schemaOrgDataInitial: any | null = null;

    public metadata: any | null = null;
    public metadataInitial: any | null = null;

    public windowProperties: any | null = null;
    public windowPropertiesInitial: any | null = null;

    public xhrParsed: ParsedRequestResponse[] | null = null;
    public cookies: Cookie[] | null = null;

    public searchResults:Map<Number, KeywordConclusion>[] = [];

}

export class Output {
    public url: string;
    public keywords: NormalizedKeywordPair[];

    public scrapedData?: ScrapedDataClass;

    public keywordConclusions?:KeywordConclusion[];

    constructor(url: string, keywords: NormalizedKeywordPair[]) {
        this.url = url;
        this.keywords = keywords;
    }
}


export interface KeywordConclusion {
    SearchResults:SearchResults;
    Keyword:NormalizedKeywordPair;
}

export class SearchResults {
    public htmlFound:SearchResult[] = [];
    public jsonFound:SearchResult[] = [];
    public schemaFound:SearchResult[] = [];
    public metaFound:SearchResult[] = [];
    public windowFound:SearchResult[] = [];
    public xhrFound:SearchResult[] = [];
}

export interface Cookie {
    name: string;
  
    value: string;
  
    domain: string;
  
    path: string;
  
    /**
     * Unix time in seconds.
     */
    expires: number;
  
    httpOnly: boolean;
  
    secure: boolean;
  
    sameSite: "Strict"|"Lax"|"None";
  }

  export interface NormalizedKeywordPair {
    original: string, 
    normalized: string,
    index: number    
}


export class SearchResult
 {
    public path:string[];
    public keyword: NormalizedKeywordPair;
    public textFound: string;
    public source: DataSource;
    public score: number = 0;
    public textFoundValidation?: string;

    constructor(path: string[], keyword: NormalizedKeywordPair, textFound: string, source: DataSource) {
        this.path = path;
        this.keyword = keyword;
        this.textFound = textFound;
        this.source = source;
    }
}

export enum DataSource {
    initial = 'initial',
    rendered = 'rendered',
    cheerio = 'cheerioCrawler'
}

export interface ParsedRequestResponse {
    request: ParsedRequest;
    response: ParsedResponse;
    error: null | string;
}
export interface ParsedRequest {
    url: String;
    method: string;
}

export interface ParsedResponse {
    body: string;
    status: number;
}