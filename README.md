# Build a Blog with Next.js 14 and Sanity CMS - Repository from my YouTube tutorial

[![Video](https://github.com/stefandjikic/next-cms-blog/assets/65912958/2576b109-d592-4321-9870-0db29d769a3e)
](https://www.youtube.com/watch?v=yAqgjSZ0PqY)


## Technologies used

- [Next.js](https://nextjs.org/)

- [Tailwind.css](https://tailwindcss.com/)

- [Sanity.io](https://www.sanity.io)


## Getting Started

First, add your Sanity project ID and dataset name to the `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
```

If you want to have comments system, you need to add your Sanity API token to the `.env.local` file:

```bash
NEXT_PUBLIC_SANITY_TOKEN=your_api_token
```

Then, install the dependencies:
  
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Open [http://localhost:3000/studio](http://localhost:3000/studio) for sanity studio.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
