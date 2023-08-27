# Astro Build Project Deployed on Railway

This repository contains an Astro build project, deployed on Railway. It serves as an example to showcase how simple and efficient deploying to Railway can be to get started using the railway CLI. Please note you can use the github integration easily but I wanted to explore the CLI.

## Why Railway?

Railway is a boutique cloud platform designed to offer ease of use, quick deployment, and a developer-friendly experience.

## Requirements

- Node.js and npm
- Docker
- Railway CLI

## Local Setup

1. Clone the repository.
   ```bash
   git clone https://github.com/GuiBibeau/astro-railway.git
   ```
2. Navigate into the project folder.
   ```bash
   cd astro-railway
   ```
3. Install the project dependencies.
   ```bash
   npm install
   ```
4. Run the Astro development server.
   ```bash
   npm run dev
   ```

## Deploying to Railway

### Step 1: Install Railway CLI

If you haven't installed the Railway CLI yet, you can install it by running :

```bash
# mac
brew install railway
# or via npm
npm i -g @railway/cli

# login
railway login
```

### Step 2: Initialize Your Railway Project

Initialize a Railway project inside your application folder.

```bash
railway init
```

### Step 3: Deploy to Railway

Now, deploy your project to Railway:

```bash
railway up
```

### Step 4: Assign a Domain

Assign a domain to your deployed project.

```bash
railway domain
```

For more detailed information on domains, Railway provides excellent [documentation](https://docs.railway.app/develop/cli).

---

And there you go! You've just deployed an Astro build project on Railway.
