# Java Application Modernization with IBM Bob: Step-by-Step Tutorial

Modernizing legacy enterprise Java applications is one of the highest-impact initiatives for engineering teams today. This tutorial guides you step-by-step through modernizing a legacy monolithic Java Web application (Java 8 + Struts) into modern architectures using IBM Bob's dedicated **Java Modernization** capabilities.

---

## 1. Overview

Enterprise systems often rely on business-critical Java applications built decades ago using legacy frameworks (such as Struts, JSF, or JSP) and legacy runtimes (such as Java 8 or traditional WebSphere Application Server). 

While these applications continue to deliver value, their tightly coupled presentation layer and outdated JDK baseline introduce security risks, slow down release cycles, and inflate hosting costs.

This guide demonstrates how **IBM Bob** accelerates end-to-end modernization by analyzing your monolithic codebase and transforming it into:
- A modernized **Java REST API backend**
- A decoupled, responsive **Modern Frontend** (e.g., React / TypeScript)
- Upgraded, security-compliant runtime versions (Java 11 / 17 / 21)

---

## 2. Why Application Modernization is an Important Enterprise Use Case

Enterprise modernization is no longer just a technical upgrade—it is a core business imperative:

1. **Security & Vulnerability Compliance**: End-of-Life (EOL) runtime versions (e.g., Java 8 / Java 7) and deprecated web frameworks no longer receive upstream security patches, increasing exposure to CVEs.
2. **Developer Velocity & Talent Attraction**: Modern developers build on decoupled REST APIs, microservices, and modern frontend frameworks rather than legacy server-side template engines.
3. **Cloud-Native Scalability & Cost Efficiency**: Transitioning to lightweight runtimes (such as Open Liberty or Quarkus) and containerized micro-frontends dramatically cuts memory footprint and infrastructure costs.
4. **Decoupled Architecture**: Separating the frontend from backend services allows independent scaling, CI/CD automation, and rapid UI/UX iterations.

---

## 3. Why Java Modernization with Bob is Easy

Modernizing manually requires tedious, error-prone tasks: extracting Struts/JSF action mappings, rewriting business logic into REST controllers, drafting DTOs, building clean React components, and fixing build recipes.

**IBM Bob streamlines this journey through:**
- **Context-Aware Code Parsing**: Automatically inspects application descriptors (`struts-config.xml`, `web.xml`, EJBs, Spring contexts) to map routes, actions, and state flow.
- **Dedicated Java Modernization Mode & Workflows**: Guided wizards handle Java version upgrades, WebSphere-to-Liberty migrations, and complete UI-to-REST refactoring.
- **Dual-Stack Code Generation**: Generates clean, production-ready Spring/Jakarta REST backend services alongside typed frontend components.
- **Safety & Verification**: Validates compilation, checks dependencies against OSV vulnerability databases, and generates unit tests to prevent regressions.

---

## 4. Step-by-Step Implementation

### 4.1 Prerequisites

Before starting, ensure you have:
- **IBM Bob IDE / Extension** installed and authenticated.
- **Java Development Kit (JDK)**: JDK 17 or JDK 21 installed locally.
- **Build Tools**: Apache Maven (`mvn`) or Gradle installed and configured on your system PATH.
- **Node.js runtime**: Node.js 18+ and `npm` installed for frontend validation.

---

### 4.2 Download the Sample Application

For this tutorial, we use the `simple-pharmacy` legacy application (a Java 8 Struts/JSP monolith).

