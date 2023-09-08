FROM gcr.io/distroless/nodejs20-debian11
EXPOSE 8080
ENV NODE_ENV=production
WORKDIR /app
COPY ["server.js", "./"]
CMD ["server.js"]
