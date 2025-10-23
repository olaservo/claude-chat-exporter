# Claude Chat Exporter

Export Claude.ai conversations to markdown files.

## Chrome Extension

### Installation

1. **Download this repository**
   - Click the green "Code" button at the top of this page
   - Select "Download ZIP"
   - Extract the ZIP file to a location you'll remember

2. **Enable Developer Mode**
   - Open Chrome and navigate to `chrome://extensions/`
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click the "Load unpacked" button
   - Navigate to the extracted folder and select the `extension` folder
   - The extension should now appear in your extensions list

4. **Pin the Extension** (recommended)
   - Click the puzzle piece icon (Extensions) in Chrome's toolbar
   - Find "Claude Chat Exporter" in the list
   - Click the pin icon to keep it visible in your toolbar

**Note**: Chrome will show a warning banner about "developer mode extensions" - you can safely dismiss this. This is normal for locally-installed extensions.

### Usage

1. Navigate to a conversation on [claude.ai](https://claude.ai)
2. Click the Claude Chat Exporter extension icon in your toolbar
3. The extension will automatically:
   - Extract all human messages
   - Copy all Claude responses
   - Download a markdown file with the complete conversation
4. The file will be named after your conversation title

**Tip**: A blue status box will appear in the top-right showing progress (e.g., "Human: 4 | Claude: 4")

### Features

- One-click export from extension toolbar
- Automatically extracts all messages from the current conversation
- Downloads as a markdown file with proper formatting
- Non-intrusive - only runs when you click the extension icon
- Works on all Claude.ai conversation pages
- Privacy-focused: runs entirely in your browser, no data sent to external servers

## Manual Script Method

Alternatively, run the script directly in the browser console:

1. Open your conversation with Claude
2. Open browser developer console (F12)
3. Copy and paste the script from `extension/claude-chat-exporter.js`
4. Press Enter
5. The script downloads a markdown file named after your conversation

## How It Works

- **Human messages**: Simulates clicking edit buttons to extract original content
- **Claude responses**: Intercepts clipboard when copy buttons are clicked

## Supported Elements

Tables, math notation, code blocks, lists, links, formatting, blockquotes, headers

## Browser Compatibility

Chrome, Firefox, Safari, Edge

## Troubleshooting

**Extension doesn't work:**
- Make sure you're on a claude.ai page with an active conversation
- Check the browser console (F12) for any error messages

**Missing messages:**
- The extension needs time to process all messages
- Wait for the status indicator to show "Downloaded: [filename]"

**Extension not showing up:**
- Make sure "Developer mode" is enabled in chrome://extensions/
- Try clicking the reload button on the extension card

## Limitations

- Requires JavaScript enabled
- Claude web interface only
- No file attachments or artifacts
- May need updates if Claude changes interface