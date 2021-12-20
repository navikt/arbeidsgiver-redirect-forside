Hvis man går på  https://arbeidsgiver.nav.no, så får man 404. Denne appen redirected til noe mer passende.

Pr. nå routes trafikk til arbeidsgiver.nav.no-domenet til sbs-clusteret av bigip by default, med manuelt konfigrerte unntak for de tjenestene som er migrert til gcp. Når default endres til gcp-clusteret, så er det der den trenger å kjøre.