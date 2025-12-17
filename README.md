# Personal Portfolio Website

A cyber-inspired personal portfolio website showcasing my projects, research work, and engineering background in **Robotics, Computer Vision, and Intelligent Systems**.

The site is fully static, lightweight, and designed for long-term maintainability.  
It supports **automatic media discovery**, **video & image carousels**, **bilingual content**, and **responsive layouts**, making it suitable both as a personal homepage and as a project showcase.

---

## ✨ Features

- ⚙️ **Pure Static Website**
  - No backend, no build step, no framework dependency
  - Runs on any static hosting (GitHub Pages, Cloudflare Pages, etc.)

- 🎥 **Automatic Media Handling**
  - Project folders are scanned automatically
  - If videos exist → video used as project cover
  - If no video → images are displayed as a carousel
  - Supports multiple videos and images per project

- 🧠 **Project-Centric Design**
  - Modular project cards
  - Detailed modal view with media gallery and descriptions
  - Suitable for research, coursework, and personal experiments

- 🌍 **Bilingual Support**
  - English / Chinese content switching
  - Language-independent project structure

- 🎨 **Cyber / Engineering UI Style**
  - HUD-like layout
  - Subtle animations
  - Dark theme optimized for technical content

- 📱 **Responsive**
  - Desktop and mobile friendly
  - Touch-friendly media playback

---

## 📁 Project Structure

```text
.
├── index.html              # Main entry
├── assets/                 # Icons, styles, shared assets
├── projects/               # Project media folders
│   ├── target/
│   │   ├── demo.mp4
│   │   ├── 1.jpg
│   │   └── 2.jpg
│   ├── linemod/
│   │   ├── cover.jpg
│   │   └── demo.mp4
│   └── other/
│       ├── 1.jpg
│       ├── 2.jpg
│       └── 3.jpg
└── README.md

