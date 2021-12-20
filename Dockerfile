FROM node:16
EXPOSE 8080
ENV NODE_ENV=production
WORKDIR /app
COPY ["server.js", "./"]
CMD ["node", "server.js"]
