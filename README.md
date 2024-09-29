# Camt053 API

A simple server that parses a camt053 xml file and returns arbitrary data on dedicated endpoints.

## Run Application

### Prerequisites

- Node (v.20.17.0)

### Install

```bash
npm i
```

### Run in dev mode

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start (After build)

```bash
npm start
```

### Run tests

```bash
npm test
```

## Things to improve

- Be able to read multiple camt053 files (although this was outside of the scope of the assignment). Reading a single camt053 file can't be very useful.
- Add interface or type to describe camt053 structure. This way we don't need to use the "any" type and can remove much of the optional chaining syntax (?.).
- Add integration tests. I would typically use the supertest package for testing entire application endpoints.
- Split the route file. With this few and close endpoints we don't need to split it in my opinion. But when the application grows we probably want to split the routes file into an `index.ts` file that imports all other route files, e.g. an `account.ts`.
