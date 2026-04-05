<div align="center">
  
  # 🤖 Kookie - AI Assistant & Companion Robot
  
  ### An Adaptive Voice-First AI Companion with Real-Time Emotional Intelligence
  
  [![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?logo=vite)](https://vitejs.dev/)
  [![Gemini API](https://img.shields.io/badge/Gemini-Flash_Live-8E75B2?logo=google)](https://ai.google.dev/gemini-api)
</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Usage Guide](#usage-guide)
- [Personality Customization](#personality-customization)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Credits & Acknowledgments](#credits--acknowledgments)
- [License](#license)

---

## 🌟 Overview

**Kookie** is an intelligent, voice-first AI companion that combines real-time voice interaction with adaptive emotional intelligence. Built on Google's Gemini Flash Live model, Kookie responds naturally to voice input while dynamically adjusting its mood and personality based on conversation context.

Unlike traditional chatbots, Kookie features:
- **Real-time bidirectional voice communication** with ultra-low latency
- **Dynamic mood system** that visually and behaviorally adapts to conversations
- **Customizable personality profiles** allowing users to tailor interaction styles
- **Interruptible responses** enabling natural, human-like conversation flow
- **Comprehensive knowledge base** including Parul University information and IoT Lab details

Developed at the **Parul University IoT Lab** under the guidance of **Dr. Bharat Tank**, Kookie represents the next generation of conversational AI assistants.

---

## ✨ Features

### 🎙️ Voice Interaction
- **Real-time speech-to-speech** processing using Web Audio API
- **Low-latency audio streaming** with PCM encoding
- **Echo cancellation & noise suppression** for clear communication
- **Interruptible playback** - speak anytime to interrupt Kookie mid-response

### 🧠 Intelligent Responses
- Powered by **Google Gemini 3.1 Flash Live Preview** model
- Natural, conversational dialogue (no robotic responses)
- Context-aware memory retention across conversations
- Comprehensive knowledge about Parul University and IoT technologies

### 😊 Emotional Intelligence
- **5 distinct moods**: Calm, Happy, Energetic, Thoughtful, Melancholic
- Dynamic mood transitions based on conversation sentiment
- Visual feedback through animated orb color changes
- Automatic mood detection and adjustment via function calling

### 🎭 Personality Customization
- **4 Personality Profiles**: Companion, Professional, Creative, Mentor
- Adjustable traits:
  - **Playfulness** (0-100%): From serious to joking
  - **Expressiveness** (0-100%): From stoic to emotional
  - **Formality** (0-100%): From casual to polite
- Real-time personality switching without restart

### 💫 Visual Design
- Beautiful animated orb interface with dynamic gradients
- Mood-based color schemes and glow effects
- Smooth animations powered by Motion library
- Real-time conversation feed display
- Responsive sidebar with message history

### 🔧 Technical Excellence
- Built with React 19 and TypeScript for type safety
- Vite-powered development with hot module replacement
- Tailwind CSS for modern, responsive styling
- Clean architecture with custom hooks pattern

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework with concurrent features
- **TypeScript 5.8** - Type-safe JavaScript development
- **Vite 6.2** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Motion 12.23** - Production-ready animation library
- **Lucide React** - Beautiful icon library

### AI & Backend
- **@google/genai 1.29** - Official Google Gemini SDK
- **Gemini 3.1 Flash Live** - Real-time multimodal AI model
- **Web Audio API** - Browser-native audio processing
- **AudioWorklet** - High-performance audio processing

### Development Tools
- **Node.js** - JavaScript runtime environment
- **ESLint** - Code linting and quality
- **npm** - Package management

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- A modern web browser with microphone support (Chrome, Edge, Firefox)
- **Gemini API Key** from [Google AI for Developers](https://ai.google.dev/gemini-api/docs/api-key)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/caffeinewithclazsy/Kookie---Ai-Assistant-Companion-Robot.git
   cd "Kookie---Ai-Assistant-Companion-Robot"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory:
   ```bash
   cp .env.example .env.local
   ```
   
   Open `.env.local` and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_actual_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000` and allow microphone permissions when prompted.

### Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 📖 Usage Guide

### Basic Interaction

1. **Awaken Kookie**: Click the "Awaken Kookie" button to start the session
2. **Allow Microphone Access**: Grant browser permission when prompted
3. **Speak Naturally**: Talk to Kookie as you would to a friend
4. **Listen**: Kookie will respond with natural voice output
5. **Interrupt Anytime**: Start speaking to interrupt Kookie mid-response
6. **Put to Sleep**: Click "Put to Sleep" to end the session

### Conversation Tips

- **Natural Speech**: Speak conversationally; avoid overly formal language
- **Ask Questions**: Kookie has extensive knowledge about Parul University, IoT, and technology
- **Share Your Mood**: Express how you're feeling; Kookie will adapt accordingly
- **Request Personality Changes**: Ask Kookie to be more playful, professional, etc.

### Troubleshooting

**Microphone Not Working?**
- Ensure browser has microphone permissions
- Check if another application is using the microphone
- Try clicking the lock icon in the URL bar to reset permissions

**No Audio Response?**
- Verify your GEMINI_API_KEY is correctly set
- Check browser console for error messages
- Ensure speakers/headphones are connected and volume is up

**Poor Audio Quality?**
- Use headphones for better echo cancellation
- Minimize background noise
- Ensure stable internet connection

---

## 🎭 Personality Customization

Access the settings panel by clicking the gear icon (⚙️) in the top-right corner.

### Personality Profiles

| Profile | Description | Best For |
|---------|-------------|----------|
| **Companion** | Friendly, warm, and approachable | Casual conversations, daily check-ins |
| **Professional** | Formal, structured, business-like | Work discussions, formal queries |
| **Creative** | Imaginative, artistic, expressive | Brainstorming, creative projects |
| **Mentor** | Educational, guiding, supportive | Learning, skill development |

### Adjustable Traits

#### Playfulness (0-100%)
- **0%**: Very serious, no jokes
- **50%**: Balanced humor
- **100%**: Extremely playful and joking

#### Expressiveness (0-100%)
- **0%**: Stoic, minimal emotion
- **50%**: Moderate emotional expression
- **100%**: Highly emotional and expressive

#### Formality (0-100%)
- **0%**: Very casual, uses slang
- **50%**: Semi-formal, balanced tone
- **100%**: Very polite and formal

### Example Configurations

**Friendly Companion:**
- Profile: Companion
- Playfulness: 70%
- Expressiveness: 80%
- Formality: 30%

**Professional Assistant:**
- Profile: Professional
- Playfulness: 20%
- Expressiveness: 40%
- Formality: 85%

**Creative Partner:**
- Profile: Creative
- Playfulness: 85%
- Expressiveness: 90%
- Formality: 40%

---

## 🏗️ Architecture

### System Architecture

```
┌─────────────────────────────────────────────┐
│              User Interface                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │   Orb    │  │  Sidebar │  │ Settings │  │
│  │ Display  │  │  (Feed)  │  │  Panel   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
└─────────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────────┐
│         useLiveAPI Hook                      │
│  ┌──────────────────────────────────────┐   │
│  │  Audio Input Processing              │   │
│  │  • MediaStream Capture               │   │
│  │  • AudioWorklet (PCM Encoding)       │   │
│  │  • Volume Detection (RMS)            │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  Gemini Live API Integration         │   │
│  │  • WebSocket Connection              │   │
│  │  • Real-time Bidirectional Stream    │   │
│  │  • Function Calling (setMood)        │   │
│  └──────────────────────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  Audio Output Processing             │   │
│  │  • PCM Decoding                      │   │
│  │  • Buffered Playback                 │   │
│  │  • Interruption Handling             │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
                    ↕
┌─────────────────────────────────────────────┐
│        Google Gemini Cloud API               │
│  • Speech Recognition                       │
│  • Natural Language Understanding           │
│  • Text-to-Speech Synthesis                 │
│  • Mood Analysis & Function Calling         │
└─────────────────────────────────────────────┘
```

### Key Components

#### `useLiveAPI` Hook
The core logic managing:
- Audio capture and processing pipeline
- Gemini Live API session management
- Real-time mood tracking and updates
- Interruption detection and handling
- Volume level monitoring for visual feedback

#### Audio Pipeline
1. **Input**: Microphone → MediaStream → AudioWorklet → PCM encoding → Base64 → Gemini API
2. **Output**: Gemini API → Base64 audio → PCM decoding → AudioBuffer → Scheduled playback
3. **Interruption**: User speaks → API detects → Stop current playback → Resume listening

#### State Management
- **isAwake**: Session active state
- **status**: Current operational status (RESTING, LISTENING, SPEAKING, etc.)
- **feed**: Conversation history array
- **volume**: Real-time audio level (0-1)
- **mood**: Current emotional state
- **interruptionCount**: Number of interruptions detected

---

## 📁 Project Structure

```
kookie-ai/
├── src/
│   ├── hooks/
│   │   └── useLiveAPI.ts          # Core AI integration hook
│   ├── App.tsx                     # Main application component
│   ├── index.css                   # Global styles & Tailwind imports
│   └── main.tsx                    # Application entry point
├── public/
├── .env.example                    # Environment variable template
├── .gitignore                      # Git ignore rules
├── index.html                      # HTML entry point
├── metadata.json                   # App metadata & permissions
├── package.json                    # Dependencies & scripts
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite build configuration
└── README.md                       # This file
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices and maintain type safety
- Use functional components with hooks
- Write meaningful commit messages
- Test thoroughly before submitting PRs
- Update documentation as needed

---

## 👥 Credits & Acknowledgments

### Development Team

**Creator & Lead Developer**
- **[Kundan Patil (Clazsy)](https://www.linkedin.com/in/kundan-patil-b87040302)**
  - Software Engineer, Ethical Hacker, AI Developer
  - Specializes in AI, IoT, robotics, and embedded systems
  - Creator of Kookie AI Robot

### Academic Guidance

**Faculty Advisors - Parul University IoT Lab**
- **Dr. Bharat Tank**
  - Expert in IoT and Embedded Systems
  - Google Scholar: [Profile](https://scholar.google.com/citations?hl=en&user=ZPK3OggAAAAJ)
  - Research focus: Health monitoring, environmental sensing, wearable tech
  
- **Mr. Yash Suthar**
  - Expert in IoT, AI, and Machine Learning
  - Google Scholar: [Profile](https://scholar.google.com/citations?user=Al8iALUAAAAJ&hl=en)
  - Research focus: AI-based medical diagnosis, disease detection
  
- **Ms. Poonam Raval**
  - Student Contributor - Kookie AI Assistant Project
  - Active development work on Kookie under Dr. Bharat Tank's guidance
  - Focus: IoT, embedded systems, and AI-powered conversational interfaces

### Institution

**Parul University**
- NAAC A++ Grade University
- Vadodara, Gujarat, India
- IoT Lab - Development Environment
- [Learn More](https://paruluniversity.ac.in/)

### Technology Partners

- **Google** - Gemini AI Platform
- **React Team** - UI Framework
- **Vite Team** - Build Tooling
- **Tailwind Labs** - CSS Framework

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/caffeinewithclazsy/Kookie---Ai-Assistant-Companion-Robot/issues)
- **Developer LinkedIn**: [Kundan Patil](https://www.linkedin.com/in/kundan-patil-b87040302)
- **Institution**: Parul University IoT Lab

---

<div align="center">
  <p>Made with ❤️ at Parul University IoT Lab</p>
  <p>Under the guidance of Dr. Bharat Tank</p>
  <p>© 2026 NVP Production. All rights reserved.</p>
</div>
