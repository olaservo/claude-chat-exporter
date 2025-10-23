# Claude Chat Exporter

Exports Claude.ai conversations to markdown format by leveraging Claude's copy functionality and edit buttons.

## Usage

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