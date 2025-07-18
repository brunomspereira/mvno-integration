# Telgea MVNO Integration

## Full Stack Developer Role – Technical Test

This project simulates the integration of a new MVNO (Mobile Virtual Network Operator) provider with Telgea’s internal systems.

---

## Architecture and Approach

We are building a modular **TypeScript + Node.js** application that:

- Parses and transforms **SOAP and REST** responses from an MVNO provider.
- Maps external API data into **Telgea’s internal normalized format**.
- Maintains a clean separation of concerns to ensure the system is **testable, maintainable, and easy to extend** for future providers or data types.

## Design Priorities

- **Modularity**: Each MVNO format has its own adapter, allowing independent testing and easy onboarding of new providers.
- **Type Safety**: TypeScript interfaces enforce strict contracts between external APIs and the internal format.
- **Mock-Driven Development**: Uses mock data to simulate real-world integration without needing live network calls.
- **Minimal Assumptions**: The parsers assume only what's provided in the spec, allowing for flexibility and fault-tolerance in future formats.

---

## Folder Structure

The project is organized for clarity, scalability, and modularity:

### `src/`  
Main source directory containing all business logic, mock data, and type definitions.

### `src/adapters/`  
Houses transformation logic for each MVNO API format:
- `rest/`: Parses REST API responses.
- `soap/`: Parses SOAP XML responses.

### `src/types/`  
Defines TypeScript interfaces:
- `mvnoRest.ts`: MVNO's REST format.
- `mvnoSoap.ts`: MVNO's SOAP format.
- `internal.ts`: Telgea's internal normalized data format.

### `src/mocks/`  
Mock data used to test transformations without hitting real APIs:
- `mvno-rest.json`: Example REST response.
- `mvno-soap.xml`: Example SOAP ChargeSMS payload.

### `src/index.ts`  
Entry point of the application:
- Reads mock files.
- Invokes the corresponding parsers.
- Outputs the final data object.

---

## Project Configuration

- `package.json`: Manages dependencies and scripts for the Node.js project.
- `tsconfig.json`: Configures TypeScript compiler behavior.
- `.gitignore`: Specifies files/folders to ignore (e.g., `node_modules`, build artifacts).

---

## Running the Project

```bash
# Install dependencies
npm install

# Run the transformation pipeline
npx ts-node src/index.ts
