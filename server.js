'use strict';
const http = require('http')


const FORSIDE = 'https://www.nav.no/no/bedrift';

const rules = [
    {
        from: "/permittering-og-omstilling/permittering",
        to: 'https://www.nav.no/arbeidsgiver/permittere',
    },
    {
        from: "/permittering-og-omstilling/streik",
        to: 'https://www.nav.no/arbeidsgiver/permittere#streik',
    },
    {
        from: "/permittering-og-omstilling",
        to: 'https://www.nav.no/arbeidsgiver/permittere-nedbemanne',
    },
    {
        from: "/arbeidsgiver-permittering",
        to: 'https://www.nav.no/arbeidsgiver/permittere',
    },
    {
        from: "/inkludering",
        to: 'https://www.nav.no/arbeidsgiver/inkludere',
    },
    {
        from: "/veiviserarbeidsgiver/inkludering",
        to: 'https://www.nav.no/arbeidsgiver/inkludere',
    },
    {
        from: "/veiviserarbeidsgiver/tema/hvordan-gar-du-frem-for-a-inkludere",
        to: 'https://www.nav.no/arbeidsgiver/inkludere#prosessen',
    },
    {
        from: "/veiviserarbeidsgiver/tema/hvordan-kan-nav-hjelpe-med-inkludering",
        to: 'https://www.nav.no/arbeidsgiver/inkludere',
    },
    {
        from: "/tilrettelegging",
        to: "https://www.nav.no/arbeidsgiver/redusere-sykefravar",
    },
    {
        from: "/veiviserarbeidsgiver/tilrettelegging",
        to: "https://www.nav.no/arbeidsgiver/redusere-sykefravar",
    },
    {
        from: "/veiviserarbeidsgiver",
        to: "https://www.nav.no/arbeidsgiver/inkludere",
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
        if (rule.from.startsWith(req.url)) {
            log("rule redirection", { target: rule.to })
            res.writeHead(301, {
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
