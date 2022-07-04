import * as https from 'https';

function request(options) {
    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let responseText = '';

            res.on('data', (d) => {
                responseText += d;
            });

            res.on('end', () => {
                resolve(responseText);
            });

        });

        req.on('error', (err) => {
            reject(err);
        });

        req.end();
    });
}

export class Scraper {
    constructor() {
        this.scrapes = [];
    }

    addRequests(requests) {
        this.scrapes = requests;
    }

    scrapeAll() {
        this.scrapes.forEach((request) => {
            const req = https.request(request.options, request.response);

            req.on('error', error => {
                console.error(error);
            });

            req.end();
        });
    }
}