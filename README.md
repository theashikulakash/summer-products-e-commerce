---

## 🛡️ Authentication Flow
The app uses a hybrid authentication model. 
1. **Traditional:** Users can sign up using email and a password (minimum 8 characters with 1 uppercase and 1 number).
2. **Social:** One-click registration/login via Google Cloud Console integration.



---

## 📜 Auth

Here is a clean, structured version tailored for your e-commerce project with **Better Auth**, **MongoDB**, and **Google OAuth**.

---

# ☀️ PeakSummer E-Commerce

**PeakSummer** is a modern, high-performance e-commerce platform built for the summer season. It features robust authentication, a sleek user interface, and seamless social integration.

🚀 **Live Demo:** [https://peak-summer.vercel.app/](https://peak-summer.vercel.app/)

---

## ✨ Features

*   **🔒 Secure Authentication:** Powered by **Better Auth** with support for Email/Password and **Google OAuth**.
*   **💅 Modern UI:** Built with **HeroUI** (formerly NextUI) and **Tailwind CSS** for a premium look and feel.
*   **📦 Database:** Managed with **MongoDB** for flexible and scalable product and user storage.
*   **🔔 Real-time Notifications:** Integrated with **React Toastify** for instant user feedback.
*   **📱 Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15** | React Framework for Server Components & Routing |
| **Better Auth** | Comprehensive Authentication Framework |
| **MongoDB** | NoSQL Database for user and product data |
| **HeroUI** | High-quality UI Component Library |
| **Tailwind CSS** | Utility-first CSS styling |
| **React Toastify** | Elegant popup notifications |

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [https://github.com/theashikulakash/summer-products-e-commerce.git](https://github.com/theashikulakash/summer-products-e-commerce.git)
cd summer-products-e-commerce

2. Install dependencies
Bash
npm install

3. Set up Environment Variables
Create a .env.local file in the root directory and add your credentials:

Code snippet
# MongoDB
AUTH_DB_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_32_char_secret
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

4. Run the development server
Bash
npm run dev
Open http://localhost:3000 in your browser.

📁 Project Structure
Plaintext
├── src/
│   ├── app/            # Next.js App Router (Pages & Layouts)
│   ├── components/     # Reusable UI Components
│   ├── lib/            # Auth and DB configurations
│   └── styles/         # Global CSS and Tailwind configs
├── public/             # Static assets (images, icons)
└── .env                # Environment variables (gitignored)
🛡️ Authentication Flow
The app uses a hybrid authentication model. (Email, Password & Google Authentication)

Traditional: Users can sign up using email and a password (minimum 8 characters with 1 uppercase and 1 number).

Social: One-click registration/login via Google Cloud Console integration.

📜 License
 -- null --

👤 Author
Md Ashikul Islam

GitHub: [https://github.com/theashikulakash](https://github.com/theashikulakash)

LinkedIn: [https://www.linkedin.com/in/theashikulakash](https://www.linkedin.com/in/theashikulakash)