# Shroud

Shroud is an anonymous, temporary one‑to‑one chat application where users can talk without creating accounts. Each user is assigned a random ID on arrival, matched into a room, and allowed to chat for **10 minutes**. Once the time expires, the room and all messages are permanently destroyed.

This project focuses on **privacy-first design**, **ephemeral data**, and **simple real-time communication without WebSockets**, making it lightweight, scalable, and ideal for free-tier deployment.

---

## 🚀 Features

* 🔐 **Anonymous by default** – No sign-up, no personal data
* 🆔 **Random identity generation** using NanoID
* 💬 **1-to-1 chat rooms**
* ⏱ **10-minute session limit** per room
* 🧹 **Automatic room & message cleanup** using Redis TTL
* 🔁 **Polling-based message synchronization** (no WebSockets)
* ☁️ **Serverless & free-tier friendly architecture**

---

## 🧠 Why Shroud?

Most real-time chat apps rely on WebSockets, which add architectural complexity and hosting constraints. Shroud intentionally avoids WebSockets and instead uses **HTTP polling** to keep the system simple, stateless, and easy to deploy on free tiers.

The architecture is designed so that it can later be upgraded to **long polling, Server-Sent Events (SSE), or WebSockets** without major refactoring.

---

## 🏗 Tech Stack

* **Next.js (App Router)** – Frontend & backend API routes
* **TypeScript** – Type safety
* **Redis (Upstash)** – In-memory message storage + TTL
* **NanoID** – Anonymous user IDs
* **Vercel** – Deployment

---

## 🔄 How It Works

1. User visits the website
2. Backend generates a random anonymous ID
3. User joins or is matched into a chat room
4. Messages are stored in Redis
5. Client polls the backend every few seconds for new messages
6. After 10 minutes, Redis TTL expires and the room is deleted automatically

---

## ⚠️ Limitations

* Uses HTTP polling instead of true real-time WebSockets
* Not designed for high-scale production usage
* Messages are not end-to-end encrypted (can be added later)

These trade-offs were made intentionally to keep the architecture simple and deployable on free tiers.

---

## 🔮 Future Improvements

* Replace polling with **long polling or SSE**
* Add optional **end-to-end encryption**
* Improve matchmaking logic
* Add basic abuse prevention (rate limiting)

---

## 📄 License

MIT License
