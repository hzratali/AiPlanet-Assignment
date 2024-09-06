# AI Planet Hackathon Dashboard

This project is an assignment for AI Planet, designed to create a simple hackathon application where organizers can create, edit, delete, and manage hackathons. Participants can view hackathons and participate by submitting solutions to the challenges.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)

## Features

- Organizers can create, edit, and delete hackathons.
- Each hackathon contains:
  - Name
  - Start date
  - End date
  - Description
  - Image
  - Difficulty level (easy, medium, hard)
- Organizers can:
  - View a list of all hackathons.
  - Sort hackathons by date (newest first, oldest first).
  - Filter hackathons by difficulty level and status (active, upcoming, past).
  - Search hackathons by name.
- Hackathons are categorized into active, upcoming, and past:
  - Active hackathons display a countdown timer until the end.
  - Upcoming hackathons display a countdown timer until they start.
  - Past hackathons display the start and end dates.
- Detailed hackathon view with options to edit or delete.

## Technologies Used

- **ReactJS**: Frontend framework
- **Material-UI**: UI components library
- **JavaScript/TypeScript**: Logic and type safety (TypeScript optional)
- **React Router**: Routing for navigation
- **CSS/SCSS**: Styling

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

### Installation

Clone the repository:

```bash
git clone https://github.com/hzratali/AiPlanet-Assignment.git
cd AiPlanet-Assignment
```

Install the dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
npm start
```

The app will be running at \`http://localhost:3000/`.

## Project Structure

```plaintext
├── public
│ ├── index.html
│ └── ...
├── src
│ ├── assets # Images and icons
│ ├── components # Reusable UI components
│ ├── utils # Utility functions and initial data
│ ├── App.js # Main app component
│ ├── index.js # Entry point
│ └── ...
├── .gitignore
├── README.md
├── package.json
└── ...
```
