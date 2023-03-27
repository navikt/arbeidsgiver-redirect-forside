'use strict';
const http = require('http')


const FORSIDE = 'https://www.nav.no/no/bedrift';

const rules = [
    {
        pattern: /^\/permittering-og-omstilling\/permittering/,
        status: 301,
        to: 'https://www.nav.no/arbeidsgiver/permittere',
    },
    {
        pattern: /^\/permittering-og-omstilling\/streik/,
        status: 301,
        to: 'https://www.nav.no/arbeidsgiver/permittere#streik',
    },
    {
        pattern: /^\/permittering-og-omstilling.*/,
        to: 'https://www.nav.no/arbeidsgiver/permittere-nedbemanne',
        status: 301,
    },
];

function log(message, extra) {
    console.log(JSON.stringify({
        message,
        ...extra
    }));
}


const requestListener = function (req, res) {
    if (req.url === '/internal/ok') {
        res.writeHead(200)
        res.end()
        return
    } 

    for (const rule of rules) {
        if (rule.pattern.test(req.url)) {
            log("rule redirection", { target: rule.to })
            res.writeHead(rule.status, {
                'Location': rule.to,
            })
            res.end()
            return
        }
    }

    log("fallback redirection", { target: FORSIDE })
    res.writeHead(302, {
        'Location': FORSIDE,
    })
    res.end()
}

const server = http.createServer(requestListener)
server.listen(8080)
log("startup complete" )
