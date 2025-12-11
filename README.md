# express_country_weather_app

# 🌍 express\_country\_weather\_app

A simple and elegant **Express.js** application that lets you search for any country and displays useful weather information such as **temperature (°C)**, **longitude**, and **latitude** — all rendered dynamically using **Handlebars (HBS)**.

The app includes beautiful UI pages, proper error handling, and server-side fetching using improved request techniques.

---

## ✨ Features

* **🔎 Search** for any country.
* **🌡️ Get** real-time temperature (°C).
* **📍 Display** longitude & latitude.
* **🎨 Dynamic UI** rendered using HBS (Handlebars).
* **⚙️ Built** with Express.js.
* **🌐 Uses** improved request/fetch techniques.
* **❗ Full error handling** for:
    * Invalid country
    * Missing input
    * No internet connection

---

## 📸 Demo Flow

1.  **User opens** the main page $\rightarrow$ Sees a simple search bar.
2.  **User searches** for a country: `/weather?country=France`
3.  **Server fetches:**
    * Temperature
    * Coordinates
    * Weather summary
    * Country data
4.  **HBS renders** a dynamic, styled results page.
5.  **If an error occurs,** user gets:
    * ❌ "Country not found"
    * 🌐 "Network error"
    * ⛔ "Please enter a valid country"

---

## 📁 Project Structure
```bash
express_country_weather_app/
│
├── public/           # CSS, images, client-side JS
├── views/            # .hbs templates (layouts, views)
├── app.js            # Main Express server
└── package.json
```

---

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You must have **Node.js** and **npm** installed.

### Installation & Run

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the server:**
    ```bash
    node app.js
    ```
3.  **Open in your browser:**
    ```
    http://localhost:3000
    ```

---

## 🛠️ Technologies Used

* **Express.js** – Backend framework.
* **HBS (Handlebars)** – For dynamic HTML rendering.
* **Fetch / Request** – For API data retrieval.
* **CSS** – For the app’s simple and beautiful UI.

---

## 🧩 How It Works

### ✔️ Request Flow

**Client $\rightarrow$ Express Route $\rightarrow$ API Request $\rightarrow$ Weather Data $\rightarrow$ HBS Template $\rightarrow$ Browser**

### ✔️ Example

* **Client sends:** `/weather?country=Germany`
* **Server responds with:**
    * Country Name
    * Temperature (°C)
    * Latitude & Longitude
    * Weather Summary

All beautifully rendered in HBS.

### ❗ Error Handling

| Scenario | Result |
| :--- | :--- |
| **Country not found** | Custom styled error page |
| **No internet** | “Network error” message |
| **Empty input** | “Please enter a valid country” prompt |