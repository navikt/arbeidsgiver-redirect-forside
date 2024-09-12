Vi bruker ingresser på formen `https://arbeidsgiver.nav.no/<tjeneste>` flere steder
i PO Arbeidsgiver. Hvis ingen app er satt opp til å håndtere en slik ingress, så får
sluttbrukeren en veldig teknisk 404-side.

Denne app-en redirected ukjente ingresser til forsiden for bedrifter på nav.no.

Den hånderer også noen tjenester som er flyttet og har fått ny ingress.

### Alternativ løsning
Det kan være at vi kan sette opp redirects i direkte i nais-plattformen ved å deploye en [ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/). I så fall trenger vi ingen app, og med det får vi færre apper å oppdatere. :)
