# AAKAR 2025 Certificate Generator

A web-based certificate generator application for creating participation certificates for AAKAR 2025 event participants. The application reads participant data from CSV and generates personalized certificates with proper team organization.

## Features

- **CSV Data Processing**: Automatically loads participant data from embedded CSV
- **Team Organization**: Groups participants by team ID and handles team relationships
- **Multiple Event Support**: Generates separate certificates for participants in multiple events
- **Batch Certificate Generation**: Creates certificates for all participants with progress tracking
- **Flexible Download Options**: 
  - Download team-wise ZIP files
  - Download all certificates in a single ZIP file
- **Template Support**: Uses certificate template image or falls back to canvas generation
- **Responsive Design**: Modern, gradient-based UI with progress indicators

## How It Works

### Data Structure
The application expects CSV data with the following columns:
- `ID`: Participant/Team identifier
- `Name`: Participant's full name
- `College`: Institution name
- `Events`: Event name(s) - comma-separated for multiple events

### Team Logic
- Participants with hyphenated IDs (e.g., "T001-1", "T001-2") are grouped under the same team
- The base team ID is extracted from before the hyphen
- Team leaders are identified as the first member or participants with non-hyphenated IDs

### Certificate Generation
1. **Template Method**: Uses `/certificate-template.png` as background with text overlays
2. **Canvas Fallback**: Generates certificates programmatically if template is unavailable
3. **Text Positioning**: 
   - Participant name at position (380px, 455px)
   - College name at position (70px, 515px)
   - Event name at position (90px, 570px)

## Setup Instructions

### Prerequisites
- Modern web browser with JavaScript enabled
- Certificate template image (optional, named `certificate-template.png`)

### Installation
1. Save the HTML file to your web server or local directory
2. Place the certificate template image in the same directory (optional)
3. Update the CSV data in the `csvData` variable within the script

### CSV Data Format
```csv
ID,Name,College,Events
T001,John Doe,ABC College,Coding Competition
T002-1,Jane Smith,XYZ University,Web Design
T002-2,Bob Johnson,XYZ University,Web Design
T003,Alice Brown,DEF Institute,"Coding Competition,Web Design"
```

## Usage

1. **Load Participants**: Click "Load Participants" to process the CSV data
2. **Generate Certificates**: Click "Generate All Certificates" to create certificate images
3. **Download Options**:
   - **Download All Certificates**: Downloads separate ZIP files for each team
   - **Download All as Single Zip**: Downloads one ZIP file containing all certificates organized by team folders

## File Structure

```
project-directory/
├── index.html (main application file)
├── certificate-template.png (optional background image)
└── generated-certificates/
    ├── T001.zip
    ├── T002.zip
    └── all_certificates.zip
```

## Technical Details

### Dependencies
- **JSZip**: For creating ZIP archives
- **html2canvas**: For converting HTML elements to images (with canvas fallback)

### Libraries Used
- JSZip 3.10.1 (loaded from CDN)
- html2canvas 1.4.1 (loaded from CDN)

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Certificate Template Specifications

### Image Requirements
- **Dimensions**: 1200px × 850px
- **Format**: PNG with transparent background support
- **File name**: `certificate-template.png`
- **Location**: Same directory as the HTML file

### Text Overlay Positions
- **Participant Name**: Top: 455px, Left: 380px
- **College Name**: Top: 515px, Left: 70px
- **Event Name**: Top: 570px, Left: 90px

## Customization

### Styling
The application uses CSS custom properties and can be easily customized:
- Primary color: `#e91e63` (Pink)
- Secondary color: `#ad1457` (Dark Pink)
- Background gradient: Purple to Blue

### Text Positioning
Modify the CSS classes in the `<style>` section:
```css
.name-overlay {
    position: absolute;
    top: 455px;
    left: 380px;
    /* ... other styles */
}
```

### CSV Data
Update the `csvData` constant in the JavaScript section with your participant data.

## Troubleshooting

### Common Issues

1. **Certificate template not found**
   - Ensure `certificate-template.png` is in the same directory
   - Application will automatically fall back to canvas generation

2. **Downloads not working**
   - Check browser popup blockers
   - Ensure JavaScript is enabled
   - Try using HTTPS instead of HTTP

3. **Certificates not generating**
   - Verify CSV data format
   - Check browser console for error messages
   - Ensure all required columns are present

### Error Messages
- "Certificate template image not found": Template image missing, using canvas fallback
- "No participants loaded": CSV data is empty or malformed
- "Error loading participants data": CSV parsing failed

## Performance Notes

- Generation time depends on the number of participants
- Large batches (100+ certificates) may take several minutes
- Progress bar shows real-time generation status
- Small delays between operations prevent browser freezing

## License

This project is created for AAKAR 2025 event management. Modify and distribute as needed for educational purposes.

## Support

For technical issues or customization requests, refer to the inline code comments or contact the development team.