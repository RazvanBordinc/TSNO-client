# Base image
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build-time environment variables
ARG NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
ARG INTERNAL_BACKEND_URL=http://backend:8080
ARG NEXT_BUILD_ENV=build

# Pass build-time variables to the build
ENV NEXT_PUBLIC_BACKEND_URL=$NEXT_PUBLIC_BACKEND_URL
ENV INTERNAL_BACKEND_URL=$INTERNAL_BACKEND_URL
ENV NEXT_BUILD_ENV=$NEXT_BUILD_ENV

# Build the project
RUN npm run build

# Final runtime stage
FROM node:18-alpine AS production
WORKDIR /app

# Copy build files
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/package.json ./

RUN npm install --omit=dev

ENV NEXT_PUBLIC_BACKEND_URL=http://localhost:8080
ENV INTERNAL_BACKEND_URL=http://backend:8080

EXPOSE 3000
CMD ["npm", "start"]
