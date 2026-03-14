# Omni-AI Water Tracker 🏊💧

A lightweight, precision Chrome extension that calculates and visualizes the estimated water consumption of your Google Gemini AI sessions in real-time. 

## The Metric
Generative AI requires significant cooling for its data centers. This tracker operates on the metric that **100 words generated consumes approximately 16oz of water**. 

The widget dynamically converts your session's total word count into the fractional volume of an **Olympic-sized swimming pool** (84,535,040 fluid ounces), displaying the environmental footprint natively within the Gemini UI.

## Features
- **Real-Time Visual Extraction:** Surgically parses text directly from the rendered DOM, bypassing hidden Shadow DOM duplication for 100% accurate counting.
- **Unobtrusive UI:** A sleek, dark-themed transparent widget anchored to the bottom right of the screen.
- **High-Fidelity Math:** Calculates consumption down to the 10th decimal place to seamlessly capture micro-updates as the AI streams text.

## Installation
1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to chrome://extensions/
3. Toggle **Developer mode** on in the top right corner.
4. Click **Load unpacked** and select the extension directory.
5. Navigate to Google Gemini to activate the tracker.

## License
This project is licensed under the MIT License.

