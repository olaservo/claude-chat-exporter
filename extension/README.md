# Claude Chat Exporter - Chrome Extension

A Chrome extension that exports Claude conversations to markdown files with a single click.

## Installation (Developer Mode)

1. **Open Chrome Extensions Page**:
   - Open Chrome and navigate to `chrome://extensions/`
   - Or click the three dots menu → Extensions → Manage Extensions

2. **Enable Developer Mode**:
   - Toggle the "Developer mode" switch in the top-right corner
   - This enables the ability to load unpacked extensions

3. **Load the Extension**:
   - Click the "Load unpacked" button that appears after enabling developer mode
   - Navigate to and select the `extension` folder from this project
   - The extension should now appear in your extensions list

4. **Pin the Extension** (recommended):
   - Click the puzzle piece icon (Extensions) in Chrome's toolbar
   - Find "Claude Chat Exporter" in the list
   - Click the pin icon to keep it visible in your toolbar

**Note**: Chrome will show a warning banner about "developer mode extensions" - you can safely dismiss this. This is normal for locally-installed extensions.

## Usage

1. Navigate to a conversation on [claude.ai](https://claude.ai)
2. Click the Claude Chat Exporter extension icon in your toolbar
3. The extension will automatically:
   - Extract all human messages
   - Copy all Claude responses
   - Download a markdown file with the complete conversation
4. The file will be named after your conversation title

**Tip**: A blue status box will appear in the top-right showing progress (e.g., "Human: 4 | Claude: 4")

## Features

- One-click export from extension toolbar
- Automatically extracts all messages from the current conversation
- Downloads as a markdown file with proper formatting
- Non-intrusive - only runs when you click the extension icon
- Works on all Claude.ai conversation pages

## Troubleshooting

- **Extension doesn't work**: Make sure you're on a claude.ai page with an active conversation
- **Nothing happens when clicked**: Check the browser console (F12) for any error messages
- **Missing messages**: The extension needs time to process all messages; wait for the completion message

## Privacy

This extension runs entirely in your browser. No data is sent to external servers.