1. Download the sample project zip:
   - **Download Link**: `https://github.com/IBM/java-modernization-sample/archive/refs/heads/main.zip` *(or your organization's designated repository URL)*
2. Extract the archive into your workspace directory.
3. Open the extracted directory in IBM Bob (`File > Open Folder...`).

![Initial Project Structure](./bob-screenshot/screenshot%201.png)
*Figure 1: Initial project structure of the legacy Java 8 application opened in IBM Bob.*

---

### 4.3 Launch the Java Modernization Workflow

1. Open the Bob chat panel in your IDE.
2. Switch to **Java Modernization** mode from the mode selector dropdown in the chat input, or initiate the workflow by prompting:
   ```text
   Modernize this legacy Java application
   ```
3. Bob analyzes the project directory, inspects the build descriptors, and launches the **Java Modernization Workflow**.

![Launching Java Modernization Workflow](./bob-screenshot/screenshot%202.png)
*Figure 2: Launching the Java Modernization assistant inside IBM Bob.*

---

### 4.4 Explore Available Modernization Workflows

Bob presents three tailored workflow pathways based on your modernization goal:

| Workflow Option | Description | Typical Use Case |
| :--- | :--- | :--- |
| **1. Java Upgrade** | Upgrades Java source and target versions (e.g., Java 8 ➔ Java 17/21) using OpenRewrite recipes and agentic fixes. | Updating JDK baseline and resolving breaking Java platform APIs. |
| **2. Liberty Modernization** | Replatforms legacy WebSphere / traditional JEE applications to WebSphere Liberty or Open Liberty using AMA analysis. | Moving traditional enterprise monoliths to containerized Liberty runtimes. |
| **3. UI Modernization** | Transforms server-rendered UI (JSP, JSF, Struts) into a modern decoupled architecture: a REST backend API + modern Single Page Application (SPA). | Decoupling legacy web interfaces into modern React/Angular + REST services. |

![Workflow Options Selection](./bob-screenshot/screenshot%203.png)
*Figure 3: Bob's Java Modernization workflow selection screen.*

---

### 4.5 Select Workflow and Execute Modernization

For this legacy application, select **UI Modernization** (or type `Modernize UI with REST backend and React frontend`).

#### What Bob Executes Automatically:
1. **Cataloging & Action Mapping**: Inspects Struts actions, FormBeans, and JSP forward paths.
2. **Backend Generation (`new backend/`)**:
   - Converts Struts Action handlers into clean `@RestController` classes.
   - Converts ActionForms into strongly-typed DTO records and POJOs.
   - Implements standard HTTP verbs (`GET`, `POST`, `PUT`, `DELETE`) with appropriate status codes and payload validation.
3. **Frontend Generation (`new UI/`)**:
   - Replaces `.jsp` view files with reusable React components (e.g., medication list, patient order forms).
   - Generates API client service layers (e.g., Axios/fetch services) mapped directly to backend endpoints.
   - Applies modern styling and component layout.

![Modernization Execution and Progress](./bob-screenshot/screenshot%204.png)
*Figure 4: Bob generating REST endpoints and modern UI components in real time.*

---

### 4.6 Verification & Next Steps

Once Bob completes the transformation:

1. **Review the File Explorer**:
   - `new backend/`: Contains the modernized Java REST service.
   - `new UI/`: Contains the React/TypeScript frontend application.
2. **Validate Backend**:
   ```bash
   cd "new backend"
   mvn clean test
   ```
3. **Validate Frontend**:
   ```bash
   cd "new UI"
   npm install
   npm run build
   ```

![Modernized Structure and Verification](./bob-screenshot/screenshot%205.png)
*Figure 5: Modernized application structure with decoupled backend and frontend modules.*

---

### 4.7 Compare the Legacy UI with the Modernized UI

#### The Legacy UI (Before)

First, look at the original application as it runs on Liberty at `http://localhost:9081/simple-pharmacy.war/dashboard`. This is the server-rendered Struts/JSP interface that Bob started from: every page is built on the server, and each action triggers a full page reload.

![Legacy Struts/JSP Pharmacy Dashboard](./bob-screenshot/screenshot%207.png)
*Figure 6: The legacy server-rendered JSP dashboard running on Liberty (port 9081).*

#### The Modernized UI (After)

Now run the modernized application and compare. The React frontend fetches all of its data from the REST API, so without the backend the pages will load but show no data (or API errors). Start **both** the backend and the frontend, each in its own terminal.

**Terminal 1 – Start the backend (Spring Boot REST API):**

```bash
cd "new backend"
mvn spring-boot:run
```

Wait until the log shows the application has started. The API listens on `http://127.0.0.1:8080`.

> **Note:** Port `8080` is used by the new backend. The legacy Liberty application runs on a different port (`9081`) and does not serve the `/api` endpoints, so the frontend must point to the new backend.

**Terminal 2 – Start the frontend (React dev server):**

```bash
cd "new UI"
npm run dev
```

The Vite dev server proxies every `/api/*` request to the backend at `http://127.0.0.1:8080` (configurable through the `VITE_BACKEND_URL` environment variable if your backend runs elsewhere).

Open your browser at `http://localhost:5173`. With both services running, the legacy server-rendered JSP interface appears as a responsive, component-driven Single Page Application (SPA) with modern navigation, clean typography, dynamic data tables, and seamless REST API integration.

![Modernized Frontend Application](./bob-screenshot/screenshot%206.png)
*Figure 7: The newly modernized, responsive React frontend in action, backed by the new REST API.*

Comparing Figure 6 and Figure 7 shows the same pharmacy functionality (dashboard, prescriptions, orders, medicines) delivered through a decoupled architecture: the legacy JSP pages are replaced by React components that consume the Spring Boot REST API.

---

## 5. Conclusion

Modernizing enterprise Java applications no longer requires months of manual refactoring, brittle UI rewrites, and high operational risk. With **IBM Bob**, teams can seamlessly convert tightly coupled monolithic architectures into cloud-native REST APIs and modern React frontends with automated parsing, safe code generation, and guided workflows. This approach drastically cuts modernization timelines, eliminates technical debt, and sets up enterprise codebases for rapid future innovation.
