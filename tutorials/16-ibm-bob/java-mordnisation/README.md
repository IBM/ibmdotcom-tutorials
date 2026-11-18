# Java Application Modernization with IBM Bob

This repository contains a hands-on tutorial and the starting code for it. The tutorial shows how to use IBM Bob's **Java Modernization** capabilities to modernize a legacy Java 8 + Struts/JSP application.

## What's in this repository

| Item | Description |
|------|-------------|
| [`java-mordnization.md`](./java-mordnization.md) | The step-by-step tutorial. Start here. |
| [`simple-pharmacy-legacy.zip`](./simple-pharmacy-legacy.zip) | Base code for the legacy **Pharmacy Dashboard** application (Java 8, Struts, JSP, Liberty). Download this to follow along. |

## Quick setup guide

### 1. Install the prerequisites

- **IBM Bob IDE / extension**, installed and authenticated
- **JDK 17 or 21**
- **Apache Maven** (`mvn`) on your PATH
- **Node.js 18+** and `npm`

The legacy application itself targets Java 8. The tutorial walks you through upgrading it.

### 2. Download the base code

1. Download [`simple-pharmacy-legacy.zip`](./simple-pharmacy-legacy.zip). On GitHub, open the file and click **Download raw file**. You can also clone this repository.
2. Unzip it into a working directory of your choice, for example `~/workspace/simple-pharmacy`.

### 3. (Optional) Run the legacy app first

Run the commands from inside the unzipped folder. This lets you see the "before" state of the application.

```bash
./run-liberty.sh        # macOS/Linux (use run-liberty.bat on Windows)
```

Then open <http://localhost:9081/simple-pharmacy.war/dashboard>.

Stop the server when you are done:

```bash
./stop-liberty.sh       # use stop-liberty.bat on Windows
```

See `QUICK-REFERENCE.md` inside the zip for more server commands.

### 4. Follow the tutorial

1. Open the unzipped folder in IBM Bob with **File > Open Folder...**.
2. Open [`java-mordnization.md`](./java-mordnization.md) in this repository.
3. Follow along with the tutorial, containing step=by-step setup and commands to perform mordnisation using IBM Java Premium Package. 

The tutorial uses ports `9081` (legacy Liberty app) and `8080` (new backend). Make sure both are free before you start.

## Tutorial outcome

By the end you will have turned the legacy monolith into:

- a modern **Java REST API backend**, and
- a separate modern **JavaScript frontend**,

and you will have compared the legacy UI with the modernized one.
