# POLISH COVID STATS SCRAPPER

Application to scrap COVID data from Polish Gov dashboards daily.

Collecting country totals and details for all voivodeships.

The script is scrapping two dashboards and validates data for any corruption.
If scrapped data is not yet in database it will write it.

## Getting Started

Install all dependencies:

```
npm install
# or
yarn install
```

Run the development server on localhost:

```bash
npm run dev
# or
yarn dev
```

For proper start of development process enviromental variables must be set up as per .env.example file:

```
MONGODB_URI=
```
