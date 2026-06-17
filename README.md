# Notepad Web

## Overview

Notepad Web is a browser-based text editor designed for quick note-taking, text editing, and basic document processing.

The application allows users to open text files, paste clipboard content, copy notes, clear content, download text files, and perform various text transformations directly within the browser. All notes are automatically saved using Local Storage, ensuring data remains available even after refreshing or reopening the application.

No installation, account, or backend server is required.

---

## Features

### Open Text Files

Import and load `.txt` files directly into the editor for viewing or editing.

### Paste From Clipboard

Read text content directly from the system clipboard and insert it into the editor.

### Copy All Content

Copy the entire editor content to the clipboard with a single click.

### Clear All Content

Instantly remove all text from the editor.

### Download As TXT File

Export the current editor content as a plain text (`.txt`) file.

### Automatic Local Saving

Automatically saves text changes to browser Local Storage while typing.

### Persistent Notes

Previously saved notes are automatically restored when the application is reopened.

### Text Statistics

Real-time analysis of editor content including:

* Character Count (with spaces)
* Word Count
* White Space Count
* Line Count

### Text Case Conversion Tools

Convert text instantly using:

#### Sentence Case

Converts text into properly formatted sentences.

Example:

```text
hello world. how are you?
```

becomes

```text
Hello world. How are you?
```

#### Title Case

Capitalizes the first letter of every word.

Example:

```text
hello world
```

becomes

```text
Hello World
```

#### Uppercase

Converts all text to uppercase.

Example:

```text
hello world
```

becomes

```text
HELLO WORLD
```

#### Lowercase

Converts all text to lowercase.

Example:

```text
HELLO WORLD
```

becomes

```text
hello world
```

---

## Technology Stack

* HTML5
* CSS3
* JavaScript
* Browser Local Storage API
* Clipboard API
* FileReader API

---

## How It Works

### File Operations

* Open existing TXT files or write text
* Edit file content
* Save edited content as a new TXT file

### Clipboard Operations

* Paste clipboard text
* Copy editor content to clipboard

### Text Processing

* Analyze text statistics
* Convert text case formats
* Edit and manage notes

### Data Persistence

* Auto-save content locally
* Restore previous notes automatically

---

## Installation

1. Download or clone the repository.
2. Open the project folder.
3. Launch `index.html` in a browser.

No additional setup is required.

---

## Project Structure

```text
Notepad-Web
│
├── index.html
├── index.js
├── script.js
├── style.css
├── index.css
├── color-var.css
├── tools.html
├── aboutus.html
├── contactus.html
├── privacypolicy.html
└── termsandconditions.html
```

---

## Learning Outcomes

* DOM Manipulation
* Clipboard API
* FileReader API
* Local Storage Management
* Dynamic Text Processing
* Real-Time Data Analysis
* Browser File Generation
* Frontend Application Development

---

## Future Improvements

* Multiple Notes Support
* Rich Text Formatting
* Find and Replace
* Dark Mode
* Undo / Redo
* Markdown Support
* Auto Backup
* Cloud Synchronization
* Word Frequency Analysis
* Reading Time Estimation

---

## Use Cases

* Quick Note Taking
* Text Editing
* Content Drafting
* Clipboard Management
* TXT File Editing
* Basic Text Analysis
* Text Formatting

---

## Author

Surender Kumar
