# https://sikkerhet.nav.no/docs/verktoy/chainguard-dockerimages/#tilgjenglige-images
FROM europe-north1-docker.pkg.dev/cgr-nav/pull-through/nav.no/node:22-slim
EXPOSE 8080
ENV NODE_ENV=production
COPY server.js ./
CMD ["server.js"]
