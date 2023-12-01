interface ResponseType {
    data: {
        domain: string;
    };
}

export const fetchMails = async (query: string) => {
    const options: RequestInit = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token e47e04f64a9e3aeb70bdaa0dc5bfacfa6a853c39`,
        },
        body: JSON.stringify({ query }),
    };

    return fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/email', options)
        .then((response) => response.json())
        .then((result) => result.suggestions.map((data: ResponseType) => data.data.domain));
};
