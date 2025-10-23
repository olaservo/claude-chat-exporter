# Claude Chat Exporter

Export Claude.ai conversations to markdown files.

## Chrome Extension

### Installation

1. Download this repository (Code → Download ZIP)
2. Extract the ZIP file
3. Open Chrome and go to `chrome://extensions/`
4. Enable "Developer mode" (toggle in top-right)
5. Click "Load unpacked" and select the `extension` folder
6. The extension icon will appear in your toolbar

### Usage

1. Navigate to a conversation on claude.ai
2. Click the extension icon
3. The conversation downloads as a markdown file

## Manual Script Method

Alternatively, run the script directly in the browser console:

1. Open your conversation with Claude
2. Open browser developer console (F12)
3. Copy and paste the script from `claude-chat-exporter.js`
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

- Ensure conversation is fully loaded before running
- If partial export, try refreshing and running again
- Script shows message counts during export

## Limitations

- Requires JavaScript enabled
- Claude web interface only
- No file attachments or artifacts
- May need updates if Claude changes interface