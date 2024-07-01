FROM gcr.io/distroless/nodejs22-debian12
EXPOSE 8080
ENV NODE_ENV=production
WORKDIR /app
COPY ["server.js", "./"]
CMD ["server.js"]
